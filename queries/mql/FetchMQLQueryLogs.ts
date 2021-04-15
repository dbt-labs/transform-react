import { gql } from "urql";

const query = gql`
  query FetchMqlQueryLogs($activeOnly: Boolean!) {
    queries(activeOnly: $activeOnly) {
      id
      status
      completedAt
      startedAt
      metrics
    }
  }
`;

export default query;
