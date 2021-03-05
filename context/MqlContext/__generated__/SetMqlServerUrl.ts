/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetMqlServerUrl
// ====================================================

export interface SetMqlServerUrl_createUserPreference {
  __typename: "user_prefs";
  id: number;
  /**
   * A key used to specify which User Preference is being set
   */
  prefKey: string;
  /**
   * The Value to be set (the type varies based on the Key!)
   */
  prefValue: string;
  userId: number;
  /**
   * Timestamp indicating when the User Preference was created
   */
  createdAt: any | null;
}

export interface SetMqlServerUrl {
  /**
   * insert a single row into the table: "user_prefs"
   */
  createUserPreference: SetMqlServerUrl_createUserPreference | null;
}

export interface SetMqlServerUrlVariables {
  newServerIdAsString: string;
}
