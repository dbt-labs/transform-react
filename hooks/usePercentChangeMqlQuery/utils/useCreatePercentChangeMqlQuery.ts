import { useContext, Dispatch } from 'react';
import MqlContext from "../../../context/MqlContext/MqlContext";
import CreatePercentChange from "../../../mutations/mql/CreatePercentChangeMutation";
import {
  CreatePercentChangeMutation,
  CreatePercentChangeMutationVariables,
} from "../../../mutations/mql/MqlMutationTypes";
import { Action, RETRY_POLLING_MS } from '../../reducers/mqlQueryReducer'
import getErrorMessage from '../../utils/getErrorMessage';
import {
  MqlQueryStatus,
} from "../../../queries/mql/MqlQueryTypes";

interface DoCreatePercentChangeArgs {
  stateRetries: number
}

interface UseCreatePercentChangeArgs {
  retries: number; // the number of retries passed as an arg from the client.
  queryInput: CreatePercentChangeMutationVariables;
  dispatch: Dispatch<Action<CreatePercentChangeMutation>>;
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
      } else if (data?.pctChangeOverRange?.query?.status === MqlQueryStatus.Pending || data?.pctChangeOverRange?.query?.status === MqlQueryStatus.Running) {
        setTimeout(() => {
          queryPercentChange({stateRetries: stateRetries});
        }, RETRY_POLLING_MS)
      } else {
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
    queryPercentChange
  }
}



export default useCreatePercentChange;
