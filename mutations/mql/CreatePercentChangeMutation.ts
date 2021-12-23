import { gql } from "urql";

const mutation = gql`
  mutation CreatePercentChange(
    $metricName: String!
    $startTime: String!
    $endTime: String!
  ) {
    pctChangeOverRange(
      input: {
        metricName: $metricName
        startTime: $startTime
        endTime: $endTime
      }
    ) {
      id
      query {
        id
        status
        error
        chartValueMax
        chartValueMin
        result {
          value
          delta
          pctChange
        }
      }
    }
  }
`;

export default mutation;
