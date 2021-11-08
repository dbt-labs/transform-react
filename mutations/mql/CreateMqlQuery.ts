import { gql } from "urql";

const mutation = gql`
  mutation CreateMqlQuery(
    $modelKey: ModelKeyInput
    $metrics: [String!]
    $groupBy: [String!]
    $where: ConstraintInput
    $addTimeSeries: Boolean
    $pctChange: PercentChange
    $timeGranularity: TimeGranularity
    $startTime: String
    $endTime: String
    $limit: LimitInput
    $order: [String!]
    $daysLimit: Int
  ) {
    createMqlQuery(
      input: {
        modelKey: $modelKey
        metrics: $metrics
        groupBy: $groupBy
        where: $where
        addTimeSeries: $addTimeSeries
        pctChange: $pctChange
        timeGranularity: $timeGranularity
        startTime: $startTime
        endTime: $endTime
        resultFormat: TFD
        limit: $limit
        order: $order
        daysLimit: $daysLimit
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
