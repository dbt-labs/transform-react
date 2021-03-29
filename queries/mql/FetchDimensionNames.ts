import { gql } from "urql";

const query = gql`
  query FetchDimensionNames($metricNames: [String!]!) {
    dimensionNamesForMetrics(metricNames: $metricNames)
  }
`;

export default query;
