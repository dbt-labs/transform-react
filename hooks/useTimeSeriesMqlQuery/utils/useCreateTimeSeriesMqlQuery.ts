import { useContext, useMemo, Dispatch } from 'react';
import MqlContext from '../../../context/MqlContext/MqlContext';
import CreateMqlQuery from '../../../mutations/mql/CreateMqlQuery';
import {
  CreateMqlQueryMutation,
  CreateMqlQueryMutationVariables,
} from '../../../mutations/mql/MqlMutationTypes';
import {
  FetchMqlTimeSeriesQuery,
  MqlQueryStatus,
} from '../../../queries/mql/MqlQueryTypes';
import {
  Action as UseMqlQueryAction,
  getRetryPollingMS,
} from '../../reducers/mqlQueryReducer';
import getErrorMessage from '../../utils/getErrorMessage';
import clearEmptyConstraints from './clearEmptyConstraints';

export interface DoCreateMqlQueryArgs {
  stateRetries: number;
}

interface CommonUseCreateMqlQueryArgs {
  retries: number; // the number of retries passed as an arg from the client.
  formState?: Omit<CreateMqlQueryMutationVariables, 'attemptNum'>;
  dispatch: Dispatch<
    UseMqlQueryAction<CreateMqlQueryMutation, FetchMqlTimeSeriesQuery>
  >;
}

export interface SingleMetricUserCreateMqlQueryArgs
  extends CommonUseCreateMqlQueryArgs {
  metricName: string;
  metricNames?: never;
}
export interface MultipleMetricsUserCreateMqlQueryArgs
  extends CommonUseCreateMqlQueryArgs {
  metricName?: never;
  metricNames: string[];
}

type UseCreateMqlQueryArgs =
  | SingleMetricUserCreateMqlQueryArgs
  | MultipleMetricsUserCreateMqlQueryArgs;

interface UseCreateMqlQuery {
  createTimeSeriesMqlQuery: (args: DoCreateMqlQueryArgs) => void;
}

const useCreateTimeSeriesMqlQuery = ({
  metricName,
  metricNames,
  formState = {},
  dispatch,
  retries,
}: UseCreateMqlQueryArgs): UseCreateMqlQuery => {
  const { useMutation, handleCombinedError } = useContext(MqlContext);

  const [, createMqlQueryMutation] = useMutation<
    CreateMqlQueryMutation,
    CreateMqlQueryMutationVariables
  >(CreateMqlQuery);

  const metrics = useMemo(
    () => (metricName ? [metricName] : metricNames || []),
    [metricName, metricNames]
  );

  const createTimeSeriesMqlQuery = ({ stateRetries }: DoCreateMqlQueryArgs) => {
    createMqlQueryMutation({
      addTimeSeries: true,
      attemptNum: stateRetries,
      daysLimit: formState.daysLimit,
      endTime: formState.latestXDays ? null : formState.endTime,
      groupBy: formState.groupBy || [],
      includeDateBoundaries: formState.includeDateBoundaries,
      latestXDays: formState.latestXDays,
      limit: formState.limit,
      maxDimensionValues: formState.maxDimensionValues,
      metrics: metrics as string[],
      order: formState.order,
      pctChange: formState.pctChange,
      startTime: formState.latestXDays ? null : formState.startTime,
      timeGranularity: formState.timeGranularity,
      trimIncompletePeriods: formState.trimIncompletePeriods,
      where: clearEmptyConstraints(formState.where),
    }).then(({ data, error }) => {
      console.log('data', data);
      console.log('error', error);
      if (data?.createMqlQuery?.query?.status === MqlQueryStatus.Successful) {
        dispatch({
          type: 'postQueryCachedResultsSuccess',
          data,
          handleCombinedError,
        });
      } else {
        if (data?.createMqlQuery?.id) {
          dispatch({
            type: 'postQuerySuccess',
            queryId: data?.createMqlQuery?.id,
          });
          return;
        }
        if (error) {
          if (
            retries > 0 &&
            stateRetries !== retries &&
            stateRetries < retries
          ) {
            setTimeout(() => {
              dispatch({ type: 'retryFetchResults' });
              createTimeSeriesMqlQuery({ stateRetries: stateRetries + 1 });
            }, getRetryPollingMS());
          } else {
            dispatch({
              type: 'postQueryFail',
              errorMessage: getErrorMessage(error),
            });
          }
          handleCombinedError(error);
        }
      }
    });
  };

  return {
    createTimeSeriesMqlQuery,
  };
};

export default useCreateTimeSeriesMqlQuery;
