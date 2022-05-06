import { gql } from "urql";

const query = gql`
  query FetchMetricCanLimitDimensions($metricName: String!) {
    metricByName(name: $metricName) {
      canLimitDimensionValues
    }
  }
`;

export default query;
