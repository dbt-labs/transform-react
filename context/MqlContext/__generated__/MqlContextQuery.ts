/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MqlContextQuery
// ====================================================

export interface MqlContextQuery_my_org {
  __typename: "organizations";
  /**
   * A unique identifier for the `Organization`
   */
  id: number;
}

export interface MqlContextQuery_models {
  __typename: "models";
  gitBranch: string;
  gitCommit: string;
  gitRepo: string;
  id: any;
}

export interface MqlContextQuery {
  /**
   * execute function "my_org" which returns "organizations"
   */
  my_org: MqlContextQuery_my_org[];
  /**
   * fetch data from the table: "models"
   */
  models: MqlContextQuery_models[];
}
