import { gql } from "urql";

const query = gql`
  query FetchDimensions($metricNames: [String!]!) {
    dimensionsForMetrics(metricNames: $metricNames) {
        localDimensions {
            name
            identifierName
            type
            isPrimaryTime
            values
            cardinality
        }
        nonLocalDimensions {
            name
            identifierName
            type
            isPrimaryTime
            values
            cardinality
        }
    }
  }
`;

export default query;
