import { useEffect, useReducer, useContext } from "react";
// import { CombinedError } from "urql";
import MqlContext from "../../context/MqlContext/MqlContext";
import {
  CreateMqlQueryMutation,
  CreateMqlQueryMutationVariables,
} from "../../mutations/mql/MqlMutationTypes";
import useCreateMqlQuery, {DoCreateMqlQueryArgs} from './utils/useCreateMqlQuery';
import mqlQueryReducer, { initialState } from '../reducers/mqlQueryReducer';
import useFetchMqlTimeSeries from '../utils/useFetchMqlTimeSeries';

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
type UseMqlQueryParams = {
  metricName: string;
  queryInput?: CreateMqlQueryMutationVariables;
  skip?: boolean;
  retries?: number;
};

// This custom hook consists of two useHooks that should asynchronously handle all scenarios for this chained
// data fetching we are doing. It should do it in a high performance way and in a way that is resilient to race conditions if the
// user updates their request while a query is in flight
export default function useMqlQuery({
  queryInput,
  metricName,
  skip,
  retries = 5,
}: UseMqlQueryParams) {
  const {
    mqlServerUrl,
  } = useContext(MqlContext);

  const reducer = mqlQueryReducer<CreateMqlQueryMutation>((data: CreateMqlQueryMutation) => data?.createMqlQuery?.query);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {createMqlQuery} = useCreateMqlQuery({metricName, formState: queryInput, dispatch, retries})

  useEffect(() => {
    if (!metricName || !mqlServerUrl || skip) {
      return;
    }
    dispatch({ type: "postQueryStart" });
    createMqlQuery({stateRetries: state.retries});
  }, [queryInput, metricName, mqlServerUrl, skip]);

  const _skip =
    skip ||
    !state.queryId ||
    state.cancelledQueries.includes(state.queryId); /* && !isRunning*/

  useFetchMqlTimeSeries<CreateMqlQueryMutation>({
    state,
    skip: _skip,
    dispatch,
    createQueryIdQuery: createMqlQuery,
    retries
  });

  return state;
}
