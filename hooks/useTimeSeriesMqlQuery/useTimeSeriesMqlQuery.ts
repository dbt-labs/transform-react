import { useEffect, useReducer, useContext } from "react";
// import { CombinedError } from "urql";
import MqlContext from "../../context/MqlContext/MqlContext";
import {
  CreateMqlQueryMutation,
  CreateMqlQueryMutationVariables,
} from "../../mutations/mql/MqlMutationTypes";
import { FetchMqlTimeSeriesQuery } from "../../queries/mql/MqlQueryTypes";
import useCreateTimeSeriesMqlQuery from "./utils/useCreateTimeSeriesMqlQuery";
import mqlQueryReducer, {
  initialState,
  UseMqlQueryState,
} from "../reducers/mqlQueryReducer";
import useFetchMqlQuery from "../utils/useFetchMqlQuery";
import FetchMqlQueryTimeSeries from "../../queries/mql/FetchMqlQueryTimeSeries";

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
type CommonParams = {
  queryInput?: Omit<CreateMqlQueryMutationVariables, "attemptNum">;
  skip?: boolean;
  retries?: number;
  doRefetchMqlQuery?: boolean;
};

type SingleMetric = {
  metricName: string;
  metricNames?: never;
};

type MultiMetric = {
  metricName?: never;
  metricNames: string[];
};

type UseMqlQueryParams = CommonParams & (SingleMetric | MultiMetric);

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

  const test = metricName ? { metricName } : {};

  const reducer = mqlQueryReducer<
    CreateMqlQueryMutation,
    FetchMqlTimeSeriesQuery
  >(dataAccr);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { createTimeSeriesMqlQuery } = useCreateTimeSeriesMqlQuery({
    ...(metricName
      ? ({ metricName } as { metricName: string })
      : ({ metricNames } as { metricNames: string[] })),
    formState: queryInput,
    dispatch,
    retries,
  });

  useEffect(() => {
    if ((!metricName && !metricNames) || !mqlServerUrl || skip) {
      return;
    }
    dispatch({ type: "postQueryStart", doRefetchMqlQuery });
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
