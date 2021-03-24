import { gql } from "urql";

const query = gql`
  query MqlServerHealthCheck {
    healthReport {
      name
      status
      errorMessage
    }
  }
`;

export default query;
