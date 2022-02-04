import { gql } from "urql";

const query = gql`
  query FetchLatestChange($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      status
      error
      result {
        value
        delta
        pctChange
      }
    }
  }
`;

export default query;
