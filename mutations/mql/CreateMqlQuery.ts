import { gql } from "urql";

const mutation = gql`
  mutation CreateMqlQuery(
    $addTimeSeries: Boolean
    $daysLimit: Int
    $endTime: String
    $groupBy: [String!]
    $maxDimensionValues: Int
    $metrics: [String!]
    $modelKey: ModelKeyInput
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
        daysLimit: $daysLimit
        endTime: $endTime
        groupBy: $groupBy
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
        status
        metrics
        dimensions
        error
        chartValueMax
        chartValueMin
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
