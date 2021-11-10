import {
  CreateMqlQueryMutation,
} from "../../mutations/mql/MqlMutationTypes";
import { CombinedError } from "urql";
import {
  FetchMqlTimeSeriesQuery,
} from "../../queries/mql/MqlQueryTypes";

export enum UseMqlQueryAcions {
  fetchResultsExpiredQuery = 'fetchResultsExpiredQuery',
  fetchResultsFail = 'fetchResultsFail',
  fetchResultsRunning = 'fetchResultsRunning',
  fetchResultsSuccess = 'fetchResultsSuccess',
  postQueryCachedResultsSuccess = 'postQueryCachedResultsSuccess',
  postQueryFail = 'postQueryFail',
  postQueryStart = 'postQueryStart',
  postQuerySuccess = 'postQuerySuccess',
  retryFetchResults = 'retryFetchResults'
}

export type Action =
  | { type: UseMqlQueryAcions.postQueryStart }
  | { type: UseMqlQueryAcions.postQueryFail;
      errorMessage: string
    }
  | { type: UseMqlQueryAcions.postQuerySuccess;
      queryId: string
    }
  | { type: UseMqlQueryAcions.postQueryCachedResultsSuccess;
      data: CreateMqlQueryMutation;
      handleCombinedError: (e: CombinedError) => void;
    }
  | { type: UseMqlQueryAcions.fetchResultsFail;
      errorMessage: string
    }
  | { type: UseMqlQueryAcions.fetchResultsRunning }
  | { type: UseMqlQueryAcions.retryFetchResults }
  | {
      type: UseMqlQueryAcions.fetchResultsSuccess;
      data: FetchMqlTimeSeriesQuery;
      handleCombinedError: (e: CombinedError) => void;
    }
    | {
      type: UseMqlQueryAcions.fetchResultsExpiredQuery,
      payload: {
        retries: number
      }
    };
