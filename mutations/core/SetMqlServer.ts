import { gql } from "urql";

const mutation = gql`
  mutation SetMqlServer($newServerIdAsString: String!, $userId: ID!) {
    setUserPreference(
      prefKey: "mql_server_override_id"
      prefValue: $newServerIdAsString
      userId: $userId
    ) {
      user {
        prefs {
          id
          prefKey
          prefValue
          userId
          createdAt
        }
      }
    }
  }
`;

export default mutation;
