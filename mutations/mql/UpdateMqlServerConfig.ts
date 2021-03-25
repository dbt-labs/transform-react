import { gql } from "urql";

const mutation = gql`
  mutation UpdateMqlServerConfig(
    $mqlServerId: Int!
    $dwPassword: String!
    $tfdApiKey: String!
  ) {
    updateMqlServerConfig(
      mqlServerId: $mqlServerId
      dwPassword: $dwPassword
      tfdApiKey: $tfdApiKey
    ) {
      config {
        mqlServerId
      }
    }
  }
`;

export default mutation;
