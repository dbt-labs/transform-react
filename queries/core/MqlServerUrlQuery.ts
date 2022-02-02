import { gql } from "urql";

const query = gql`
  query MqlServerUrl {
    myUser {
      mqlServerUrl
    }
  }
`;

export default query;
