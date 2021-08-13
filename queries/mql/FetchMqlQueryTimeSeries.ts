import { gql } from "urql";

const query = gql`
  query FetchMqlTimeSeries($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      status
      metrics
      dimensions
      error
      result {
        seriesValue
        data {
          y
          ... on TimeSeriesDatum {
            xDate
          }
        }
      }
    }
  }
`;

export default query;
