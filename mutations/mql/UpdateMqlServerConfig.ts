import { gql } from "urql";

const mutation = gql`
  mutation UpdateMqlServerConfig(
    $mqlServerId: Int!
    $dwPassword: String
    $modeCreds: String
    $tfdApiKey: String!
  ) {
    updateMqlServerConfig(
      mqlServerId: $mqlServerId
      dwPassword: $dwPassword
      tfdApiKey: $tfdApiKey
      modeCreds: $modeCreds
    ) {
      config {
        mqlServerId
      }
    }
  }
`;

export default mutation;
