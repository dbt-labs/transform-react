import { gql } from "urql";

const query = gql`
  query FetchMqlQueryLog($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      status
      completedAt
      startedAt
      metrics
      logs
    }
  }
`;

export default query;
