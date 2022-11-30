import { useEffect, useReducer, useContext, useMemo } from 'react';
import useCreateTimeSeriesMqlQuery, {
  SingleMetricUserCreateMqlQueryArgs,
  MultipleMetricsUserCreateMqlQueryArgs,
} from './utils/useCreateTimeSeriesMqlQuery';
// import { CombinedError } from "urql";
import MqlContext from '../../context/MqlContext/MqlContext';
import {
  CreateMqlQueryMutation,
  CreateMqlQueryMutationVariables,
} from '../../mutations/mql/MqlMutationTypes';
import FetchMqlQueryTimeSeries from '../../queries/mql/FetchMqlQueryTimeSeries';
import { FetchMqlTimeSeriesQuery } from '../../queries/mql/MqlQueryTypes';
import mqlQueryReducer, {
  initialState,
  UseMqlQueryState,
} from '../reducers/mqlQueryReducer';
import useFetchMqlQuery from '../utils/useFetchMqlQuery';

interface CommonMqlQueryParams {
  queryInput?: Omit<CreateMqlQueryMutationVariables, 'attemptNum'>;
  skip?: boolean;
  retries?: number;
  doRefetchMqlQuery?: boolean;
}

interface SingleMetricMqlQueryParams extends CommonMqlQueryParams {
  metricName: string;
  metricNames?: never;
}

interface MultipleMetricsMqlQueryParams extends CommonMqlQueryParams {
  metricName?: never;
  metricNames: string[];
}

/*
  Please Beware!
  Here Be Dragons!
  If `queryInput` is provided, it *must* be stable for this to work.
  That means if the value is calculated and generating a fresh object every render,
  this will result in an infinite loop!
  So we are doing something that seems like it could be improved, which is that if the form is based on the URL,
  we pass in locationSearch, which is stable, and calculate the form state inside an effect. I know. Gross, right?
  Is there a better approach?
*/
type UseMqlQueryParams =
  | SingleMetricMqlQueryParams
  | MultipleMetricsMqlQueryParams;

export type UseTimeSeriesMqlQuery = UseMqlQueryState<FetchMqlTimeSeriesQuery>;

// This custom hook consists of two useHooks that should asynchronously handle all scenarios for this chained
// data fetching we are doing. It should do it in a high performance way and in a way that is resilient to race conditions if the
// user updates their request while a query is in flight
export default function useTimeSeriesMqlQuery({
  queryInput,
  metricName,
  metricNames,
  skip,
  retries = 5,
  doRefetchMqlQuery,
}: UseMqlQueryParams) {
  const { mqlServerUrl } = useContext(MqlContext);
  const dataAccr = (data: CreateMqlQueryMutation) =>
    data?.createMqlQuery?.query;

  const reducer = mqlQueryReducer<
    CreateMqlQueryMutation,
    FetchMqlTimeSeriesQuery
  >(dataAccr);
  const [state, dispatch] = useReducer(reducer, initialState);

  const useCreateTimeSeriesMqlQueryArgsSingle = useMemo(
    (): SingleMetricUserCreateMqlQueryArgs => ({
      metricName: metricName as string,
      formState: queryInput,
      dispatch,
      retries,
      doRefetchMqlQuery,
    }),
    [metricName, queryInput, dispatch, retries]
  );

  const useCreateTimeSeriesMqlQueryArgsMultiple = useMemo(
    (): MultipleMetricsUserCreateMqlQueryArgs => ({
      metricNames: metricNames as string[],
      formState: queryInput,
      dispatch,
      retries,
      doRefetchMqlQuery,
    }),
    [metricNames, queryInput, dispatch, retries]
  );

  const { createTimeSeriesMqlQuery } = useCreateTimeSeriesMqlQuery(
    metricName
      ? useCreateTimeSeriesMqlQueryArgsSingle
      : useCreateTimeSeriesMqlQueryArgsMultiple
  );

  useEffect(() => {
    if ((!metricName && !metricNames) || !mqlServerUrl || skip) {
      return;
    }
    dispatch({ type: 'postQueryStart', doRefetchMqlQuery });
    createTimeSeriesMqlQuery({ stateRetries: state.retries });
  }, [
    queryInput,
    metricName,
    metricNames,
    mqlServerUrl,
    skip,
    doRefetchMqlQuery,
  ]);

  const _skip =
    skip ||
    !state.queryId ||
    state.cancelledQueries.includes(state.queryId); /* && !isRunning*/

  useFetchMqlQuery<CreateMqlQueryMutation, FetchMqlTimeSeriesQuery>({
    state,
    skip: _skip,
    dispatch,
    createQueryIdQuery: createTimeSeriesMqlQuery,
    retries,
    fetchDataQuery: FetchMqlQueryTimeSeries,
    doRefetchMqlQuery,
  });

  return state;
}
