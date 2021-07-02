import { gql } from "urql";

const mutation = gql`
  mutation CreateMqlQuery(
    $modelKey: ModelKeyInput
    $metrics: [String!]
    $groupBy: [String!]
    $where: ConstraintInput
    $addTimeSeries: Boolean
    $pctChange: PercentChange
    $granularity: Granularity
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
        resultFormat: TFD
      }
    ) {
      id
    }
  }
`;

export default mutation;
