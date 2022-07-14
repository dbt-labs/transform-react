
import { gql } from "urql";

const query = gql`
  query FetchSavedQuery($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      whereConstraint
      requestedGranularity
      groupBy
      maxDimensionValues
      constraint {
        constraint {
          constraintType
          dimensionName
          values
          start
          stop
        }
        And {
          constraintType
          dimensionName
          values
          start
          stop
        }
      }
      timeComparison
      timeConstraint {
        dimensionName
        timeFormat
        start
        stop
        timeGranularity
      }
    }
  }
`;

export default query;
