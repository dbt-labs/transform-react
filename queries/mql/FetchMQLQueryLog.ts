import { gql } from "urql";

const query = gql`
  query FetchMqlQueryLog($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      status
      metrics
      dimensions
      logs
    }
  }
`;

export default query;
