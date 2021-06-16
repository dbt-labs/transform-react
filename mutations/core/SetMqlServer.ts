import { gql } from "urql";

const mutation = gql`
  mutation SetMqlServer($newServerIdAsString: String!) {
    setUserPreference(
      prefKey: "mql_server_override_id"
      prefValue: $newServerIdAsString
    ) {
      id
      prefKey
      prefValue
      userId
      createdAt
    }
  }
`;

export default mutation;
