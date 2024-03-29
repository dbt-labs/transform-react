import { useContext, Dispatch } from 'react';
import MqlContext from "../../../context/MqlContext/MqlContext";
import CreatePercentChange from "../../../mutations/mql/CreatePercentChangeMutation";
import {
  CreatePercentChangeMutation,
  CreatePercentChangeMutationVariables,
} from "../../../mutations/mql/MqlMutationTypes";
import { Action, getRetryPollingMS } from '../../reducers/mqlQueryReducer'
import getErrorMessage from '../../utils/getErrorMessage';
import {
  FetchPercentChangeQuery,
  MqlQueryStatus,
} from "../../../queries/mql/MqlQueryTypes";

interface DoCreatePercentChangeArgs {
  stateRetries: number
}

interface UseCreatePercentChangeArgs {
  retries: number; // the number of retries passed as an arg from the client.
  queryInput: CreatePercentChangeMutationVariables;
  dispatch: Dispatch<Action<CreatePercentChangeMutation, FetchPercentChangeQuery>>;
}

interface UseCreatePercentChange {
  queryPercentChange: (args: DoCreatePercentChangeArgs) => void;
}

const useCreatePercentChange = ({queryInput, dispatch, retries}: UseCreatePercentChangeArgs): UseCreatePercentChange => {
  const {
    useMutation,
    handleCombinedError,
  } = useContext(MqlContext);

  const [{}, queryPercentChangeMutation] = useMutation<
    CreatePercentChangeMutation,
    CreatePercentChangeMutationVariables
  >(CreatePercentChange);

  const queryPercentChange = ({stateRetries}:DoCreatePercentChangeArgs) => {
    queryPercentChangeMutation(queryInput).then(({ data, error }) => {
      if (data?.pctChangeOverRange?.query?.status === MqlQueryStatus.Successful) {
        dispatch({
          type: "postQueryCachedResultsSuccess",
          data,
          handleCombinedError,
        });
      }
      else {
        if (data?.pctChangeOverRange?.id) {
          dispatch({
            type: "postQuerySuccess",
            queryId: data?.pctChangeOverRange?.id,
          });
        } else if (error) {
          if (retries > 0 && stateRetries !== retries && stateRetries < retries) {
            setTimeout(() => {
              dispatch({ type: "retryFetchResults" });
              queryPercentChange({stateRetries: stateRetries + 1});
            }, getRetryPollingMS())
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
    queryPercentChange
  }
}



export default useCreatePercentChange;
