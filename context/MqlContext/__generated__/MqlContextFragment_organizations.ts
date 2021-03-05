/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MqlContextFragment_organizations
// ====================================================

export interface MqlContextFragment_organizations_currentModel_model {
  __typename: "models";
  gitBranch: string;
  gitCommit: string;
  gitRepo: string;
}

export interface MqlContextFragment_organizations_currentModel {
  __typename: "model_current";
  /**
   * An object relationship
   */
  model: MqlContextFragment_organizations_currentModel_model | null;
}

export interface MqlContextFragment_organizations {
  __typename: "organizations";
  /**
   * A unique identifier for the `Organization`
   */
  id: number;
  /**
   * The URL of your MQL Server
   */
  mqlServerUrl: string | null;
  /**
   * An object relationship
   */
  currentModel: MqlContextFragment_organizations_currentModel | null;
}
