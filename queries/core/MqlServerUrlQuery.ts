import { gql } from "urql";

const query = gql`
  query MqlServerUrlQuery {
    mqlServerUrl
  }
`;

export default query;
