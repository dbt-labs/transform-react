import { useEffect, useContext, Dispatch } from "react";
import MqlContext from "../../../context/MqlContext/MqlContext";
import FetchMqlQueryTimeSeries from "../../../queries/mql/FetchMqlQueryTimeSeries";
import {
  FetchPercentChangeQuery,
  FetchPercentChangeQueryVariables,
  MqlQueryStatus,
} from "../../../queries/mql/MqlQueryTypes";
import {shouldRetryAfterExpiredQuery, doRetryAfterExpiredQueryAction} from '../../actions';
import getErrorMessage from '../../utils/getErrorMessage';
import {Action, UsePercentChangeQueryState, QUERY_POLLING_MS, RETRY_POLLING_MS} from '../reducers/percentChangeReducer';

interface UseFetchMqlTimeSeriesArgs {
  state: UsePercentChangeQueryState;
  skip: boolean;
  dispatch: Dispatch<Action>
  createQueryIdQuery: ({stateRetries}: {stateRetries: number}) => void;
  retries: number;
}

const useFetchPercentChangeMqlQuery = ({
  state,
  skip,
  dispatch,
  createQueryIdQuery,
  retries
}: UseFetchMqlTimeSeriesArgs) => {
  const {
    useQuery,
    handleCombinedError,
  } = useContext(MqlContext);

  const [{ data, error }, refetchMqlQuery] = useQuery<
    FetchPercentChangeQuery,
    FetchPercentChangeQueryVariables
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
  };

  useEffect(() => {
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
        retry();
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
        handleCombinedError,
      });
    }

    if (
      status === MqlQueryStatus.Running ||
      status === MqlQueryStatus.Pending
    ) {
      setTimeout(() => {
        dispatch({ type: "fetchResultsRunning"});
        refetchMqlQuery({ requestPolicy: 'network-only' });
      }, QUERY_POLLING_MS);
    }

    if (status === MqlQueryStatus.Failed) {
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
  }, [data, error, state.cancelledQueries, handleCombinedError]);
}

export default useFetchPercentChangeMqlQuery;
