import { useEffect, useContext, Dispatch } from "react";
import MqlContext from "../../context/MqlContext/MqlContext";
import FetchMqlQueryTimeSeries from "../../queries/mql/FetchMqlQueryTimeSeries";
import {
  FetchMqlTimeSeriesQuery,
  FetchMqlTimeSeriesQueryVariables,
  MqlQueryStatus,
} from "../../queries/mql/MqlQueryTypes";
import {shouldRetryAfterExpiredQuery, doRetryAfterExpiredQueryAction} from '../actions';
import getErrorMessage from '../utils/getErrorMessage';
import {Action, UseMqlQueryState, QUERY_POLLING_MS, RETRY_POLLING_MS} from '../reducers/mqlQueryReducer';

interface UseFetchMqlTimeSeriesArgs<CreateQueryDataType> {
  state: UseMqlQueryState;
  skip: boolean;
  dispatch: Dispatch<Action<CreateQueryDataType>>
  createQueryIdQuery: ({stateRetries}: {stateRetries: number}) => void;
  retries: number;
}

const useFetchMqlTimeSeries = <CreateQueryDataType>({
  state,
  skip,
  dispatch,
  createQueryIdQuery,
  retries
}: UseFetchMqlTimeSeriesArgs<CreateQueryDataType>) => {
  const {
    useQuery,
    handleCombinedError,
  } = useContext(MqlContext);

  const [{ data, error }, refetchMqlQuery] = useQuery<
    FetchMqlTimeSeriesQuery,
    FetchMqlTimeSeriesQueryVariables
  >({
    query: FetchMqlQueryTimeSeries,
    variables: {
      queryId: state.queryId || ""
    },
    pause: skip,
  });


  const retry = () => {
    setTimeout(() => {
      dispatch({ type: "retryFetchResults" });
      refetchMqlQuery();
    }, RETRY_POLLING_MS);
  }

  useEffect(() => {
    let checkRunning: NodeJS.Timeout;

    if (error) {
      // if error is an expired query id, the mql server may have been restarted, restart the entire query.
      if (shouldRetryAfterExpiredQuery({
            errorMessage: error?.message,
            doRetryAfterExpiredQuery: state.doRetryAfterExpiredQuery
          })
        ) {
          dispatch(doRetryAfterExpiredQueryAction(retries));
          createQueryIdQuery({stateRetries: state.retries});
      } else if (retries > 0 && state.retries !== retries) {
        retry()

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

    checkRunning = setInterval(() => {
      if (
        status === MqlQueryStatus.Running ||
        status === MqlQueryStatus.Pending
      ) {
        dispatch({ type: "fetchResultsRunning" });
        refetchMqlQuery();
      }
    }, QUERY_POLLING_MS)

    if (status === MqlQueryStatus.Successful) {
      clearInterval(checkRunning);

      dispatch({
        type: "fetchResultsSuccess",
        data,
        handleCombinedError,
      });
    }

    if (status === MqlQueryStatus.Failed) {
      clearInterval(checkRunning);

      if (retries > 0 && state.retries !== retries) {
        retry()
      } else {
        if (data?.mqlQuery?.error) {
          const {error} = data.mqlQuery;
          dispatch({
            type: "fetchResultsFail",
            errorMessage: error,
          });

          handleCombinedError({
            name: "Unknown Error",
            message: error,
            graphQLErrors: [],
          }, {
            queryId: data?.mqlQuery?.id as string,
            queryStatus: data?.mqlQuery?.status as string,
            json: error
          });
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
    }

    return () => {
      clearInterval(checkRunning);
    };
  }, [data, error, state.cancelledQueries, handleCombinedError]);
}

export default useFetchMqlTimeSeries;
