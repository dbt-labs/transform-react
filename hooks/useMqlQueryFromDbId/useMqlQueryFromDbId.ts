import { useEffect, useReducer, useContext } from "react";
// import { CombinedError } from "urql";
import MqlContext from "../../context/MqlContext/MqlContext";
import {
  CreateMqlQueryFromDbIdMutation,
  CreateMqlQueryFromDbIdMutationVariables,
} from "../../mutations/mql/MqlMutationTypes";
import {
  FetchMqlTimeSeriesQuery,
} from "../../queries/mql/MqlQueryTypes";
import useCreateMqlQueryFromDbId from './utils/useCreateMqlQueryFromDbId';
import mqlQueryReducer, { initialState, UseMqlQueryState } from '../reducers/mqlQueryReducer';
import useFetchMqlQuery from '../utils/useFetchMqlQuery';
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
export type UseMqlQueryFromDbIdParams = {
  mqlQueryId: number;
  // queryInput?: Omit<CreateMqlQueryFromDbIdMutationVariables, 'attemptNum'>;
  skip?: boolean;
  retries?: number;
  doRefetchMqlQuery?: boolean;
};

export type UseMqlQueryFromDbIdQuery = UseMqlQueryState<FetchMqlTimeSeriesQuery>

// This custom hook consists of two useHooks that should asynchronously handle all scenarios for this chained
// data fetching we are doing. It should do it in a high performance way and in a way that is resilient to race conditions if the
// user updates their request while a query is in flight
export default function useMqlQueryFromDbId({
  // queryInput,
  mqlQueryId,
  skip,
  retries = 5,
  doRefetchMqlQuery,
}: UseMqlQueryFromDbIdParams) {
  const {
    mqlServerUrl,
  } = useContext(MqlContext);
  const dataAccr = (data: CreateMqlQueryFromDbIdMutation) => data?.createMqlQueryFromDbId?.query;

  const reducer = mqlQueryReducer<CreateMqlQueryFromDbIdMutation, FetchMqlTimeSeriesQuery>(dataAccr);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {createMqlQueryFromDbId} = useCreateMqlQueryFromDbId({mqlQueryId, dispatch, retries})

  useEffect(() => {
    if (!mqlQueryId || !mqlServerUrl || skip) {
      return;
    }
    dispatch({ type: "postQueryStart", doRefetchMqlQuery });
    createMqlQueryFromDbId({stateRetries: state.retries});
  }, [mqlQueryId, mqlServerUrl, skip, doRefetchMqlQuery]);

  const _skip =
    skip ||
    !state.queryId ||
    state.cancelledQueries.includes(state.queryId); /* && !isRunning*/

  useFetchMqlQuery<CreateMqlQueryFromDbIdMutation, FetchMqlTimeSeriesQuery>({
    state,
    skip: _skip,
    dispatch,
    createQueryIdQuery: createMqlQueryFromDbId,
    retries,
    fetchDataQuery: FetchMqlQueryTimeSeries,
    doRefetchMqlQuery,
  });

  return state;
}
