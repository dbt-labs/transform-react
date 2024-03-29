import { gql } from "urql";

const mutation = gql`
  mutation CreateLatestMetricChange($metricName: String!) {
    queryLatestMetricChange(input: {metricName: $metricName}) {
      id
      query {
        status
        result {
          xDate
          value
          delta
          pctChange
        }
      }
    }
  }
`;

export default mutation;
