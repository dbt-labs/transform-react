
import { gql } from "urql";

const query = gql`
  query FetchMqlQueryFiltersFromDbIdQuery(
    $dbId: Int!
  ) {
    queryParamsFromDbId(
      dbId: $dbId
    ) {
      dbId
      metrics
      dimensions
      requestedGranularity
      groupBy
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
      latestXDays
      order
      maxDimensionValues
      timeComparison
      trimIncompletePeriods
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
