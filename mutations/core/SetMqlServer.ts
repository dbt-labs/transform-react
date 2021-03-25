import { gql } from "urql";

const mutation = gql`
  mutation SetMqlServer($newServerIdAsString: String!) {
    createUserPreference(
      object: {
        prefKey: "mql_server_override_id"
        prefValue: $newServerIdAsString
      }
      on_conflict: {
        constraint: user_prefs_user_id_pref_key_key
        update_columns: prefValue
      }
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
