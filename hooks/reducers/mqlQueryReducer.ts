import { CombinedError } from "urql";
import {
  MqlQueryStatus,
} from "../../queries/mql/MqlQueryTypes";

// This is the delay between the _response_ from the last query and the _start_ of the new query
export const QUERY_POLLING_MS = 400;

// Length of time to wait before retrying when query fails
export const RETRY_POLLING_MS = 350;
export const getRetryPollingMS = (base: number = RETRY_POLLING_MS, buffer: number = 400) => {
  return base + Math.floor(Math.random() * buffer);
}

// Time in milliseconds to wait for a query to respond successfully before showing a slow loading message to the user.
const LONG_FETCH_QUERY_ATTEMPT_MAX = 20000; // 20 seconds

// As we keep track of prevoius queries, we don't want the list to grow unbounded in long running browser sessions
const CANCELLED_QUERY_LIST_LENGTH = 10;

export type UseMqlQueryState<FetchQueryDataType extends {mqlQuery?: any}> = {
  // The number of times FetchMqlTimeSeriesQuery will retry if the initial query fails. Defaults to 0.
  retries: number;

  // We endeavor to keep this ID up to date with the chart we are currently displaying or wish to render next
  queryId: string | null;

  // This is the current status, which lags slightly behind the MQL Server status as we make requests and parse responses.
  queryStatus: MqlQueryStatus;

  // This is the formatted chart data ready for rendering by the chart
  // data?: FetchMqlTimeSeriesQuery["mqlQuery"] | null;
  data?: FetchQueryDataType['mqlQuery'] | null;

  // As we have subsequent queries triggered by changes in the UI, this allows us to keep track of previous requests to avoid race conditions
  // We cap the list at 10. It's only intended to handle scenarios where the user makes a series of requests while a series of requests is
  // currently in flight
  cancelledQueries: string[];

  // The time we started a new timeSeries query.
  fetchStartTime: number | null;

  // We will track how long SUCCESSFUL response is taking, if it takes too long we will set this to true.
  isTakingForever: boolean;

  errorMessage?: string;

  doRetryAfterExpiredQuery: boolean;
};

export const initialState: UseMqlQueryState<{}> = {
  retries: 0,
  queryId: null,
  queryStatus: MqlQueryStatus.Pending,
  data: null,
  cancelledQueries: [],
  fetchStartTime: null,
  isTakingForever: false,
  doRetryAfterExpiredQuery: false,
};

export type Action<CreateQueryDataType, FetchQueryDataType> =
  | { type: "postQueryStart" }
  | { type: "postQueryFail";
      errorMessage: string
    }
  | { type: "postQuerySuccess";
      queryId: string
    }
  | { type: "postQueryCachedResultsSuccess";
      data: CreateQueryDataType;
      handleCombinedError: (e: CombinedError) => void;
    }
  | { type: "fetchResultsFail";
      errorMessage: string
    }
  | { type: "fetchResultsRunning" }
  | { type: "retryFetchResults" }
  | {
      type: "fetchResultsSuccess";
      data: FetchQueryDataType;
      handleCombinedError: (e: CombinedError) => void;
    }
  | {
    type: "fetchResultsExpiredQuery",
    payload: {
      retries: number
    }
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
const mqlQueryReducer = <CreateQueryDataType extends unknown, FetchQueryDataType extends {mqlQuery?: any}>(dataAccr: (data: CreateQueryDataType) => FetchQueryDataType['mqlQuery']) => (
  state: UseMqlQueryState<FetchQueryDataType>,
  action: Action<CreateQueryDataType, FetchQueryDataType>,
): UseMqlQueryState<FetchQueryDataType> => {
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
        retries: 0,
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
        data: dataAccr(action.data),
        fetchStartTime: null,
        isTakingForever: false,
        errorMessage: undefined,
      }
    }

    case "fetchResultsRunning": {
      const now = Date.now();
      const diff = now - (state.fetchStartTime || 0);

      if (state.queryStatus !== MqlQueryStatus.Running && state.isTakingForever !== diff >= LONG_FETCH_QUERY_ATTEMPT_MAX && state.errorMessage !== undefined) {
        return {
          ...state,
          queryStatus: MqlQueryStatus.Running,
          isTakingForever: diff >= LONG_FETCH_QUERY_ATTEMPT_MAX,
          errorMessage: undefined,
        }
      } else {
        return state;
      }
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
        doRetryAfterExpiredQuery: false,
        retries: 0
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

    case "fetchResultsExpiredQuery": {
      return {
        ...state,
        queryId: null,
        queryStatus: initialState.queryStatus,
        data: null,
        errorMessage: undefined,
        doRetryAfterExpiredQuery: true,
      }
    }

    default: {
      throw new Error();
    }
  }
}

export default mqlQueryReducer;
