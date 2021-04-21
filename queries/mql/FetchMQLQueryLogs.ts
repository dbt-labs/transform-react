import { gql } from "urql";

const query = gql`
  query FetchMqlQueryLogs(
    $activeOnly: Boolean!
    $metricNames: [String]
    $status: MqlQueryStatus
    $minExecutionSeconds: Float
    $maxExecutionSeconds: Float
  ) {
    queries(
      activeOnly: $activeOnly
      metricNames: $metricNames
      status: $status
      minExecutionSeconds: $minExecutionSeconds
      maxExecutionSeconds: $maxExecutionSeconds
    ) {
      id
      status
      completedAt
      startedAt
      metrics
    }
  }
`;

export default query;
