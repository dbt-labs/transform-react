import { gql } from 'urql';

const query = gql`
  query FetchDimensions($metricNames: [String!]!, $includeAll: Boolean) {
    dimensionsForMetrics(metricNames: $metricNames, includeAll: $includeAll) {
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
