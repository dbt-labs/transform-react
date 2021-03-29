import { gql } from "urql";

const query = gql`
  query FetchDimensionValues($metricName: String!, $dimensionName: String!) {
    metricByName(name: $metricName) {
      dimensionValues(dimensionName: $dimensionName)
    }
  }
`;

export default query;
