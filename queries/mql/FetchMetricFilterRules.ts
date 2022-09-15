import { gql } from "urql";

const query = gql`
  query FetchMetricFilterRules($metricName: String!) {
    metricByName(name: $metricName) {
      canLimitDimensionValues
      maxGranularity
    }
  }
`;

export default query;
