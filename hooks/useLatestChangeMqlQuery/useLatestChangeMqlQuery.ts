import { useEffect, useReducer, useContext } from "react";
import MqlContext from "../../context/MqlContext/MqlContext";
import {
  CreateLatestMetricChangeMutation,
  CreateLatestMetricChangeMutationVariables,
} from "../../mutations/mql/MqlMutationTypes";
import useCreateLatestChangeMqlQuery from './utils/useCreateLatestChangeMqlQuery';
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
type UseLatestChangeMqlQueryParams = {
  metricName: string;
  queryInput?: CreateLatestMetricChangeMutationVariables;
  skip?: boolean;
  retries?: number;
};

// This custom hook consists of two useHooks that should asynchronously handle all scenarios for this chained
// data fetching we are doing. It should do it in a high performance way and in a way that is resilient to race conditions if the
// user updates their request while a query is in flight
export default function useLatestChangeMqlQuery({
  queryInput,
  metricName,
  skip,
  retries = 5,
}: UseLatestChangeMqlQueryParams) {
  const { mqlServerUrl, } = useContext(MqlContext);

  const reducer = mqlQueryReducer<CreateLatestMetricChangeMutation>((data: CreateLatestMetricChangeMutation) => data?.queryLatestMetricChange?.query);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {queryLatestMetricChange} = useCreateLatestChangeMqlQuery({metricName, dispatch, retries})

  useEffect(() => {
    if (!metricName || !mqlServerUrl || skip) {
      return;
    }
    dispatch({ type: "postQueryStart" });
    queryLatestMetricChange({stateRetries: state.retries});
  }, [queryInput, metricName, mqlServerUrl, skip]);



  const _skip =
    skip ||
    !state.queryId ||
    state.cancelledQueries.includes(state.queryId); /* && !isRunning*/

    useFetchMqlTimeSeries<CreateLatestMetricChangeMutation>({
      state,
      skip: _skip,
      dispatch,
      createQueryIdQuery: queryLatestMetricChange,
      retries
    });

  return state;
}
