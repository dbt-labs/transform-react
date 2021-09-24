import { gql } from "urql";

const query = gql`
  query FetchDimensionNamesMultihop($metricNames: [String!]!) {
    dimensionNamesForMetricsMultihop(metricNames: $metricNames)
  }
`;

export default query;
