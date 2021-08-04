import { useEffect, useReducer, useContext } from "react";
import { CombinedError } from "urql";

import MqlContext from "../context/MqlContext/MqlContext";
import CreateMqlQuery from "../mutations/mql/CreateMqlQuery";
import {
  CreateMqlQueryMutation,
  CreateMqlQueryMutationVariables,
  ConstraintInput,
} from "../mutations/mql/MqlMutationTypes";
import FetchMqlQueryTimeSeries from "../queries/mql/FetchMqlQueryTimeSeries";
import {
  FetchMqlTimeSeriesQuery,
  FetchMqlTimeSeriesQueryVariables,
  MqlQueryStatus,
} from "../queries/mql/MqlQueryTypes";

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

export type UseMqlQueryState = {
  // The number of times FetchMqlTimeSeriesQuery will retry if the initial query fails. Defaults to 0.
  retries: number;

  // We endeavor to keep this ID up to date with the chart we are currently displaying or wish to render next
  queryId: string | null;

  // This is the current status, which lags slightly behind the MQL Server status as we make requests and parse responses.
  queryStatus: MqlQueryStatus;

  // This is the formatted chart data ready for rendering by the chart
  data?: FetchMqlTimeSeriesQuery["mqlQuery"] | null;

  // As we have subsequent queries triggered by changes in the UI, this allows us to keep track of previous requests to avoid race conditions
  // We cap the list at 10. It's only intended to handle scenarios where the user makes a series of requests while a series of requests is
  // currently in flight
  cancelledQueries: string[];

  // The time we started a new timeSeries query.
  fetchStartTime: number | null;

  // We will track how long SUCCESSFUL response is taking, if it takes too long we will set this to true.
  isTakingForever: boolean;

  errorMessage?: string;

  // Used to know if createMQLQuery immediately returned results, and as such we don't need to use FetchMqlTimeSeries
};

const initialState: UseMqlQueryState = {
  retries: 0,
  queryId: null,
  queryStatus: MqlQueryStatus.Pending,
  data: null,
  cancelledQueries: [],
  fetchStartTime: null,
  isTakingForever: false,
};

type Action =
  | { type: "postQueryStart" }
  | { type: "postQueryFail"; errorMessage: string }
  | { type: "postQuerySuccess"; queryId: string }
  | { type: "postQueryCachedResultsSuccess";
      data: CreateMqlQueryMutation;
      limit?: number;
      handleCombinedError: (e: CombinedError) => void;
    }
  | { type: "fetchResultsFail"; errorMessage: string }
  | { type: "fetchResultsRunning" }
  | { type: "retryFetchResults" }
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
function mqlQueryReducer(
  state: UseMqlQueryState,
  action: Action
): UseMqlQueryState {
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
          data: null,
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
        data: null,
        errorMessage: undefined,
      };
    }

    case "postQueryFail": {
      return {
        ...state,
        queryStatus: MqlQueryStatus.Failed,
        errorMessage: action.errorMessage,
        isTakingForever: false,
        fetchStartTime: null,
      };
    }

    case "postQuerySuccess": {
      return {
        ...state,
        queryId: action.queryId,
        errorMessage: undefined,
      };
    }

    case "postQueryCachedResultsSuccess": {
      return {
        ...state,
        queryId: null,
        queryStatus: MqlQueryStatus.Successful,
        data: action.data?.createMqlQuery?.query,
        fetchStartTime: null,
        isTakingForever: false,
        errorMessage: undefined,
      }
    }

    case "fetchResultsRunning": {
      const now = Date.now();
      const diff = now - (state.fetchStartTime || 0);

      return {
        ...state,
        queryStatus: MqlQueryStatus.Running,
        isTakingForever: diff >= LONG_FETCH_QUERY_ATTEMPT_MAX,
        errorMessage: undefined,
      };
    }

    case "retryFetchResults": {
      const now = Date.now();
      const diff = now - (state.fetchStartTime || 0);

      return {
        ...state,
        queryStatus: MqlQueryStatus.Running,
        isTakingForever: diff >= LONG_FETCH_QUERY_ATTEMPT_MAX,
        errorMessage: undefined,
        retries: state.retries + 1,
      };
    }

    case "fetchResultsFail": {
      return {
        ...state,
        queryStatus: MqlQueryStatus.Failed,
        isTakingForever: false,
        fetchStartTime: null,
        errorMessage: action.errorMessage,
      };
    }

    case "fetchResultsSuccess": {
      return {
        ...state,
        queryStatus: MqlQueryStatus.Successful,
        data: action.data?.mqlQuery,
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
  skip?: boolean;
  retries?: number;
};

// This custom hook consists of two useHooks that should asynchronously handle all scenarios for this chained
// data fetching we are doing. It should do it in a high performance way and in a way that is resilient to race conditions if the
// user updates their request while a query is in flight
export default function useMqlQuery({
  queryInput,
  metricName,
  limit,
  skip,
  retries = 0,
}: UseMqlQueryParams) {
  const {
    useQuery,
    useMutation,
    handleCombinedError,
    mqlServerUrl,
  } = useContext(MqlContext);
  const [state, dispatch] = useReducer(mqlQueryReducer, initialState);
  // const isRunning =
  //   state.queryStatus === MqlQueryStatus.Running ||
  //   state.queryStatus === MqlQueryStatus.Pending;

  const [{}, createMqlQuery] = useMutation<
    CreateMqlQueryMutation,
    CreateMqlQueryMutationVariables
  >(CreateMqlQuery);

  useEffect(() => {
    if (!metricName || !mqlServerUrl || skip) {
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
      pctChange: formState.pctChange,
      granularity: formState.granularity,
      addTimeSeries: true,
      startTime: formState.startTime,
      endTime: formState.endTime,
    }).then(({ data, error }) => {
      console.log('asdfasdfsadf')
      if (data?.createMqlQuery?.query?.status === MqlQueryStatus.Successful) {
        dispatch({
          type: "postQueryCachedResultsSuccess",
          data,
          limit,
          handleCombinedError,
        });
        console.log('asdfasdfsadf', data)
        handleCombinedError({
          name: "Unknown Error",
          message: "Test error",
          graphQLErrors: [],
        }, {
          queryId: data?.createMqlQuery?.query?.id as string,
          queryStatus: data?.createMqlQuery?.query?.status as string,
          json: "Test json string"
        });
      } else {
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
      }

    });
  }, [queryInput, metricName, mqlServerUrl, skip]);

  const _skip =
    skip ||
    !state.queryId ||
    state.cancelledQueries.includes(state.queryId); /* && !isRunning*/

  const [{ data, error, fetching }, refetchMqlQuery] = useQuery<
    FetchMqlTimeSeriesQuery,
    FetchMqlTimeSeriesQueryVariables
  >({
    query: FetchMqlQueryTimeSeries,
    variables: {
      queryId: state.queryId || "",
    },
    pause: _skip,
  });

  useEffect(() => {
    if (error) {
      if (retries > 0 && state.retries !== retries) {
        dispatch({ type: "retryFetchResults" });
        refetchMqlQuery();
      } else {
        dispatch({
          type: "fetchResultsFail",
          errorMessage: getErrorMessage(error),
        });
        handleCombinedError(error);
      }

      return;
    }

    if (!data?.mqlQuery) {
      return;
    }

    const { status, id } = data.mqlQuery;
    if (id && state.cancelledQueries.includes(id) /*&& !isRunning*/) {
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

    if (
      // isRunning ||
      status === MqlQueryStatus.Running ||
      status === MqlQueryStatus.Pending
    ) {
      window.setTimeout(() => {
        dispatch({ type: "fetchResultsRunning" });
        refetchMqlQuery();
      }, QUERY_POLLING_MS);
    }

    if (status === MqlQueryStatus.Failed) {
      if (retries > 0 && state.retries !== retries) {
        dispatch({ type: "retryFetchResults" });
        refetchMqlQuery();
      } else {
        let jsonString: string;
        try {
          jsonString = JSON.stringify(data?.mqlQuery?.result);
        } catch (e) {
          jsonString = "Invalid data.mqlQuery.result";
        }

        const errorMessage = `This query failed for an unknown reason.`;

        dispatch({
          type: "fetchResultsFail",
          errorMessage,
        });

        handleCombinedError({
          name: "Unknown Error",
          message: errorMessage,
          graphQLErrors: [],
        }, {
          queryId: data?.mqlQuery?.id as string,
          queryStatus: data?.mqlQuery?.status as string,
          json: jsonString
        });
      }
    }
  }, [data, error, state.cancelledQueries, limit, handleCombinedError]);

  return state;
}
