import { useContext, Dispatch } from 'react';
import MqlContext from "../../../context/MqlContext/MqlContext";
import CreateMqlQuery from "../../../mutations/mql/CreateMqlQuery";
import {
  CreateMqlQueryMutation,
  CreateMqlQueryMutationVariables,
} from "../../../mutations/mql/MqlMutationTypes";
import clearEmptyConstraints from './clearEmptyConstraints';
import { Action as UseMqlQueryAction, getRetryPollingMS } from '../../reducers/mqlQueryReducer';
import getErrorMessage from '../../utils/getErrorMessage';
import {
  FetchMqlTimeSeriesQuery,
  MqlQueryStatus,
} from "../../../queries/mql/MqlQueryTypes";

export interface DoCreateMqlQueryArgs {
  stateRetries: number
}

interface UseCreateMqlQueryArgs {
  retries: number; // the number of retries passed as an arg from the client.
  metricName: string;
  formState?: CreateMqlQueryMutationVariables;
  dispatch: Dispatch<UseMqlQueryAction<CreateMqlQueryMutation, FetchMqlTimeSeriesQuery>>;
}

interface UseCreateMqlQuery {
  createTimeSeriesMqlQuery: (args: DoCreateMqlQueryArgs) => void;
}

const useCreateTimeSeriesMqlQuery = ({metricName, formState = {}, dispatch, retries}: UseCreateMqlQueryArgs): UseCreateMqlQuery => {
  const {
    useMutation,
    handleCombinedError,
  } = useContext(MqlContext);

  const [{}, createMqlQueryMutation] = useMutation<
    CreateMqlQueryMutation,
    CreateMqlQueryMutationVariables
  >(CreateMqlQuery);
  const createTimeSeriesMqlQuery = ({stateRetries}:DoCreateMqlQueryArgs) => {
    createMqlQueryMutation({
      addTimeSeries: true,
      attemptNum: stateRetries,
      daysLimit: formState.daysLimit,
      endTime: formState.endTime,
      groupBy: formState.groupBy || [],
      includeDateBoundaries: formState.includeDateBoundaries,
      limit: formState.limit,
      maxDimensionValues: formState.maxDimensionValues,
      metrics: [metricName],
      order: formState.order,
      pctChange: formState.pctChange,
      startTime: formState.startTime,
      timeGranularity: formState.timeGranularity,
      trimIncompletePeriods: formState.trimIncompletePeriods,
      where: clearEmptyConstraints(formState.where),
    }).then(({ data, error }) => {
      if (data?.createMqlQuery?.query?.status === MqlQueryStatus.Successful) {
        dispatch({
          type: "postQueryCachedResultsSuccess",
          data,
          handleCombinedError,
        });
      } else {
        if (data?.createMqlQuery?.id) {
          dispatch({
            type: "postQuerySuccess",
            queryId: data?.createMqlQuery?.id,
          });
        } else if (error) {
          if (retries > 0 && stateRetries !== retries && stateRetries < retries) {
            setTimeout(() => {
              dispatch({ type: "retryFetchResults" });
              createTimeSeriesMqlQuery({stateRetries: stateRetries + 1});
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
    createTimeSeriesMqlQuery
  }
}



export default useCreateTimeSeriesMqlQuery;
