import { gql } from "urql";

const mutation = gql`
  mutation InvalidateCacheForMetricMutation(
    $metricName: String!
  ) {
    invalidateCacheForMetric(
      metricName: $metricName
    ) {
      success
    }
  }
`

export default mutation;
