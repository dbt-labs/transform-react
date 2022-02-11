import { useContext, Dispatch } from 'react';
import MqlContext from "../../../context/MqlContext/MqlContext";
import CreateLatestMetricChange from "../../../mutations/mql/CreateLatestMetricChangeMutation";
import {
  CreateLatestMetricChangeMutation,
  CreateLatestMetricChangeMutationVariables,
} from "../../../mutations/mql/MqlMutationTypes";
import { Action, RETRY_POLLING_MS } from '../../reducers/mqlQueryReducer';
import getErrorMessage from '../../utils/getErrorMessage';
import {
  FetchLatestChangeQuery,
  MqlQueryStatus,
} from "../../../queries/mql/MqlQueryTypes";

interface DoCreateLatestMetricChangeArgs {
  stateRetries: number
}

interface UseCreateLatestMetricChangeArgs {
  retries: number; // the number of retries passed as an arg from the client.
  metricName: string;
  dispatch: Dispatch<Action<CreateLatestMetricChangeMutation, FetchLatestChangeQuery>>;
}

interface UseCreateLatestMetricChange {
  queryLatestMetricChange: (args: DoCreateLatestMetricChangeArgs) => void;
}

const useCreateLatestMetricChange = ({metricName, dispatch, retries}: UseCreateLatestMetricChangeArgs): UseCreateLatestMetricChange => {
  const {
    useMutation,
    handleCombinedError,
  } = useContext(MqlContext);

  const [{}, queryLatestMetricChangeMutation] = useMutation<
    CreateLatestMetricChangeMutation,
    CreateLatestMetricChangeMutationVariables
  >(CreateLatestMetricChange);

  const queryLatestMetricChange = ({stateRetries}:DoCreateLatestMetricChangeArgs) => {
    queryLatestMetricChangeMutation({
      metricName
    }).then(({ data, error }) => {
      if (data?.queryLatestMetricChange?.query?.status === MqlQueryStatus.Successful) {
        dispatch({
          type: "postQueryCachedResultsSuccess",
          data,
          handleCombinedError,
        });
      }
      else {
        if (data?.queryLatestMetricChange?.id) {
          dispatch({
            type: "postQuerySuccess",
            queryId: data?.queryLatestMetricChange?.id,
          });
        } else if (error) {
          if (retries > 0 && stateRetries !== retries && stateRetries < retries) {
            setTimeout(() => {
              dispatch({ type: "retryFetchResults" });
              queryLatestMetricChange({stateRetries: stateRetries + 1});
            }, RETRY_POLLING_MS)
          } else {
            dispatch({
              type: "postQueryFail",
              errorMessage: getErrorMessage(error),
            });
          }
          handleCombinedError(error);

        }
      }

    });
  };

  return {
    queryLatestMetricChange
  }
}



export default useCreateLatestMetricChange;
