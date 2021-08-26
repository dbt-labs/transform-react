import { gql } from "urql";

const mutation = gql`
  mutation CreateMqlQuery(
    $modelKey: ModelKeyInput
    $metrics: [String!]
    $groupBy: [String!]
    $where: ConstraintInput
    $addTimeSeries: Boolean
    $pctChange: PercentChange
    $granularity: Granularity = DAILY
    $startTime: String
    $endTime: String
    $limit: LimitInput
    $order: [String!]
  ) {
    createMqlQuery(
      input: {
        modelKey: $modelKey
        metrics: $metrics
        groupBy: $groupBy
        where: $where
        addTimeSeries: $addTimeSeries
        pctChange: $pctChange
        granularity: $granularity
        startTime: $startTime
        endTime: $endTime
        resultFormat: TFD
        limit: $limit
        order: $order
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
