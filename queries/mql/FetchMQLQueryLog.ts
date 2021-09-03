import { gql } from "urql";

const query = gql`
  query FetchMqlQueryLog($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      status
      metrics
      dimensions
      logs
      error
      errorTraceback
      sql
    }
    sourceQuery(id: $queryId)
  }
`;

export default query;
