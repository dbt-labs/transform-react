import { gql } from "urql";

const query = gql`
  query MqlServerUrl {
    mqlServerUrl
  }
`;

export default query;
