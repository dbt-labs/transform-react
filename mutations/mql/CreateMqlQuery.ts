import { gql } from "urql";
import { Granularity } from "./MqlMutationTypes";

const mutation = gql`
  mutation CreateMqlQuery(
    $modelKey: ModelKeyInput
    $metrics: [String!]
    $groupBy: [String!]
    $where: ConstraintInput
    $addTimeSeries: Boolean
    $pctChange: PercentChange
    $granularity: Granularity = ${Granularity.Daily}
    $startTime: String
    $endTime: String
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
      }
    ) {
      id
    }
  }
`;

export default mutation;
