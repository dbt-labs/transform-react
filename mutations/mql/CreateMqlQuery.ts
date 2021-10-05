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
    $granularity: Granularity # todo: remove granularity once Opendoor MQL server is updated beyond 642d0663e3a243dcabcd4dfe738a3d29a9b98394
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
        granularity: $granularity
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
