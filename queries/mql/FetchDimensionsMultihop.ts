import { gql } from 'urql';

const query = gql`
  query FetchDimensionsMultihop(
    $metricNames: [String!]!
    $includeAll: Boolean
  ) {
    dimensionsForMetricsMultihop(
      metricNames: $metricNames
      includeAll: $includeAll
    ) {
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
