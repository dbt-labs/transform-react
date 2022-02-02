import { gql } from "urql";

const query = gql`
  query FetchDimensionValues(
    $metricName: String!
    $dimensionName: String!
    $searchStr: String
    $pageNumber: Int
    $pageSize: Int
  ) {
    metricByName(name: $metricName) {
      dimensionValues(
        dimensionName: $dimensionName
        searchStr: $searchStr
        pageNumber: $pageNumber
        pageSize: $pageSize
      )
      totalDimensionValues(
        dimensionName: $dimensionName
      )
    }
  }
`;

export default query;
