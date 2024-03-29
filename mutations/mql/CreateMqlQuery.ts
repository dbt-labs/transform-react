import { gql } from "urql";

const mutation = gql`
  mutation CreateMqlQuery(
    $addTimeSeries: Boolean
    $attemptNum: Int!
    $cacheMode: CacheMode
    $daysLimit: Int
    $endTime: String
    $groupBy: [String!]
    $includeDateBoundaries: Boolean
    $maxDimensionValues: Int
    $metrics: [String!]
    $modelKey: ModelKeyInput
    $latestXDays: Int
    $limit: LimitInput
    $order: [String!]
    $pctChange: PercentChange
    $startTime: String
    $timeGranularity: TimeGranularity
    $trimIncompletePeriods: Boolean
    $where: ConstraintInput
  ) {
    createMqlQuery(
      input: {
        addTimeSeries: $addTimeSeries
        attemptNum: $attemptNum
        cacheMode: $cacheMode
        daysLimit: $daysLimit
        endTime: $endTime
        groupBy: $groupBy
        includeDateBoundaries: $includeDateBoundaries
        latestXDays: $latestXDays
        limit: $limit
        maxDimensionValues: $maxDimensionValues
        metrics: $metrics
        modelKey: $modelKey
        order: $order
        pctChange: $pctChange
        resultFormat: TFD
        startTime: $startTime
        timeGranularity: $timeGranularity
        trimIncompletePeriods: $trimIncompletePeriods
        where: $where
      }
    ) {
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
