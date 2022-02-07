import { gql } from "urql";

const query = gql`
  query FetchLatestChange($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      status
      error
      result {
        xDate
        value
        delta
        pctChange
      }
    }
  }
`;

export default query;
