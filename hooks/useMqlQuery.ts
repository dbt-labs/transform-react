import { useEffect, useReducer, useCallback, useContext } from "react";
import Serie from "types/Serie";

import MqlContext from "context/MqlContext/MqlContext";

import CreateMqlQuery from "mutations/mql/CreateMqlQuery";
import {
  CreateMqlQueryMutation,
  CreateMqlQueryMutationVariables,
  ConstraintInput,
} from "mutations/mql/MqlMutationTypes";
import FetchMqlQueryTimeSeries from "queries/mql/FetchMqlQueryTimeSeries";
import {
  FetchMqlTimeSeriesQuery,
  FetchMqlTimeSeriesQueryVariables,
  MqlQueryStatus,
} from "queries/mql/MqlQueryTypes";
import { CombinedError } from "@urql/core";
import formatChartData from "utils/formatChartData";

// This is the delay between the _response_ from the last query and the _start_ of the new query
const QUERY_POLLING_MS = 200;

// Time in milliseconds to wait for a query to respond successfully before showing a slow loading message to the user.
const LONG_FETCH_QUERY_ATTEMPT_MAX = 20000; // 20 seconds

// As we keep track of prevoius queries, we don't want the list to grow unbounded in long running browser sessions
const CANCELLED_QUERY_LIST_LENGTH = 10;

const EMPTY_CONSTRAINT: ConstraintInput = { constraint: null };

// This filters out invalid WHERE clauses the consequence of janky form state;
function clearEmptyConstraints(where?: ConstraintInput | null | undefined) {
  if (!where) return EMPTY_CONSTRAINT;
  if (where.And) {
    const newAnd = where.And.filter((val) => (val.values || []).length > 0);
    return newAnd.length > 0 ? { ...where, And: newAnd } : EMPTY_CONSTRAINT;
  }
  if (where.Or) {
    const newOr = where.Or.filter((val) => (val.values || []).length > 0);
    return newOr.length > 0 ? { ...where, Or: newOr } : EMPTY_CONSTRAINT;
  }

  return where;
}

function getErrorMessage(e: CombinedError) {
  if (e.message) return e.message;
  if (e.networkError) return e.networkError.message;
  if (e.graphQLErrors) return e.graphQLErrors[0].message;
  return "Invalid MQL Query error message";
}

type State = {
  // We endeavor to keep this ID up to date with the chart we are currently displaying or wish to render next
  queryId: string | null;

  // This is the current status, which lags slightly behind the MQL Server status as we make requests and parse responses.
  queryStatus: MqlQueryStatus;

  // This is the formatted chart data ready for rendering by the chart
  chartData: Serie[] | null;

  // As we have subsequent queries triggered by changes in the UI, this allows us to keep track of previous requests to avoid race conditions
  // We cap the list at 10. It's only intended to handle scenarios where the user makes a series of requests while a series of requests is
  // currently in flight
  cancelledQueries: string[];

  // The time we started a new timeSeries query.
  fetchStartTime: number | null;

  // We will track how long SUCCESSFUL response is taking, if it takes too long we will set this to true.
  isTakingForever: boolean;

  errorMessage?: string;
};

const initialState: State = {
  queryId: null,
  queryStatus: MqlQueryStatus.Pending,
  chartData: null,
  cancelledQueries: [],
  fetchStartTime: null,
  isTakingForever: false,
};

type Action =
  | { type: "postQueryStart" }
  | { type: "postQueryFail"; errorMessage: string }
  | { type: "postQuerySuccess"; queryId: string }
  | { type: "fetchResultsFail"; errorMessage: string }
  | { type: "fetchResultsRunning" }
  | {
      type: "fetchResultsSuccess";
      data: FetchMqlTimeSeriesQuery;
      limit?: number;
      handleCombinedError: (e: CombinedError) => void;
    };

/*
    At first glance, it is counter-intuitive that we should have a mix of the Reducer pattern 
    and the Hook pattern. The explanation for this complexity is that we have several fetches
    that require coordination.
      1. We post a mutation to create a query
      2. We use the query ID to poll for results
      3. None of this can take place until an MQL Server URL is supplied
    This reducer abstracts all this complexity.
*/
function mqlQueryReducer(state: State, action: Action): State {
  switch (action.type) {
    case "postQueryStart": {
      // This condition is triggered when there is already a queryId being fetched.
      // In this case we want to add "cancel" that query by adding it to the cancelledQueries list
      if (state.queryId) {
        return {
          ...state,
          queryStatus: MqlQueryStatus.Running,
          cancelledQueries: [
            state.queryId,
            ...state.cancelledQueries.slice(CANCELLED_QUERY_LIST_LENGTH - 1),
          ],
          chartData: null,
          fetchStartTime: Date.now(),
          isTakingForever: false,
          errorMessage: undefined,
        };
      }
      return {
        ...state,
        queryStatus: MqlQueryStatus.Running,
        fetchStartTime: Date.now(),
        isTakingForever: false,
        chartData: null,
        errorMessage: undefined,
      };
    }

    case "postQueryFail": {
      return {
        ...state,
        queryStatus: MqlQueryStatus.Failed,
        errorMessage: action.errorMessage,
      };
    }

    case "postQuerySuccess": {
      return {
        ...state,
        queryId: action.queryId,
        errorMessage: undefined,
      };
    }

    case "fetchResultsRunning": {
      const now = Date.now();
      const diff = now - (state.fetchStartTime || 0);
      return {
        ...state,
        isTakingForever: diff >= LONG_FETCH_QUERY_ATTEMPT_MAX,
        errorMessage: undefined,
      };
    }

    case "fetchResultsFail": {
      return {
        ...state,
        queryStatus: MqlQueryStatus.Failed,
        isTakingForever: false,
        errorMessage: action.errorMessage,
      };
    }

    case "fetchResultsSuccess": {
      let chartData: Serie[];
      try {
        chartData = formatChartData(action.data.mqlQuery, action.limit);
      } catch (e) {
        action.handleCombinedError(e);
        return {
          ...state,
          queryStatus: MqlQueryStatus.Failed,
          errorMessage: e?.message,
          isTakingForever: false,
        };
      }
      return {
        ...state,
        queryStatus: MqlQueryStatus.Successful,
        chartData,
        fetchStartTime: null,
        isTakingForever: false,
        errorMessage: undefined,
      };
    }

    default: {
      throw new Error();
    }
  }
}

/*
  Please Beware!
  Here Be Dragons!

  If `queryInput` is provided, it *must* be stable for this to work.
  That means if the value is calulated and generating a fresh object every render,
  this will result in an infinite loop!

  So we are doing something that seems like it could be improved, which is that if the form is based on the URL,
  we pass in locationSearch, which is stable, and calculate the form state inside an effect. I know. Gross, right?
  Is there a better approach?
*/
type UseMqlQueryParams = {
  metricName: string;
  limit?: number;
  queryInput?: CreateMqlQueryMutationVariables;
};

// This custom hook consists of one useCallback and two useHooks that should asynchronously handle all scenarios for this chained
// data fetching we are doing. It should do it in a high performance way and in a way that is resilient to race conditions if the
// user updates their request while a query is in flight
export default function useMqlQuery({
  queryInput,
  metricName,
  limit,
}: UseMqlQueryParams) {
  const {
    useQuery,
    useMutation,
    handleCombinedError,
    mqlServerUrl,
  } = useContext(MqlContext);
  const [state, dispatch] = useReducer(mqlQueryReducer, initialState);

  const [{}, createMqlQuery] = useMutation<
    CreateMqlQueryMutation,
    CreateMqlQueryMutationVariables
  >(CreateMqlQuery);

  useEffect(() => {
    if (!metricName || !mqlServerUrl) {
      return;
    }
    let formState: CreateMqlQueryMutationVariables = {};
    if (queryInput) {
      formState = queryInput;
    }

    dispatch({ type: "postQueryStart" });

    createMqlQuery({
      metrics: [metricName],
      groupBy: formState.groupBy || [],
      where: clearEmptyConstraints(formState.where),
      addTimeSeries: true,
    }).then(({ data, error }) => {
      if (data?.createMqlQuery?.id) {
        dispatch({
          type: "postQuerySuccess",
          queryId: data?.createMqlQuery?.id,
        });
      } else if (error) {
        dispatch({
          type: "postQueryFail",
          errorMessage: error && error.message,
        });
        handleCombinedError(error);
      }
    });
  }, [queryInput, metricName, mqlServerUrl]);

  const [{ data, error }, refetchMqlQuery] = useQuery<
    FetchMqlTimeSeriesQuery,
    FetchMqlTimeSeriesQueryVariables
  >({
    query: FetchMqlQueryTimeSeries,
    variables: {
      queryId: state.queryId || "",
    },
    pause: !state.queryId || state.cancelledQueries.includes(state.queryId),
  });

  // I am creating this!
  useEffect(() => {
    if (error) {
      dispatch({
        type: "fetchResultsFail",
        errorMessage: getErrorMessage(error),
      });
      handleCombinedError(error);
    }
    if (!data?.mqlQuery) {
      return;
    }
    const { status, id, result } = data.mqlQuery;

    if (id && state.cancelledQueries.includes(id)) {
      return;
    }

    if (status === MqlQueryStatus.Successful) {
      dispatch({
        type: "fetchResultsSuccess",
        data,
        limit,
        handleCombinedError,
      });
    }
    if (status === MqlQueryStatus.Running) {
      window.setTimeout(() => {
        dispatch({ type: "fetchResultsRunning" });
        refetchMqlQuery();
      }, QUERY_POLLING_MS);
    }
  }, [data, error, state.cancelledQueries]);

  return state;
}
