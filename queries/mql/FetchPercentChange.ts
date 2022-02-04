import { gql } from "urql";

const query = gql`
  query FetchPercentChange($queryId: ID!) {
    mqlQuery(id: $queryId) {
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
`;

export default query;
