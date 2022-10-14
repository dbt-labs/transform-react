import { gql } from "urql";

const query = gql`
  query FetchDimensionsWithUncommon($metricNames: [String!]!) {
    dimensionsForMetricsWithUncommon(metricNames: $metricNames) {
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
