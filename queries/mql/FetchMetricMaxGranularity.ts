import { gql } from "urql";

const query = gql`
  query FetchMetricMaxGranularity($metricName: String!) {
    metricByName(name: $metricName) {
      maxGranularity
    }
  }
`;

export default query;
