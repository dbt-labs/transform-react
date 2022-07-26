import { gql } from "urql";

const mutation = gql`
  mutation GetMqlQueryFiltersFromDbIdMutation(
    $dbId: Int!
  ) {
    createMqlQueryFromDbId(
      input: {
        dbId: $dbId
      }
    ) {
      id
      query {
        dbId
        metrics
        dimensions
        whereConstraint
        requestedGranularity
        groupBy
        latestXDays
        maxDimensionValues
        trimIncompletePeriods
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
  }
`;

export default mutation;
