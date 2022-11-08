import { gql } from 'urql';

const query = gql`
  query FetchDimensionValues(
    $metricName: String!
    $dimensionName: String!
    $ignoreInvalidDimensions: boolean
    $searchStr: String
    $pageNumber: Int
    $pageSize: Int
  ) {
    metricByName(name: $metricName) {
      dimensionValues(
        dimensionName: $dimensionName
        ignoreInvalidDimensions: $ignoreInvalidDimensions
        searchStr: $searchStr
        pageNumber: $pageNumber
        pageSize: $pageSize
      )
      totalDimensionValues(
        dimensionName: $dimensionName
        ignoreInvalidDimensions: $ignoreInvalidDimensions
      )
    }
  }
`;

export default query;
