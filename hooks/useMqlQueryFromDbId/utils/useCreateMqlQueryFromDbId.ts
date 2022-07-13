import { useContext, Dispatch } from 'react';
import MqlContext from "../../../context/MqlContext/MqlContext";
import CreateMqlQueryFromDbId from "../../../mutations/mql/CreateMqlQueryFromDbId";
import {
  CreateMqlQueryFromDbIdMutation,
  CreateMqlQueryFromDbIdMutationVariables,
} from "../../../mutations/mql/MqlMutationTypes";
import { Action as UseMqlQueryAction, getRetryPollingMS } from '../../reducers/mqlQueryReducer';
import getErrorMessage from '../../utils/getErrorMessage';
import {
  FetchMqlTimeSeriesQuery,
  MqlQueryStatus,
} from "../../../queries/mql/MqlQueryTypes";

export interface DoCreateMqlQueryFromDbIdArgs {
  stateRetries: number
}

interface UseCreateMqlQueryFromDbIdArgs {
  retries: number; // the number of retries passed as an arg from the client.
  mqlQueryId: number;
  dispatch: Dispatch<UseMqlQueryAction<CreateMqlQueryFromDbIdMutation, FetchMqlTimeSeriesQuery>>;
}

interface UseCreateMqlQueryFromDbId {
  createMqlQueryFromDbId: (args: DoCreateMqlQueryFromDbIdArgs) => void;
}

const useCreateMqlQueryFromDbId = ({mqlQueryId,  dispatch, retries}: UseCreateMqlQueryFromDbIdArgs): UseCreateMqlQueryFromDbId => {
  const {
    useMutation,
    handleCombinedError,
  } = useContext(MqlContext);

  const [{}, createMqlQueryFromDbIdMutation] = useMutation<
    CreateMqlQueryFromDbIdMutation,
    CreateMqlQueryFromDbIdMutationVariables
  >(CreateMqlQueryFromDbId);
  const createMqlQueryFromDbId = ({stateRetries}:DoCreateMqlQueryFromDbIdArgs) => {
    createMqlQueryFromDbIdMutation({
      dbId: mqlQueryId,
      attemptNum: stateRetries,
    }).then(({ data, error }) => {
      if (data?.createMqlQueryFromDbId?.query?.status === MqlQueryStatus.Successful) {
        dispatch({
          type: "postQueryCachedResultsSuccess",
          data,
          handleCombinedError,
        });
      } else {
        if (data?.createMqlQueryFromDbId?.id) {
          dispatch({
            type: "postQuerySuccess",
            queryId: data?.createMqlQueryFromDbId?.id,
          });
        } else if (error) {
          if (retries > 0 && stateRetries !== retries && stateRetries < retries) {
            setTimeout(() => {
              dispatch({ type: "retryFetchResults" });
              createMqlQueryFromDbId({stateRetries: stateRetries + 1});
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
    createMqlQueryFromDbId
  }
}



export default useCreateMqlQueryFromDbId;
