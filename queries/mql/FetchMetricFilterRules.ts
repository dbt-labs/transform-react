import { gql } from 'urql';

const query = gql`
  query FetchMetricFilterRules($metricName: String!) {
    metricByName(name: $metricName) {
      canLimitDimensionValues
      maxGranularity
      queryingRequiresTimeDim
    }
  }
`;

export default query;
