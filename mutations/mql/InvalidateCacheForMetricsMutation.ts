import { gql } from "urql";

const mutation = gql`
  mutation InvalidateCacheForMetricsMutation(
    $metricNames: [String]!
  ) {
    invalidateCacheForMetrics(
      metricNames: $metricNames
    ) {
      success
    }
  }
`

export default mutation;
