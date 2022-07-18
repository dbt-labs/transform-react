import { gql } from "urql";

const mutation = gql`
  mutation CreateMqlQueryFromDbId(
    $attemptNum: Int!
    $dbId: Int!
  ) {
    createMqlQueryFromDbId(
      input: {
        attemptNum: $attemptNum
        dbId: $dbId
      }
    ) {
      id
      query {
        id
        dbId
        availableChartTypes
        createdAt
        status
        metrics
        dimensions
        error
        chartValueMax
        chartValueMin

        whereConstraint
        requestedGranularity
        groupBy
        latestXDays
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
        numPostprocessedResults
        dbId
        result {
          seriesValue
          data {
            y
            ... on TimeSeriesDatum {
              xDate
            }
          }
        }
      }
    }
  }
`;

export default mutation;
