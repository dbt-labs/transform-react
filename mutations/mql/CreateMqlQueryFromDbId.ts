import { gql } from "urql";

const mutation = gql`
  mutation CreateMqlQueryFromDbId($attemptNum: Int!, $dbId: Int!) {
    createMqlQueryFromDbId(input: { attemptNum: $attemptNum, dbId: $dbId }) {
      id
      query {
        id
        dbId
        availableChartTypes
        completedAt
        createdAt
        status
        oldestSourceReadTime
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
        trimIncompletePeriods
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
        resultTabular {
          data
          valueFormattedColumns {
            column
            valueFormat
          }
        }
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
