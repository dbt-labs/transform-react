export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  bigint: any;
  date: any;
  entity: any;
  json: any;
  jsonb: any;
  questionorreply: any;
  timestamptz: any;
  uuid: any;
};

export type AddUserRoleInput = {
  role: Role;
  userId: Scalars['Int'];
};

export type AddUserRoleOutput = {
  __typename?: 'AddUserRoleOutput';
  userId: Scalars['Int'];
};

/** A wrapper for the response we get from Auth0's user profile API */
export type Auth0Profile = {
  __typename?: 'Auth0Profile';
  blocked?: Maybe<Scalars['Boolean']>;
  lastIp?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  loginsCount?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type CreateApiKeyForUserInput = {
  userId: Scalars['Int'];
};

export type CreateApiKeyForUserOutput = {
  __typename?: 'CreateApiKeyForUserOutput';
  created_key_full_string: Scalars['String'];
  created_key_prefix: Scalars['String'];
  revoked_key_prefixes?: Maybe<Array<Scalars['String']>>;
};

export type CreateApiKeyOutput = {
  __typename?: 'CreateApiKeyOutput';
  createdApiKey?: Maybe<Api_Keys>;
  created_key_full_string: Scalars['String'];
  created_key_prefix: Scalars['String'];
  revoked_key_prefixes?: Maybe<Array<Scalars['String']>>;
};

export type CreateUserForOrgInput = {
  email: Scalars['String'];
  isOrgOwner?: Maybe<Scalars['Boolean']>;
  orgId: Scalars['Int'];
  userName: Scalars['String'];
};

export type CreateUserForOrgOutput = {
  __typename?: 'CreateUserForOrgOutput';
  userId: Scalars['Int'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  isOrgOwner?: Maybe<Scalars['Boolean']>;
  userName: Scalars['String'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  user?: Maybe<Users>;
  userId: Scalars['Int'];
};


export type DeactivateUserInput = {
  userId: Scalars['Int'];
};

export type DeactivateUserOutput = {
  __typename?: 'DeactivateUserOutput';
  userId: Scalars['Int'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LogMqlLogs = {
  __typename?: 'LogMQLLogs';
  ok?: Maybe<Scalars['Boolean']>;
};

/**
 * This is the externally-facing Graphene object representing the available MQL server download.
 *
 * TODO: There's likely a simple way to merge these two objects together
 */
export type MqlServerVersion = {
  __typename?: 'MQLServerVersion';
  downloadUrl?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  versionHash?: Maybe<Scalars['String']>;
};

/** Base mutation object exposed by GraphQL. */
export type Mutation = {
  __typename?: 'Mutation';
  logMqlLog?: Maybe<LogMqlLogs>;
};


/** Base mutation object exposed by GraphQL. */
export type MutationLogMqlLogArgs = {
  level?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type Query = {
  __typename?: 'Query';
  auth0Profile?: Maybe<Auth0Profile>;
  latestMqlServer?: Maybe<MqlServerVersion>;
  mqlServerUrl?: Maybe<Scalars['String']>;
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryAuth0ProfileArgs = {
  auth0Id: Scalars['String'];
};

export type ReactivateUserInput = {
  userId: Scalars['Int'];
};

export type ReactivateUserOutput = {
  __typename?: 'ReactivateUserOutput';
  userId: Scalars['Int'];
};

export type RemoveUserRoleInput = {
  role: Role;
  userId: Scalars['Int'];
};

export type RemoveUserRoleOutput = {
  __typename?: 'RemoveUserRoleOutput';
  userId: Scalars['Int'];
};

export enum Role {
  Admin = 'admin',
  OrgAdmin = 'org_admin',
  ServiceUser = 'service_user',
  User = 'user'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type UpdateMyEmailInput = {
  email: Scalars['String'];
};

export type UpdateMyEmailOutput = {
  __typename?: 'UpdateMyEmailOutput';
  userId: Scalars['Int'];
};

export type UpdateUserEmailForOrgInput = {
  email: Scalars['String'];
  orgId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UpdateUserEmailForOrgOutput = {
  __typename?: 'UpdateUserEmailForOrgOutput';
  userId: Scalars['Int'];
};

/**
 * Annotations are a great mechanism for memorializing outliers in your data.
 *
 *
 * columns and relationships of "annotations"
 */
export type Annotations = {
  __typename?: 'annotations';
  /** An object relationship */
  author: Users;
  authorId: Scalars['Int'];
  /** Timestamp indicating when the `Annotation` was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** Last date when the `Annotation`  applies */
  dateEndedAt?: Maybe<Scalars['date']>;
  /** Date when the `Annotation` first applies */
  dateStartedAt?: Maybe<Scalars['date']>;
  date_end?: Maybe<Scalars['String']>;
  date_start?: Maybe<Scalars['String']>;
  /** Soft delete mechanism for an Annotation. Rows with non-null values are omitted from list results. */
  deletedAt?: Maybe<Scalars['timestamptz']>;
  /** A qualitative assessment of the expected impact helps contextualize the annotation for future consumers. */
  expectedImpact: Scalars['String'];
  /** ID field to identify an Annotation */
  id: Scalars['Int'];
  /** An array relationship */
  metricAnnotations: Array<Metric_Annotations>;
  /** An aggregated array relationship */
  metricAnnotations_aggregate: Metric_Annotations_Aggregate;
  notified_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  priority?: Maybe<Priorities_Enum>;
  /** The full description of an annotation with the complete context needed to understand what took place. */
  text: Scalars['String'];
  timestamp_created?: Maybe<Scalars['Int']>;
  /** A short title to identify the annotation in a list view or tooltip */
  title: Scalars['String'];
  /** Timestamp indicating when the `Annotation` was last updated. */
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/**
 * Annotations are a great mechanism for memorializing outliers in your data.
 *
 *
 * columns and relationships of "annotations"
 */
export type AnnotationsMetricAnnotationsArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/**
 * Annotations are a great mechanism for memorializing outliers in your data.
 *
 *
 * columns and relationships of "annotations"
 */
export type AnnotationsMetricAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};

/** aggregated selection of "annotations" */
export type Annotations_Aggregate = {
  __typename?: 'annotations_aggregate';
  aggregate?: Maybe<Annotations_Aggregate_Fields>;
  nodes: Array<Annotations>;
};

/** aggregate fields of "annotations" */
export type Annotations_Aggregate_Fields = {
  __typename?: 'annotations_aggregate_fields';
  avg?: Maybe<Annotations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Annotations_Max_Fields>;
  min?: Maybe<Annotations_Min_Fields>;
  stddev?: Maybe<Annotations_Stddev_Fields>;
  stddev_pop?: Maybe<Annotations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Annotations_Stddev_Samp_Fields>;
  sum?: Maybe<Annotations_Sum_Fields>;
  var_pop?: Maybe<Annotations_Var_Pop_Fields>;
  var_samp?: Maybe<Annotations_Var_Samp_Fields>;
  variance?: Maybe<Annotations_Variance_Fields>;
};


/** aggregate fields of "annotations" */
export type Annotations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Annotations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "annotations" */
export type Annotations_Aggregate_Order_By = {
  avg?: Maybe<Annotations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Annotations_Max_Order_By>;
  min?: Maybe<Annotations_Min_Order_By>;
  stddev?: Maybe<Annotations_Stddev_Order_By>;
  stddev_pop?: Maybe<Annotations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Annotations_Stddev_Samp_Order_By>;
  sum?: Maybe<Annotations_Sum_Order_By>;
  var_pop?: Maybe<Annotations_Var_Pop_Order_By>;
  var_samp?: Maybe<Annotations_Var_Samp_Order_By>;
  variance?: Maybe<Annotations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "annotations" */
export type Annotations_Arr_Rel_Insert_Input = {
  data: Array<Annotations_Insert_Input>;
  on_conflict?: Maybe<Annotations_On_Conflict>;
};

/** aggregate avg on columns */
export type Annotations_Avg_Fields = {
  __typename?: 'annotations_avg_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  timestamp_created?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "annotations" */
export type Annotations_Avg_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "annotations". All fields are combined with a logical 'AND'. */
export type Annotations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Annotations_Bool_Exp>>>;
  _not?: Maybe<Annotations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Annotations_Bool_Exp>>>;
  author?: Maybe<Users_Bool_Exp>;
  authorId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dateEndedAt?: Maybe<Date_Comparison_Exp>;
  dateStartedAt?: Maybe<Date_Comparison_Exp>;
  date_end?: Maybe<String_Comparison_Exp>;
  date_start?: Maybe<String_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  expectedImpact?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metricAnnotations?: Maybe<Metric_Annotations_Bool_Exp>;
  notified_at?: Maybe<Timestamptz_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  priority?: Maybe<Priorities_Enum_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  timestamp_created?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "annotations" */
export enum Annotations_Constraint {
  /** unique or primary key constraint */
  AnnotationsPkey = 'annotations_pkey'
}

/** input type for incrementing integer column in table "annotations" */
export type Annotations_Inc_Input = {
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  timestamp_created?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "annotations" */
export type Annotations_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEndedAt?: Maybe<Scalars['date']>;
  dateStartedAt?: Maybe<Scalars['date']>;
  date_end?: Maybe<Scalars['String']>;
  date_start?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  expectedImpact?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricAnnotations?: Maybe<Metric_Annotations_Arr_Rel_Insert_Input>;
  notified_at?: Maybe<Scalars['timestamptz']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  priority?: Maybe<Priorities_Enum>;
  text?: Maybe<Scalars['String']>;
  timestamp_created?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Annotations_Max_Fields = {
  __typename?: 'annotations_max_fields';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEndedAt?: Maybe<Scalars['date']>;
  dateStartedAt?: Maybe<Scalars['date']>;
  date_end?: Maybe<Scalars['String']>;
  date_start?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  expectedImpact?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  notified_at?: Maybe<Scalars['timestamptz']>;
  organizationId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp_created?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "annotations" */
export type Annotations_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dateEndedAt?: Maybe<Order_By>;
  dateStartedAt?: Maybe<Order_By>;
  date_end?: Maybe<Order_By>;
  date_start?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  expectedImpact?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notified_at?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Annotations_Min_Fields = {
  __typename?: 'annotations_min_fields';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEndedAt?: Maybe<Scalars['date']>;
  dateStartedAt?: Maybe<Scalars['date']>;
  date_end?: Maybe<Scalars['String']>;
  date_start?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  expectedImpact?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  notified_at?: Maybe<Scalars['timestamptz']>;
  organizationId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  timestamp_created?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "annotations" */
export type Annotations_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dateEndedAt?: Maybe<Order_By>;
  dateStartedAt?: Maybe<Order_By>;
  date_end?: Maybe<Order_By>;
  date_start?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  expectedImpact?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notified_at?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "annotations" */
export type Annotations_Mutation_Response = {
  __typename?: 'annotations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Annotations>;
};

/** input type for inserting object relation for remote table "annotations" */
export type Annotations_Obj_Rel_Insert_Input = {
  data: Annotations_Insert_Input;
  on_conflict?: Maybe<Annotations_On_Conflict>;
};

/** on conflict condition type for table "annotations" */
export type Annotations_On_Conflict = {
  constraint: Annotations_Constraint;
  update_columns: Array<Annotations_Update_Column>;
  where?: Maybe<Annotations_Bool_Exp>;
};

/** ordering options when selecting data from "annotations" */
export type Annotations_Order_By = {
  author?: Maybe<Users_Order_By>;
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dateEndedAt?: Maybe<Order_By>;
  dateStartedAt?: Maybe<Order_By>;
  date_end?: Maybe<Order_By>;
  date_start?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  expectedImpact?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricAnnotations_aggregate?: Maybe<Metric_Annotations_Aggregate_Order_By>;
  notified_at?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "annotations" */
export type Annotations_Pk_Columns_Input = {
  /** ID field to identify an Annotation */
  id: Scalars['Int'];
};

/** select columns of table "annotations" */
export enum Annotations_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEndedAt = 'dateEndedAt',
  /** column name */
  DateStartedAt = 'dateStartedAt',
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  ExpectedImpact = 'expectedImpact',
  /** column name */
  Id = 'id',
  /** column name */
  NotifiedAt = 'notified_at',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Priority = 'priority',
  /** column name */
  Text = 'text',
  /** column name */
  TimestampCreated = 'timestamp_created',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "annotations" */
export type Annotations_Set_Input = {
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateEndedAt?: Maybe<Scalars['date']>;
  dateStartedAt?: Maybe<Scalars['date']>;
  date_end?: Maybe<Scalars['String']>;
  date_start?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  expectedImpact?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  notified_at?: Maybe<Scalars['timestamptz']>;
  organizationId?: Maybe<Scalars['Int']>;
  priority?: Maybe<Priorities_Enum>;
  text?: Maybe<Scalars['String']>;
  timestamp_created?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Annotations_Stddev_Fields = {
  __typename?: 'annotations_stddev_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  timestamp_created?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "annotations" */
export type Annotations_Stddev_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Annotations_Stddev_Pop_Fields = {
  __typename?: 'annotations_stddev_pop_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  timestamp_created?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "annotations" */
export type Annotations_Stddev_Pop_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Annotations_Stddev_Samp_Fields = {
  __typename?: 'annotations_stddev_samp_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  timestamp_created?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "annotations" */
export type Annotations_Stddev_Samp_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Annotations_Sum_Fields = {
  __typename?: 'annotations_sum_fields';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  timestamp_created?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "annotations" */
export type Annotations_Sum_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
};

/** update columns of table "annotations" */
export enum Annotations_Update_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateEndedAt = 'dateEndedAt',
  /** column name */
  DateStartedAt = 'dateStartedAt',
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  ExpectedImpact = 'expectedImpact',
  /** column name */
  Id = 'id',
  /** column name */
  NotifiedAt = 'notified_at',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Priority = 'priority',
  /** column name */
  Text = 'text',
  /** column name */
  TimestampCreated = 'timestamp_created',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Annotations_Var_Pop_Fields = {
  __typename?: 'annotations_var_pop_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  timestamp_created?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "annotations" */
export type Annotations_Var_Pop_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Annotations_Var_Samp_Fields = {
  __typename?: 'annotations_var_samp_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  timestamp_created?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "annotations" */
export type Annotations_Var_Samp_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Annotations_Variance_Fields = {
  __typename?: 'annotations_variance_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  timestamp_created?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "annotations" */
export type Annotations_Variance_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  timestamp_created?: Maybe<Order_By>;
};

/**
 * API Keys are an alternative to JWTs. They do not expire, but they can be revoked. They carry the same roles and User/Org mappings as JWTs.
 *
 *
 * columns and relationships of "api_keys"
 */
export type Api_Keys = {
  __typename?: 'api_keys';
  /** A timestamp for when the `APIKey` was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_revoked?: Maybe<Scalars['Int']>;
  /** A timestamp for the last time the `ApiKey` was used. */
  lastUsedAt?: Maybe<Scalars['timestamptz']>;
  last_used_ts?: Maybe<Scalars['Int']>;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** The first few characters of the `ApiKey`. Useful for identifying the key without revealing it entirely. */
  prefix: Scalars['String'];
  /** If the `ApiKey` has been revoked (soft deleted), this is the timestamp for when it was revoked. */
  revokedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  revoker?: Maybe<Users>;
  revokerId?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  secretHash: Scalars['String'];
  type: Scalars['String'];
  /** A timestamp for the last time the `ApiKey` was used. */
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
};

/** aggregated selection of "api_keys" */
export type Api_Keys_Aggregate = {
  __typename?: 'api_keys_aggregate';
  aggregate?: Maybe<Api_Keys_Aggregate_Fields>;
  nodes: Array<Api_Keys>;
};

/** aggregate fields of "api_keys" */
export type Api_Keys_Aggregate_Fields = {
  __typename?: 'api_keys_aggregate_fields';
  avg?: Maybe<Api_Keys_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Api_Keys_Max_Fields>;
  min?: Maybe<Api_Keys_Min_Fields>;
  stddev?: Maybe<Api_Keys_Stddev_Fields>;
  stddev_pop?: Maybe<Api_Keys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Api_Keys_Stddev_Samp_Fields>;
  sum?: Maybe<Api_Keys_Sum_Fields>;
  var_pop?: Maybe<Api_Keys_Var_Pop_Fields>;
  var_samp?: Maybe<Api_Keys_Var_Samp_Fields>;
  variance?: Maybe<Api_Keys_Variance_Fields>;
};


/** aggregate fields of "api_keys" */
export type Api_Keys_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Api_Keys_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "api_keys" */
export type Api_Keys_Aggregate_Order_By = {
  avg?: Maybe<Api_Keys_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Api_Keys_Max_Order_By>;
  min?: Maybe<Api_Keys_Min_Order_By>;
  stddev?: Maybe<Api_Keys_Stddev_Order_By>;
  stddev_pop?: Maybe<Api_Keys_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Api_Keys_Stddev_Samp_Order_By>;
  sum?: Maybe<Api_Keys_Sum_Order_By>;
  var_pop?: Maybe<Api_Keys_Var_Pop_Order_By>;
  var_samp?: Maybe<Api_Keys_Var_Samp_Order_By>;
  variance?: Maybe<Api_Keys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "api_keys" */
export type Api_Keys_Arr_Rel_Insert_Input = {
  data: Array<Api_Keys_Insert_Input>;
  on_conflict?: Maybe<Api_Keys_On_Conflict>;
};

/** aggregate avg on columns */
export type Api_Keys_Avg_Fields = {
  __typename?: 'api_keys_avg_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_revoked?: Maybe<Scalars['Float']>;
  last_used_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  revokerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "api_keys" */
export type Api_Keys_Avg_Order_By = {
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "api_keys". All fields are combined with a logical 'AND'. */
export type Api_Keys_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Api_Keys_Bool_Exp>>>;
  _not?: Maybe<Api_Keys_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Api_Keys_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  date_create?: Maybe<Int_Comparison_Exp>;
  date_revoked?: Maybe<Int_Comparison_Exp>;
  lastUsedAt?: Maybe<Timestamptz_Comparison_Exp>;
  last_used_ts?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  prefix?: Maybe<String_Comparison_Exp>;
  revokedAt?: Maybe<Timestamptz_Comparison_Exp>;
  revoker?: Maybe<Users_Bool_Exp>;
  revokerId?: Maybe<Int_Comparison_Exp>;
  scope?: Maybe<String_Comparison_Exp>;
  secretHash?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "api_keys" */
export enum Api_Keys_Constraint {
  /** unique or primary key constraint */
  ApiKeysPkey = 'api_keys_pkey'
}

/** input type for incrementing integer column in table "api_keys" */
export type Api_Keys_Inc_Input = {
  date_create?: Maybe<Scalars['Int']>;
  date_revoked?: Maybe<Scalars['Int']>;
  last_used_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  revokerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "api_keys" */
export type Api_Keys_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_revoked?: Maybe<Scalars['Int']>;
  lastUsedAt?: Maybe<Scalars['timestamptz']>;
  last_used_ts?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  prefix?: Maybe<Scalars['String']>;
  revokedAt?: Maybe<Scalars['timestamptz']>;
  revoker?: Maybe<Users_Obj_Rel_Insert_Input>;
  revokerId?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  secretHash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Api_Keys_Max_Fields = {
  __typename?: 'api_keys_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_revoked?: Maybe<Scalars['Int']>;
  lastUsedAt?: Maybe<Scalars['timestamptz']>;
  last_used_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  prefix?: Maybe<Scalars['String']>;
  revokedAt?: Maybe<Scalars['timestamptz']>;
  revokerId?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  secretHash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "api_keys" */
export type Api_Keys_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  lastUsedAt?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  prefix?: Maybe<Order_By>;
  revokedAt?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  scope?: Maybe<Order_By>;
  secretHash?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Api_Keys_Min_Fields = {
  __typename?: 'api_keys_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_revoked?: Maybe<Scalars['Int']>;
  lastUsedAt?: Maybe<Scalars['timestamptz']>;
  last_used_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  prefix?: Maybe<Scalars['String']>;
  revokedAt?: Maybe<Scalars['timestamptz']>;
  revokerId?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  secretHash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "api_keys" */
export type Api_Keys_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  lastUsedAt?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  prefix?: Maybe<Order_By>;
  revokedAt?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  scope?: Maybe<Order_By>;
  secretHash?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "api_keys" */
export type Api_Keys_Mutation_Response = {
  __typename?: 'api_keys_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Api_Keys>;
};

/** input type for inserting object relation for remote table "api_keys" */
export type Api_Keys_Obj_Rel_Insert_Input = {
  data: Api_Keys_Insert_Input;
  on_conflict?: Maybe<Api_Keys_On_Conflict>;
};

/** on conflict condition type for table "api_keys" */
export type Api_Keys_On_Conflict = {
  constraint: Api_Keys_Constraint;
  update_columns: Array<Api_Keys_Update_Column>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};

/** ordering options when selecting data from "api_keys" */
export type Api_Keys_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  lastUsedAt?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  prefix?: Maybe<Order_By>;
  revokedAt?: Maybe<Order_By>;
  revoker?: Maybe<Users_Order_By>;
  revokerId?: Maybe<Order_By>;
  scope?: Maybe<Order_By>;
  secretHash?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "api_keys" */
export type Api_Keys_Pk_Columns_Input = {
  /** The first few characters of the `ApiKey`. Useful for identifying the key without revealing it entirely. */
  prefix: Scalars['String'];
};

/** select columns of table "api_keys" */
export enum Api_Keys_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  DateRevoked = 'date_revoked',
  /** column name */
  LastUsedAt = 'lastUsedAt',
  /** column name */
  LastUsedTs = 'last_used_ts',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Prefix = 'prefix',
  /** column name */
  RevokedAt = 'revokedAt',
  /** column name */
  RevokerId = 'revokerId',
  /** column name */
  Scope = 'scope',
  /** column name */
  SecretHash = 'secretHash',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "api_keys" */
export type Api_Keys_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_revoked?: Maybe<Scalars['Int']>;
  lastUsedAt?: Maybe<Scalars['timestamptz']>;
  last_used_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  prefix?: Maybe<Scalars['String']>;
  revokedAt?: Maybe<Scalars['timestamptz']>;
  revokerId?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  secretHash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Api_Keys_Stddev_Fields = {
  __typename?: 'api_keys_stddev_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_revoked?: Maybe<Scalars['Float']>;
  last_used_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  revokerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "api_keys" */
export type Api_Keys_Stddev_Order_By = {
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Api_Keys_Stddev_Pop_Fields = {
  __typename?: 'api_keys_stddev_pop_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_revoked?: Maybe<Scalars['Float']>;
  last_used_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  revokerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "api_keys" */
export type Api_Keys_Stddev_Pop_Order_By = {
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Api_Keys_Stddev_Samp_Fields = {
  __typename?: 'api_keys_stddev_samp_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_revoked?: Maybe<Scalars['Float']>;
  last_used_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  revokerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "api_keys" */
export type Api_Keys_Stddev_Samp_Order_By = {
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Api_Keys_Sum_Fields = {
  __typename?: 'api_keys_sum_fields';
  date_create?: Maybe<Scalars['Int']>;
  date_revoked?: Maybe<Scalars['Int']>;
  last_used_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  revokerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "api_keys" */
export type Api_Keys_Sum_Order_By = {
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "api_keys" */
export enum Api_Keys_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  DateRevoked = 'date_revoked',
  /** column name */
  LastUsedAt = 'lastUsedAt',
  /** column name */
  LastUsedTs = 'last_used_ts',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Prefix = 'prefix',
  /** column name */
  RevokedAt = 'revokedAt',
  /** column name */
  RevokerId = 'revokerId',
  /** column name */
  Scope = 'scope',
  /** column name */
  SecretHash = 'secretHash',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Api_Keys_Var_Pop_Fields = {
  __typename?: 'api_keys_var_pop_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_revoked?: Maybe<Scalars['Float']>;
  last_used_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  revokerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "api_keys" */
export type Api_Keys_Var_Pop_Order_By = {
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Api_Keys_Var_Samp_Fields = {
  __typename?: 'api_keys_var_samp_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_revoked?: Maybe<Scalars['Float']>;
  last_used_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  revokerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "api_keys" */
export type Api_Keys_Var_Samp_Order_By = {
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Api_Keys_Variance_Fields = {
  __typename?: 'api_keys_variance_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_revoked?: Maybe<Scalars['Float']>;
  last_used_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  revokerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "api_keys" */
export type Api_Keys_Variance_Order_By = {
  date_create?: Maybe<Order_By>;
  date_revoked?: Maybe<Order_By>;
  last_used_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  revokerId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "branch_metadatas" */
export type Branch_Metadatas = {
  __typename?: 'branch_metadatas';
  commit: Scalars['String'];
  id: Scalars['Int'];
  model_key: Scalars['String'];
  timestamp: Scalars['Int'];
};

/** aggregated selection of "branch_metadatas" */
export type Branch_Metadatas_Aggregate = {
  __typename?: 'branch_metadatas_aggregate';
  aggregate?: Maybe<Branch_Metadatas_Aggregate_Fields>;
  nodes: Array<Branch_Metadatas>;
};

/** aggregate fields of "branch_metadatas" */
export type Branch_Metadatas_Aggregate_Fields = {
  __typename?: 'branch_metadatas_aggregate_fields';
  avg?: Maybe<Branch_Metadatas_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Branch_Metadatas_Max_Fields>;
  min?: Maybe<Branch_Metadatas_Min_Fields>;
  stddev?: Maybe<Branch_Metadatas_Stddev_Fields>;
  stddev_pop?: Maybe<Branch_Metadatas_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Branch_Metadatas_Stddev_Samp_Fields>;
  sum?: Maybe<Branch_Metadatas_Sum_Fields>;
  var_pop?: Maybe<Branch_Metadatas_Var_Pop_Fields>;
  var_samp?: Maybe<Branch_Metadatas_Var_Samp_Fields>;
  variance?: Maybe<Branch_Metadatas_Variance_Fields>;
};


/** aggregate fields of "branch_metadatas" */
export type Branch_Metadatas_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Branch_Metadatas_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "branch_metadatas" */
export type Branch_Metadatas_Aggregate_Order_By = {
  avg?: Maybe<Branch_Metadatas_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Branch_Metadatas_Max_Order_By>;
  min?: Maybe<Branch_Metadatas_Min_Order_By>;
  stddev?: Maybe<Branch_Metadatas_Stddev_Order_By>;
  stddev_pop?: Maybe<Branch_Metadatas_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Branch_Metadatas_Stddev_Samp_Order_By>;
  sum?: Maybe<Branch_Metadatas_Sum_Order_By>;
  var_pop?: Maybe<Branch_Metadatas_Var_Pop_Order_By>;
  var_samp?: Maybe<Branch_Metadatas_Var_Samp_Order_By>;
  variance?: Maybe<Branch_Metadatas_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "branch_metadatas" */
export type Branch_Metadatas_Arr_Rel_Insert_Input = {
  data: Array<Branch_Metadatas_Insert_Input>;
  on_conflict?: Maybe<Branch_Metadatas_On_Conflict>;
};

/** aggregate avg on columns */
export type Branch_Metadatas_Avg_Fields = {
  __typename?: 'branch_metadatas_avg_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Avg_Order_By = {
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "branch_metadatas". All fields are combined with a logical 'AND'. */
export type Branch_Metadatas_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Branch_Metadatas_Bool_Exp>>>;
  _not?: Maybe<Branch_Metadatas_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Branch_Metadatas_Bool_Exp>>>;
  commit?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  model_key?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "branch_metadatas" */
export enum Branch_Metadatas_Constraint {
  /** unique or primary key constraint */
  BranchMetadatasPkey = 'branch_metadatas_pkey',
  /** unique or primary key constraint */
  IxBranchMetadatasModelKey = 'ix_branch_metadatas_model_key'
}

/** input type for incrementing integer column in table "branch_metadatas" */
export type Branch_Metadatas_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "branch_metadatas" */
export type Branch_Metadatas_Insert_Input = {
  commit?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  model_key?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Branch_Metadatas_Max_Fields = {
  __typename?: 'branch_metadatas_max_fields';
  commit?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  model_key?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Max_Order_By = {
  commit?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_key?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Branch_Metadatas_Min_Fields = {
  __typename?: 'branch_metadatas_min_fields';
  commit?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  model_key?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Min_Order_By = {
  commit?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_key?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** response of any mutation on the table "branch_metadatas" */
export type Branch_Metadatas_Mutation_Response = {
  __typename?: 'branch_metadatas_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Branch_Metadatas>;
};

/** input type for inserting object relation for remote table "branch_metadatas" */
export type Branch_Metadatas_Obj_Rel_Insert_Input = {
  data: Branch_Metadatas_Insert_Input;
  on_conflict?: Maybe<Branch_Metadatas_On_Conflict>;
};

/** on conflict condition type for table "branch_metadatas" */
export type Branch_Metadatas_On_Conflict = {
  constraint: Branch_Metadatas_Constraint;
  update_columns: Array<Branch_Metadatas_Update_Column>;
  where?: Maybe<Branch_Metadatas_Bool_Exp>;
};

/** ordering options when selecting data from "branch_metadatas" */
export type Branch_Metadatas_Order_By = {
  commit?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_key?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** primary key columns input for table: "branch_metadatas" */
export type Branch_Metadatas_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "branch_metadatas" */
export enum Branch_Metadatas_Select_Column {
  /** column name */
  Commit = 'commit',
  /** column name */
  Id = 'id',
  /** column name */
  ModelKey = 'model_key',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "branch_metadatas" */
export type Branch_Metadatas_Set_Input = {
  commit?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  model_key?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Branch_Metadatas_Stddev_Fields = {
  __typename?: 'branch_metadatas_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Branch_Metadatas_Stddev_Pop_Fields = {
  __typename?: 'branch_metadatas_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Branch_Metadatas_Stddev_Samp_Fields = {
  __typename?: 'branch_metadatas_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Branch_Metadatas_Sum_Fields = {
  __typename?: 'branch_metadatas_sum_fields';
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Sum_Order_By = {
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** update columns of table "branch_metadatas" */
export enum Branch_Metadatas_Update_Column {
  /** column name */
  Commit = 'commit',
  /** column name */
  Id = 'id',
  /** column name */
  ModelKey = 'model_key',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate var_pop on columns */
export type Branch_Metadatas_Var_Pop_Fields = {
  __typename?: 'branch_metadatas_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Branch_Metadatas_Var_Samp_Fields = {
  __typename?: 'branch_metadatas_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Branch_Metadatas_Variance_Fields = {
  __typename?: 'branch_metadatas_variance_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "branch_metadatas" */
export type Branch_Metadatas_Variance_Order_By = {
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/**
 * Dashboard Item Configs are the inputs that configure a DashboardItem.
 *
 *
 * columns and relationships of "dashboard_item_configs"
 */
export type Dashboard_Item_Configs = {
  __typename?: 'dashboard_item_configs';
  dashboardRenderableType: Dashboard_Renderable_Types_Enum;
  /** An object relationship */
  dashboardSection: Dashboard_Sections;
  dashboardSectionId: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  metricCollection?: Maybe<Metric_Collections>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  /** An object relationship */
  team?: Maybe<Teams>;
  teamId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "dashboard_item_configs" */
export type Dashboard_Item_Configs_Aggregate = {
  __typename?: 'dashboard_item_configs_aggregate';
  aggregate?: Maybe<Dashboard_Item_Configs_Aggregate_Fields>;
  nodes: Array<Dashboard_Item_Configs>;
};

/** aggregate fields of "dashboard_item_configs" */
export type Dashboard_Item_Configs_Aggregate_Fields = {
  __typename?: 'dashboard_item_configs_aggregate_fields';
  avg?: Maybe<Dashboard_Item_Configs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dashboard_Item_Configs_Max_Fields>;
  min?: Maybe<Dashboard_Item_Configs_Min_Fields>;
  stddev?: Maybe<Dashboard_Item_Configs_Stddev_Fields>;
  stddev_pop?: Maybe<Dashboard_Item_Configs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dashboard_Item_Configs_Stddev_Samp_Fields>;
  sum?: Maybe<Dashboard_Item_Configs_Sum_Fields>;
  var_pop?: Maybe<Dashboard_Item_Configs_Var_Pop_Fields>;
  var_samp?: Maybe<Dashboard_Item_Configs_Var_Samp_Fields>;
  variance?: Maybe<Dashboard_Item_Configs_Variance_Fields>;
};


/** aggregate fields of "dashboard_item_configs" */
export type Dashboard_Item_Configs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dashboard_Item_Configs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Aggregate_Order_By = {
  avg?: Maybe<Dashboard_Item_Configs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Dashboard_Item_Configs_Max_Order_By>;
  min?: Maybe<Dashboard_Item_Configs_Min_Order_By>;
  stddev?: Maybe<Dashboard_Item_Configs_Stddev_Order_By>;
  stddev_pop?: Maybe<Dashboard_Item_Configs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Dashboard_Item_Configs_Stddev_Samp_Order_By>;
  sum?: Maybe<Dashboard_Item_Configs_Sum_Order_By>;
  var_pop?: Maybe<Dashboard_Item_Configs_Var_Pop_Order_By>;
  var_samp?: Maybe<Dashboard_Item_Configs_Var_Samp_Order_By>;
  variance?: Maybe<Dashboard_Item_Configs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Arr_Rel_Insert_Input = {
  data: Array<Dashboard_Item_Configs_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Item_Configs_On_Conflict>;
};

/** aggregate avg on columns */
export type Dashboard_Item_Configs_Avg_Fields = {
  __typename?: 'dashboard_item_configs_avg_fields';
  dashboardSectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Avg_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dashboard_item_configs". All fields are combined with a logical 'AND'. */
export type Dashboard_Item_Configs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dashboard_Item_Configs_Bool_Exp>>>;
  _not?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dashboard_Item_Configs_Bool_Exp>>>;
  dashboardRenderableType?: Maybe<Dashboard_Renderable_Types_Enum_Comparison_Exp>;
  dashboardSection?: Maybe<Dashboard_Sections_Bool_Exp>;
  dashboardSectionId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metricCollection?: Maybe<Metric_Collections_Bool_Exp>;
  metricCollectionId?: Maybe<Int_Comparison_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  subtitle?: Maybe<String_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  teamId?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "dashboard_item_configs" */
export enum Dashboard_Item_Configs_Constraint {
  /** unique or primary key constraint */
  DashboardItemConfigsPkey = 'dashboard_item_configs_pkey'
}

/** input type for incrementing integer column in table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Inc_Input = {
  dashboardSectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Insert_Input = {
  dashboardRenderableType?: Maybe<Dashboard_Renderable_Types_Enum>;
  dashboardSection?: Maybe<Dashboard_Sections_Obj_Rel_Insert_Input>;
  dashboardSectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollection?: Maybe<Metric_Collections_Obj_Rel_Insert_Input>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  teamId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Dashboard_Item_Configs_Max_Fields = {
  __typename?: 'dashboard_item_configs_max_fields';
  dashboardSectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Max_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  subtitle?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dashboard_Item_Configs_Min_Fields = {
  __typename?: 'dashboard_item_configs_min_fields';
  dashboardSectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Min_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  subtitle?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Mutation_Response = {
  __typename?: 'dashboard_item_configs_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dashboard_Item_Configs>;
};

/** input type for inserting object relation for remote table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Obj_Rel_Insert_Input = {
  data: Dashboard_Item_Configs_Insert_Input;
  on_conflict?: Maybe<Dashboard_Item_Configs_On_Conflict>;
};

/** on conflict condition type for table "dashboard_item_configs" */
export type Dashboard_Item_Configs_On_Conflict = {
  constraint: Dashboard_Item_Configs_Constraint;
  update_columns: Array<Dashboard_Item_Configs_Update_Column>;
  where?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
};

/** ordering options when selecting data from "dashboard_item_configs" */
export type Dashboard_Item_Configs_Order_By = {
  dashboardRenderableType?: Maybe<Order_By>;
  dashboardSection?: Maybe<Dashboard_Sections_Order_By>;
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollection?: Maybe<Metric_Collections_Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  subtitle?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  teamId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "dashboard_item_configs" */
export type Dashboard_Item_Configs_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "dashboard_item_configs" */
export enum Dashboard_Item_Configs_Select_Column {
  /** column name */
  DashboardRenderableType = 'dashboardRenderableType',
  /** column name */
  DashboardSectionId = 'dashboardSectionId',
  /** column name */
  Id = 'id',
  /** column name */
  MetricCollectionId = 'metricCollectionId',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  Position = 'position',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Set_Input = {
  dashboardRenderableType?: Maybe<Dashboard_Renderable_Types_Enum>;
  dashboardSectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Dashboard_Item_Configs_Stddev_Fields = {
  __typename?: 'dashboard_item_configs_stddev_fields';
  dashboardSectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Stddev_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dashboard_Item_Configs_Stddev_Pop_Fields = {
  __typename?: 'dashboard_item_configs_stddev_pop_fields';
  dashboardSectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Stddev_Pop_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dashboard_Item_Configs_Stddev_Samp_Fields = {
  __typename?: 'dashboard_item_configs_stddev_samp_fields';
  dashboardSectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Stddev_Samp_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Dashboard_Item_Configs_Sum_Fields = {
  __typename?: 'dashboard_item_configs_sum_fields';
  dashboardSectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Sum_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "dashboard_item_configs" */
export enum Dashboard_Item_Configs_Update_Column {
  /** column name */
  DashboardRenderableType = 'dashboardRenderableType',
  /** column name */
  DashboardSectionId = 'dashboardSectionId',
  /** column name */
  Id = 'id',
  /** column name */
  MetricCollectionId = 'metricCollectionId',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  Position = 'position',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Dashboard_Item_Configs_Var_Pop_Fields = {
  __typename?: 'dashboard_item_configs_var_pop_fields';
  dashboardSectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Var_Pop_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dashboard_Item_Configs_Var_Samp_Fields = {
  __typename?: 'dashboard_item_configs_var_samp_fields';
  dashboardSectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Var_Samp_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Dashboard_Item_Configs_Variance_Fields = {
  __typename?: 'dashboard_item_configs_variance_fields';
  dashboardSectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dashboard_item_configs" */
export type Dashboard_Item_Configs_Variance_Order_By = {
  dashboardSectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/**
 * Enum for the possible layouts for a Dashboard
 *
 *
 * columns and relationships of "dashboard_layouts"
 */
export type Dashboard_Layouts = {
  __typename?: 'dashboard_layouts';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "dashboard_layouts" */
export type Dashboard_Layouts_Aggregate = {
  __typename?: 'dashboard_layouts_aggregate';
  aggregate?: Maybe<Dashboard_Layouts_Aggregate_Fields>;
  nodes: Array<Dashboard_Layouts>;
};

/** aggregate fields of "dashboard_layouts" */
export type Dashboard_Layouts_Aggregate_Fields = {
  __typename?: 'dashboard_layouts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dashboard_Layouts_Max_Fields>;
  min?: Maybe<Dashboard_Layouts_Min_Fields>;
};


/** aggregate fields of "dashboard_layouts" */
export type Dashboard_Layouts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dashboard_Layouts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dashboard_layouts" */
export type Dashboard_Layouts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Dashboard_Layouts_Max_Order_By>;
  min?: Maybe<Dashboard_Layouts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "dashboard_layouts" */
export type Dashboard_Layouts_Arr_Rel_Insert_Input = {
  data: Array<Dashboard_Layouts_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Layouts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "dashboard_layouts". All fields are combined with a logical 'AND'. */
export type Dashboard_Layouts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dashboard_Layouts_Bool_Exp>>>;
  _not?: Maybe<Dashboard_Layouts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dashboard_Layouts_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "dashboard_layouts" */
export enum Dashboard_Layouts_Constraint {
  /** unique or primary key constraint */
  DashboardLayoutsPkey = 'dashboard_layouts_pkey'
}

export enum Dashboard_Layouts_Enum {
  /** This version has a side panel that collapses on small breakpoint. */
  SidePanel = 'SIDE_PANEL',
  /** This layout has a single main column on all breakpoints. */
  SingleColumn = 'SINGLE_COLUMN'
}

/** expression to compare columns of type dashboard_layouts_enum. All fields are combined with logical 'AND'. */
export type Dashboard_Layouts_Enum_Comparison_Exp = {
  _eq?: Maybe<Dashboard_Layouts_Enum>;
  _in?: Maybe<Array<Dashboard_Layouts_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Dashboard_Layouts_Enum>;
  _nin?: Maybe<Array<Dashboard_Layouts_Enum>>;
};

/** input type for inserting data into table "dashboard_layouts" */
export type Dashboard_Layouts_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Dashboard_Layouts_Max_Fields = {
  __typename?: 'dashboard_layouts_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "dashboard_layouts" */
export type Dashboard_Layouts_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dashboard_Layouts_Min_Fields = {
  __typename?: 'dashboard_layouts_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "dashboard_layouts" */
export type Dashboard_Layouts_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "dashboard_layouts" */
export type Dashboard_Layouts_Mutation_Response = {
  __typename?: 'dashboard_layouts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dashboard_Layouts>;
};

/** input type for inserting object relation for remote table "dashboard_layouts" */
export type Dashboard_Layouts_Obj_Rel_Insert_Input = {
  data: Dashboard_Layouts_Insert_Input;
  on_conflict?: Maybe<Dashboard_Layouts_On_Conflict>;
};

/** on conflict condition type for table "dashboard_layouts" */
export type Dashboard_Layouts_On_Conflict = {
  constraint: Dashboard_Layouts_Constraint;
  update_columns: Array<Dashboard_Layouts_Update_Column>;
  where?: Maybe<Dashboard_Layouts_Bool_Exp>;
};

/** ordering options when selecting data from "dashboard_layouts" */
export type Dashboard_Layouts_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "dashboard_layouts" */
export type Dashboard_Layouts_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "dashboard_layouts" */
export enum Dashboard_Layouts_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "dashboard_layouts" */
export type Dashboard_Layouts_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "dashboard_layouts" */
export enum Dashboard_Layouts_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/**
 * Enum for Dashboard Renderable components. Note: It is expected that this be replaced by an Interface shortly.
 *
 *
 * columns and relationships of "dashboard_renderable_types"
 */
export type Dashboard_Renderable_Types = {
  __typename?: 'dashboard_renderable_types';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Aggregate = {
  __typename?: 'dashboard_renderable_types_aggregate';
  aggregate?: Maybe<Dashboard_Renderable_Types_Aggregate_Fields>;
  nodes: Array<Dashboard_Renderable_Types>;
};

/** aggregate fields of "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Aggregate_Fields = {
  __typename?: 'dashboard_renderable_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dashboard_Renderable_Types_Max_Fields>;
  min?: Maybe<Dashboard_Renderable_Types_Min_Fields>;
};


/** aggregate fields of "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dashboard_Renderable_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Dashboard_Renderable_Types_Max_Order_By>;
  min?: Maybe<Dashboard_Renderable_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Arr_Rel_Insert_Input = {
  data: Array<Dashboard_Renderable_Types_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Renderable_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "dashboard_renderable_types". All fields are combined with a logical 'AND'. */
export type Dashboard_Renderable_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dashboard_Renderable_Types_Bool_Exp>>>;
  _not?: Maybe<Dashboard_Renderable_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dashboard_Renderable_Types_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "dashboard_renderable_types" */
export enum Dashboard_Renderable_Types_Constraint {
  /** unique or primary key constraint */
  DashboardRenderableTypesPkey = 'dashboard_renderable_types_pkey'
}

export enum Dashboard_Renderable_Types_Enum {
  /** Banners can let users know what's happening or be used as a page title. */
  Banner = 'BANNER',
  /** The Carousel is a simple view for a set of metrics or saved queries. */
  Carousel = 'CAROUSEL',
  /** Users and Teams can have multiple Dashboards, so this list view provides an entry point into them. */
  DashboardList = 'DASHBOARD_LIST',
  /** The Metric Collection view provides a mechanism for viewing all the metrics in a collection with live configuration of dimensions and filters. */
  MetricCollection = 'METRIC_COLLECTION',
  /** Users and Teams can have multiple Metric Collections, so this list view provides an entry point into them. */
  MetricCollectionList = 'METRIC_COLLECTION_LIST',
  /** Many objects (e.g. Dashboards and Metrics) can have multiple Owners, so this list view provides an entry point into them. */
  OwnerList = 'OWNER_LIST',
  /** Users and Teams can have multiple Saved Queries, so this list view provides an entry point into them. */
  SavedQueryList = 'SAVED_QUERY_LIST',
  /** Teams have User Lists as a way to view the members of the team. */
  UserList = 'USER_LIST'
}

/** expression to compare columns of type dashboard_renderable_types_enum. All fields are combined with logical 'AND'. */
export type Dashboard_Renderable_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Dashboard_Renderable_Types_Enum>;
  _in?: Maybe<Array<Dashboard_Renderable_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Dashboard_Renderable_Types_Enum>;
  _nin?: Maybe<Array<Dashboard_Renderable_Types_Enum>>;
};

/** input type for inserting data into table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Dashboard_Renderable_Types_Max_Fields = {
  __typename?: 'dashboard_renderable_types_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dashboard_Renderable_Types_Min_Fields = {
  __typename?: 'dashboard_renderable_types_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Mutation_Response = {
  __typename?: 'dashboard_renderable_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dashboard_Renderable_Types>;
};

/** input type for inserting object relation for remote table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Obj_Rel_Insert_Input = {
  data: Dashboard_Renderable_Types_Insert_Input;
  on_conflict?: Maybe<Dashboard_Renderable_Types_On_Conflict>;
};

/** on conflict condition type for table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_On_Conflict = {
  constraint: Dashboard_Renderable_Types_Constraint;
  update_columns: Array<Dashboard_Renderable_Types_Update_Column>;
  where?: Maybe<Dashboard_Renderable_Types_Bool_Exp>;
};

/** ordering options when selecting data from "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "dashboard_renderable_types" */
export enum Dashboard_Renderable_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "dashboard_renderable_types" */
export type Dashboard_Renderable_Types_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "dashboard_renderable_types" */
export enum Dashboard_Renderable_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/**
 * An Enum for the various Section Types on a Dashboard
 *
 *
 * columns and relationships of "dashboard_section_types"
 */
export type Dashboard_Section_Types = {
  __typename?: 'dashboard_section_types';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "dashboard_section_types" */
export type Dashboard_Section_Types_Aggregate = {
  __typename?: 'dashboard_section_types_aggregate';
  aggregate?: Maybe<Dashboard_Section_Types_Aggregate_Fields>;
  nodes: Array<Dashboard_Section_Types>;
};

/** aggregate fields of "dashboard_section_types" */
export type Dashboard_Section_Types_Aggregate_Fields = {
  __typename?: 'dashboard_section_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dashboard_Section_Types_Max_Fields>;
  min?: Maybe<Dashboard_Section_Types_Min_Fields>;
};


/** aggregate fields of "dashboard_section_types" */
export type Dashboard_Section_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dashboard_Section_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dashboard_section_types" */
export type Dashboard_Section_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Dashboard_Section_Types_Max_Order_By>;
  min?: Maybe<Dashboard_Section_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "dashboard_section_types" */
export type Dashboard_Section_Types_Arr_Rel_Insert_Input = {
  data: Array<Dashboard_Section_Types_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Section_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "dashboard_section_types". All fields are combined with a logical 'AND'. */
export type Dashboard_Section_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dashboard_Section_Types_Bool_Exp>>>;
  _not?: Maybe<Dashboard_Section_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dashboard_Section_Types_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "dashboard_section_types" */
export enum Dashboard_Section_Types_Constraint {
  /** unique or primary key constraint */
  DashboardSectionTypesPkey = 'dashboard_section_types_pkey'
}

export enum Dashboard_Section_Types_Enum {
  /** The Header appears at the top of the Dashboard and remains sticky during scrolling. */
  Header = 'HEADER',
  /** The primary column taking most or all of the page. */
  Main = 'MAIN',
  /** A side panel existing in the Panel Layout. Collapsible on small breakpoint. */
  Panel = 'PANEL'
}

/** expression to compare columns of type dashboard_section_types_enum. All fields are combined with logical 'AND'. */
export type Dashboard_Section_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Dashboard_Section_Types_Enum>;
  _in?: Maybe<Array<Dashboard_Section_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Dashboard_Section_Types_Enum>;
  _nin?: Maybe<Array<Dashboard_Section_Types_Enum>>;
};

/** input type for inserting data into table "dashboard_section_types" */
export type Dashboard_Section_Types_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Dashboard_Section_Types_Max_Fields = {
  __typename?: 'dashboard_section_types_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "dashboard_section_types" */
export type Dashboard_Section_Types_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dashboard_Section_Types_Min_Fields = {
  __typename?: 'dashboard_section_types_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "dashboard_section_types" */
export type Dashboard_Section_Types_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "dashboard_section_types" */
export type Dashboard_Section_Types_Mutation_Response = {
  __typename?: 'dashboard_section_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dashboard_Section_Types>;
};

/** input type for inserting object relation for remote table "dashboard_section_types" */
export type Dashboard_Section_Types_Obj_Rel_Insert_Input = {
  data: Dashboard_Section_Types_Insert_Input;
  on_conflict?: Maybe<Dashboard_Section_Types_On_Conflict>;
};

/** on conflict condition type for table "dashboard_section_types" */
export type Dashboard_Section_Types_On_Conflict = {
  constraint: Dashboard_Section_Types_Constraint;
  update_columns: Array<Dashboard_Section_Types_Update_Column>;
  where?: Maybe<Dashboard_Section_Types_Bool_Exp>;
};

/** ordering options when selecting data from "dashboard_section_types" */
export type Dashboard_Section_Types_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "dashboard_section_types" */
export type Dashboard_Section_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "dashboard_section_types" */
export enum Dashboard_Section_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "dashboard_section_types" */
export type Dashboard_Section_Types_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "dashboard_section_types" */
export enum Dashboard_Section_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/**
 * Dashboard Sections are logical groupings of Dashboard Items within the UI. The type specifies where the section appears on the page.
 *
 *
 * columns and relationships of "dashboard_sections"
 */
export type Dashboard_Sections = {
  __typename?: 'dashboard_sections';
  /** An object relationship */
  dashboard: Dashboards;
  /** An array relationship */
  dashboardItemConfigs: Array<Dashboard_Item_Configs>;
  /** An aggregated array relationship */
  dashboardItemConfigs_aggregate: Dashboard_Item_Configs_Aggregate;
  /** The Section Type indicates the "zone" on page where the section's items will go. */
  dashboardSectionType: Dashboard_Section_Types_Enum;
  dashboard_id: Scalars['Int'];
  id: Scalars['Int'];
};


/**
 * Dashboard Sections are logical groupings of Dashboard Items within the UI. The type specifies where the section appears on the page.
 *
 *
 * columns and relationships of "dashboard_sections"
 */
export type Dashboard_SectionsDashboardItemConfigsArgs = {
  distinct_on?: Maybe<Array<Dashboard_Item_Configs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Item_Configs_Order_By>>;
  where?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
};


/**
 * Dashboard Sections are logical groupings of Dashboard Items within the UI. The type specifies where the section appears on the page.
 *
 *
 * columns and relationships of "dashboard_sections"
 */
export type Dashboard_SectionsDashboardItemConfigs_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Item_Configs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Item_Configs_Order_By>>;
  where?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
};

/** aggregated selection of "dashboard_sections" */
export type Dashboard_Sections_Aggregate = {
  __typename?: 'dashboard_sections_aggregate';
  aggregate?: Maybe<Dashboard_Sections_Aggregate_Fields>;
  nodes: Array<Dashboard_Sections>;
};

/** aggregate fields of "dashboard_sections" */
export type Dashboard_Sections_Aggregate_Fields = {
  __typename?: 'dashboard_sections_aggregate_fields';
  avg?: Maybe<Dashboard_Sections_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dashboard_Sections_Max_Fields>;
  min?: Maybe<Dashboard_Sections_Min_Fields>;
  stddev?: Maybe<Dashboard_Sections_Stddev_Fields>;
  stddev_pop?: Maybe<Dashboard_Sections_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dashboard_Sections_Stddev_Samp_Fields>;
  sum?: Maybe<Dashboard_Sections_Sum_Fields>;
  var_pop?: Maybe<Dashboard_Sections_Var_Pop_Fields>;
  var_samp?: Maybe<Dashboard_Sections_Var_Samp_Fields>;
  variance?: Maybe<Dashboard_Sections_Variance_Fields>;
};


/** aggregate fields of "dashboard_sections" */
export type Dashboard_Sections_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dashboard_Sections_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dashboard_sections" */
export type Dashboard_Sections_Aggregate_Order_By = {
  avg?: Maybe<Dashboard_Sections_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Dashboard_Sections_Max_Order_By>;
  min?: Maybe<Dashboard_Sections_Min_Order_By>;
  stddev?: Maybe<Dashboard_Sections_Stddev_Order_By>;
  stddev_pop?: Maybe<Dashboard_Sections_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Dashboard_Sections_Stddev_Samp_Order_By>;
  sum?: Maybe<Dashboard_Sections_Sum_Order_By>;
  var_pop?: Maybe<Dashboard_Sections_Var_Pop_Order_By>;
  var_samp?: Maybe<Dashboard_Sections_Var_Samp_Order_By>;
  variance?: Maybe<Dashboard_Sections_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "dashboard_sections" */
export type Dashboard_Sections_Arr_Rel_Insert_Input = {
  data: Array<Dashboard_Sections_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Sections_On_Conflict>;
};

/** aggregate avg on columns */
export type Dashboard_Sections_Avg_Fields = {
  __typename?: 'dashboard_sections_avg_fields';
  dashboard_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Avg_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dashboard_sections". All fields are combined with a logical 'AND'. */
export type Dashboard_Sections_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dashboard_Sections_Bool_Exp>>>;
  _not?: Maybe<Dashboard_Sections_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dashboard_Sections_Bool_Exp>>>;
  dashboard?: Maybe<Dashboards_Bool_Exp>;
  dashboardItemConfigs?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
  dashboardSectionType?: Maybe<Dashboard_Section_Types_Enum_Comparison_Exp>;
  dashboard_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "dashboard_sections" */
export enum Dashboard_Sections_Constraint {
  /** unique or primary key constraint */
  DashboardSectionsPkey = 'dashboard_sections_pkey'
}

/** input type for incrementing integer column in table "dashboard_sections" */
export type Dashboard_Sections_Inc_Input = {
  dashboard_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "dashboard_sections" */
export type Dashboard_Sections_Insert_Input = {
  dashboard?: Maybe<Dashboards_Obj_Rel_Insert_Input>;
  dashboardItemConfigs?: Maybe<Dashboard_Item_Configs_Arr_Rel_Insert_Input>;
  dashboardSectionType?: Maybe<Dashboard_Section_Types_Enum>;
  dashboard_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Dashboard_Sections_Max_Fields = {
  __typename?: 'dashboard_sections_max_fields';
  dashboard_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Max_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dashboard_Sections_Min_Fields = {
  __typename?: 'dashboard_sections_min_fields';
  dashboard_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Min_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "dashboard_sections" */
export type Dashboard_Sections_Mutation_Response = {
  __typename?: 'dashboard_sections_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dashboard_Sections>;
};

/** input type for inserting object relation for remote table "dashboard_sections" */
export type Dashboard_Sections_Obj_Rel_Insert_Input = {
  data: Dashboard_Sections_Insert_Input;
  on_conflict?: Maybe<Dashboard_Sections_On_Conflict>;
};

/** on conflict condition type for table "dashboard_sections" */
export type Dashboard_Sections_On_Conflict = {
  constraint: Dashboard_Sections_Constraint;
  update_columns: Array<Dashboard_Sections_Update_Column>;
  where?: Maybe<Dashboard_Sections_Bool_Exp>;
};

/** ordering options when selecting data from "dashboard_sections" */
export type Dashboard_Sections_Order_By = {
  dashboard?: Maybe<Dashboards_Order_By>;
  dashboardItemConfigs_aggregate?: Maybe<Dashboard_Item_Configs_Aggregate_Order_By>;
  dashboardSectionType?: Maybe<Order_By>;
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "dashboard_sections" */
export type Dashboard_Sections_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "dashboard_sections" */
export enum Dashboard_Sections_Select_Column {
  /** column name */
  DashboardSectionType = 'dashboardSectionType',
  /** column name */
  DashboardId = 'dashboard_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "dashboard_sections" */
export type Dashboard_Sections_Set_Input = {
  dashboardSectionType?: Maybe<Dashboard_Section_Types_Enum>;
  dashboard_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Dashboard_Sections_Stddev_Fields = {
  __typename?: 'dashboard_sections_stddev_fields';
  dashboard_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Stddev_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dashboard_Sections_Stddev_Pop_Fields = {
  __typename?: 'dashboard_sections_stddev_pop_fields';
  dashboard_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Stddev_Pop_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dashboard_Sections_Stddev_Samp_Fields = {
  __typename?: 'dashboard_sections_stddev_samp_fields';
  dashboard_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Stddev_Samp_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Dashboard_Sections_Sum_Fields = {
  __typename?: 'dashboard_sections_sum_fields';
  dashboard_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Sum_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "dashboard_sections" */
export enum Dashboard_Sections_Update_Column {
  /** column name */
  DashboardSectionType = 'dashboardSectionType',
  /** column name */
  DashboardId = 'dashboard_id',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Dashboard_Sections_Var_Pop_Fields = {
  __typename?: 'dashboard_sections_var_pop_fields';
  dashboard_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Var_Pop_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dashboard_Sections_Var_Samp_Fields = {
  __typename?: 'dashboard_sections_var_samp_fields';
  dashboard_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Var_Samp_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Dashboard_Sections_Variance_Fields = {
  __typename?: 'dashboard_sections_variance_fields';
  dashboard_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dashboard_sections" */
export type Dashboard_Sections_Variance_Order_By = {
  dashboard_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/**
 * Dashboards are a foundational tool for building custom pages in the Transform App
 *
 *
 * columns and relationships of "dashboards"
 */
export type Dashboards = {
  __typename?: 'dashboards';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardLayout: Dashboard_Layouts_Enum;
  /** An array relationship */
  dashboardSections: Array<Dashboard_Sections>;
  /** An aggregated array relationship */
  dashboardSections_aggregate: Dashboard_Sections_Aggregate;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars['Int'];
  /** An array relationship */
  teamOwners: Array<Team_Dashboards>;
  /** An aggregated array relationship */
  teamOwners_aggregate: Team_Dashboards_Aggregate;
  /** The Dashboard title appears in the header */
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  userOwners: Array<User_Dashboards>;
  /** An aggregated array relationship */
  userOwners_aggregate: User_Dashboards_Aggregate;
};


/**
 * Dashboards are a foundational tool for building custom pages in the Transform App
 *
 *
 * columns and relationships of "dashboards"
 */
export type DashboardsDashboardSectionsArgs = {
  distinct_on?: Maybe<Array<Dashboard_Sections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Sections_Order_By>>;
  where?: Maybe<Dashboard_Sections_Bool_Exp>;
};


/**
 * Dashboards are a foundational tool for building custom pages in the Transform App
 *
 *
 * columns and relationships of "dashboards"
 */
export type DashboardsDashboardSections_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Sections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Sections_Order_By>>;
  where?: Maybe<Dashboard_Sections_Bool_Exp>;
};


/**
 * Dashboards are a foundational tool for building custom pages in the Transform App
 *
 *
 * columns and relationships of "dashboards"
 */
export type DashboardsTeamOwnersArgs = {
  distinct_on?: Maybe<Array<Team_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Dashboards_Order_By>>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};


/**
 * Dashboards are a foundational tool for building custom pages in the Transform App
 *
 *
 * columns and relationships of "dashboards"
 */
export type DashboardsTeamOwners_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Dashboards_Order_By>>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};


/**
 * Dashboards are a foundational tool for building custom pages in the Transform App
 *
 *
 * columns and relationships of "dashboards"
 */
export type DashboardsUserOwnersArgs = {
  distinct_on?: Maybe<Array<User_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Dashboards_Order_By>>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};


/**
 * Dashboards are a foundational tool for building custom pages in the Transform App
 *
 *
 * columns and relationships of "dashboards"
 */
export type DashboardsUserOwners_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Dashboards_Order_By>>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};

/** aggregated selection of "dashboards" */
export type Dashboards_Aggregate = {
  __typename?: 'dashboards_aggregate';
  aggregate?: Maybe<Dashboards_Aggregate_Fields>;
  nodes: Array<Dashboards>;
};

/** aggregate fields of "dashboards" */
export type Dashboards_Aggregate_Fields = {
  __typename?: 'dashboards_aggregate_fields';
  avg?: Maybe<Dashboards_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dashboards_Max_Fields>;
  min?: Maybe<Dashboards_Min_Fields>;
  stddev?: Maybe<Dashboards_Stddev_Fields>;
  stddev_pop?: Maybe<Dashboards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dashboards_Stddev_Samp_Fields>;
  sum?: Maybe<Dashboards_Sum_Fields>;
  var_pop?: Maybe<Dashboards_Var_Pop_Fields>;
  var_samp?: Maybe<Dashboards_Var_Samp_Fields>;
  variance?: Maybe<Dashboards_Variance_Fields>;
};


/** aggregate fields of "dashboards" */
export type Dashboards_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dashboards_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dashboards" */
export type Dashboards_Aggregate_Order_By = {
  avg?: Maybe<Dashboards_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Dashboards_Max_Order_By>;
  min?: Maybe<Dashboards_Min_Order_By>;
  stddev?: Maybe<Dashboards_Stddev_Order_By>;
  stddev_pop?: Maybe<Dashboards_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Dashboards_Stddev_Samp_Order_By>;
  sum?: Maybe<Dashboards_Sum_Order_By>;
  var_pop?: Maybe<Dashboards_Var_Pop_Order_By>;
  var_samp?: Maybe<Dashboards_Var_Samp_Order_By>;
  variance?: Maybe<Dashboards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "dashboards" */
export type Dashboards_Arr_Rel_Insert_Input = {
  data: Array<Dashboards_Insert_Input>;
  on_conflict?: Maybe<Dashboards_On_Conflict>;
};

/** aggregate avg on columns */
export type Dashboards_Avg_Fields = {
  __typename?: 'dashboards_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dashboards" */
export type Dashboards_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dashboards". All fields are combined with a logical 'AND'. */
export type Dashboards_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dashboards_Bool_Exp>>>;
  _not?: Maybe<Dashboards_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dashboards_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dashboardLayout?: Maybe<Dashboard_Layouts_Enum_Comparison_Exp>;
  dashboardSections?: Maybe<Dashboard_Sections_Bool_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  teamOwners?: Maybe<Team_Dashboards_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userOwners?: Maybe<User_Dashboards_Bool_Exp>;
};

/** unique or primary key constraints on table "dashboards" */
export enum Dashboards_Constraint {
  /** unique or primary key constraint */
  DashboardsPkey = 'dashboards_pkey'
}

/** input type for incrementing integer column in table "dashboards" */
export type Dashboards_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "dashboards" */
export type Dashboards_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardLayout?: Maybe<Dashboard_Layouts_Enum>;
  dashboardSections?: Maybe<Dashboard_Sections_Arr_Rel_Insert_Input>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: Maybe<Scalars['Int']>;
  teamOwners?: Maybe<Team_Dashboards_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userOwners?: Maybe<User_Dashboards_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Dashboards_Max_Fields = {
  __typename?: 'dashboards_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "dashboards" */
export type Dashboards_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dashboards_Min_Fields = {
  __typename?: 'dashboards_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "dashboards" */
export type Dashboards_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "dashboards" */
export type Dashboards_Mutation_Response = {
  __typename?: 'dashboards_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dashboards>;
};

/** input type for inserting object relation for remote table "dashboards" */
export type Dashboards_Obj_Rel_Insert_Input = {
  data: Dashboards_Insert_Input;
  on_conflict?: Maybe<Dashboards_On_Conflict>;
};

/** on conflict condition type for table "dashboards" */
export type Dashboards_On_Conflict = {
  constraint: Dashboards_Constraint;
  update_columns: Array<Dashboards_Update_Column>;
  where?: Maybe<Dashboards_Bool_Exp>;
};

/** ordering options when selecting data from "dashboards" */
export type Dashboards_Order_By = {
  createdAt?: Maybe<Order_By>;
  dashboardLayout?: Maybe<Order_By>;
  dashboardSections_aggregate?: Maybe<Dashboard_Sections_Aggregate_Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organization_id?: Maybe<Order_By>;
  teamOwners_aggregate?: Maybe<Team_Dashboards_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userOwners_aggregate?: Maybe<User_Dashboards_Aggregate_Order_By>;
};

/** primary key columns input for table: "dashboards" */
export type Dashboards_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "dashboards" */
export enum Dashboards_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DashboardLayout = 'dashboardLayout',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "dashboards" */
export type Dashboards_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardLayout?: Maybe<Dashboard_Layouts_Enum>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Dashboards_Stddev_Fields = {
  __typename?: 'dashboards_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dashboards" */
export type Dashboards_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dashboards_Stddev_Pop_Fields = {
  __typename?: 'dashboards_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dashboards" */
export type Dashboards_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dashboards_Stddev_Samp_Fields = {
  __typename?: 'dashboards_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dashboards" */
export type Dashboards_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Dashboards_Sum_Fields = {
  __typename?: 'dashboards_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "dashboards" */
export type Dashboards_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** update columns of table "dashboards" */
export enum Dashboards_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DashboardLayout = 'dashboardLayout',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Dashboards_Var_Pop_Fields = {
  __typename?: 'dashboards_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dashboards" */
export type Dashboards_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dashboards_Var_Samp_Fields = {
  __typename?: 'dashboards_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dashboards" */
export type Dashboards_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Dashboards_Variance_Fields = {
  __typename?: 'dashboards_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dashboards" */
export type Dashboards_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** columns and relationships of "data_source_versions" */
export type Data_Source_Versions = {
  __typename?: 'data_source_versions';
  connection: Scalars['String'];
  constraint?: Maybe<Scalars['json']>;
  createdAt: Scalars['timestamptz'];
  dataSourceMetadata: Scalars['json'];
  description: Scalars['String'];
  dimensions: Scalars['json'];
  hash: Scalars['String'];
  id: Scalars['Int'];
  identifiers: Scalars['json'];
  measures: Scalars['json'];
  /** An array relationship */
  metricVersions: Array<Metric_Lineage_Data_Sources>;
  /** An aggregated array relationship */
  metricVersions_aggregate: Metric_Lineage_Data_Sources_Aggregate;
  /** An array relationship */
  modelDataSources: Array<Model_Data_Sources>;
  /** An aggregated array relationship */
  modelDataSources_aggregate: Model_Data_Sources_Aggregate;
  mutability: Scalars['json'];
  name: Scalars['String'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  owners: Scalars['json'];
  sqlQuery?: Maybe<Scalars['String']>;
  sqlTable?: Maybe<Scalars['String']>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsConstraintArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsDataSourceMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsDimensionsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsIdentifiersArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsMeasuresArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsMetricVersionsArgs = {
  distinct_on?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Lineage_Data_Sources_Order_By>>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsMetricVersions_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Lineage_Data_Sources_Order_By>>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsModelDataSourcesArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsModelDataSources_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsMutabilityArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "data_source_versions" */
export type Data_Source_VersionsOwnersArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "data_source_versions" */
export type Data_Source_Versions_Aggregate = {
  __typename?: 'data_source_versions_aggregate';
  aggregate?: Maybe<Data_Source_Versions_Aggregate_Fields>;
  nodes: Array<Data_Source_Versions>;
};

/** aggregate fields of "data_source_versions" */
export type Data_Source_Versions_Aggregate_Fields = {
  __typename?: 'data_source_versions_aggregate_fields';
  avg?: Maybe<Data_Source_Versions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Data_Source_Versions_Max_Fields>;
  min?: Maybe<Data_Source_Versions_Min_Fields>;
  stddev?: Maybe<Data_Source_Versions_Stddev_Fields>;
  stddev_pop?: Maybe<Data_Source_Versions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Data_Source_Versions_Stddev_Samp_Fields>;
  sum?: Maybe<Data_Source_Versions_Sum_Fields>;
  var_pop?: Maybe<Data_Source_Versions_Var_Pop_Fields>;
  var_samp?: Maybe<Data_Source_Versions_Var_Samp_Fields>;
  variance?: Maybe<Data_Source_Versions_Variance_Fields>;
};


/** aggregate fields of "data_source_versions" */
export type Data_Source_Versions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Data_Source_Versions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "data_source_versions" */
export type Data_Source_Versions_Aggregate_Order_By = {
  avg?: Maybe<Data_Source_Versions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Data_Source_Versions_Max_Order_By>;
  min?: Maybe<Data_Source_Versions_Min_Order_By>;
  stddev?: Maybe<Data_Source_Versions_Stddev_Order_By>;
  stddev_pop?: Maybe<Data_Source_Versions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Data_Source_Versions_Stddev_Samp_Order_By>;
  sum?: Maybe<Data_Source_Versions_Sum_Order_By>;
  var_pop?: Maybe<Data_Source_Versions_Var_Pop_Order_By>;
  var_samp?: Maybe<Data_Source_Versions_Var_Samp_Order_By>;
  variance?: Maybe<Data_Source_Versions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "data_source_versions" */
export type Data_Source_Versions_Arr_Rel_Insert_Input = {
  data: Array<Data_Source_Versions_Insert_Input>;
  on_conflict?: Maybe<Data_Source_Versions_On_Conflict>;
};

/** aggregate avg on columns */
export type Data_Source_Versions_Avg_Fields = {
  __typename?: 'data_source_versions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "data_source_versions" */
export type Data_Source_Versions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "data_source_versions". All fields are combined with a logical 'AND'. */
export type Data_Source_Versions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Data_Source_Versions_Bool_Exp>>>;
  _not?: Maybe<Data_Source_Versions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Data_Source_Versions_Bool_Exp>>>;
  connection?: Maybe<String_Comparison_Exp>;
  constraint?: Maybe<Json_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dataSourceMetadata?: Maybe<Json_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  dimensions?: Maybe<Json_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  identifiers?: Maybe<Json_Comparison_Exp>;
  measures?: Maybe<Json_Comparison_Exp>;
  metricVersions?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
  modelDataSources?: Maybe<Model_Data_Sources_Bool_Exp>;
  mutability?: Maybe<Json_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  owners?: Maybe<Json_Comparison_Exp>;
  sqlQuery?: Maybe<String_Comparison_Exp>;
  sqlTable?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "data_source_versions" */
export enum Data_Source_Versions_Constraint {
  /** unique or primary key constraint */
  DataSourceVersionsHashOrganizationIdKey = 'data_source_versions_hash_organization_id_key',
  /** unique or primary key constraint */
  DataSourceVersionsPkey = 'data_source_versions_pkey'
}

/** input type for incrementing integer column in table "data_source_versions" */
export type Data_Source_Versions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "data_source_versions" */
export type Data_Source_Versions_Insert_Input = {
  connection?: Maybe<Scalars['String']>;
  constraint?: Maybe<Scalars['json']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dataSourceMetadata?: Maybe<Scalars['json']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['json']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  identifiers?: Maybe<Scalars['json']>;
  measures?: Maybe<Scalars['json']>;
  metricVersions?: Maybe<Metric_Lineage_Data_Sources_Arr_Rel_Insert_Input>;
  modelDataSources?: Maybe<Model_Data_Sources_Arr_Rel_Insert_Input>;
  mutability?: Maybe<Scalars['json']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  owners?: Maybe<Scalars['json']>;
  sqlQuery?: Maybe<Scalars['String']>;
  sqlTable?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Data_Source_Versions_Max_Fields = {
  __typename?: 'data_source_versions_max_fields';
  connection?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  sqlQuery?: Maybe<Scalars['String']>;
  sqlTable?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "data_source_versions" */
export type Data_Source_Versions_Max_Order_By = {
  connection?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  sqlQuery?: Maybe<Order_By>;
  sqlTable?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Data_Source_Versions_Min_Fields = {
  __typename?: 'data_source_versions_min_fields';
  connection?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  sqlQuery?: Maybe<Scalars['String']>;
  sqlTable?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "data_source_versions" */
export type Data_Source_Versions_Min_Order_By = {
  connection?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  sqlQuery?: Maybe<Order_By>;
  sqlTable?: Maybe<Order_By>;
};

/** response of any mutation on the table "data_source_versions" */
export type Data_Source_Versions_Mutation_Response = {
  __typename?: 'data_source_versions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Data_Source_Versions>;
};

/** input type for inserting object relation for remote table "data_source_versions" */
export type Data_Source_Versions_Obj_Rel_Insert_Input = {
  data: Data_Source_Versions_Insert_Input;
  on_conflict?: Maybe<Data_Source_Versions_On_Conflict>;
};

/** on conflict condition type for table "data_source_versions" */
export type Data_Source_Versions_On_Conflict = {
  constraint: Data_Source_Versions_Constraint;
  update_columns: Array<Data_Source_Versions_Update_Column>;
  where?: Maybe<Data_Source_Versions_Bool_Exp>;
};

/** ordering options when selecting data from "data_source_versions" */
export type Data_Source_Versions_Order_By = {
  connection?: Maybe<Order_By>;
  constraint?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dataSourceMetadata?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  dimensions?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifiers?: Maybe<Order_By>;
  measures?: Maybe<Order_By>;
  metricVersions_aggregate?: Maybe<Metric_Lineage_Data_Sources_Aggregate_Order_By>;
  modelDataSources_aggregate?: Maybe<Model_Data_Sources_Aggregate_Order_By>;
  mutability?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  owners?: Maybe<Order_By>;
  sqlQuery?: Maybe<Order_By>;
  sqlTable?: Maybe<Order_By>;
};

/** primary key columns input for table: "data_source_versions" */
export type Data_Source_Versions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "data_source_versions" */
export enum Data_Source_Versions_Select_Column {
  /** column name */
  Connection = 'connection',
  /** column name */
  Constraint = 'constraint',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DataSourceMetadata = 'dataSourceMetadata',
  /** column name */
  Description = 'description',
  /** column name */
  Dimensions = 'dimensions',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Identifiers = 'identifiers',
  /** column name */
  Measures = 'measures',
  /** column name */
  Mutability = 'mutability',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Owners = 'owners',
  /** column name */
  SqlQuery = 'sqlQuery',
  /** column name */
  SqlTable = 'sqlTable'
}

/** input type for updating data in table "data_source_versions" */
export type Data_Source_Versions_Set_Input = {
  connection?: Maybe<Scalars['String']>;
  constraint?: Maybe<Scalars['json']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dataSourceMetadata?: Maybe<Scalars['json']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['json']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  identifiers?: Maybe<Scalars['json']>;
  measures?: Maybe<Scalars['json']>;
  mutability?: Maybe<Scalars['json']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  owners?: Maybe<Scalars['json']>;
  sqlQuery?: Maybe<Scalars['String']>;
  sqlTable?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Data_Source_Versions_Stddev_Fields = {
  __typename?: 'data_source_versions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "data_source_versions" */
export type Data_Source_Versions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Data_Source_Versions_Stddev_Pop_Fields = {
  __typename?: 'data_source_versions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "data_source_versions" */
export type Data_Source_Versions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Data_Source_Versions_Stddev_Samp_Fields = {
  __typename?: 'data_source_versions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "data_source_versions" */
export type Data_Source_Versions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Data_Source_Versions_Sum_Fields = {
  __typename?: 'data_source_versions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "data_source_versions" */
export type Data_Source_Versions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** update columns of table "data_source_versions" */
export enum Data_Source_Versions_Update_Column {
  /** column name */
  Connection = 'connection',
  /** column name */
  Constraint = 'constraint',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DataSourceMetadata = 'dataSourceMetadata',
  /** column name */
  Description = 'description',
  /** column name */
  Dimensions = 'dimensions',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Identifiers = 'identifiers',
  /** column name */
  Measures = 'measures',
  /** column name */
  Mutability = 'mutability',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Owners = 'owners',
  /** column name */
  SqlQuery = 'sqlQuery',
  /** column name */
  SqlTable = 'sqlTable'
}

/** aggregate var_pop on columns */
export type Data_Source_Versions_Var_Pop_Fields = {
  __typename?: 'data_source_versions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "data_source_versions" */
export type Data_Source_Versions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Data_Source_Versions_Var_Samp_Fields = {
  __typename?: 'data_source_versions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "data_source_versions" */
export type Data_Source_Versions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Data_Source_Versions_Variance_Fields = {
  __typename?: 'data_source_versions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "data_source_versions" */
export type Data_Source_Versions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "dw_engines" */
export type Dw_Engines = {
  __typename?: 'dw_engines';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "dw_engines" */
export type Dw_Engines_Aggregate = {
  __typename?: 'dw_engines_aggregate';
  aggregate?: Maybe<Dw_Engines_Aggregate_Fields>;
  nodes: Array<Dw_Engines>;
};

/** aggregate fields of "dw_engines" */
export type Dw_Engines_Aggregate_Fields = {
  __typename?: 'dw_engines_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dw_Engines_Max_Fields>;
  min?: Maybe<Dw_Engines_Min_Fields>;
};


/** aggregate fields of "dw_engines" */
export type Dw_Engines_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dw_Engines_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dw_engines" */
export type Dw_Engines_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Dw_Engines_Max_Order_By>;
  min?: Maybe<Dw_Engines_Min_Order_By>;
};

/** input type for inserting array relation for remote table "dw_engines" */
export type Dw_Engines_Arr_Rel_Insert_Input = {
  data: Array<Dw_Engines_Insert_Input>;
  on_conflict?: Maybe<Dw_Engines_On_Conflict>;
};

/** Boolean expression to filter rows from the table "dw_engines". All fields are combined with a logical 'AND'. */
export type Dw_Engines_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dw_Engines_Bool_Exp>>>;
  _not?: Maybe<Dw_Engines_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dw_Engines_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "dw_engines" */
export enum Dw_Engines_Constraint {
  /** unique or primary key constraint */
  DwEnginesPkey = 'dw_engines_pkey'
}

export enum Dw_Engines_Enum {
  /** Data Bricks */
  Databricks = 'DATABRICKS',
  /** Livy */
  Livy = 'LIVY',
  /** mysql */
  Mysql = 'MYSQL',
  /** postgresql */
  Postgresql = 'POSTGRESQL',
  /** Presto Hive */
  PrestoHive = 'PRESTO_HIVE',
  /** Redshift */
  Redshift = 'REDSHIFT',
  /** Snowflake */
  Snowflake = 'SNOWFLAKE',
  /** sqlite */
  Sqlite = 'SQLITE'
}

/** expression to compare columns of type dw_engines_enum. All fields are combined with logical 'AND'. */
export type Dw_Engines_Enum_Comparison_Exp = {
  _eq?: Maybe<Dw_Engines_Enum>;
  _in?: Maybe<Array<Dw_Engines_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Dw_Engines_Enum>;
  _nin?: Maybe<Array<Dw_Engines_Enum>>;
};

/** input type for inserting data into table "dw_engines" */
export type Dw_Engines_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Dw_Engines_Max_Fields = {
  __typename?: 'dw_engines_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "dw_engines" */
export type Dw_Engines_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dw_Engines_Min_Fields = {
  __typename?: 'dw_engines_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "dw_engines" */
export type Dw_Engines_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "dw_engines" */
export type Dw_Engines_Mutation_Response = {
  __typename?: 'dw_engines_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dw_Engines>;
};

/** input type for inserting object relation for remote table "dw_engines" */
export type Dw_Engines_Obj_Rel_Insert_Input = {
  data: Dw_Engines_Insert_Input;
  on_conflict?: Maybe<Dw_Engines_On_Conflict>;
};

/** on conflict condition type for table "dw_engines" */
export type Dw_Engines_On_Conflict = {
  constraint: Dw_Engines_Constraint;
  update_columns: Array<Dw_Engines_Update_Column>;
  where?: Maybe<Dw_Engines_Bool_Exp>;
};

/** ordering options when selecting data from "dw_engines" */
export type Dw_Engines_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "dw_engines" */
export type Dw_Engines_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "dw_engines" */
export enum Dw_Engines_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "dw_engines" */
export type Dw_Engines_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "dw_engines" */
export enum Dw_Engines_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}


/** expression to compare columns of type entity. All fields are combined with logical 'AND'. */
export type Entity_Comparison_Exp = {
  _eq?: Maybe<Scalars['entity']>;
  _gt?: Maybe<Scalars['entity']>;
  _gte?: Maybe<Scalars['entity']>;
  _in?: Maybe<Array<Scalars['entity']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['entity']>;
  _lte?: Maybe<Scalars['entity']>;
  _neq?: Maybe<Scalars['entity']>;
  _nin?: Maybe<Array<Scalars['entity']>>;
};

/** columns and relationships of "features" */
export type Features = {
  __typename?: 'features';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  organizations: Array<Organization_Features>;
  /** An aggregated array relationship */
  organizations_aggregate: Organization_Features_Aggregate;
  retiredAt?: Maybe<Scalars['timestamptz']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<User_Features>;
  /** An aggregated array relationship */
  users_aggregate: User_Features_Aggregate;
};


/** columns and relationships of "features" */
export type FeaturesOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organization_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Features_Order_By>>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Features_Order_By>>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUsersArgs = {
  distinct_on?: Maybe<Array<User_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Features_Order_By>>;
  where?: Maybe<User_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Features_Order_By>>;
  where?: Maybe<User_Features_Bool_Exp>;
};

/** aggregated selection of "features" */
export type Features_Aggregate = {
  __typename?: 'features_aggregate';
  aggregate?: Maybe<Features_Aggregate_Fields>;
  nodes: Array<Features>;
};

/** aggregate fields of "features" */
export type Features_Aggregate_Fields = {
  __typename?: 'features_aggregate_fields';
  avg?: Maybe<Features_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Features_Max_Fields>;
  min?: Maybe<Features_Min_Fields>;
  stddev?: Maybe<Features_Stddev_Fields>;
  stddev_pop?: Maybe<Features_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Features_Stddev_Samp_Fields>;
  sum?: Maybe<Features_Sum_Fields>;
  var_pop?: Maybe<Features_Var_Pop_Fields>;
  var_samp?: Maybe<Features_Var_Samp_Fields>;
  variance?: Maybe<Features_Variance_Fields>;
};


/** aggregate fields of "features" */
export type Features_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Features_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "features" */
export type Features_Aggregate_Order_By = {
  avg?: Maybe<Features_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Features_Max_Order_By>;
  min?: Maybe<Features_Min_Order_By>;
  stddev?: Maybe<Features_Stddev_Order_By>;
  stddev_pop?: Maybe<Features_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Features_Stddev_Samp_Order_By>;
  sum?: Maybe<Features_Sum_Order_By>;
  var_pop?: Maybe<Features_Var_Pop_Order_By>;
  var_samp?: Maybe<Features_Var_Samp_Order_By>;
  variance?: Maybe<Features_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "features" */
export type Features_Arr_Rel_Insert_Input = {
  data: Array<Features_Insert_Input>;
  on_conflict?: Maybe<Features_On_Conflict>;
};

/** aggregate avg on columns */
export type Features_Avg_Fields = {
  __typename?: 'features_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "features" */
export type Features_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "features". All fields are combined with a logical 'AND'. */
export type Features_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Features_Bool_Exp>>>;
  _not?: Maybe<Features_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Features_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organizations?: Maybe<Organization_Features_Bool_Exp>;
  retiredAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<User_Features_Bool_Exp>;
};

/** unique or primary key constraints on table "features" */
export enum Features_Constraint {
  /** unique or primary key constraint */
  FeaturesPkey = 'features_pkey'
}

/** input type for incrementing integer column in table "features" */
export type Features_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "features" */
export type Features_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizations?: Maybe<Organization_Features_Arr_Rel_Insert_Input>;
  retiredAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<User_Features_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Features_Max_Fields = {
  __typename?: 'features_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  retiredAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "features" */
export type Features_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  retiredAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Features_Min_Fields = {
  __typename?: 'features_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  retiredAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "features" */
export type Features_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  retiredAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "features" */
export type Features_Mutation_Response = {
  __typename?: 'features_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Features>;
};

/** input type for inserting object relation for remote table "features" */
export type Features_Obj_Rel_Insert_Input = {
  data: Features_Insert_Input;
  on_conflict?: Maybe<Features_On_Conflict>;
};

/** on conflict condition type for table "features" */
export type Features_On_Conflict = {
  constraint: Features_Constraint;
  update_columns: Array<Features_Update_Column>;
  where?: Maybe<Features_Bool_Exp>;
};

/** ordering options when selecting data from "features" */
export type Features_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizations_aggregate?: Maybe<Organization_Features_Aggregate_Order_By>;
  retiredAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Features_Aggregate_Order_By>;
};

/** primary key columns input for table: "features" */
export type Features_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "features" */
export enum Features_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RetiredAt = 'retiredAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "features" */
export type Features_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  retiredAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Features_Stddev_Fields = {
  __typename?: 'features_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "features" */
export type Features_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Features_Stddev_Pop_Fields = {
  __typename?: 'features_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "features" */
export type Features_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Features_Stddev_Samp_Fields = {
  __typename?: 'features_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "features" */
export type Features_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Features_Sum_Fields = {
  __typename?: 'features_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "features" */
export type Features_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "features" */
export enum Features_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RetiredAt = 'retiredAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Features_Var_Pop_Fields = {
  __typename?: 'features_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "features" */
export type Features_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Features_Var_Samp_Fields = {
  __typename?: 'features_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "features" */
export type Features_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Features_Variance_Fields = {
  __typename?: 'features_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "features" */
export type Features_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "metric_annotations" */
export type Metric_Annotations = {
  __typename?: 'metric_annotations';
  /** An object relationship */
  annotation: Annotations;
  annotationId: Scalars['Int'];
  created_at?: Maybe<Scalars['timestamptz']>;
  dimensionName?: Maybe<Scalars['String']>;
  dimensionValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  metric?: Maybe<Org_Metrics_Current_View>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name: Scalars['String'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "metric_annotations" */
export type Metric_Annotations_Aggregate = {
  __typename?: 'metric_annotations_aggregate';
  aggregate?: Maybe<Metric_Annotations_Aggregate_Fields>;
  nodes: Array<Metric_Annotations>;
};

/** aggregate fields of "metric_annotations" */
export type Metric_Annotations_Aggregate_Fields = {
  __typename?: 'metric_annotations_aggregate_fields';
  avg?: Maybe<Metric_Annotations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Annotations_Max_Fields>;
  min?: Maybe<Metric_Annotations_Min_Fields>;
  stddev?: Maybe<Metric_Annotations_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Annotations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Annotations_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Annotations_Sum_Fields>;
  var_pop?: Maybe<Metric_Annotations_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Annotations_Var_Samp_Fields>;
  variance?: Maybe<Metric_Annotations_Variance_Fields>;
};


/** aggregate fields of "metric_annotations" */
export type Metric_Annotations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Annotations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_annotations" */
export type Metric_Annotations_Aggregate_Order_By = {
  avg?: Maybe<Metric_Annotations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Annotations_Max_Order_By>;
  min?: Maybe<Metric_Annotations_Min_Order_By>;
  stddev?: Maybe<Metric_Annotations_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Annotations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Annotations_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Annotations_Sum_Order_By>;
  var_pop?: Maybe<Metric_Annotations_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Annotations_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Annotations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_annotations" */
export type Metric_Annotations_Arr_Rel_Insert_Input = {
  data: Array<Metric_Annotations_Insert_Input>;
  on_conflict?: Maybe<Metric_Annotations_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Annotations_Avg_Fields = {
  __typename?: 'metric_annotations_avg_fields';
  annotationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_annotations" */
export type Metric_Annotations_Avg_Order_By = {
  annotationId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_annotations". All fields are combined with a logical 'AND'. */
export type Metric_Annotations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Annotations_Bool_Exp>>>;
  _not?: Maybe<Metric_Annotations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Annotations_Bool_Exp>>>;
  annotation?: Maybe<Annotations_Bool_Exp>;
  annotationId?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dimensionName?: Maybe<String_Comparison_Exp>;
  dimensionValue?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  metric_name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_annotations" */
export enum Metric_Annotations_Constraint {
  /** unique or primary key constraint */
  MetricAnnotationsPkey = 'metric_annotations_pkey'
}

/** input type for incrementing integer column in table "metric_annotations" */
export type Metric_Annotations_Inc_Input = {
  annotationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_annotations" */
export type Metric_Annotations_Insert_Input = {
  annotation?: Maybe<Annotations_Obj_Rel_Insert_Input>;
  annotationId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dimensionName?: Maybe<Scalars['String']>;
  dimensionValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Metric_Annotations_Max_Fields = {
  __typename?: 'metric_annotations_max_fields';
  annotationId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dimensionName?: Maybe<Scalars['String']>;
  dimensionValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "metric_annotations" */
export type Metric_Annotations_Max_Order_By = {
  annotationId?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dimensionName?: Maybe<Order_By>;
  dimensionValue?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Annotations_Min_Fields = {
  __typename?: 'metric_annotations_min_fields';
  annotationId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dimensionName?: Maybe<Scalars['String']>;
  dimensionValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "metric_annotations" */
export type Metric_Annotations_Min_Order_By = {
  annotationId?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dimensionName?: Maybe<Order_By>;
  dimensionValue?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_annotations" */
export type Metric_Annotations_Mutation_Response = {
  __typename?: 'metric_annotations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Annotations>;
};

/** input type for inserting object relation for remote table "metric_annotations" */
export type Metric_Annotations_Obj_Rel_Insert_Input = {
  data: Metric_Annotations_Insert_Input;
  on_conflict?: Maybe<Metric_Annotations_On_Conflict>;
};

/** on conflict condition type for table "metric_annotations" */
export type Metric_Annotations_On_Conflict = {
  constraint: Metric_Annotations_Constraint;
  update_columns: Array<Metric_Annotations_Update_Column>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};

/** ordering options when selecting data from "metric_annotations" */
export type Metric_Annotations_Order_By = {
  annotation?: Maybe<Annotations_Order_By>;
  annotationId?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dimensionName?: Maybe<Order_By>;
  dimensionValue?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_annotations" */
export type Metric_Annotations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_annotations" */
export enum Metric_Annotations_Select_Column {
  /** column name */
  AnnotationId = 'annotationId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DimensionName = 'dimensionName',
  /** column name */
  DimensionValue = 'dimensionValue',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metric_name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "metric_annotations" */
export type Metric_Annotations_Set_Input = {
  annotationId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dimensionName?: Maybe<Scalars['String']>;
  dimensionValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Metric_Annotations_Stddev_Fields = {
  __typename?: 'metric_annotations_stddev_fields';
  annotationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_annotations" */
export type Metric_Annotations_Stddev_Order_By = {
  annotationId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Annotations_Stddev_Pop_Fields = {
  __typename?: 'metric_annotations_stddev_pop_fields';
  annotationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_annotations" */
export type Metric_Annotations_Stddev_Pop_Order_By = {
  annotationId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Annotations_Stddev_Samp_Fields = {
  __typename?: 'metric_annotations_stddev_samp_fields';
  annotationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_annotations" */
export type Metric_Annotations_Stddev_Samp_Order_By = {
  annotationId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Annotations_Sum_Fields = {
  __typename?: 'metric_annotations_sum_fields';
  annotationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_annotations" */
export type Metric_Annotations_Sum_Order_By = {
  annotationId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** update columns of table "metric_annotations" */
export enum Metric_Annotations_Update_Column {
  /** column name */
  AnnotationId = 'annotationId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DimensionName = 'dimensionName',
  /** column name */
  DimensionValue = 'dimensionValue',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metric_name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Metric_Annotations_Var_Pop_Fields = {
  __typename?: 'metric_annotations_var_pop_fields';
  annotationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_annotations" */
export type Metric_Annotations_Var_Pop_Order_By = {
  annotationId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Annotations_Var_Samp_Fields = {
  __typename?: 'metric_annotations_var_samp_fields';
  annotationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_annotations" */
export type Metric_Annotations_Var_Samp_Order_By = {
  annotationId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Annotations_Variance_Fields = {
  __typename?: 'metric_annotations_variance_fields';
  annotationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_annotations" */
export type Metric_Annotations_Variance_Order_By = {
  annotationId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** columns and relationships of "metric_approvals" */
export type Metric_Approvals = {
  __typename?: 'metric_approvals';
  approval_ts?: Maybe<Scalars['Int']>;
  /** Timestamp indicating when the approval was created */
  approvedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  approver: Users;
  approverId: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  metric?: Maybe<Org_Metrics_Current_View>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
};

/** aggregated selection of "metric_approvals" */
export type Metric_Approvals_Aggregate = {
  __typename?: 'metric_approvals_aggregate';
  aggregate?: Maybe<Metric_Approvals_Aggregate_Fields>;
  nodes: Array<Metric_Approvals>;
};

/** aggregate fields of "metric_approvals" */
export type Metric_Approvals_Aggregate_Fields = {
  __typename?: 'metric_approvals_aggregate_fields';
  avg?: Maybe<Metric_Approvals_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Approvals_Max_Fields>;
  min?: Maybe<Metric_Approvals_Min_Fields>;
  stddev?: Maybe<Metric_Approvals_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Approvals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Approvals_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Approvals_Sum_Fields>;
  var_pop?: Maybe<Metric_Approvals_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Approvals_Var_Samp_Fields>;
  variance?: Maybe<Metric_Approvals_Variance_Fields>;
};


/** aggregate fields of "metric_approvals" */
export type Metric_Approvals_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Approvals_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_approvals" */
export type Metric_Approvals_Aggregate_Order_By = {
  avg?: Maybe<Metric_Approvals_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Approvals_Max_Order_By>;
  min?: Maybe<Metric_Approvals_Min_Order_By>;
  stddev?: Maybe<Metric_Approvals_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Approvals_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Approvals_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Approvals_Sum_Order_By>;
  var_pop?: Maybe<Metric_Approvals_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Approvals_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Approvals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_approvals" */
export type Metric_Approvals_Arr_Rel_Insert_Input = {
  data: Array<Metric_Approvals_Insert_Input>;
  on_conflict?: Maybe<Metric_Approvals_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Approvals_Avg_Fields = {
  __typename?: 'metric_approvals_avg_fields';
  approval_ts?: Maybe<Scalars['Float']>;
  approverId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_approvals" */
export type Metric_Approvals_Avg_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_approvals". All fields are combined with a logical 'AND'. */
export type Metric_Approvals_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Approvals_Bool_Exp>>>;
  _not?: Maybe<Metric_Approvals_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Approvals_Bool_Exp>>>;
  approval_ts?: Maybe<Int_Comparison_Exp>;
  approvedAt?: Maybe<Timestamptz_Comparison_Exp>;
  approver?: Maybe<Users_Bool_Exp>;
  approverId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  metric_name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_approvals" */
export enum Metric_Approvals_Constraint {
  /** unique or primary key constraint */
  MetricApprovalsPkey = 'metric_approvals_pkey'
}

/** input type for incrementing integer column in table "metric_approvals" */
export type Metric_Approvals_Inc_Input = {
  approval_ts?: Maybe<Scalars['Int']>;
  approverId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_approvals" */
export type Metric_Approvals_Insert_Input = {
  approval_ts?: Maybe<Scalars['Int']>;
  approvedAt?: Maybe<Scalars['timestamptz']>;
  approver?: Maybe<Users_Obj_Rel_Insert_Input>;
  approverId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Metric_Approvals_Max_Fields = {
  __typename?: 'metric_approvals_max_fields';
  approval_ts?: Maybe<Scalars['Int']>;
  approvedAt?: Maybe<Scalars['timestamptz']>;
  approverId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "metric_approvals" */
export type Metric_Approvals_Max_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approvedAt?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Approvals_Min_Fields = {
  __typename?: 'metric_approvals_min_fields';
  approval_ts?: Maybe<Scalars['Int']>;
  approvedAt?: Maybe<Scalars['timestamptz']>;
  approverId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "metric_approvals" */
export type Metric_Approvals_Min_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approvedAt?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_approvals" */
export type Metric_Approvals_Mutation_Response = {
  __typename?: 'metric_approvals_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Approvals>;
};

/** input type for inserting object relation for remote table "metric_approvals" */
export type Metric_Approvals_Obj_Rel_Insert_Input = {
  data: Metric_Approvals_Insert_Input;
  on_conflict?: Maybe<Metric_Approvals_On_Conflict>;
};

/** on conflict condition type for table "metric_approvals" */
export type Metric_Approvals_On_Conflict = {
  constraint: Metric_Approvals_Constraint;
  update_columns: Array<Metric_Approvals_Update_Column>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};

/** ordering options when selecting data from "metric_approvals" */
export type Metric_Approvals_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approvedAt?: Maybe<Order_By>;
  approver?: Maybe<Users_Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_approvals" */
export type Metric_Approvals_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_approvals" */
export enum Metric_Approvals_Select_Column {
  /** column name */
  ApprovalTs = 'approval_ts',
  /** column name */
  ApprovedAt = 'approvedAt',
  /** column name */
  ApproverId = 'approverId',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metric_name',
  /** column name */
  OrganizationId = 'organizationId'
}

/** input type for updating data in table "metric_approvals" */
export type Metric_Approvals_Set_Input = {
  approval_ts?: Maybe<Scalars['Int']>;
  approvedAt?: Maybe<Scalars['timestamptz']>;
  approverId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Metric_Approvals_Stddev_Fields = {
  __typename?: 'metric_approvals_stddev_fields';
  approval_ts?: Maybe<Scalars['Float']>;
  approverId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_approvals" */
export type Metric_Approvals_Stddev_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Approvals_Stddev_Pop_Fields = {
  __typename?: 'metric_approvals_stddev_pop_fields';
  approval_ts?: Maybe<Scalars['Float']>;
  approverId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_approvals" */
export type Metric_Approvals_Stddev_Pop_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Approvals_Stddev_Samp_Fields = {
  __typename?: 'metric_approvals_stddev_samp_fields';
  approval_ts?: Maybe<Scalars['Float']>;
  approverId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_approvals" */
export type Metric_Approvals_Stddev_Samp_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Approvals_Sum_Fields = {
  __typename?: 'metric_approvals_sum_fields';
  approval_ts?: Maybe<Scalars['Int']>;
  approverId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_approvals" */
export type Metric_Approvals_Sum_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** update columns of table "metric_approvals" */
export enum Metric_Approvals_Update_Column {
  /** column name */
  ApprovalTs = 'approval_ts',
  /** column name */
  ApprovedAt = 'approvedAt',
  /** column name */
  ApproverId = 'approverId',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metric_name',
  /** column name */
  OrganizationId = 'organizationId'
}

/** aggregate var_pop on columns */
export type Metric_Approvals_Var_Pop_Fields = {
  __typename?: 'metric_approvals_var_pop_fields';
  approval_ts?: Maybe<Scalars['Float']>;
  approverId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_approvals" */
export type Metric_Approvals_Var_Pop_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Approvals_Var_Samp_Fields = {
  __typename?: 'metric_approvals_var_samp_fields';
  approval_ts?: Maybe<Scalars['Float']>;
  approverId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_approvals" */
export type Metric_Approvals_Var_Samp_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Approvals_Variance_Fields = {
  __typename?: 'metric_approvals_variance_fields';
  approval_ts?: Maybe<Scalars['Float']>;
  approverId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_approvals" */
export type Metric_Approvals_Variance_Order_By = {
  approval_ts?: Maybe<Order_By>;
  approverId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/**
 * Join table connecting Metric Collections with their Metrics
 *
 *
 * columns and relationships of "metric_collection_metrics"
 */
export type Metric_Collection_Metrics = {
  __typename?: 'metric_collection_metrics';
  /** Timestamp indicating when the Metric was added to the Metric Collection */
  createdAt: Scalars['timestamptz'];
  /** Integer used to provide a UI with an indication to make the Metric's chart larger as desired */
  emphasis: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  metric: Org_Metrics_Current_View;
  /** An object relationship */
  metricCollection: Metric_Collections;
  metricCollectionId: Scalars['Int'];
  metricId: Scalars['Int'];
  /** Integer used for ordering Metrics within a Metric Collection */
  position: Scalars['Int'];
  /** Timestamp indicating when the record was last updated */
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "metric_collection_metrics" */
export type Metric_Collection_Metrics_Aggregate = {
  __typename?: 'metric_collection_metrics_aggregate';
  aggregate?: Maybe<Metric_Collection_Metrics_Aggregate_Fields>;
  nodes: Array<Metric_Collection_Metrics>;
};

/** aggregate fields of "metric_collection_metrics" */
export type Metric_Collection_Metrics_Aggregate_Fields = {
  __typename?: 'metric_collection_metrics_aggregate_fields';
  avg?: Maybe<Metric_Collection_Metrics_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Collection_Metrics_Max_Fields>;
  min?: Maybe<Metric_Collection_Metrics_Min_Fields>;
  stddev?: Maybe<Metric_Collection_Metrics_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Collection_Metrics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Collection_Metrics_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Collection_Metrics_Sum_Fields>;
  var_pop?: Maybe<Metric_Collection_Metrics_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Collection_Metrics_Var_Samp_Fields>;
  variance?: Maybe<Metric_Collection_Metrics_Variance_Fields>;
};


/** aggregate fields of "metric_collection_metrics" */
export type Metric_Collection_Metrics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Aggregate_Order_By = {
  avg?: Maybe<Metric_Collection_Metrics_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Collection_Metrics_Max_Order_By>;
  min?: Maybe<Metric_Collection_Metrics_Min_Order_By>;
  stddev?: Maybe<Metric_Collection_Metrics_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Collection_Metrics_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Collection_Metrics_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Collection_Metrics_Sum_Order_By>;
  var_pop?: Maybe<Metric_Collection_Metrics_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Collection_Metrics_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Collection_Metrics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Arr_Rel_Insert_Input = {
  data: Array<Metric_Collection_Metrics_Insert_Input>;
  on_conflict?: Maybe<Metric_Collection_Metrics_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Collection_Metrics_Avg_Fields = {
  __typename?: 'metric_collection_metrics_avg_fields';
  emphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Avg_Order_By = {
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_collection_metrics". All fields are combined with a logical 'AND'. */
export type Metric_Collection_Metrics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Collection_Metrics_Bool_Exp>>>;
  _not?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Collection_Metrics_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  emphasis?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricCollection?: Maybe<Metric_Collections_Bool_Exp>;
  metricCollectionId?: Maybe<Int_Comparison_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_collection_metrics" */
export enum Metric_Collection_Metrics_Constraint {
  /** unique or primary key constraint */
  MetricCollectionMetricsMetricCollectionIdMetricIdKey = 'metric_collection_metrics_metric_collection_id_metric_id_key',
  /** unique or primary key constraint */
  MetricCollectionMetricsPkey = 'metric_collection_metrics_pkey'
}

/** input type for incrementing integer column in table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Inc_Input = {
  emphasis?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  emphasis?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricCollection?: Maybe<Metric_Collections_Obj_Rel_Insert_Input>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Metric_Collection_Metrics_Max_Fields = {
  __typename?: 'metric_collection_metrics_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  emphasis?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Collection_Metrics_Min_Fields = {
  __typename?: 'metric_collection_metrics_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  emphasis?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Mutation_Response = {
  __typename?: 'metric_collection_metrics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Collection_Metrics>;
};

/** input type for inserting object relation for remote table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Obj_Rel_Insert_Input = {
  data: Metric_Collection_Metrics_Insert_Input;
  on_conflict?: Maybe<Metric_Collection_Metrics_On_Conflict>;
};

/** on conflict condition type for table "metric_collection_metrics" */
export type Metric_Collection_Metrics_On_Conflict = {
  constraint: Metric_Collection_Metrics_Constraint;
  update_columns: Array<Metric_Collection_Metrics_Update_Column>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};

/** ordering options when selecting data from "metric_collection_metrics" */
export type Metric_Collection_Metrics_Order_By = {
  createdAt?: Maybe<Order_By>;
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricCollection?: Maybe<Metric_Collections_Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_collection_metrics" */
export type Metric_Collection_Metrics_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_collection_metrics" */
export enum Metric_Collection_Metrics_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Emphasis = 'emphasis',
  /** column name */
  Id = 'id',
  /** column name */
  MetricCollectionId = 'metricCollectionId',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  emphasis?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Metric_Collection_Metrics_Stddev_Fields = {
  __typename?: 'metric_collection_metrics_stddev_fields';
  emphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Stddev_Order_By = {
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Collection_Metrics_Stddev_Pop_Fields = {
  __typename?: 'metric_collection_metrics_stddev_pop_fields';
  emphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Stddev_Pop_Order_By = {
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Collection_Metrics_Stddev_Samp_Fields = {
  __typename?: 'metric_collection_metrics_stddev_samp_fields';
  emphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Stddev_Samp_Order_By = {
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Collection_Metrics_Sum_Fields = {
  __typename?: 'metric_collection_metrics_sum_fields';
  emphasis?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Sum_Order_By = {
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** update columns of table "metric_collection_metrics" */
export enum Metric_Collection_Metrics_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Emphasis = 'emphasis',
  /** column name */
  Id = 'id',
  /** column name */
  MetricCollectionId = 'metricCollectionId',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Metric_Collection_Metrics_Var_Pop_Fields = {
  __typename?: 'metric_collection_metrics_var_pop_fields';
  emphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Var_Pop_Order_By = {
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Collection_Metrics_Var_Samp_Fields = {
  __typename?: 'metric_collection_metrics_var_samp_fields';
  emphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Var_Samp_Order_By = {
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Collection_Metrics_Variance_Fields = {
  __typename?: 'metric_collection_metrics_variance_fields';
  emphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricCollectionId?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_collection_metrics" */
export type Metric_Collection_Metrics_Variance_Order_By = {
  emphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollectionId?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** columns and relationships of "metric_collection_view" */
export type Metric_Collection_View = {
  __typename?: 'metric_collection_view';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  metric_collection?: Maybe<Metric_Collections>;
  metric_collection_id: Scalars['Int'];
  organization_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "metric_collection_view" */
export type Metric_Collection_View_Aggregate = {
  __typename?: 'metric_collection_view_aggregate';
  aggregate?: Maybe<Metric_Collection_View_Aggregate_Fields>;
  nodes: Array<Metric_Collection_View>;
};

/** aggregate fields of "metric_collection_view" */
export type Metric_Collection_View_Aggregate_Fields = {
  __typename?: 'metric_collection_view_aggregate_fields';
  avg?: Maybe<Metric_Collection_View_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Collection_View_Max_Fields>;
  min?: Maybe<Metric_Collection_View_Min_Fields>;
  stddev?: Maybe<Metric_Collection_View_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Collection_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Collection_View_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Collection_View_Sum_Fields>;
  var_pop?: Maybe<Metric_Collection_View_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Collection_View_Var_Samp_Fields>;
  variance?: Maybe<Metric_Collection_View_Variance_Fields>;
};


/** aggregate fields of "metric_collection_view" */
export type Metric_Collection_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Collection_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_collection_view" */
export type Metric_Collection_View_Aggregate_Order_By = {
  avg?: Maybe<Metric_Collection_View_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Collection_View_Max_Order_By>;
  min?: Maybe<Metric_Collection_View_Min_Order_By>;
  stddev?: Maybe<Metric_Collection_View_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Collection_View_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Collection_View_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Collection_View_Sum_Order_By>;
  var_pop?: Maybe<Metric_Collection_View_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Collection_View_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Collection_View_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_collection_view" */
export type Metric_Collection_View_Arr_Rel_Insert_Input = {
  data: Array<Metric_Collection_View_Insert_Input>;
  on_conflict?: Maybe<Metric_Collection_View_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Collection_View_Avg_Fields = {
  __typename?: 'metric_collection_view_avg_fields';
  id?: Maybe<Scalars['Float']>;
  metric_collection_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Avg_Order_By = {
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_collection_view". All fields are combined with a logical 'AND'. */
export type Metric_Collection_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Collection_View_Bool_Exp>>>;
  _not?: Maybe<Metric_Collection_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Collection_View_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric_collection?: Maybe<Metric_Collections_Bool_Exp>;
  metric_collection_id?: Maybe<Int_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_collection_view" */
export enum Metric_Collection_View_Constraint {
  /** unique or primary key constraint */
  MetricCollectionViewPkey = 'metric_collection_view_pkey'
}

/** input type for incrementing integer column in table "metric_collection_view" */
export type Metric_Collection_View_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  metric_collection_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_collection_view" */
export type Metric_Collection_View_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metric_collection?: Maybe<Metric_Collections_Obj_Rel_Insert_Input>;
  metric_collection_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Metric_Collection_View_Max_Fields = {
  __typename?: 'metric_collection_view_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metric_collection_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Collection_View_Min_Fields = {
  __typename?: 'metric_collection_view_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metric_collection_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_collection_view" */
export type Metric_Collection_View_Mutation_Response = {
  __typename?: 'metric_collection_view_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Collection_View>;
};

/** input type for inserting object relation for remote table "metric_collection_view" */
export type Metric_Collection_View_Obj_Rel_Insert_Input = {
  data: Metric_Collection_View_Insert_Input;
  on_conflict?: Maybe<Metric_Collection_View_On_Conflict>;
};

/** on conflict condition type for table "metric_collection_view" */
export type Metric_Collection_View_On_Conflict = {
  constraint: Metric_Collection_View_Constraint;
  update_columns: Array<Metric_Collection_View_Update_Column>;
  where?: Maybe<Metric_Collection_View_Bool_Exp>;
};

/** ordering options when selecting data from "metric_collection_view" */
export type Metric_Collection_View_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_collection?: Maybe<Metric_Collections_Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_collection_view" */
export type Metric_Collection_View_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_collection_view" */
export enum Metric_Collection_View_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MetricCollectionId = 'metric_collection_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "metric_collection_view" */
export type Metric_Collection_View_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metric_collection_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Metric_Collection_View_Stddev_Fields = {
  __typename?: 'metric_collection_view_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  metric_collection_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Collection_View_Stddev_Pop_Fields = {
  __typename?: 'metric_collection_view_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  metric_collection_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Collection_View_Stddev_Samp_Fields = {
  __typename?: 'metric_collection_view_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  metric_collection_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Collection_View_Sum_Fields = {
  __typename?: 'metric_collection_view_sum_fields';
  id?: Maybe<Scalars['Int']>;
  metric_collection_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Sum_Order_By = {
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "metric_collection_view" */
export enum Metric_Collection_View_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MetricCollectionId = 'metric_collection_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Metric_Collection_View_Var_Pop_Fields = {
  __typename?: 'metric_collection_view_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  metric_collection_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Collection_View_Var_Samp_Fields = {
  __typename?: 'metric_collection_view_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  metric_collection_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Collection_View_Variance_Fields = {
  __typename?: 'metric_collection_view_variance_fields';
  id?: Maybe<Scalars['Float']>;
  metric_collection_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_collection_view" */
export type Metric_Collection_View_Variance_Order_By = {
  id?: Maybe<Order_By>;
  metric_collection_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/**
 * Metric Collections are useful groupings of Metrics for analysis and easy filtering
 *
 *
 * columns and relationships of "metric_collections"
 */
export type Metric_Collections = {
  __typename?: 'metric_collections';
  /** Timestamp indicating when the Metric Collection was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['Int'];
  /** An object relationship */
  createdByUser: Users;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  /** Soft delete mechanism: Timestamp indicating when the Metric Collection was deleted */
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  metric_collection_views: Array<Metric_Collection_View>;
  /** An aggregated array relationship */
  metric_collection_views_aggregate: Metric_Collection_View_Aggregate;
  /** An array relationship */
  metrics: Array<Metric_Collection_Metrics>;
  /** An aggregated array relationship */
  metrics_aggregate: Metric_Collection_Metrics_Aggregate;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  ownerTeam?: Maybe<Teams>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  primaryDashboard?: Maybe<Dashboards>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  /** URL-friendly identifier for the Metric Collection (e.g. https://app.transformdata.io/metric_collections/critical_kpis */
  slug: Scalars['String'];
  title: Scalars['String'];
  /** Timestamp indicating when the Metric Collection was last updated */
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/**
 * Metric Collections are useful groupings of Metrics for analysis and easy filtering
 *
 *
 * columns and relationships of "metric_collections"
 */
export type Metric_CollectionsMetric_Collection_ViewsArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_View_Order_By>>;
  where?: Maybe<Metric_Collection_View_Bool_Exp>;
};


/**
 * Metric Collections are useful groupings of Metrics for analysis and easy filtering
 *
 *
 * columns and relationships of "metric_collections"
 */
export type Metric_CollectionsMetric_Collection_Views_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_View_Order_By>>;
  where?: Maybe<Metric_Collection_View_Bool_Exp>;
};


/**
 * Metric Collections are useful groupings of Metrics for analysis and easy filtering
 *
 *
 * columns and relationships of "metric_collections"
 */
export type Metric_CollectionsMetricsArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_Metrics_Order_By>>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};


/**
 * Metric Collections are useful groupings of Metrics for analysis and easy filtering
 *
 *
 * columns and relationships of "metric_collections"
 */
export type Metric_CollectionsMetrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_Metrics_Order_By>>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};

/** aggregated selection of "metric_collections" */
export type Metric_Collections_Aggregate = {
  __typename?: 'metric_collections_aggregate';
  aggregate?: Maybe<Metric_Collections_Aggregate_Fields>;
  nodes: Array<Metric_Collections>;
};

/** aggregate fields of "metric_collections" */
export type Metric_Collections_Aggregate_Fields = {
  __typename?: 'metric_collections_aggregate_fields';
  avg?: Maybe<Metric_Collections_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Collections_Max_Fields>;
  min?: Maybe<Metric_Collections_Min_Fields>;
  stddev?: Maybe<Metric_Collections_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Collections_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Collections_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Collections_Sum_Fields>;
  var_pop?: Maybe<Metric_Collections_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Collections_Var_Samp_Fields>;
  variance?: Maybe<Metric_Collections_Variance_Fields>;
};


/** aggregate fields of "metric_collections" */
export type Metric_Collections_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Collections_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_collections" */
export type Metric_Collections_Aggregate_Order_By = {
  avg?: Maybe<Metric_Collections_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Collections_Max_Order_By>;
  min?: Maybe<Metric_Collections_Min_Order_By>;
  stddev?: Maybe<Metric_Collections_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Collections_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Collections_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Collections_Sum_Order_By>;
  var_pop?: Maybe<Metric_Collections_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Collections_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Collections_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_collections" */
export type Metric_Collections_Arr_Rel_Insert_Input = {
  data: Array<Metric_Collections_Insert_Input>;
  on_conflict?: Maybe<Metric_Collections_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Collections_Avg_Fields = {
  __typename?: 'metric_collections_avg_fields';
  createdBy?: Maybe<Scalars['Float']>;
  defaultEmphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_collections" */
export type Metric_Collections_Avg_Order_By = {
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_collections". All fields are combined with a logical 'AND'. */
export type Metric_Collections_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Collections_Bool_Exp>>>;
  _not?: Maybe<Metric_Collections_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Collections_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<Int_Comparison_Exp>;
  createdByUser?: Maybe<Users_Bool_Exp>;
  defaultEmphasis?: Maybe<Int_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric_collection_views?: Maybe<Metric_Collection_View_Bool_Exp>;
  metrics?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  ownerTeam?: Maybe<Teams_Bool_Exp>;
  ownerTeamId?: Maybe<Int_Comparison_Exp>;
  primaryDashboard?: Maybe<Dashboards_Bool_Exp>;
  primaryDashboardId?: Maybe<Int_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_collections" */
export enum Metric_Collections_Constraint {
  /** unique or primary key constraint */
  MetricCollectionPkey = 'metric_collection_pkey',
  /** unique or primary key constraint */
  MetricCollectionsOrganizationIdSlugKey = 'metric_collections_organization_id_slug_key'
}

/** input type for incrementing integer column in table "metric_collections" */
export type Metric_Collections_Inc_Input = {
  createdBy?: Maybe<Scalars['Int']>;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_collections" */
export type Metric_Collections_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdByUser?: Maybe<Users_Obj_Rel_Insert_Input>;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metric_collection_views?: Maybe<Metric_Collection_View_Arr_Rel_Insert_Input>;
  metrics?: Maybe<Metric_Collection_Metrics_Arr_Rel_Insert_Input>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeam?: Maybe<Teams_Obj_Rel_Insert_Input>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  primaryDashboard?: Maybe<Dashboards_Obj_Rel_Insert_Input>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Metric_Collections_Max_Fields = {
  __typename?: 'metric_collections_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "metric_collections" */
export type Metric_Collections_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Collections_Min_Fields = {
  __typename?: 'metric_collections_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "metric_collections" */
export type Metric_Collections_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_collections" */
export type Metric_Collections_Mutation_Response = {
  __typename?: 'metric_collections_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Collections>;
};

/** input type for inserting object relation for remote table "metric_collections" */
export type Metric_Collections_Obj_Rel_Insert_Input = {
  data: Metric_Collections_Insert_Input;
  on_conflict?: Maybe<Metric_Collections_On_Conflict>;
};

/** on conflict condition type for table "metric_collections" */
export type Metric_Collections_On_Conflict = {
  constraint: Metric_Collections_Constraint;
  update_columns: Array<Metric_Collections_Update_Column>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};

/** ordering options when selecting data from "metric_collections" */
export type Metric_Collections_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  createdByUser?: Maybe<Users_Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_collection_views_aggregate?: Maybe<Metric_Collection_View_Aggregate_Order_By>;
  metrics_aggregate?: Maybe<Metric_Collection_Metrics_Aggregate_Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeam?: Maybe<Teams_Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboard?: Maybe<Dashboards_Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_collections" */
export type Metric_Collections_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_collections" */
export enum Metric_Collections_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  DefaultEmphasis = 'defaultEmphasis',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  OwnerTeamId = 'ownerTeamId',
  /** column name */
  PrimaryDashboardId = 'primaryDashboardId',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "metric_collections" */
export type Metric_Collections_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Metric_Collections_Stddev_Fields = {
  __typename?: 'metric_collections_stddev_fields';
  createdBy?: Maybe<Scalars['Float']>;
  defaultEmphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_collections" */
export type Metric_Collections_Stddev_Order_By = {
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Collections_Stddev_Pop_Fields = {
  __typename?: 'metric_collections_stddev_pop_fields';
  createdBy?: Maybe<Scalars['Float']>;
  defaultEmphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_collections" */
export type Metric_Collections_Stddev_Pop_Order_By = {
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Collections_Stddev_Samp_Fields = {
  __typename?: 'metric_collections_stddev_samp_fields';
  createdBy?: Maybe<Scalars['Float']>;
  defaultEmphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_collections" */
export type Metric_Collections_Stddev_Samp_Order_By = {
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Collections_Sum_Fields = {
  __typename?: 'metric_collections_sum_fields';
  createdBy?: Maybe<Scalars['Int']>;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_collections" */
export type Metric_Collections_Sum_Order_By = {
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** update columns of table "metric_collections" */
export enum Metric_Collections_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  DefaultEmphasis = 'defaultEmphasis',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  OwnerTeamId = 'ownerTeamId',
  /** column name */
  PrimaryDashboardId = 'primaryDashboardId',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Metric_Collections_Var_Pop_Fields = {
  __typename?: 'metric_collections_var_pop_fields';
  createdBy?: Maybe<Scalars['Float']>;
  defaultEmphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_collections" */
export type Metric_Collections_Var_Pop_Order_By = {
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Collections_Var_Samp_Fields = {
  __typename?: 'metric_collections_var_samp_fields';
  createdBy?: Maybe<Scalars['Float']>;
  defaultEmphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_collections" */
export type Metric_Collections_Var_Samp_Order_By = {
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Collections_Variance_Fields = {
  __typename?: 'metric_collections_variance_fields';
  createdBy?: Maybe<Scalars['Float']>;
  defaultEmphasis?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_collections" */
export type Metric_Collections_Variance_Order_By = {
  createdBy?: Maybe<Order_By>;
  defaultEmphasis?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/**
 * This view filters Metric Descriptions to the most recent.
 *
 *
 * columns and relationships of "metric_current_description"
 */
export type Metric_Current_Description = {
  __typename?: 'metric_current_description';
  /** An object relationship */
  author?: Maybe<Users>;
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  metric?: Maybe<Org_Metrics_Current_View>;
  metric_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "metric_current_description" */
export type Metric_Current_Description_Aggregate = {
  __typename?: 'metric_current_description_aggregate';
  aggregate?: Maybe<Metric_Current_Description_Aggregate_Fields>;
  nodes: Array<Metric_Current_Description>;
};

/** aggregate fields of "metric_current_description" */
export type Metric_Current_Description_Aggregate_Fields = {
  __typename?: 'metric_current_description_aggregate_fields';
  avg?: Maybe<Metric_Current_Description_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Current_Description_Max_Fields>;
  min?: Maybe<Metric_Current_Description_Min_Fields>;
  stddev?: Maybe<Metric_Current_Description_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Current_Description_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Current_Description_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Current_Description_Sum_Fields>;
  var_pop?: Maybe<Metric_Current_Description_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Current_Description_Var_Samp_Fields>;
  variance?: Maybe<Metric_Current_Description_Variance_Fields>;
};


/** aggregate fields of "metric_current_description" */
export type Metric_Current_Description_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Current_Description_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_current_description" */
export type Metric_Current_Description_Aggregate_Order_By = {
  avg?: Maybe<Metric_Current_Description_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Current_Description_Max_Order_By>;
  min?: Maybe<Metric_Current_Description_Min_Order_By>;
  stddev?: Maybe<Metric_Current_Description_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Current_Description_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Current_Description_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Current_Description_Sum_Order_By>;
  var_pop?: Maybe<Metric_Current_Description_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Current_Description_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Current_Description_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_current_description" */
export type Metric_Current_Description_Arr_Rel_Insert_Input = {
  data: Array<Metric_Current_Description_Insert_Input>;
};

/** aggregate avg on columns */
export type Metric_Current_Description_Avg_Fields = {
  __typename?: 'metric_current_description_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_current_description" */
export type Metric_Current_Description_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_current_description". All fields are combined with a logical 'AND'. */
export type Metric_Current_Description_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Current_Description_Bool_Exp>>>;
  _not?: Maybe<Metric_Current_Description_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Current_Description_Bool_Exp>>>;
  author?: Maybe<Users_Bool_Exp>;
  author_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metric_id?: Maybe<Int_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing integer column in table "metric_current_description" */
export type Metric_Current_Description_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_current_description" */
export type Metric_Current_Description_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metric_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Metric_Current_Description_Max_Fields = {
  __typename?: 'metric_current_description_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metric_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "metric_current_description" */
export type Metric_Current_Description_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Current_Description_Min_Fields = {
  __typename?: 'metric_current_description_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metric_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "metric_current_description" */
export type Metric_Current_Description_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_current_description" */
export type Metric_Current_Description_Mutation_Response = {
  __typename?: 'metric_current_description_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Current_Description>;
};

/** input type for inserting object relation for remote table "metric_current_description" */
export type Metric_Current_Description_Obj_Rel_Insert_Input = {
  data: Metric_Current_Description_Insert_Input;
};

/** ordering options when selecting data from "metric_current_description" */
export type Metric_Current_Description_Order_By = {
  author?: Maybe<Users_Order_By>;
  author_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** select columns of table "metric_current_description" */
export enum Metric_Current_Description_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metric_id',
  /** column name */
  OrganizationId = 'organization_id'
}

/** input type for updating data in table "metric_current_description" */
export type Metric_Current_Description_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metric_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Metric_Current_Description_Stddev_Fields = {
  __typename?: 'metric_current_description_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_current_description" */
export type Metric_Current_Description_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Current_Description_Stddev_Pop_Fields = {
  __typename?: 'metric_current_description_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_current_description" */
export type Metric_Current_Description_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Current_Description_Stddev_Samp_Fields = {
  __typename?: 'metric_current_description_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_current_description" */
export type Metric_Current_Description_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Current_Description_Sum_Fields = {
  __typename?: 'metric_current_description_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_current_description" */
export type Metric_Current_Description_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Metric_Current_Description_Var_Pop_Fields = {
  __typename?: 'metric_current_description_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_current_description" */
export type Metric_Current_Description_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Current_Description_Var_Samp_Fields = {
  __typename?: 'metric_current_description_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_current_description" */
export type Metric_Current_Description_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Current_Description_Variance_Fields = {
  __typename?: 'metric_current_description_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_current_description" */
export type Metric_Current_Description_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/**
 * While Metric Definitions are taken directly from configs, Metric Descriptions are user-editable in the UI and provide broader context on a Metric.
 *
 *
 * columns and relationships of "metric_descriptions"
 */
export type Metric_Descriptions = {
  __typename?: 'metric_descriptions';
  /** An object relationship */
  author: Users;
  authorId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  metric: Org_Metrics_Current_View;
  metricId: Scalars['Int'];
  /** An object relationship */
  organization?: Maybe<Organizations>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "metric_descriptions" */
export type Metric_Descriptions_Aggregate = {
  __typename?: 'metric_descriptions_aggregate';
  aggregate?: Maybe<Metric_Descriptions_Aggregate_Fields>;
  nodes: Array<Metric_Descriptions>;
};

/** aggregate fields of "metric_descriptions" */
export type Metric_Descriptions_Aggregate_Fields = {
  __typename?: 'metric_descriptions_aggregate_fields';
  avg?: Maybe<Metric_Descriptions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Descriptions_Max_Fields>;
  min?: Maybe<Metric_Descriptions_Min_Fields>;
  stddev?: Maybe<Metric_Descriptions_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Descriptions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Descriptions_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Descriptions_Sum_Fields>;
  var_pop?: Maybe<Metric_Descriptions_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Descriptions_Var_Samp_Fields>;
  variance?: Maybe<Metric_Descriptions_Variance_Fields>;
};


/** aggregate fields of "metric_descriptions" */
export type Metric_Descriptions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Descriptions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_descriptions" */
export type Metric_Descriptions_Aggregate_Order_By = {
  avg?: Maybe<Metric_Descriptions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Descriptions_Max_Order_By>;
  min?: Maybe<Metric_Descriptions_Min_Order_By>;
  stddev?: Maybe<Metric_Descriptions_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Descriptions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Descriptions_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Descriptions_Sum_Order_By>;
  var_pop?: Maybe<Metric_Descriptions_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Descriptions_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Descriptions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_descriptions" */
export type Metric_Descriptions_Arr_Rel_Insert_Input = {
  data: Array<Metric_Descriptions_Insert_Input>;
  on_conflict?: Maybe<Metric_Descriptions_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Descriptions_Avg_Fields = {
  __typename?: 'metric_descriptions_avg_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Avg_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_descriptions". All fields are combined with a logical 'AND'. */
export type Metric_Descriptions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Descriptions_Bool_Exp>>>;
  _not?: Maybe<Metric_Descriptions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Descriptions_Bool_Exp>>>;
  author?: Maybe<Users_Bool_Exp>;
  authorId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_descriptions" */
export enum Metric_Descriptions_Constraint {
  /** unique or primary key constraint */
  MetricDescriptionsPkey = 'metric_descriptions_pkey'
}

/** input type for incrementing integer column in table "metric_descriptions" */
export type Metric_Descriptions_Inc_Input = {
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_descriptions" */
export type Metric_Descriptions_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Metric_Descriptions_Max_Fields = {
  __typename?: 'metric_descriptions_max_fields';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Descriptions_Min_Fields = {
  __typename?: 'metric_descriptions_min_fields';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_descriptions" */
export type Metric_Descriptions_Mutation_Response = {
  __typename?: 'metric_descriptions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Descriptions>;
};

/** input type for inserting object relation for remote table "metric_descriptions" */
export type Metric_Descriptions_Obj_Rel_Insert_Input = {
  data: Metric_Descriptions_Insert_Input;
  on_conflict?: Maybe<Metric_Descriptions_On_Conflict>;
};

/** on conflict condition type for table "metric_descriptions" */
export type Metric_Descriptions_On_Conflict = {
  constraint: Metric_Descriptions_Constraint;
  update_columns: Array<Metric_Descriptions_Update_Column>;
  where?: Maybe<Metric_Descriptions_Bool_Exp>;
};

/** ordering options when selecting data from "metric_descriptions" */
export type Metric_Descriptions_Order_By = {
  author?: Maybe<Users_Order_By>;
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_descriptions" */
export type Metric_Descriptions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_descriptions" */
export enum Metric_Descriptions_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  OrganizationId = 'organizationId'
}

/** input type for updating data in table "metric_descriptions" */
export type Metric_Descriptions_Set_Input = {
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Metric_Descriptions_Stddev_Fields = {
  __typename?: 'metric_descriptions_stddev_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Stddev_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Descriptions_Stddev_Pop_Fields = {
  __typename?: 'metric_descriptions_stddev_pop_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Stddev_Pop_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Descriptions_Stddev_Samp_Fields = {
  __typename?: 'metric_descriptions_stddev_samp_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Stddev_Samp_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Descriptions_Sum_Fields = {
  __typename?: 'metric_descriptions_sum_fields';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Sum_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** update columns of table "metric_descriptions" */
export enum Metric_Descriptions_Update_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  OrganizationId = 'organizationId'
}

/** aggregate var_pop on columns */
export type Metric_Descriptions_Var_Pop_Fields = {
  __typename?: 'metric_descriptions_var_pop_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Var_Pop_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Descriptions_Var_Samp_Fields = {
  __typename?: 'metric_descriptions_var_samp_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Var_Samp_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Descriptions_Variance_Fields = {
  __typename?: 'metric_descriptions_variance_fields';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_descriptions" */
export type Metric_Descriptions_Variance_Order_By = {
  authorId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** columns and relationships of "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources = {
  __typename?: 'metric_lineage_data_sources';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  dataSourceVersion: Data_Source_Versions;
  data_source_version_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  metricVersion: Metric_Versions;
  metric_version_id: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Aggregate = {
  __typename?: 'metric_lineage_data_sources_aggregate';
  aggregate?: Maybe<Metric_Lineage_Data_Sources_Aggregate_Fields>;
  nodes: Array<Metric_Lineage_Data_Sources>;
};

/** aggregate fields of "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Aggregate_Fields = {
  __typename?: 'metric_lineage_data_sources_aggregate_fields';
  avg?: Maybe<Metric_Lineage_Data_Sources_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Lineage_Data_Sources_Max_Fields>;
  min?: Maybe<Metric_Lineage_Data_Sources_Min_Fields>;
  stddev?: Maybe<Metric_Lineage_Data_Sources_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Lineage_Data_Sources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Lineage_Data_Sources_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Lineage_Data_Sources_Sum_Fields>;
  var_pop?: Maybe<Metric_Lineage_Data_Sources_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Lineage_Data_Sources_Var_Samp_Fields>;
  variance?: Maybe<Metric_Lineage_Data_Sources_Variance_Fields>;
};


/** aggregate fields of "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Aggregate_Order_By = {
  avg?: Maybe<Metric_Lineage_Data_Sources_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Lineage_Data_Sources_Max_Order_By>;
  min?: Maybe<Metric_Lineage_Data_Sources_Min_Order_By>;
  stddev?: Maybe<Metric_Lineage_Data_Sources_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Lineage_Data_Sources_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Lineage_Data_Sources_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Lineage_Data_Sources_Sum_Order_By>;
  var_pop?: Maybe<Metric_Lineage_Data_Sources_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Lineage_Data_Sources_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Lineage_Data_Sources_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Arr_Rel_Insert_Input = {
  data: Array<Metric_Lineage_Data_Sources_Insert_Input>;
  on_conflict?: Maybe<Metric_Lineage_Data_Sources_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Lineage_Data_Sources_Avg_Fields = {
  __typename?: 'metric_lineage_data_sources_avg_fields';
  data_source_version_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_version_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Avg_Order_By = {
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_lineage_data_sources". All fields are combined with a logical 'AND'. */
export type Metric_Lineage_Data_Sources_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Lineage_Data_Sources_Bool_Exp>>>;
  _not?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Lineage_Data_Sources_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dataSourceVersion?: Maybe<Data_Source_Versions_Bool_Exp>;
  data_source_version_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metricVersion?: Maybe<Metric_Versions_Bool_Exp>;
  metric_version_id?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_lineage_data_sources" */
export enum Metric_Lineage_Data_Sources_Constraint {
  /** unique or primary key constraint */
  MetricLineageDataSourcesMetricVersionIdDataSourceVKey = 'metric_lineage_data_sources_metric_version_id_data_source_v_key',
  /** unique or primary key constraint */
  MetricLineageDataSourcesPkey = 'metric_lineage_data_sources_pkey'
}

/** input type for incrementing integer column in table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Inc_Input = {
  data_source_version_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric_version_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dataSourceVersion?: Maybe<Data_Source_Versions_Obj_Rel_Insert_Input>;
  data_source_version_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricVersion?: Maybe<Metric_Versions_Obj_Rel_Insert_Input>;
  metric_version_id?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Metric_Lineage_Data_Sources_Max_Fields = {
  __typename?: 'metric_lineage_data_sources_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_source_version_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric_version_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Lineage_Data_Sources_Min_Fields = {
  __typename?: 'metric_lineage_data_sources_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_source_version_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric_version_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Mutation_Response = {
  __typename?: 'metric_lineage_data_sources_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Lineage_Data_Sources>;
};

/** input type for inserting object relation for remote table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Obj_Rel_Insert_Input = {
  data: Metric_Lineage_Data_Sources_Insert_Input;
  on_conflict?: Maybe<Metric_Lineage_Data_Sources_On_Conflict>;
};

/** on conflict condition type for table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_On_Conflict = {
  constraint: Metric_Lineage_Data_Sources_Constraint;
  update_columns: Array<Metric_Lineage_Data_Sources_Update_Column>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};

/** ordering options when selecting data from "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Order_By = {
  created_at?: Maybe<Order_By>;
  dataSourceVersion?: Maybe<Data_Source_Versions_Order_By>;
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricVersion?: Maybe<Metric_Versions_Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organization_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_lineage_data_sources" */
export enum Metric_Lineage_Data_Sources_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataSourceVersionId = 'data_source_version_id',
  /** column name */
  Id = 'id',
  /** column name */
  MetricVersionId = 'metric_version_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data_source_version_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric_version_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Metric_Lineage_Data_Sources_Stddev_Fields = {
  __typename?: 'metric_lineage_data_sources_stddev_fields';
  data_source_version_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_version_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Stddev_Order_By = {
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Lineage_Data_Sources_Stddev_Pop_Fields = {
  __typename?: 'metric_lineage_data_sources_stddev_pop_fields';
  data_source_version_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_version_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Stddev_Pop_Order_By = {
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Lineage_Data_Sources_Stddev_Samp_Fields = {
  __typename?: 'metric_lineage_data_sources_stddev_samp_fields';
  data_source_version_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_version_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Stddev_Samp_Order_By = {
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Lineage_Data_Sources_Sum_Fields = {
  __typename?: 'metric_lineage_data_sources_sum_fields';
  data_source_version_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric_version_id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Sum_Order_By = {
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** update columns of table "metric_lineage_data_sources" */
export enum Metric_Lineage_Data_Sources_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataSourceVersionId = 'data_source_version_id',
  /** column name */
  Id = 'id',
  /** column name */
  MetricVersionId = 'metric_version_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Metric_Lineage_Data_Sources_Var_Pop_Fields = {
  __typename?: 'metric_lineage_data_sources_var_pop_fields';
  data_source_version_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_version_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Var_Pop_Order_By = {
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Lineage_Data_Sources_Var_Samp_Fields = {
  __typename?: 'metric_lineage_data_sources_var_samp_fields';
  data_source_version_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_version_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Var_Samp_Order_By = {
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Lineage_Data_Sources_Variance_Fields = {
  __typename?: 'metric_lineage_data_sources_variance_fields';
  data_source_version_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metric_version_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_lineage_data_sources" */
export type Metric_Lineage_Data_Sources_Variance_Order_By = {
  data_source_version_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric_version_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** columns and relationships of "metric_team_owners" */
export type Metric_Team_Owners = {
  __typename?: 'metric_team_owners';
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  metric?: Maybe<Org_Metrics_Current_View>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['Int'];
};

/** aggregated selection of "metric_team_owners" */
export type Metric_Team_Owners_Aggregate = {
  __typename?: 'metric_team_owners_aggregate';
  aggregate?: Maybe<Metric_Team_Owners_Aggregate_Fields>;
  nodes: Array<Metric_Team_Owners>;
};

/** aggregate fields of "metric_team_owners" */
export type Metric_Team_Owners_Aggregate_Fields = {
  __typename?: 'metric_team_owners_aggregate_fields';
  avg?: Maybe<Metric_Team_Owners_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Team_Owners_Max_Fields>;
  min?: Maybe<Metric_Team_Owners_Min_Fields>;
  stddev?: Maybe<Metric_Team_Owners_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Team_Owners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Team_Owners_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Team_Owners_Sum_Fields>;
  var_pop?: Maybe<Metric_Team_Owners_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Team_Owners_Var_Samp_Fields>;
  variance?: Maybe<Metric_Team_Owners_Variance_Fields>;
};


/** aggregate fields of "metric_team_owners" */
export type Metric_Team_Owners_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_team_owners" */
export type Metric_Team_Owners_Aggregate_Order_By = {
  avg?: Maybe<Metric_Team_Owners_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Team_Owners_Max_Order_By>;
  min?: Maybe<Metric_Team_Owners_Min_Order_By>;
  stddev?: Maybe<Metric_Team_Owners_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Team_Owners_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Team_Owners_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Team_Owners_Sum_Order_By>;
  var_pop?: Maybe<Metric_Team_Owners_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Team_Owners_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Team_Owners_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_team_owners" */
export type Metric_Team_Owners_Arr_Rel_Insert_Input = {
  data: Array<Metric_Team_Owners_Insert_Input>;
  on_conflict?: Maybe<Metric_Team_Owners_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Team_Owners_Avg_Fields = {
  __typename?: 'metric_team_owners_avg_fields';
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Avg_Order_By = {
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_team_owners". All fields are combined with a logical 'AND'. */
export type Metric_Team_Owners_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Team_Owners_Bool_Exp>>>;
  _not?: Maybe<Metric_Team_Owners_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Team_Owners_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  created_ts?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  metric_name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  teamId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_team_owners" */
export enum Metric_Team_Owners_Constraint {
  /** unique or primary key constraint */
  MetricTeamOwnersOrgMetricIdTeamIdKey = 'metric_team_owners_org_metric_id_team_id_key',
  /** unique or primary key constraint */
  MetricTeamOwnersPkey = 'metric_team_owners_pkey'
}

/** input type for incrementing integer column in table "metric_team_owners" */
export type Metric_Team_Owners_Inc_Input = {
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_team_owners" */
export type Metric_Team_Owners_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  teamId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Metric_Team_Owners_Max_Fields = {
  __typename?: 'metric_team_owners_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Team_Owners_Min_Fields = {
  __typename?: 'metric_team_owners_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_team_owners" */
export type Metric_Team_Owners_Mutation_Response = {
  __typename?: 'metric_team_owners_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Team_Owners>;
};

/** input type for inserting object relation for remote table "metric_team_owners" */
export type Metric_Team_Owners_Obj_Rel_Insert_Input = {
  data: Metric_Team_Owners_Insert_Input;
  on_conflict?: Maybe<Metric_Team_Owners_On_Conflict>;
};

/** on conflict condition type for table "metric_team_owners" */
export type Metric_Team_Owners_On_Conflict = {
  constraint: Metric_Team_Owners_Constraint;
  update_columns: Array<Metric_Team_Owners_Update_Column>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};

/** ordering options when selecting data from "metric_team_owners" */
export type Metric_Team_Owners_Order_By = {
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  teamId?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_team_owners" */
export type Metric_Team_Owners_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_team_owners" */
export enum Metric_Team_Owners_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedTs = 'created_ts',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metric_name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  TeamId = 'teamId'
}

/** input type for updating data in table "metric_team_owners" */
export type Metric_Team_Owners_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Metric_Team_Owners_Stddev_Fields = {
  __typename?: 'metric_team_owners_stddev_fields';
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Stddev_Order_By = {
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Team_Owners_Stddev_Pop_Fields = {
  __typename?: 'metric_team_owners_stddev_pop_fields';
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Stddev_Pop_Order_By = {
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Team_Owners_Stddev_Samp_Fields = {
  __typename?: 'metric_team_owners_stddev_samp_fields';
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Stddev_Samp_Order_By = {
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Team_Owners_Sum_Fields = {
  __typename?: 'metric_team_owners_sum_fields';
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Sum_Order_By = {
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** update columns of table "metric_team_owners" */
export enum Metric_Team_Owners_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedTs = 'created_ts',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metric_name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  TeamId = 'teamId'
}

/** aggregate var_pop on columns */
export type Metric_Team_Owners_Var_Pop_Fields = {
  __typename?: 'metric_team_owners_var_pop_fields';
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Var_Pop_Order_By = {
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Team_Owners_Var_Samp_Fields = {
  __typename?: 'metric_team_owners_var_samp_fields';
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Var_Samp_Order_By = {
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Team_Owners_Variance_Fields = {
  __typename?: 'metric_team_owners_variance_fields';
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_team_owners" */
export type Metric_Team_Owners_Variance_Order_By = {
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
};

/**
 * Assigns ownership of a given metric to users. Can come from the model configs or the UI.
 *
 *
 * columns and relationships of "metric_user_owners"
 */
export type Metric_User_Owners = {
  __typename?: 'metric_user_owners';
  /** Timestamp indicating when the user was made owner of the metric */
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  metric: Org_Metrics_Current_View;
  metricId: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "metric_user_owners" */
export type Metric_User_Owners_Aggregate = {
  __typename?: 'metric_user_owners_aggregate';
  aggregate?: Maybe<Metric_User_Owners_Aggregate_Fields>;
  nodes: Array<Metric_User_Owners>;
};

/** aggregate fields of "metric_user_owners" */
export type Metric_User_Owners_Aggregate_Fields = {
  __typename?: 'metric_user_owners_aggregate_fields';
  avg?: Maybe<Metric_User_Owners_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_User_Owners_Max_Fields>;
  min?: Maybe<Metric_User_Owners_Min_Fields>;
  stddev?: Maybe<Metric_User_Owners_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_User_Owners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_User_Owners_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_User_Owners_Sum_Fields>;
  var_pop?: Maybe<Metric_User_Owners_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_User_Owners_Var_Samp_Fields>;
  variance?: Maybe<Metric_User_Owners_Variance_Fields>;
};


/** aggregate fields of "metric_user_owners" */
export type Metric_User_Owners_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_User_Owners_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_user_owners" */
export type Metric_User_Owners_Aggregate_Order_By = {
  avg?: Maybe<Metric_User_Owners_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_User_Owners_Max_Order_By>;
  min?: Maybe<Metric_User_Owners_Min_Order_By>;
  stddev?: Maybe<Metric_User_Owners_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_User_Owners_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_User_Owners_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_User_Owners_Sum_Order_By>;
  var_pop?: Maybe<Metric_User_Owners_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_User_Owners_Var_Samp_Order_By>;
  variance?: Maybe<Metric_User_Owners_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_user_owners" */
export type Metric_User_Owners_Arr_Rel_Insert_Input = {
  data: Array<Metric_User_Owners_Insert_Input>;
  on_conflict?: Maybe<Metric_User_Owners_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_User_Owners_Avg_Fields = {
  __typename?: 'metric_user_owners_avg_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Avg_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_user_owners". All fields are combined with a logical 'AND'. */
export type Metric_User_Owners_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_User_Owners_Bool_Exp>>>;
  _not?: Maybe<Metric_User_Owners_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_User_Owners_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_user_owners" */
export enum Metric_User_Owners_Constraint {
  /** unique or primary key constraint */
  MetricUserOwnersPkey = 'metric_user_owners_pkey'
}

/** input type for incrementing integer column in table "metric_user_owners" */
export type Metric_User_Owners_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_user_owners" */
export type Metric_User_Owners_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Metric_User_Owners_Max_Fields = {
  __typename?: 'metric_user_owners_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_User_Owners_Min_Fields = {
  __typename?: 'metric_user_owners_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_user_owners" */
export type Metric_User_Owners_Mutation_Response = {
  __typename?: 'metric_user_owners_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_User_Owners>;
};

/** input type for inserting object relation for remote table "metric_user_owners" */
export type Metric_User_Owners_Obj_Rel_Insert_Input = {
  data: Metric_User_Owners_Insert_Input;
  on_conflict?: Maybe<Metric_User_Owners_On_Conflict>;
};

/** on conflict condition type for table "metric_user_owners" */
export type Metric_User_Owners_On_Conflict = {
  constraint: Metric_User_Owners_Constraint;
  update_columns: Array<Metric_User_Owners_Update_Column>;
  where?: Maybe<Metric_User_Owners_Bool_Exp>;
};

/** ordering options when selecting data from "metric_user_owners" */
export type Metric_User_Owners_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_user_owners" */
export type Metric_User_Owners_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric_user_owners" */
export enum Metric_User_Owners_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "metric_user_owners" */
export type Metric_User_Owners_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Metric_User_Owners_Stddev_Fields = {
  __typename?: 'metric_user_owners_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_User_Owners_Stddev_Pop_Fields = {
  __typename?: 'metric_user_owners_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_User_Owners_Stddev_Samp_Fields = {
  __typename?: 'metric_user_owners_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_User_Owners_Sum_Fields = {
  __typename?: 'metric_user_owners_sum_fields';
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Sum_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "metric_user_owners" */
export enum Metric_User_Owners_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Metric_User_Owners_Var_Pop_Fields = {
  __typename?: 'metric_user_owners_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_User_Owners_Var_Samp_Fields = {
  __typename?: 'metric_user_owners_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_User_Owners_Variance_Fields = {
  __typename?: 'metric_user_owners_variance_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_user_owners" */
export type Metric_User_Owners_Variance_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/**
 * The exact definition from the configs a metric live here. Only updated when a definition changes, so this represents a version of a metric.
 *
 *
 * columns and relationships of "metric_versions"
 */
export type Metric_Versions = {
  __typename?: 'metric_versions';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  dataSource?: Maybe<Org_Data_Sources>;
  dataSourceId?: Maybe<Scalars['Int']>;
  /** An array relationship */
  dataSources: Array<Metric_Lineage_Data_Sources>;
  /** An aggregated array relationship */
  dataSources_aggregate: Metric_Lineage_Data_Sources_Aggregate;
  description: Scalars['String'];
  displayName: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['bigint'];
  metadata: Scalars['jsonb'];
  metricType: Scalars['Int'];
  /** An array relationship */
  modelMetrics: Array<Model_Metrics>;
  /** An aggregated array relationship */
  modelMetrics_aggregate: Model_Metrics_Aggregate;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  params: Scalars['jsonb'];
  source_data_source_versions?: Maybe<Scalars['json']>;
  tier: Scalars['Int'];
};


/**
 * The exact definition from the configs a metric live here. Only updated when a definition changes, so this represents a version of a metric.
 *
 *
 * columns and relationships of "metric_versions"
 */
export type Metric_VersionsDataSourcesArgs = {
  distinct_on?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Lineage_Data_Sources_Order_By>>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};


/**
 * The exact definition from the configs a metric live here. Only updated when a definition changes, so this represents a version of a metric.
 *
 *
 * columns and relationships of "metric_versions"
 */
export type Metric_VersionsDataSources_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Lineage_Data_Sources_Order_By>>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};


/**
 * The exact definition from the configs a metric live here. Only updated when a definition changes, so this represents a version of a metric.
 *
 *
 * columns and relationships of "metric_versions"
 */
export type Metric_VersionsMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * The exact definition from the configs a metric live here. Only updated when a definition changes, so this represents a version of a metric.
 *
 *
 * columns and relationships of "metric_versions"
 */
export type Metric_VersionsModelMetricsArgs = {
  distinct_on?: Maybe<Array<Model_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Metrics_Order_By>>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};


/**
 * The exact definition from the configs a metric live here. Only updated when a definition changes, so this represents a version of a metric.
 *
 *
 * columns and relationships of "metric_versions"
 */
export type Metric_VersionsModelMetrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Metrics_Order_By>>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};


/**
 * The exact definition from the configs a metric live here. Only updated when a definition changes, so this represents a version of a metric.
 *
 *
 * columns and relationships of "metric_versions"
 */
export type Metric_VersionsParamsArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * The exact definition from the configs a metric live here. Only updated when a definition changes, so this represents a version of a metric.
 *
 *
 * columns and relationships of "metric_versions"
 */
export type Metric_VersionsSource_Data_Source_VersionsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "metric_versions" */
export type Metric_Versions_Aggregate = {
  __typename?: 'metric_versions_aggregate';
  aggregate?: Maybe<Metric_Versions_Aggregate_Fields>;
  nodes: Array<Metric_Versions>;
};

/** aggregate fields of "metric_versions" */
export type Metric_Versions_Aggregate_Fields = {
  __typename?: 'metric_versions_aggregate_fields';
  avg?: Maybe<Metric_Versions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Versions_Max_Fields>;
  min?: Maybe<Metric_Versions_Min_Fields>;
  stddev?: Maybe<Metric_Versions_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Versions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Versions_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Versions_Sum_Fields>;
  var_pop?: Maybe<Metric_Versions_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Versions_Var_Samp_Fields>;
  variance?: Maybe<Metric_Versions_Variance_Fields>;
};


/** aggregate fields of "metric_versions" */
export type Metric_Versions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Versions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_versions" */
export type Metric_Versions_Aggregate_Order_By = {
  avg?: Maybe<Metric_Versions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Versions_Max_Order_By>;
  min?: Maybe<Metric_Versions_Min_Order_By>;
  stddev?: Maybe<Metric_Versions_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Versions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Versions_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Versions_Sum_Order_By>;
  var_pop?: Maybe<Metric_Versions_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Versions_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Versions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Metric_Versions_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "metric_versions" */
export type Metric_Versions_Arr_Rel_Insert_Input = {
  data: Array<Metric_Versions_Insert_Input>;
  on_conflict?: Maybe<Metric_Versions_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Versions_Avg_Fields = {
  __typename?: 'metric_versions_avg_fields';
  dataSourceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_versions" */
export type Metric_Versions_Avg_Order_By = {
  dataSourceId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_versions". All fields are combined with a logical 'AND'. */
export type Metric_Versions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Versions_Bool_Exp>>>;
  _not?: Maybe<Metric_Versions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Versions_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dataSource?: Maybe<Org_Data_Sources_Bool_Exp>;
  dataSourceId?: Maybe<Int_Comparison_Exp>;
  dataSources?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  displayName?: Maybe<String_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  metricType?: Maybe<Int_Comparison_Exp>;
  modelMetrics?: Maybe<Model_Metrics_Bool_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  params?: Maybe<Jsonb_Comparison_Exp>;
  source_data_source_versions?: Maybe<Json_Comparison_Exp>;
  tier?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric_versions" */
export enum Metric_Versions_Constraint {
  /** unique or primary key constraint */
  MetricVersionsHashOrganizationIdKey = 'metric_versions_hash_organization_id_key',
  /** unique or primary key constraint */
  MetricVersionsPkey = 'metric_versions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Metric_Versions_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Maybe<Scalars['String']>>>;
  params?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Metric_Versions_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Metric_Versions_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
  params?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "metric_versions" */
export type Metric_Versions_Inc_Input = {
  dataSourceId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  metricType?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_versions" */
export type Metric_Versions_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dataSource?: Maybe<Org_Data_Sources_Obj_Rel_Insert_Input>;
  dataSourceId?: Maybe<Scalars['Int']>;
  dataSources?: Maybe<Metric_Lineage_Data_Sources_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  metadata?: Maybe<Scalars['jsonb']>;
  metricType?: Maybe<Scalars['Int']>;
  modelMetrics?: Maybe<Model_Metrics_Arr_Rel_Insert_Input>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['jsonb']>;
  source_data_source_versions?: Maybe<Scalars['json']>;
  tier?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Metric_Versions_Max_Fields = {
  __typename?: 'metric_versions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dataSourceId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  metricType?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "metric_versions" */
export type Metric_Versions_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  dataSourceId?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Versions_Min_Fields = {
  __typename?: 'metric_versions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dataSourceId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  metricType?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "metric_versions" */
export type Metric_Versions_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  dataSourceId?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_versions" */
export type Metric_Versions_Mutation_Response = {
  __typename?: 'metric_versions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_Versions>;
};

/** input type for inserting object relation for remote table "metric_versions" */
export type Metric_Versions_Obj_Rel_Insert_Input = {
  data: Metric_Versions_Insert_Input;
  on_conflict?: Maybe<Metric_Versions_On_Conflict>;
};

/** on conflict condition type for table "metric_versions" */
export type Metric_Versions_On_Conflict = {
  constraint: Metric_Versions_Constraint;
  update_columns: Array<Metric_Versions_Update_Column>;
  where?: Maybe<Metric_Versions_Bool_Exp>;
};

/** ordering options when selecting data from "metric_versions" */
export type Metric_Versions_Order_By = {
  createdAt?: Maybe<Order_By>;
  dataSource?: Maybe<Org_Data_Sources_Order_By>;
  dataSourceId?: Maybe<Order_By>;
  dataSources_aggregate?: Maybe<Metric_Lineage_Data_Sources_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelMetrics_aggregate?: Maybe<Model_Metrics_Aggregate_Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  params?: Maybe<Order_By>;
  source_data_source_versions?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric_versions" */
export type Metric_Versions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Metric_Versions_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "metric_versions" */
export enum Metric_Versions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DataSourceId = 'dataSourceId',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetricType = 'metricType',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Params = 'params',
  /** column name */
  SourceDataSourceVersions = 'source_data_source_versions',
  /** column name */
  Tier = 'tier'
}

/** input type for updating data in table "metric_versions" */
export type Metric_Versions_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dataSourceId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  metadata?: Maybe<Scalars['jsonb']>;
  metricType?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['jsonb']>;
  source_data_source_versions?: Maybe<Scalars['json']>;
  tier?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Metric_Versions_Stddev_Fields = {
  __typename?: 'metric_versions_stddev_fields';
  dataSourceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_versions" */
export type Metric_Versions_Stddev_Order_By = {
  dataSourceId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Versions_Stddev_Pop_Fields = {
  __typename?: 'metric_versions_stddev_pop_fields';
  dataSourceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_versions" */
export type Metric_Versions_Stddev_Pop_Order_By = {
  dataSourceId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Versions_Stddev_Samp_Fields = {
  __typename?: 'metric_versions_stddev_samp_fields';
  dataSourceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_versions" */
export type Metric_Versions_Stddev_Samp_Order_By = {
  dataSourceId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Versions_Sum_Fields = {
  __typename?: 'metric_versions_sum_fields';
  dataSourceId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  metricType?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_versions" */
export type Metric_Versions_Sum_Order_By = {
  dataSourceId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** update columns of table "metric_versions" */
export enum Metric_Versions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DataSourceId = 'dataSourceId',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetricType = 'metricType',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Params = 'params',
  /** column name */
  SourceDataSourceVersions = 'source_data_source_versions',
  /** column name */
  Tier = 'tier'
}

/** aggregate var_pop on columns */
export type Metric_Versions_Var_Pop_Fields = {
  __typename?: 'metric_versions_var_pop_fields';
  dataSourceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_versions" */
export type Metric_Versions_Var_Pop_Order_By = {
  dataSourceId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Versions_Var_Samp_Fields = {
  __typename?: 'metric_versions_var_samp_fields';
  dataSourceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_versions" */
export type Metric_Versions_Var_Samp_Order_By = {
  dataSourceId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Versions_Variance_Fields = {
  __typename?: 'metric_versions_variance_fields';
  dataSourceId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_versions" */
export type Metric_Versions_Variance_Order_By = {
  dataSourceId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** columns and relationships of "metric_view" */
export type Metric_View = {
  __typename?: 'metric_view';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  metric?: Maybe<Org_Metrics_Current_View>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
  viewed_ts?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "metric_view" */
export type Metric_View_Aggregate = {
  __typename?: 'metric_view_aggregate';
  aggregate?: Maybe<Metric_View_Aggregate_Fields>;
  nodes: Array<Metric_View>;
};

/** aggregate fields of "metric_view" */
export type Metric_View_Aggregate_Fields = {
  __typename?: 'metric_view_aggregate_fields';
  avg?: Maybe<Metric_View_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_View_Max_Fields>;
  min?: Maybe<Metric_View_Min_Fields>;
  stddev?: Maybe<Metric_View_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_View_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_View_Sum_Fields>;
  var_pop?: Maybe<Metric_View_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_View_Var_Samp_Fields>;
  variance?: Maybe<Metric_View_Variance_Fields>;
};


/** aggregate fields of "metric_view" */
export type Metric_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric_view" */
export type Metric_View_Aggregate_Order_By = {
  avg?: Maybe<Metric_View_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_View_Max_Order_By>;
  min?: Maybe<Metric_View_Min_Order_By>;
  stddev?: Maybe<Metric_View_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_View_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_View_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_View_Sum_Order_By>;
  var_pop?: Maybe<Metric_View_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_View_Var_Samp_Order_By>;
  variance?: Maybe<Metric_View_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric_view" */
export type Metric_View_Arr_Rel_Insert_Input = {
  data: Array<Metric_View_Insert_Input>;
};

/** aggregate avg on columns */
export type Metric_View_Avg_Fields = {
  __typename?: 'metric_view_avg_fields';
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  viewed_ts?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric_view" */
export type Metric_View_Avg_Order_By = {
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric_view". All fields are combined with a logical 'AND'. */
export type Metric_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_View_Bool_Exp>>>;
  _not?: Maybe<Metric_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_View_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  metric_name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
  viewed_ts?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing integer column in table "metric_view" */
export type Metric_View_Inc_Input = {
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  viewed_ts?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric_view" */
export type Metric_View_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
  viewed_ts?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Metric_View_Max_Fields = {
  __typename?: 'metric_view_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  viewed_ts?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "metric_view" */
export type Metric_View_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_View_Min_Fields = {
  __typename?: 'metric_view_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  viewed_ts?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "metric_view" */
export type Metric_View_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric_view" */
export type Metric_View_Mutation_Response = {
  __typename?: 'metric_view_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric_View>;
};

/** input type for inserting object relation for remote table "metric_view" */
export type Metric_View_Obj_Rel_Insert_Input = {
  data: Metric_View_Insert_Input;
};

/** ordering options when selecting data from "metric_view" */
export type Metric_View_Order_By = {
  createdAt?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  metric_name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** select columns of table "metric_view" */
export enum Metric_View_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metric_name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UserId = 'userId',
  /** column name */
  ViewedTs = 'viewed_ts'
}

/** input type for updating data in table "metric_view" */
export type Metric_View_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  metricId?: Maybe<Scalars['Int']>;
  metric_name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  viewed_ts?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Metric_View_Stddev_Fields = {
  __typename?: 'metric_view_stddev_fields';
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  viewed_ts?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric_view" */
export type Metric_View_Stddev_Order_By = {
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_View_Stddev_Pop_Fields = {
  __typename?: 'metric_view_stddev_pop_fields';
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  viewed_ts?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric_view" */
export type Metric_View_Stddev_Pop_Order_By = {
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_View_Stddev_Samp_Fields = {
  __typename?: 'metric_view_stddev_samp_fields';
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  viewed_ts?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric_view" */
export type Metric_View_Stddev_Samp_Order_By = {
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_View_Sum_Fields = {
  __typename?: 'metric_view_sum_fields';
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  viewed_ts?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric_view" */
export type Metric_View_Sum_Order_By = {
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Metric_View_Var_Pop_Fields = {
  __typename?: 'metric_view_var_pop_fields';
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  viewed_ts?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric_view" */
export type Metric_View_Var_Pop_Order_By = {
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_View_Var_Samp_Fields = {
  __typename?: 'metric_view_var_samp_fields';
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  viewed_ts?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric_view" */
export type Metric_View_Var_Samp_Order_By = {
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_View_Variance_Fields = {
  __typename?: 'metric_view_variance_fields';
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  viewed_ts?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric_view" */
export type Metric_View_Variance_Order_By = {
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  viewed_ts?: Maybe<Order_By>;
};

/**
 * The current model
 *
 *
 * columns and relationships of "model_current"
 */
export type Model_Current = {
  __typename?: 'model_current';
  /** An object relationship */
  model?: Maybe<Models>;
  model_id?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  organization?: Maybe<Organizations>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "model_current" */
export type Model_Current_Aggregate = {
  __typename?: 'model_current_aggregate';
  aggregate?: Maybe<Model_Current_Aggregate_Fields>;
  nodes: Array<Model_Current>;
};

/** aggregate fields of "model_current" */
export type Model_Current_Aggregate_Fields = {
  __typename?: 'model_current_aggregate_fields';
  avg?: Maybe<Model_Current_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Model_Current_Max_Fields>;
  min?: Maybe<Model_Current_Min_Fields>;
  stddev?: Maybe<Model_Current_Stddev_Fields>;
  stddev_pop?: Maybe<Model_Current_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Model_Current_Stddev_Samp_Fields>;
  sum?: Maybe<Model_Current_Sum_Fields>;
  var_pop?: Maybe<Model_Current_Var_Pop_Fields>;
  var_samp?: Maybe<Model_Current_Var_Samp_Fields>;
  variance?: Maybe<Model_Current_Variance_Fields>;
};


/** aggregate fields of "model_current" */
export type Model_Current_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Model_Current_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "model_current" */
export type Model_Current_Aggregate_Order_By = {
  avg?: Maybe<Model_Current_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Model_Current_Max_Order_By>;
  min?: Maybe<Model_Current_Min_Order_By>;
  stddev?: Maybe<Model_Current_Stddev_Order_By>;
  stddev_pop?: Maybe<Model_Current_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Model_Current_Stddev_Samp_Order_By>;
  sum?: Maybe<Model_Current_Sum_Order_By>;
  var_pop?: Maybe<Model_Current_Var_Pop_Order_By>;
  var_samp?: Maybe<Model_Current_Var_Samp_Order_By>;
  variance?: Maybe<Model_Current_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Model_Current_Avg_Fields = {
  __typename?: 'model_current_avg_fields';
  model_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "model_current" */
export type Model_Current_Avg_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "model_current". All fields are combined with a logical 'AND'. */
export type Model_Current_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Model_Current_Bool_Exp>>>;
  _not?: Maybe<Model_Current_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Model_Current_Bool_Exp>>>;
  model?: Maybe<Models_Bool_Exp>;
  model_id?: Maybe<Bigint_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Model_Current_Max_Fields = {
  __typename?: 'model_current_max_fields';
  model_id?: Maybe<Scalars['bigint']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "model_current" */
export type Model_Current_Max_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Model_Current_Min_Fields = {
  __typename?: 'model_current_min_fields';
  model_id?: Maybe<Scalars['bigint']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "model_current" */
export type Model_Current_Min_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "model_current" */
export type Model_Current_Order_By = {
  model?: Maybe<Models_Order_By>;
  model_id?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** select columns of table "model_current" */
export enum Model_Current_Select_Column {
  /** column name */
  ModelId = 'model_id',
  /** column name */
  OrganizationId = 'organization_id'
}

/** aggregate stddev on columns */
export type Model_Current_Stddev_Fields = {
  __typename?: 'model_current_stddev_fields';
  model_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "model_current" */
export type Model_Current_Stddev_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Model_Current_Stddev_Pop_Fields = {
  __typename?: 'model_current_stddev_pop_fields';
  model_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "model_current" */
export type Model_Current_Stddev_Pop_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Model_Current_Stddev_Samp_Fields = {
  __typename?: 'model_current_stddev_samp_fields';
  model_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "model_current" */
export type Model_Current_Stddev_Samp_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Model_Current_Sum_Fields = {
  __typename?: 'model_current_sum_fields';
  model_id?: Maybe<Scalars['bigint']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "model_current" */
export type Model_Current_Sum_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Model_Current_Var_Pop_Fields = {
  __typename?: 'model_current_var_pop_fields';
  model_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "model_current" */
export type Model_Current_Var_Pop_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Model_Current_Var_Samp_Fields = {
  __typename?: 'model_current_var_samp_fields';
  model_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "model_current" */
export type Model_Current_Var_Samp_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Model_Current_Variance_Fields = {
  __typename?: 'model_current_variance_fields';
  model_id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "model_current" */
export type Model_Current_Variance_Order_By = {
  model_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/**
 * Lookup table to find the data source version for a given org_data_source ID and model ID combo
 *
 *
 * columns and relationships of "model_data_sources"
 */
export type Model_Data_Sources = {
  __typename?: 'model_data_sources';
  /** An object relationship */
  dataSourceVersion: Data_Source_Versions;
  dataSourceVersionId: Scalars['Int'];
  /** An object relationship */
  model: Models;
  modelId: Scalars['Int'];
  /** An object relationship */
  orgDataSource?: Maybe<Org_Data_Sources>;
  org_data_source_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "model_data_sources" */
export type Model_Data_Sources_Aggregate = {
  __typename?: 'model_data_sources_aggregate';
  aggregate?: Maybe<Model_Data_Sources_Aggregate_Fields>;
  nodes: Array<Model_Data_Sources>;
};

/** aggregate fields of "model_data_sources" */
export type Model_Data_Sources_Aggregate_Fields = {
  __typename?: 'model_data_sources_aggregate_fields';
  avg?: Maybe<Model_Data_Sources_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Model_Data_Sources_Max_Fields>;
  min?: Maybe<Model_Data_Sources_Min_Fields>;
  stddev?: Maybe<Model_Data_Sources_Stddev_Fields>;
  stddev_pop?: Maybe<Model_Data_Sources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Model_Data_Sources_Stddev_Samp_Fields>;
  sum?: Maybe<Model_Data_Sources_Sum_Fields>;
  var_pop?: Maybe<Model_Data_Sources_Var_Pop_Fields>;
  var_samp?: Maybe<Model_Data_Sources_Var_Samp_Fields>;
  variance?: Maybe<Model_Data_Sources_Variance_Fields>;
};


/** aggregate fields of "model_data_sources" */
export type Model_Data_Sources_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "model_data_sources" */
export type Model_Data_Sources_Aggregate_Order_By = {
  avg?: Maybe<Model_Data_Sources_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Model_Data_Sources_Max_Order_By>;
  min?: Maybe<Model_Data_Sources_Min_Order_By>;
  stddev?: Maybe<Model_Data_Sources_Stddev_Order_By>;
  stddev_pop?: Maybe<Model_Data_Sources_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Model_Data_Sources_Stddev_Samp_Order_By>;
  sum?: Maybe<Model_Data_Sources_Sum_Order_By>;
  var_pop?: Maybe<Model_Data_Sources_Var_Pop_Order_By>;
  var_samp?: Maybe<Model_Data_Sources_Var_Samp_Order_By>;
  variance?: Maybe<Model_Data_Sources_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "model_data_sources" */
export type Model_Data_Sources_Arr_Rel_Insert_Input = {
  data: Array<Model_Data_Sources_Insert_Input>;
  on_conflict?: Maybe<Model_Data_Sources_On_Conflict>;
};

/** aggregate avg on columns */
export type Model_Data_Sources_Avg_Fields = {
  __typename?: 'model_data_sources_avg_fields';
  dataSourceVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  org_data_source_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "model_data_sources" */
export type Model_Data_Sources_Avg_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "model_data_sources". All fields are combined with a logical 'AND'. */
export type Model_Data_Sources_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Model_Data_Sources_Bool_Exp>>>;
  _not?: Maybe<Model_Data_Sources_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Model_Data_Sources_Bool_Exp>>>;
  dataSourceVersion?: Maybe<Data_Source_Versions_Bool_Exp>;
  dataSourceVersionId?: Maybe<Int_Comparison_Exp>;
  model?: Maybe<Models_Bool_Exp>;
  modelId?: Maybe<Int_Comparison_Exp>;
  orgDataSource?: Maybe<Org_Data_Sources_Bool_Exp>;
  org_data_source_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "model_data_sources" */
export enum Model_Data_Sources_Constraint {
  /** unique or primary key constraint */
  ModelDataSourcesPkey = 'model_data_sources_pkey'
}

/** input type for incrementing integer column in table "model_data_sources" */
export type Model_Data_Sources_Inc_Input = {
  dataSourceVersionId?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  org_data_source_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "model_data_sources" */
export type Model_Data_Sources_Insert_Input = {
  dataSourceVersion?: Maybe<Data_Source_Versions_Obj_Rel_Insert_Input>;
  dataSourceVersionId?: Maybe<Scalars['Int']>;
  model?: Maybe<Models_Obj_Rel_Insert_Input>;
  modelId?: Maybe<Scalars['Int']>;
  orgDataSource?: Maybe<Org_Data_Sources_Obj_Rel_Insert_Input>;
  org_data_source_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Model_Data_Sources_Max_Fields = {
  __typename?: 'model_data_sources_max_fields';
  dataSourceVersionId?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  org_data_source_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "model_data_sources" */
export type Model_Data_Sources_Max_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Model_Data_Sources_Min_Fields = {
  __typename?: 'model_data_sources_min_fields';
  dataSourceVersionId?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  org_data_source_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "model_data_sources" */
export type Model_Data_Sources_Min_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "model_data_sources" */
export type Model_Data_Sources_Mutation_Response = {
  __typename?: 'model_data_sources_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Model_Data_Sources>;
};

/** input type for inserting object relation for remote table "model_data_sources" */
export type Model_Data_Sources_Obj_Rel_Insert_Input = {
  data: Model_Data_Sources_Insert_Input;
  on_conflict?: Maybe<Model_Data_Sources_On_Conflict>;
};

/** on conflict condition type for table "model_data_sources" */
export type Model_Data_Sources_On_Conflict = {
  constraint: Model_Data_Sources_Constraint;
  update_columns: Array<Model_Data_Sources_Update_Column>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};

/** ordering options when selecting data from "model_data_sources" */
export type Model_Data_Sources_Order_By = {
  dataSourceVersion?: Maybe<Data_Source_Versions_Order_By>;
  dataSourceVersionId?: Maybe<Order_By>;
  model?: Maybe<Models_Order_By>;
  modelId?: Maybe<Order_By>;
  orgDataSource?: Maybe<Org_Data_Sources_Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "model_data_sources" */
export type Model_Data_Sources_Pk_Columns_Input = {
  dataSourceVersionId: Scalars['Int'];
  modelId: Scalars['Int'];
};

/** select columns of table "model_data_sources" */
export enum Model_Data_Sources_Select_Column {
  /** column name */
  DataSourceVersionId = 'dataSourceVersionId',
  /** column name */
  ModelId = 'modelId',
  /** column name */
  OrgDataSourceId = 'org_data_source_id'
}

/** input type for updating data in table "model_data_sources" */
export type Model_Data_Sources_Set_Input = {
  dataSourceVersionId?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  org_data_source_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Model_Data_Sources_Stddev_Fields = {
  __typename?: 'model_data_sources_stddev_fields';
  dataSourceVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  org_data_source_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "model_data_sources" */
export type Model_Data_Sources_Stddev_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Model_Data_Sources_Stddev_Pop_Fields = {
  __typename?: 'model_data_sources_stddev_pop_fields';
  dataSourceVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  org_data_source_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "model_data_sources" */
export type Model_Data_Sources_Stddev_Pop_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Model_Data_Sources_Stddev_Samp_Fields = {
  __typename?: 'model_data_sources_stddev_samp_fields';
  dataSourceVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  org_data_source_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "model_data_sources" */
export type Model_Data_Sources_Stddev_Samp_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Model_Data_Sources_Sum_Fields = {
  __typename?: 'model_data_sources_sum_fields';
  dataSourceVersionId?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  org_data_source_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "model_data_sources" */
export type Model_Data_Sources_Sum_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** update columns of table "model_data_sources" */
export enum Model_Data_Sources_Update_Column {
  /** column name */
  DataSourceVersionId = 'dataSourceVersionId',
  /** column name */
  ModelId = 'modelId',
  /** column name */
  OrgDataSourceId = 'org_data_source_id'
}

/** aggregate var_pop on columns */
export type Model_Data_Sources_Var_Pop_Fields = {
  __typename?: 'model_data_sources_var_pop_fields';
  dataSourceVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  org_data_source_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "model_data_sources" */
export type Model_Data_Sources_Var_Pop_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Model_Data_Sources_Var_Samp_Fields = {
  __typename?: 'model_data_sources_var_samp_fields';
  dataSourceVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  org_data_source_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "model_data_sources" */
export type Model_Data_Sources_Var_Samp_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Model_Data_Sources_Variance_Fields = {
  __typename?: 'model_data_sources_variance_fields';
  dataSourceVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  org_data_source_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "model_data_sources" */
export type Model_Data_Sources_Variance_Order_By = {
  dataSourceVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  org_data_source_id?: Maybe<Order_By>;
};

/** columns and relationships of "model_metrics" */
export type Model_Metrics = {
  __typename?: 'model_metrics';
  /** An object relationship */
  metric?: Maybe<Org_Metrics_Current_View>;
  metricId: Scalars['bigint'];
  /** An object relationship */
  metricVersion: Metric_Versions;
  metricVersionId: Scalars['bigint'];
  /** An object relationship */
  model: Models;
  modelId: Scalars['bigint'];
};

/** aggregated selection of "model_metrics" */
export type Model_Metrics_Aggregate = {
  __typename?: 'model_metrics_aggregate';
  aggregate?: Maybe<Model_Metrics_Aggregate_Fields>;
  nodes: Array<Model_Metrics>;
};

/** aggregate fields of "model_metrics" */
export type Model_Metrics_Aggregate_Fields = {
  __typename?: 'model_metrics_aggregate_fields';
  avg?: Maybe<Model_Metrics_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Model_Metrics_Max_Fields>;
  min?: Maybe<Model_Metrics_Min_Fields>;
  stddev?: Maybe<Model_Metrics_Stddev_Fields>;
  stddev_pop?: Maybe<Model_Metrics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Model_Metrics_Stddev_Samp_Fields>;
  sum?: Maybe<Model_Metrics_Sum_Fields>;
  var_pop?: Maybe<Model_Metrics_Var_Pop_Fields>;
  var_samp?: Maybe<Model_Metrics_Var_Samp_Fields>;
  variance?: Maybe<Model_Metrics_Variance_Fields>;
};


/** aggregate fields of "model_metrics" */
export type Model_Metrics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Model_Metrics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "model_metrics" */
export type Model_Metrics_Aggregate_Order_By = {
  avg?: Maybe<Model_Metrics_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Model_Metrics_Max_Order_By>;
  min?: Maybe<Model_Metrics_Min_Order_By>;
  stddev?: Maybe<Model_Metrics_Stddev_Order_By>;
  stddev_pop?: Maybe<Model_Metrics_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Model_Metrics_Stddev_Samp_Order_By>;
  sum?: Maybe<Model_Metrics_Sum_Order_By>;
  var_pop?: Maybe<Model_Metrics_Var_Pop_Order_By>;
  var_samp?: Maybe<Model_Metrics_Var_Samp_Order_By>;
  variance?: Maybe<Model_Metrics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "model_metrics" */
export type Model_Metrics_Arr_Rel_Insert_Input = {
  data: Array<Model_Metrics_Insert_Input>;
  on_conflict?: Maybe<Model_Metrics_On_Conflict>;
};

/** aggregate avg on columns */
export type Model_Metrics_Avg_Fields = {
  __typename?: 'model_metrics_avg_fields';
  metricId?: Maybe<Scalars['Float']>;
  metricVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "model_metrics" */
export type Model_Metrics_Avg_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "model_metrics". All fields are combined with a logical 'AND'. */
export type Model_Metrics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Model_Metrics_Bool_Exp>>>;
  _not?: Maybe<Model_Metrics_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Model_Metrics_Bool_Exp>>>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Bigint_Comparison_Exp>;
  metricVersion?: Maybe<Metric_Versions_Bool_Exp>;
  metricVersionId?: Maybe<Bigint_Comparison_Exp>;
  model?: Maybe<Models_Bool_Exp>;
  modelId?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "model_metrics" */
export enum Model_Metrics_Constraint {
  /** unique or primary key constraint */
  ModelMetricsOrgMetricIdModelIdKey = 'model_metrics_org_metric_id_model_id_key',
  /** unique or primary key constraint */
  ModelMetricsPkey = 'model_metrics_pkey'
}

/** input type for incrementing integer column in table "model_metrics" */
export type Model_Metrics_Inc_Input = {
  metricId?: Maybe<Scalars['bigint']>;
  metricVersionId?: Maybe<Scalars['bigint']>;
  modelId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "model_metrics" */
export type Model_Metrics_Insert_Input = {
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['bigint']>;
  metricVersion?: Maybe<Metric_Versions_Obj_Rel_Insert_Input>;
  metricVersionId?: Maybe<Scalars['bigint']>;
  model?: Maybe<Models_Obj_Rel_Insert_Input>;
  modelId?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Model_Metrics_Max_Fields = {
  __typename?: 'model_metrics_max_fields';
  metricId?: Maybe<Scalars['bigint']>;
  metricVersionId?: Maybe<Scalars['bigint']>;
  modelId?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "model_metrics" */
export type Model_Metrics_Max_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Model_Metrics_Min_Fields = {
  __typename?: 'model_metrics_min_fields';
  metricId?: Maybe<Scalars['bigint']>;
  metricVersionId?: Maybe<Scalars['bigint']>;
  modelId?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "model_metrics" */
export type Model_Metrics_Min_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** response of any mutation on the table "model_metrics" */
export type Model_Metrics_Mutation_Response = {
  __typename?: 'model_metrics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Model_Metrics>;
};

/** input type for inserting object relation for remote table "model_metrics" */
export type Model_Metrics_Obj_Rel_Insert_Input = {
  data: Model_Metrics_Insert_Input;
  on_conflict?: Maybe<Model_Metrics_On_Conflict>;
};

/** on conflict condition type for table "model_metrics" */
export type Model_Metrics_On_Conflict = {
  constraint: Model_Metrics_Constraint;
  update_columns: Array<Model_Metrics_Update_Column>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};

/** ordering options when selecting data from "model_metrics" */
export type Model_Metrics_Order_By = {
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  metricVersion?: Maybe<Metric_Versions_Order_By>;
  metricVersionId?: Maybe<Order_By>;
  model?: Maybe<Models_Order_By>;
  modelId?: Maybe<Order_By>;
};

/** primary key columns input for table: "model_metrics" */
export type Model_Metrics_Pk_Columns_Input = {
  metricId: Scalars['bigint'];
  metricVersionId: Scalars['bigint'];
  modelId: Scalars['bigint'];
};

/** select columns of table "model_metrics" */
export enum Model_Metrics_Select_Column {
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricVersionId = 'metricVersionId',
  /** column name */
  ModelId = 'modelId'
}

/** input type for updating data in table "model_metrics" */
export type Model_Metrics_Set_Input = {
  metricId?: Maybe<Scalars['bigint']>;
  metricVersionId?: Maybe<Scalars['bigint']>;
  modelId?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Model_Metrics_Stddev_Fields = {
  __typename?: 'model_metrics_stddev_fields';
  metricId?: Maybe<Scalars['Float']>;
  metricVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "model_metrics" */
export type Model_Metrics_Stddev_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Model_Metrics_Stddev_Pop_Fields = {
  __typename?: 'model_metrics_stddev_pop_fields';
  metricId?: Maybe<Scalars['Float']>;
  metricVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "model_metrics" */
export type Model_Metrics_Stddev_Pop_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Model_Metrics_Stddev_Samp_Fields = {
  __typename?: 'model_metrics_stddev_samp_fields';
  metricId?: Maybe<Scalars['Float']>;
  metricVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "model_metrics" */
export type Model_Metrics_Stddev_Samp_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Model_Metrics_Sum_Fields = {
  __typename?: 'model_metrics_sum_fields';
  metricId?: Maybe<Scalars['bigint']>;
  metricVersionId?: Maybe<Scalars['bigint']>;
  modelId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "model_metrics" */
export type Model_Metrics_Sum_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** update columns of table "model_metrics" */
export enum Model_Metrics_Update_Column {
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricVersionId = 'metricVersionId',
  /** column name */
  ModelId = 'modelId'
}

/** aggregate var_pop on columns */
export type Model_Metrics_Var_Pop_Fields = {
  __typename?: 'model_metrics_var_pop_fields';
  metricId?: Maybe<Scalars['Float']>;
  metricVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "model_metrics" */
export type Model_Metrics_Var_Pop_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Model_Metrics_Var_Samp_Fields = {
  __typename?: 'model_metrics_var_samp_fields';
  metricId?: Maybe<Scalars['Float']>;
  metricVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "model_metrics" */
export type Model_Metrics_Var_Samp_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Model_Metrics_Variance_Fields = {
  __typename?: 'model_metrics_variance_fields';
  metricId?: Maybe<Scalars['Float']>;
  metricVersionId?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "model_metrics" */
export type Model_Metrics_Variance_Order_By = {
  metricId?: Maybe<Order_By>;
  metricVersionId?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
};

/**
 * Represents a metrics config upload event. The whole state of an organization's model can be browsed at this point in time.
 *
 *
 * columns and relationships of "models"
 */
export type Models = {
  __typename?: 'models';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  dataSources: Array<Model_Data_Sources>;
  /** An aggregated array relationship */
  dataSources_aggregate: Model_Data_Sources_Aggregate;
  executionContext?: Maybe<Scalars['String']>;
  gitBranch: Scalars['String'];
  gitCommit: Scalars['String'];
  gitIsDirty: Scalars['Boolean'];
  gitRepo: Scalars['String'];
  id: Scalars['bigint'];
  isCurrent?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  metrics: Array<Org_Metrics_Current_View>;
  /** An aggregated array relationship */
  metrics_aggregate: Org_Metrics_Current_View_Aggregate;
  /** An array relationship */
  modelMetrics: Array<Model_Metrics>;
  /** An aggregated array relationship */
  modelMetrics_aggregate: Model_Metrics_Aggregate;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  uploader: Users;
  uploaderId: Scalars['Int'];
};


/**
 * Represents a metrics config upload event. The whole state of an organization's model can be browsed at this point in time.
 *
 *
 * columns and relationships of "models"
 */
export type ModelsDataSourcesArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/**
 * Represents a metrics config upload event. The whole state of an organization's model can be browsed at this point in time.
 *
 *
 * columns and relationships of "models"
 */
export type ModelsDataSources_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/**
 * Represents a metrics config upload event. The whole state of an organization's model can be browsed at this point in time.
 *
 *
 * columns and relationships of "models"
 */
export type ModelsMetricsArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/**
 * Represents a metrics config upload event. The whole state of an organization's model can be browsed at this point in time.
 *
 *
 * columns and relationships of "models"
 */
export type ModelsMetrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/**
 * Represents a metrics config upload event. The whole state of an organization's model can be browsed at this point in time.
 *
 *
 * columns and relationships of "models"
 */
export type ModelsModelMetricsArgs = {
  distinct_on?: Maybe<Array<Model_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Metrics_Order_By>>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};


/**
 * Represents a metrics config upload event. The whole state of an organization's model can be browsed at this point in time.
 *
 *
 * columns and relationships of "models"
 */
export type ModelsModelMetrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Metrics_Order_By>>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};

/** aggregated selection of "models" */
export type Models_Aggregate = {
  __typename?: 'models_aggregate';
  aggregate?: Maybe<Models_Aggregate_Fields>;
  nodes: Array<Models>;
};

/** aggregate fields of "models" */
export type Models_Aggregate_Fields = {
  __typename?: 'models_aggregate_fields';
  avg?: Maybe<Models_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Models_Max_Fields>;
  min?: Maybe<Models_Min_Fields>;
  stddev?: Maybe<Models_Stddev_Fields>;
  stddev_pop?: Maybe<Models_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Models_Stddev_Samp_Fields>;
  sum?: Maybe<Models_Sum_Fields>;
  var_pop?: Maybe<Models_Var_Pop_Fields>;
  var_samp?: Maybe<Models_Var_Samp_Fields>;
  variance?: Maybe<Models_Variance_Fields>;
};


/** aggregate fields of "models" */
export type Models_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Models_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "models" */
export type Models_Aggregate_Order_By = {
  avg?: Maybe<Models_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Models_Max_Order_By>;
  min?: Maybe<Models_Min_Order_By>;
  stddev?: Maybe<Models_Stddev_Order_By>;
  stddev_pop?: Maybe<Models_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Models_Stddev_Samp_Order_By>;
  sum?: Maybe<Models_Sum_Order_By>;
  var_pop?: Maybe<Models_Var_Pop_Order_By>;
  var_samp?: Maybe<Models_Var_Samp_Order_By>;
  variance?: Maybe<Models_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "models" */
export type Models_Arr_Rel_Insert_Input = {
  data: Array<Models_Insert_Input>;
  on_conflict?: Maybe<Models_On_Conflict>;
};

/** aggregate avg on columns */
export type Models_Avg_Fields = {
  __typename?: 'models_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  uploaderId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "models" */
export type Models_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "models". All fields are combined with a logical 'AND'. */
export type Models_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Models_Bool_Exp>>>;
  _not?: Maybe<Models_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Models_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dataSources?: Maybe<Model_Data_Sources_Bool_Exp>;
  executionContext?: Maybe<String_Comparison_Exp>;
  gitBranch?: Maybe<String_Comparison_Exp>;
  gitCommit?: Maybe<String_Comparison_Exp>;
  gitIsDirty?: Maybe<Boolean_Comparison_Exp>;
  gitRepo?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  isCurrent?: Maybe<Boolean_Comparison_Exp>;
  metrics?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  modelMetrics?: Maybe<Model_Metrics_Bool_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  uploader?: Maybe<Users_Bool_Exp>;
  uploaderId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "models" */
export enum Models_Constraint {
  /** unique or primary key constraint */
  ModelsPkey = 'models_pkey'
}

/** input type for incrementing integer column in table "models" */
export type Models_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  organizationId?: Maybe<Scalars['Int']>;
  uploaderId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "models" */
export type Models_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dataSources?: Maybe<Model_Data_Sources_Arr_Rel_Insert_Input>;
  executionContext?: Maybe<Scalars['String']>;
  gitBranch?: Maybe<Scalars['String']>;
  gitCommit?: Maybe<Scalars['String']>;
  gitIsDirty?: Maybe<Scalars['Boolean']>;
  gitRepo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  metrics?: Maybe<Org_Metrics_Current_View_Arr_Rel_Insert_Input>;
  modelMetrics?: Maybe<Model_Metrics_Arr_Rel_Insert_Input>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  uploader?: Maybe<Users_Obj_Rel_Insert_Input>;
  uploaderId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Models_Max_Fields = {
  __typename?: 'models_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  executionContext?: Maybe<Scalars['String']>;
  gitBranch?: Maybe<Scalars['String']>;
  gitCommit?: Maybe<Scalars['String']>;
  gitRepo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  organizationId?: Maybe<Scalars['Int']>;
  uploaderId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "models" */
export type Models_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  executionContext?: Maybe<Order_By>;
  gitBranch?: Maybe<Order_By>;
  gitCommit?: Maybe<Order_By>;
  gitRepo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Models_Min_Fields = {
  __typename?: 'models_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  executionContext?: Maybe<Scalars['String']>;
  gitBranch?: Maybe<Scalars['String']>;
  gitCommit?: Maybe<Scalars['String']>;
  gitRepo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  organizationId?: Maybe<Scalars['Int']>;
  uploaderId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "models" */
export type Models_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  executionContext?: Maybe<Order_By>;
  gitBranch?: Maybe<Order_By>;
  gitCommit?: Maybe<Order_By>;
  gitRepo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** response of any mutation on the table "models" */
export type Models_Mutation_Response = {
  __typename?: 'models_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Models>;
};

/** input type for inserting object relation for remote table "models" */
export type Models_Obj_Rel_Insert_Input = {
  data: Models_Insert_Input;
  on_conflict?: Maybe<Models_On_Conflict>;
};

/** on conflict condition type for table "models" */
export type Models_On_Conflict = {
  constraint: Models_Constraint;
  update_columns: Array<Models_Update_Column>;
  where?: Maybe<Models_Bool_Exp>;
};

/** ordering options when selecting data from "models" */
export type Models_Order_By = {
  createdAt?: Maybe<Order_By>;
  dataSources_aggregate?: Maybe<Model_Data_Sources_Aggregate_Order_By>;
  executionContext?: Maybe<Order_By>;
  gitBranch?: Maybe<Order_By>;
  gitCommit?: Maybe<Order_By>;
  gitIsDirty?: Maybe<Order_By>;
  gitRepo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isCurrent?: Maybe<Order_By>;
  metrics_aggregate?: Maybe<Org_Metrics_Current_View_Aggregate_Order_By>;
  modelMetrics_aggregate?: Maybe<Model_Metrics_Aggregate_Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  uploader?: Maybe<Users_Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** primary key columns input for table: "models" */
export type Models_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "models" */
export enum Models_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExecutionContext = 'executionContext',
  /** column name */
  GitBranch = 'gitBranch',
  /** column name */
  GitCommit = 'gitCommit',
  /** column name */
  GitIsDirty = 'gitIsDirty',
  /** column name */
  GitRepo = 'gitRepo',
  /** column name */
  Id = 'id',
  /** column name */
  IsCurrent = 'isCurrent',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UploaderId = 'uploaderId'
}

/** input type for updating data in table "models" */
export type Models_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  executionContext?: Maybe<Scalars['String']>;
  gitBranch?: Maybe<Scalars['String']>;
  gitCommit?: Maybe<Scalars['String']>;
  gitIsDirty?: Maybe<Scalars['Boolean']>;
  gitRepo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  organizationId?: Maybe<Scalars['Int']>;
  uploaderId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Models_Stddev_Fields = {
  __typename?: 'models_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  uploaderId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "models" */
export type Models_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Models_Stddev_Pop_Fields = {
  __typename?: 'models_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  uploaderId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "models" */
export type Models_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Models_Stddev_Samp_Fields = {
  __typename?: 'models_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  uploaderId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "models" */
export type Models_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Models_Sum_Fields = {
  __typename?: 'models_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  organizationId?: Maybe<Scalars['Int']>;
  uploaderId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "models" */
export type Models_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** update columns of table "models" */
export enum Models_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExecutionContext = 'executionContext',
  /** column name */
  GitBranch = 'gitBranch',
  /** column name */
  GitCommit = 'gitCommit',
  /** column name */
  GitIsDirty = 'gitIsDirty',
  /** column name */
  GitRepo = 'gitRepo',
  /** column name */
  Id = 'id',
  /** column name */
  IsCurrent = 'isCurrent',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UploaderId = 'uploaderId'
}

/** aggregate var_pop on columns */
export type Models_Var_Pop_Fields = {
  __typename?: 'models_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  uploaderId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "models" */
export type Models_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Models_Var_Samp_Fields = {
  __typename?: 'models_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  uploaderId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "models" */
export type Models_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Models_Variance_Fields = {
  __typename?: 'models_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  uploaderId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "models" */
export type Models_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  uploaderId?: Maybe<Order_By>;
};

/**
 * Healthy MQL servers send liveness checks to Transform to help us keep the service running smoothly
 *
 *
 * columns and relationships of "mql_heartbeats"
 */
export type Mql_Heartbeats = {
  __typename?: 'mql_heartbeats';
  createdAt: Scalars['timestamptz'];
  details?: Maybe<Scalars['json']>;
  id: Scalars['Int'];
  /** An object relationship */
  mqlServer?: Maybe<Org_Mql_Servers>;
  mqlServerid?: Maybe<Scalars['Int']>;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  status: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
  versionSha: Scalars['String'];
};


/**
 * Healthy MQL servers send liveness checks to Transform to help us keep the service running smoothly
 *
 *
 * columns and relationships of "mql_heartbeats"
 */
export type Mql_HeartbeatsDetailsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "mql_heartbeats" */
export type Mql_Heartbeats_Aggregate = {
  __typename?: 'mql_heartbeats_aggregate';
  aggregate?: Maybe<Mql_Heartbeats_Aggregate_Fields>;
  nodes: Array<Mql_Heartbeats>;
};

/** aggregate fields of "mql_heartbeats" */
export type Mql_Heartbeats_Aggregate_Fields = {
  __typename?: 'mql_heartbeats_aggregate_fields';
  avg?: Maybe<Mql_Heartbeats_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Mql_Heartbeats_Max_Fields>;
  min?: Maybe<Mql_Heartbeats_Min_Fields>;
  stddev?: Maybe<Mql_Heartbeats_Stddev_Fields>;
  stddev_pop?: Maybe<Mql_Heartbeats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mql_Heartbeats_Stddev_Samp_Fields>;
  sum?: Maybe<Mql_Heartbeats_Sum_Fields>;
  var_pop?: Maybe<Mql_Heartbeats_Var_Pop_Fields>;
  var_samp?: Maybe<Mql_Heartbeats_Var_Samp_Fields>;
  variance?: Maybe<Mql_Heartbeats_Variance_Fields>;
};


/** aggregate fields of "mql_heartbeats" */
export type Mql_Heartbeats_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "mql_heartbeats" */
export type Mql_Heartbeats_Aggregate_Order_By = {
  avg?: Maybe<Mql_Heartbeats_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Mql_Heartbeats_Max_Order_By>;
  min?: Maybe<Mql_Heartbeats_Min_Order_By>;
  stddev?: Maybe<Mql_Heartbeats_Stddev_Order_By>;
  stddev_pop?: Maybe<Mql_Heartbeats_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Mql_Heartbeats_Stddev_Samp_Order_By>;
  sum?: Maybe<Mql_Heartbeats_Sum_Order_By>;
  var_pop?: Maybe<Mql_Heartbeats_Var_Pop_Order_By>;
  var_samp?: Maybe<Mql_Heartbeats_Var_Samp_Order_By>;
  variance?: Maybe<Mql_Heartbeats_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "mql_heartbeats" */
export type Mql_Heartbeats_Arr_Rel_Insert_Input = {
  data: Array<Mql_Heartbeats_Insert_Input>;
  on_conflict?: Maybe<Mql_Heartbeats_On_Conflict>;
};

/** aggregate avg on columns */
export type Mql_Heartbeats_Avg_Fields = {
  __typename?: 'mql_heartbeats_avg_fields';
  id?: Maybe<Scalars['Float']>;
  mqlServerid?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Avg_Order_By = {
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mql_heartbeats". All fields are combined with a logical 'AND'. */
export type Mql_Heartbeats_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Mql_Heartbeats_Bool_Exp>>>;
  _not?: Maybe<Mql_Heartbeats_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Mql_Heartbeats_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  details?: Maybe<Json_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  mqlServer?: Maybe<Org_Mql_Servers_Bool_Exp>;
  mqlServerid?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
  versionSha?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "mql_heartbeats" */
export enum Mql_Heartbeats_Constraint {
  /** unique or primary key constraint */
  MqlHeartbeatsPkey = 'mql_heartbeats_pkey'
}

/** input type for incrementing integer column in table "mql_heartbeats" */
export type Mql_Heartbeats_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  mqlServerid?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "mql_heartbeats" */
export type Mql_Heartbeats_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  details?: Maybe<Scalars['json']>;
  id?: Maybe<Scalars['Int']>;
  mqlServer?: Maybe<Org_Mql_Servers_Obj_Rel_Insert_Input>;
  mqlServerid?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
  versionSha?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Mql_Heartbeats_Max_Fields = {
  __typename?: 'mql_heartbeats_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mqlServerid?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  versionSha?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  versionSha?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Mql_Heartbeats_Min_Fields = {
  __typename?: 'mql_heartbeats_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mqlServerid?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  versionSha?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  versionSha?: Maybe<Order_By>;
};

/** response of any mutation on the table "mql_heartbeats" */
export type Mql_Heartbeats_Mutation_Response = {
  __typename?: 'mql_heartbeats_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Mql_Heartbeats>;
};

/** input type for inserting object relation for remote table "mql_heartbeats" */
export type Mql_Heartbeats_Obj_Rel_Insert_Input = {
  data: Mql_Heartbeats_Insert_Input;
  on_conflict?: Maybe<Mql_Heartbeats_On_Conflict>;
};

/** on conflict condition type for table "mql_heartbeats" */
export type Mql_Heartbeats_On_Conflict = {
  constraint: Mql_Heartbeats_Constraint;
  update_columns: Array<Mql_Heartbeats_Update_Column>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};

/** ordering options when selecting data from "mql_heartbeats" */
export type Mql_Heartbeats_Order_By = {
  createdAt?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mqlServer?: Maybe<Org_Mql_Servers_Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
  versionSha?: Maybe<Order_By>;
};

/** primary key columns input for table: "mql_heartbeats" */
export type Mql_Heartbeats_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "mql_heartbeats" */
export enum Mql_Heartbeats_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  MqlServerid = 'mqlServerid',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId',
  /** column name */
  VersionSha = 'versionSha'
}

/** input type for updating data in table "mql_heartbeats" */
export type Mql_Heartbeats_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  details?: Maybe<Scalars['json']>;
  id?: Maybe<Scalars['Int']>;
  mqlServerid?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  versionSha?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Mql_Heartbeats_Stddev_Fields = {
  __typename?: 'mql_heartbeats_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  mqlServerid?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Mql_Heartbeats_Stddev_Pop_Fields = {
  __typename?: 'mql_heartbeats_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mqlServerid?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Mql_Heartbeats_Stddev_Samp_Fields = {
  __typename?: 'mql_heartbeats_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mqlServerid?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Mql_Heartbeats_Sum_Fields = {
  __typename?: 'mql_heartbeats_sum_fields';
  id?: Maybe<Scalars['Int']>;
  mqlServerid?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Sum_Order_By = {
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "mql_heartbeats" */
export enum Mql_Heartbeats_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  MqlServerid = 'mqlServerid',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId',
  /** column name */
  VersionSha = 'versionSha'
}

/** aggregate var_pop on columns */
export type Mql_Heartbeats_Var_Pop_Fields = {
  __typename?: 'mql_heartbeats_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mqlServerid?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Mql_Heartbeats_Var_Samp_Fields = {
  __typename?: 'mql_heartbeats_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mqlServerid?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Mql_Heartbeats_Variance_Fields = {
  __typename?: 'mql_heartbeats_variance_fields';
  id?: Maybe<Scalars['Float']>;
  mqlServerid?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "mql_heartbeats" */
export type Mql_Heartbeats_Variance_Order_By = {
  id?: Maybe<Order_By>;
  mqlServerid?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert a single row into the table: "metric_collection_metrics" */
  addMetricCollectionMetric?: Maybe<Metric_Collection_Metrics>;
  /** insert data into the table: "metric_collection_metrics" */
  addMetricCollectionMetrics?: Maybe<Metric_Collection_Metrics_Mutation_Response>;
  /** insert a single row into the table: "team_members" */
  addTeamMember?: Maybe<Team_Members>;
  /** insert data into the table: "team_members" */
  addTeamMembers?: Maybe<Team_Members_Mutation_Response>;
  /** perform the action: "addUserRole" */
  addUserRole?: Maybe<AddUserRoleOutput>;
  /** insert a single row into the table: "metric_approvals" */
  approveMetric?: Maybe<Metric_Approvals>;
  /** insert data into the table: "metric_approvals" */
  approveMetrics?: Maybe<Metric_Approvals_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  assignUserRole?: Maybe<User_Roles>;
  /** insert data into the table: "user_roles" */
  assignUserRoles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "annotations" */
  createAnnotation?: Maybe<Annotations>;
  /** insert data into the table: "annotations" */
  createAnnotations?: Maybe<Annotations_Mutation_Response>;
  /** perform the action: "createApiKey" */
  createApiKey?: Maybe<CreateApiKeyOutput>;
  /** perform the action: "createApiKeyForUser" */
  createApiKeyForUser?: Maybe<CreateApiKeyForUserOutput>;
  /** insert a single row into the table: "dashboards" */
  createDashboard?: Maybe<Dashboards>;
  /** insert a single row into the table: "dashboard_item_configs" */
  createDashboardItem?: Maybe<Dashboard_Item_Configs>;
  /** insert data into the table: "dashboard_item_configs" */
  createDashboardItems?: Maybe<Dashboard_Item_Configs_Mutation_Response>;
  /** insert a single row into the table: "dashboard_sections" */
  createDashboardSection?: Maybe<Dashboard_Sections>;
  /** insert data into the table: "dashboard_sections" */
  createDashboardSections?: Maybe<Dashboard_Sections_Mutation_Response>;
  /** insert data into the table: "dashboards" */
  createDashboards?: Maybe<Dashboards_Mutation_Response>;
  /** insert a single row into the table: "features" */
  createFeature?: Maybe<Features>;
  /** insert data into the table: "features" */
  createFeatures?: Maybe<Features_Mutation_Response>;
  /** insert a single row into the table: "metric_annotations" */
  createMetricAnnotation?: Maybe<Metric_Annotations>;
  /** insert data into the table: "metric_annotations" */
  createMetricAnnotations?: Maybe<Metric_Annotations_Mutation_Response>;
  /** insert a single row into the table: "metric_collections" */
  createMetricCollection?: Maybe<Metric_Collections>;
  /** insert a single row into the table: "metric_collection_view" */
  createMetricCollectionView?: Maybe<Metric_Collection_View>;
  /** insert data into the table: "metric_collection_view" */
  createMetricCollectionViews?: Maybe<Metric_Collection_View_Mutation_Response>;
  /** insert data into the table: "metric_collections" */
  createMetricCollections?: Maybe<Metric_Collections_Mutation_Response>;
  /** insert a single row into the table: "metric_descriptions" */
  createMetricDescription?: Maybe<Metric_Descriptions>;
  /** insert data into the table: "metric_descriptions" */
  createMetricDescriptions?: Maybe<Metric_Descriptions_Mutation_Response>;
  /** insert a single row into the table: "metric_team_owners" */
  createMetricTeamOwner?: Maybe<Metric_Team_Owners>;
  /** insert data into the table: "metric_team_owners" */
  createMetricTeamOwners?: Maybe<Metric_Team_Owners_Mutation_Response>;
  /** insert a single row into the table: "metric_user_owners" */
  createMetricUserOwner?: Maybe<Metric_User_Owners>;
  /** insert data into the table: "metric_user_owners" */
  createMetricUserOwners?: Maybe<Metric_User_Owners_Mutation_Response>;
  /** insert a single row into the table: "metric_view" */
  createMetricView?: Maybe<Metric_View>;
  /** insert data into the table: "metric_view" */
  createMetricViews?: Maybe<Metric_View_Mutation_Response>;
  /** insert a single row into the table: "mql_heartbeats" */
  createMqlHeartbeat?: Maybe<Mql_Heartbeats>;
  /** insert data into the table: "mql_heartbeats" */
  createMqlHeartbeats?: Maybe<Mql_Heartbeats_Mutation_Response>;
  /** insert a single row into the table: "org_mql_servers" */
  createOrgMqlServer?: Maybe<Org_Mql_Servers>;
  /** insert data into the table: "org_mql_servers" */
  createOrgMqlServers?: Maybe<Org_Mql_Servers_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  createOrganization?: Maybe<Organizations>;
  /** insert a single row into the table: "organization_features" */
  createOrganizationFeature?: Maybe<Organization_Features>;
  /** insert data into the table: "organization_features" */
  createOrganizationFeatures?: Maybe<Organization_Features_Mutation_Response>;
  /** insert data into the table: "organizations" */
  createOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  createQuestion?: Maybe<Questions>;
  /** insert data into the table: "question_replies" */
  createQuestionReplies?: Maybe<Question_Replies_Mutation_Response>;
  /** insert a single row into the table: "question_replies" */
  createQuestionReply?: Maybe<Question_Replies>;
  /** insert data into the table: "questions" */
  createQuestions?: Maybe<Questions_Mutation_Response>;
  /** insert data into the table: "saved_queries" */
  createSavedQueries?: Maybe<Saved_Queries_Mutation_Response>;
  /** insert a single row into the table: "saved_queries" */
  createSavedQuery?: Maybe<Saved_Queries>;
  /** insert a single row into the table: "teams" */
  createTeam?: Maybe<Teams>;
  /** insert a single row into the table: "team_dashboards" */
  createTeamDashboard?: Maybe<Team_Dashboards>;
  /** insert data into the table: "team_dashboards" */
  createTeamDashboards?: Maybe<Team_Dashboards_Mutation_Response>;
  /** insert a single row into the table: "team_views" */
  createTeamView?: Maybe<Team_Views>;
  /** insert data into the table: "team_views" */
  createTeamViews?: Maybe<Team_Views_Mutation_Response>;
  /** insert data into the table: "teams" */
  createTeams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "unsubscribes" */
  createUnsubscribe?: Maybe<Unsubscribes>;
  /** insert data into the table: "unsubscribes" */
  createUnsubscribes?: Maybe<Unsubscribes_Mutation_Response>;
  /** perform the action: "createUser" */
  createUser?: Maybe<CreateUserOutput>;
  /** insert a single row into the table: "user_dashboards" */
  createUserDashboard?: Maybe<User_Dashboards>;
  /** insert data into the table: "user_dashboards" */
  createUserDashboards?: Maybe<User_Dashboards_Mutation_Response>;
  /** insert a single row into the table: "user_features" */
  createUserFeature?: Maybe<User_Features>;
  /** insert data into the table: "user_features" */
  createUserFeatures?: Maybe<User_Features_Mutation_Response>;
  /** perform the action: "createUserForOrg" */
  createUserForOrg?: Maybe<CreateUserOutput>;
  /** insert a single row into the table: "user_prefs" */
  createUserPreference?: Maybe<User_Prefs>;
  /** insert data into the table: "user_prefs" */
  createUserPreferences?: Maybe<User_Prefs_Mutation_Response>;
  /** insert a single row into the table: "saved_query_metrics" */
  createdSavedQueryMetric?: Maybe<Saved_Query_Metrics>;
  /** insert data into the table: "saved_query_metrics" */
  createdSavedQueryMetrics?: Maybe<Saved_Query_Metrics_Mutation_Response>;
  /** perform the action: "deactivateUser" */
  deactivateUser?: Maybe<DeactivateUserOutput>;
  /** delete single row from the table: "annotations" */
  deleteAnnotation?: Maybe<Annotations>;
  /** delete data from the table: "annotations" */
  deleteAnnotations?: Maybe<Annotations_Mutation_Response>;
  /** delete single row from the table: "dashboard_item_configs" */
  deleteDashboardItem?: Maybe<Dashboard_Item_Configs>;
  /** delete data from the table: "dashboard_item_configs" */
  deleteDashboardItems?: Maybe<Dashboard_Item_Configs_Mutation_Response>;
  /** delete single row from the table: "dashboard_sections" */
  deleteDashboardSection?: Maybe<Dashboard_Sections>;
  /** delete data from the table: "dashboard_sections" */
  deleteDashboardSections?: Maybe<Dashboard_Sections_Mutation_Response>;
  /** delete single row from the table: "features" */
  deleteFeature?: Maybe<Features>;
  /** delete data from the table: "features" */
  deleteFeatures?: Maybe<Features_Mutation_Response>;
  /** delete single row from the table: "metric_annotations" */
  deleteMetricAnnotation?: Maybe<Metric_Annotations>;
  /** delete data from the table: "metric_annotations" */
  deleteMetricAnnotations?: Maybe<Metric_Annotations_Mutation_Response>;
  /** delete single row from the table: "metric_collections" */
  deleteMetricCollection?: Maybe<Metric_Collections>;
  /** delete data from the table: "metric_collections" */
  deleteMetricCollections?: Maybe<Metric_Collections_Mutation_Response>;
  /** delete single row from the table: "metric_descriptions" */
  deleteMetricDescription?: Maybe<Metric_Descriptions>;
  /** delete data from the table: "metric_descriptions" */
  deleteMetricDescriptions?: Maybe<Metric_Descriptions_Mutation_Response>;
  /** delete single row from the table: "metric_team_owners" */
  deleteMetricTeamOwner?: Maybe<Metric_Team_Owners>;
  /** delete data from the table: "metric_team_owners" */
  deleteMetricTeamOwners?: Maybe<Metric_Team_Owners_Mutation_Response>;
  /** delete single row from the table: "metric_user_owners" */
  deleteMetricUserOwner?: Maybe<Metric_User_Owners>;
  /** delete data from the table: "metric_user_owners" */
  deleteMetricUserOwners?: Maybe<Metric_User_Owners_Mutation_Response>;
  /** delete single row from the table: "org_mql_servers" */
  deleteOrgMqlServer?: Maybe<Org_Mql_Servers>;
  /** delete data from the table: "org_mql_servers" */
  deleteOrgMqlServers?: Maybe<Org_Mql_Servers_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  deleteOrganization?: Maybe<Organizations>;
  /** delete single row from the table: "organization_features" */
  deleteOrganizationFeature?: Maybe<Organization_Features>;
  /** delete data from the table: "organization_features" */
  deleteOrganizationFeatures?: Maybe<Organization_Features_Mutation_Response>;
  /** delete data from the table: "organizations" */
  deleteOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** delete data from the table: "question_replies" */
  deleteQuestionReplies?: Maybe<Question_Replies_Mutation_Response>;
  /** delete single row from the table: "question_replies" */
  deleteQuestionReply?: Maybe<Question_Replies>;
  /** delete single row from the table: "saved_query_metrics" */
  deleteSavedQueryMetric?: Maybe<Saved_Query_Metrics>;
  /** delete data from the table: "saved_query_metrics" */
  deleteSavedQueryMetrics?: Maybe<Saved_Query_Metrics_Mutation_Response>;
  /** delete single row from the table: "team_dashboards" */
  deleteTeamDashboard?: Maybe<Team_Dashboards>;
  /** delete data from the table: "team_dashboards" */
  deleteTeamDashboards?: Maybe<Team_Dashboards_Mutation_Response>;
  /** delete single row from the table: "unsubscribes" */
  deleteUnsubscribe?: Maybe<Unsubscribes>;
  /** delete data from the table: "unsubscribes" */
  deleteUnsubscribes?: Maybe<Unsubscribes_Mutation_Response>;
  /** delete single row from the table: "user_dashboards" */
  deleteUserDashboard?: Maybe<User_Dashboards>;
  /** delete data from the table: "user_dashboards" */
  deleteUserDashboards?: Maybe<User_Dashboards_Mutation_Response>;
  /** delete single row from the table: "user_features" */
  deleteUserFeature?: Maybe<User_Features>;
  /** delete data from the table: "user_features" */
  deleteUserFeatures?: Maybe<User_Features_Mutation_Response>;
  /** delete single row from the table: "user_prefs" */
  deleteUserPreference?: Maybe<User_Prefs>;
  /** delete data from the table: "user_prefs" */
  deleteUserPreferences?: Maybe<User_Prefs_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  deleteUserRole?: Maybe<User_Roles>;
  /** delete data from the table: "user_roles" */
  deleteUserRoles?: Maybe<User_Roles_Mutation_Response>;
  /** delete data from the table: "api_keys" */
  delete_api_keys?: Maybe<Api_Keys_Mutation_Response>;
  /** delete single row from the table: "api_keys" */
  delete_api_keys_by_pk?: Maybe<Api_Keys>;
  /** delete data from the table: "branch_metadatas" */
  delete_branch_metadatas?: Maybe<Branch_Metadatas_Mutation_Response>;
  /** delete single row from the table: "branch_metadatas" */
  delete_branch_metadatas_by_pk?: Maybe<Branch_Metadatas>;
  /** delete data from the table: "dashboard_layouts" */
  delete_dashboard_layouts?: Maybe<Dashboard_Layouts_Mutation_Response>;
  /** delete single row from the table: "dashboard_layouts" */
  delete_dashboard_layouts_by_pk?: Maybe<Dashboard_Layouts>;
  /** delete data from the table: "dashboard_renderable_types" */
  delete_dashboard_renderable_types?: Maybe<Dashboard_Renderable_Types_Mutation_Response>;
  /** delete single row from the table: "dashboard_renderable_types" */
  delete_dashboard_renderable_types_by_pk?: Maybe<Dashboard_Renderable_Types>;
  /** delete data from the table: "dashboard_section_types" */
  delete_dashboard_section_types?: Maybe<Dashboard_Section_Types_Mutation_Response>;
  /** delete single row from the table: "dashboard_section_types" */
  delete_dashboard_section_types_by_pk?: Maybe<Dashboard_Section_Types>;
  /** delete data from the table: "dashboards" */
  delete_dashboards?: Maybe<Dashboards_Mutation_Response>;
  /** delete single row from the table: "dashboards" */
  delete_dashboards_by_pk?: Maybe<Dashboards>;
  /** delete data from the table: "data_source_versions" */
  delete_data_source_versions?: Maybe<Data_Source_Versions_Mutation_Response>;
  /** delete single row from the table: "data_source_versions" */
  delete_data_source_versions_by_pk?: Maybe<Data_Source_Versions>;
  /** delete data from the table: "dw_engines" */
  delete_dw_engines?: Maybe<Dw_Engines_Mutation_Response>;
  /** delete single row from the table: "dw_engines" */
  delete_dw_engines_by_pk?: Maybe<Dw_Engines>;
  /** delete data from the table: "metric_collection_view" */
  delete_metric_collection_view?: Maybe<Metric_Collection_View_Mutation_Response>;
  /** delete single row from the table: "metric_collection_view" */
  delete_metric_collection_view_by_pk?: Maybe<Metric_Collection_View>;
  /** delete data from the table: "metric_current_description" */
  delete_metric_current_description?: Maybe<Metric_Current_Description_Mutation_Response>;
  /** delete data from the table: "metric_lineage_data_sources" */
  delete_metric_lineage_data_sources?: Maybe<Metric_Lineage_Data_Sources_Mutation_Response>;
  /** delete single row from the table: "metric_lineage_data_sources" */
  delete_metric_lineage_data_sources_by_pk?: Maybe<Metric_Lineage_Data_Sources>;
  /** delete data from the table: "metric_versions" */
  delete_metric_versions?: Maybe<Metric_Versions_Mutation_Response>;
  /** delete single row from the table: "metric_versions" */
  delete_metric_versions_by_pk?: Maybe<Metric_Versions>;
  /** delete data from the table: "metric_view" */
  delete_metric_view?: Maybe<Metric_View_Mutation_Response>;
  /** delete data from the table: "model_data_sources" */
  delete_model_data_sources?: Maybe<Model_Data_Sources_Mutation_Response>;
  /** delete single row from the table: "model_data_sources" */
  delete_model_data_sources_by_pk?: Maybe<Model_Data_Sources>;
  /** delete data from the table: "model_metrics" */
  delete_model_metrics?: Maybe<Model_Metrics_Mutation_Response>;
  /** delete single row from the table: "model_metrics" */
  delete_model_metrics_by_pk?: Maybe<Model_Metrics>;
  /** delete data from the table: "models" */
  delete_models?: Maybe<Models_Mutation_Response>;
  /** delete single row from the table: "models" */
  delete_models_by_pk?: Maybe<Models>;
  /** delete data from the table: "mql_heartbeats" */
  delete_mql_heartbeats?: Maybe<Mql_Heartbeats_Mutation_Response>;
  /** delete single row from the table: "mql_heartbeats" */
  delete_mql_heartbeats_by_pk?: Maybe<Mql_Heartbeats>;
  /** delete data from the table: "org_data_sources" */
  delete_org_data_sources?: Maybe<Org_Data_Sources_Mutation_Response>;
  /** delete single row from the table: "org_data_sources" */
  delete_org_data_sources_by_pk?: Maybe<Org_Data_Sources>;
  /** delete data from the table: "org_metrics_current_view" */
  delete_org_metrics_current_view?: Maybe<Org_Metrics_Current_View_Mutation_Response>;
  /** delete single row from the table: "org_metrics_current_view" */
  delete_org_metrics_current_view_by_pk?: Maybe<Org_Metrics_Current_View>;
  /** delete data from the table: "org_mql_server_logs_types" */
  delete_org_mql_server_logs_types?: Maybe<Org_Mql_Server_Logs_Types_Mutation_Response>;
  /** delete single row from the table: "org_mql_server_logs_types" */
  delete_org_mql_server_logs_types_by_pk?: Maybe<Org_Mql_Server_Logs_Types>;
  /** delete data from the table: "priorities" */
  delete_priorities?: Maybe<Priorities_Mutation_Response>;
  /** delete single row from the table: "priorities" */
  delete_priorities_by_pk?: Maybe<Priorities>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "saved_queries" */
  delete_saved_queries?: Maybe<Saved_Queries_Mutation_Response>;
  /** delete single row from the table: "saved_queries" */
  delete_saved_queries_by_pk?: Maybe<Saved_Queries>;
  /** delete data from the table: "team_page_theme_colors" */
  delete_team_page_theme_colors?: Maybe<Team_Page_Theme_Colors_Mutation_Response>;
  /** delete single row from the table: "team_page_theme_colors" */
  delete_team_page_theme_colors_by_pk?: Maybe<Team_Page_Theme_Colors>;
  /** delete data from the table: "team_views" */
  delete_team_views?: Maybe<Team_Views_Mutation_Response>;
  /** delete single row from the table: "team_views" */
  delete_team_views_by_pk?: Maybe<Team_Views>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "user_role_types" */
  delete_user_role_types?: Maybe<User_Role_Types_Mutation_Response>;
  /** delete single row from the table: "user_role_types" */
  delete_user_role_types_by_pk?: Maybe<User_Role_Types>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert a single row into the table: "question_directed_to" */
  directQuestionTo?: Maybe<Question_Directed_To>;
  /** insert data into the table: "question_directed_to" */
  directQuestionToMultiple?: Maybe<Question_Directed_To_Mutation_Response>;
  /** insert data into the table: "api_keys" */
  insert_api_keys?: Maybe<Api_Keys_Mutation_Response>;
  /** insert a single row into the table: "api_keys" */
  insert_api_keys_one?: Maybe<Api_Keys>;
  /** insert data into the table: "branch_metadatas" */
  insert_branch_metadatas?: Maybe<Branch_Metadatas_Mutation_Response>;
  /** insert a single row into the table: "branch_metadatas" */
  insert_branch_metadatas_one?: Maybe<Branch_Metadatas>;
  /** insert data into the table: "dashboard_layouts" */
  insert_dashboard_layouts?: Maybe<Dashboard_Layouts_Mutation_Response>;
  /** insert a single row into the table: "dashboard_layouts" */
  insert_dashboard_layouts_one?: Maybe<Dashboard_Layouts>;
  /** insert data into the table: "dashboard_renderable_types" */
  insert_dashboard_renderable_types?: Maybe<Dashboard_Renderable_Types_Mutation_Response>;
  /** insert a single row into the table: "dashboard_renderable_types" */
  insert_dashboard_renderable_types_one?: Maybe<Dashboard_Renderable_Types>;
  /** insert data into the table: "dashboard_section_types" */
  insert_dashboard_section_types?: Maybe<Dashboard_Section_Types_Mutation_Response>;
  /** insert a single row into the table: "dashboard_section_types" */
  insert_dashboard_section_types_one?: Maybe<Dashboard_Section_Types>;
  /** insert data into the table: "data_source_versions" */
  insert_data_source_versions?: Maybe<Data_Source_Versions_Mutation_Response>;
  /** insert a single row into the table: "data_source_versions" */
  insert_data_source_versions_one?: Maybe<Data_Source_Versions>;
  /** insert data into the table: "dw_engines" */
  insert_dw_engines?: Maybe<Dw_Engines_Mutation_Response>;
  /** insert a single row into the table: "dw_engines" */
  insert_dw_engines_one?: Maybe<Dw_Engines>;
  /** insert data into the table: "metric_current_description" */
  insert_metric_current_description?: Maybe<Metric_Current_Description_Mutation_Response>;
  /** insert a single row into the table: "metric_current_description" */
  insert_metric_current_description_one?: Maybe<Metric_Current_Description>;
  /** insert data into the table: "metric_lineage_data_sources" */
  insert_metric_lineage_data_sources?: Maybe<Metric_Lineage_Data_Sources_Mutation_Response>;
  /** insert a single row into the table: "metric_lineage_data_sources" */
  insert_metric_lineage_data_sources_one?: Maybe<Metric_Lineage_Data_Sources>;
  /** insert data into the table: "metric_versions" */
  insert_metric_versions?: Maybe<Metric_Versions_Mutation_Response>;
  /** insert a single row into the table: "metric_versions" */
  insert_metric_versions_one?: Maybe<Metric_Versions>;
  /** insert data into the table: "model_data_sources" */
  insert_model_data_sources?: Maybe<Model_Data_Sources_Mutation_Response>;
  /** insert a single row into the table: "model_data_sources" */
  insert_model_data_sources_one?: Maybe<Model_Data_Sources>;
  /** insert data into the table: "model_metrics" */
  insert_model_metrics?: Maybe<Model_Metrics_Mutation_Response>;
  /** insert a single row into the table: "model_metrics" */
  insert_model_metrics_one?: Maybe<Model_Metrics>;
  /** insert data into the table: "models" */
  insert_models?: Maybe<Models_Mutation_Response>;
  /** insert a single row into the table: "models" */
  insert_models_one?: Maybe<Models>;
  /** insert data into the table: "org_data_sources" */
  insert_org_data_sources?: Maybe<Org_Data_Sources_Mutation_Response>;
  /** insert a single row into the table: "org_data_sources" */
  insert_org_data_sources_one?: Maybe<Org_Data_Sources>;
  /** insert data into the table: "org_metrics_current_view" */
  insert_org_metrics_current_view?: Maybe<Org_Metrics_Current_View_Mutation_Response>;
  /** insert a single row into the table: "org_metrics_current_view" */
  insert_org_metrics_current_view_one?: Maybe<Org_Metrics_Current_View>;
  /** insert data into the table: "org_mql_server_logs_types" */
  insert_org_mql_server_logs_types?: Maybe<Org_Mql_Server_Logs_Types_Mutation_Response>;
  /** insert a single row into the table: "org_mql_server_logs_types" */
  insert_org_mql_server_logs_types_one?: Maybe<Org_Mql_Server_Logs_Types>;
  /** insert data into the table: "priorities" */
  insert_priorities?: Maybe<Priorities_Mutation_Response>;
  /** insert a single row into the table: "priorities" */
  insert_priorities_one?: Maybe<Priorities>;
  /** insert data into the table: "team_page_theme_colors" */
  insert_team_page_theme_colors?: Maybe<Team_Page_Theme_Colors_Mutation_Response>;
  /** insert a single row into the table: "team_page_theme_colors" */
  insert_team_page_theme_colors_one?: Maybe<Team_Page_Theme_Colors>;
  /** insert data into the table: "user_role_types" */
  insert_user_role_types?: Maybe<User_Role_Types_Mutation_Response>;
  /** insert a single row into the table: "user_role_types" */
  insert_user_role_types_one?: Maybe<User_Role_Types>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert a single row into the table: "question_likes" */
  likeQuestion?: Maybe<Question_Likes>;
  /** insert data into the table: "question_likes" */
  likeQuestions?: Maybe<Question_Likes_Mutation_Response>;
  logMqlLog?: Maybe<LogMqlLogs>;
  /** perform the action: "reactivateUser" */
  reactivateUser?: Maybe<ReactivateUserOutput>;
  /** delete single row from the table: "question_directed_to" */
  removeDirectQuestionTo?: Maybe<Question_Directed_To>;
  /** delete data from the table: "question_directed_to" */
  removeDirectQuestionToMultiple?: Maybe<Question_Directed_To_Mutation_Response>;
  /** delete single row from the table: "metric_approvals" */
  removeMetricApproval?: Maybe<Metric_Approvals>;
  /** delete data from the table: "metric_approvals" */
  removeMetricApprovals?: Maybe<Metric_Approvals_Mutation_Response>;
  /** delete single row from the table: "metric_collection_metrics" */
  removeMetricCollectionMetric?: Maybe<Metric_Collection_Metrics>;
  /** delete data from the table: "metric_collection_metrics" */
  removeMetricCollectionMetrics?: Maybe<Metric_Collection_Metrics_Mutation_Response>;
  /** delete single row from the table: "team_members" */
  removeTeamMember?: Maybe<Team_Members>;
  /** delete data from the table: "team_members" */
  removeTeamMembers?: Maybe<Team_Members_Mutation_Response>;
  /** perform the action: "removeUserRole" */
  removeUserRole?: Maybe<RemoveUserRoleOutput>;
  /** delete single row from the table: "question_likes" */
  unlikeQuestion?: Maybe<Question_Likes>;
  /** delete data from the table: "question_likes" */
  unlikeQuestions?: Maybe<Question_Likes_Mutation_Response>;
  /** update single row of the table: "annotations" */
  updateAnnotation?: Maybe<Annotations>;
  /** update data of the table: "annotations" */
  updateAnnotations?: Maybe<Annotations_Mutation_Response>;
  /** update single row of the table: "api_keys" */
  updateApiKey?: Maybe<Api_Keys>;
  /** update data of the table: "api_keys" */
  updateApiKeys?: Maybe<Api_Keys_Mutation_Response>;
  /** update single row of the table: "dashboards" */
  updateDashboard?: Maybe<Dashboards>;
  /** update single row of the table: "dashboard_item_configs" */
  updateDashboardItem?: Maybe<Dashboard_Item_Configs>;
  /** update data of the table: "dashboard_item_configs" */
  updateDashboardItems?: Maybe<Dashboard_Item_Configs_Mutation_Response>;
  /** update single row of the table: "dashboard_sections" */
  updateDashboardSection?: Maybe<Dashboard_Sections>;
  /** update data of the table: "dashboard_sections" */
  updateDashboardSections?: Maybe<Dashboard_Sections_Mutation_Response>;
  /** update data of the table: "dashboards" */
  updateDashboards?: Maybe<Dashboards_Mutation_Response>;
  /** update single row of the table: "features" */
  updateFeature?: Maybe<Features>;
  /** update data of the table: "features" */
  updateFeatures?: Maybe<Features_Mutation_Response>;
  /** update single row of the table: "metric_annotations" */
  updateMetricAnnotation?: Maybe<Metric_Annotations>;
  /** update data of the table: "metric_annotations" */
  updateMetricAnnotations?: Maybe<Metric_Annotations_Mutation_Response>;
  /** update single row of the table: "metric_collections" */
  updateMetricCollection?: Maybe<Metric_Collections>;
  /** update data of the table: "metric_collections" */
  updateMetricCollections?: Maybe<Metric_Collections_Mutation_Response>;
  /** perform the action: "updateMyEmail" */
  updateMyEmail?: Maybe<UpdateMyEmailOutput>;
  /** update single row of the table: "org_mql_servers" */
  updateOrgMqlServer?: Maybe<Org_Mql_Servers>;
  /** update data of the table: "org_mql_servers" */
  updateOrgMqlServers?: Maybe<Org_Mql_Servers_Mutation_Response>;
  /** update single row of the table: "organizations" */
  updateOrganization?: Maybe<Organizations>;
  /** update single row of the table: "organization_features" */
  updateOrganizationFeature?: Maybe<Organization_Features>;
  /** update data of the table: "organization_features" */
  updateOrganizationFeatures?: Maybe<Organization_Features_Mutation_Response>;
  /** update data of the table: "organizations" */
  updateOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "questions" */
  updateQuestion?: Maybe<Questions>;
  /** update data of the table: "question_replies" */
  updateQuestionReplies?: Maybe<Question_Replies_Mutation_Response>;
  /** update single row of the table: "question_replies" */
  updateQuestionReply?: Maybe<Question_Replies>;
  /** update data of the table: "questions" */
  updateQuestions?: Maybe<Questions_Mutation_Response>;
  /** update data of the table: "saved_queries" */
  updateSavedQueries?: Maybe<Saved_Queries_Mutation_Response>;
  /** update single row of the table: "saved_queries" */
  updateSavedQuery?: Maybe<Saved_Queries>;
  /** update single row of the table: "teams" */
  updateTeam?: Maybe<Teams>;
  /** update single row of the table: "team_dashboards" */
  updateTeamDashboard?: Maybe<Team_Dashboards>;
  /** update data of the table: "team_dashboards" */
  updateTeamDashboards?: Maybe<Team_Dashboards_Mutation_Response>;
  /** update single row of the table: "team_members" */
  updateTeamMember?: Maybe<Team_Members>;
  /** update data of the table: "team_members" */
  updateTeamMembers?: Maybe<Team_Members_Mutation_Response>;
  /** update data of the table: "teams" */
  updateTeams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "users" */
  updateUser?: Maybe<Users>;
  /** update single row of the table: "user_dashboards" */
  updateUserDashboard?: Maybe<User_Dashboards>;
  /** update data of the table: "user_dashboards" */
  updateUserDashboards?: Maybe<User_Dashboards_Mutation_Response>;
  /** perform the action: "updateUserEmailForOrg" */
  updateUserEmailForOrg?: Maybe<UpdateUserEmailForOrgOutput>;
  /** update single row of the table: "user_features" */
  updateUserFeature?: Maybe<User_Features>;
  /** update data of the table: "user_features" */
  updateUserFeatures?: Maybe<User_Features_Mutation_Response>;
  /** update single row of the table: "user_prefs" */
  updateUserPreference?: Maybe<User_Prefs>;
  /** update data of the table: "user_prefs" */
  updateUserPreferences?: Maybe<User_Prefs_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  updateUserRole?: Maybe<User_Roles>;
  /** update data of the table: "user_roles" */
  updateUserRoles?: Maybe<User_Roles_Mutation_Response>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "branch_metadatas" */
  update_branch_metadatas?: Maybe<Branch_Metadatas_Mutation_Response>;
  /** update single row of the table: "branch_metadatas" */
  update_branch_metadatas_by_pk?: Maybe<Branch_Metadatas>;
  /** update data of the table: "dashboard_layouts" */
  update_dashboard_layouts?: Maybe<Dashboard_Layouts_Mutation_Response>;
  /** update single row of the table: "dashboard_layouts" */
  update_dashboard_layouts_by_pk?: Maybe<Dashboard_Layouts>;
  /** update data of the table: "dashboard_renderable_types" */
  update_dashboard_renderable_types?: Maybe<Dashboard_Renderable_Types_Mutation_Response>;
  /** update single row of the table: "dashboard_renderable_types" */
  update_dashboard_renderable_types_by_pk?: Maybe<Dashboard_Renderable_Types>;
  /** update data of the table: "dashboard_section_types" */
  update_dashboard_section_types?: Maybe<Dashboard_Section_Types_Mutation_Response>;
  /** update single row of the table: "dashboard_section_types" */
  update_dashboard_section_types_by_pk?: Maybe<Dashboard_Section_Types>;
  /** update data of the table: "data_source_versions" */
  update_data_source_versions?: Maybe<Data_Source_Versions_Mutation_Response>;
  /** update single row of the table: "data_source_versions" */
  update_data_source_versions_by_pk?: Maybe<Data_Source_Versions>;
  /** update data of the table: "dw_engines" */
  update_dw_engines?: Maybe<Dw_Engines_Mutation_Response>;
  /** update single row of the table: "dw_engines" */
  update_dw_engines_by_pk?: Maybe<Dw_Engines>;
  /** update data of the table: "metric_approvals" */
  update_metric_approvals?: Maybe<Metric_Approvals_Mutation_Response>;
  /** update single row of the table: "metric_approvals" */
  update_metric_approvals_by_pk?: Maybe<Metric_Approvals>;
  /** update data of the table: "metric_collection_metrics" */
  update_metric_collection_metrics?: Maybe<Metric_Collection_Metrics_Mutation_Response>;
  /** update single row of the table: "metric_collection_metrics" */
  update_metric_collection_metrics_by_pk?: Maybe<Metric_Collection_Metrics>;
  /** update data of the table: "metric_collection_view" */
  update_metric_collection_view?: Maybe<Metric_Collection_View_Mutation_Response>;
  /** update single row of the table: "metric_collection_view" */
  update_metric_collection_view_by_pk?: Maybe<Metric_Collection_View>;
  /** update data of the table: "metric_current_description" */
  update_metric_current_description?: Maybe<Metric_Current_Description_Mutation_Response>;
  /** update data of the table: "metric_descriptions" */
  update_metric_descriptions?: Maybe<Metric_Descriptions_Mutation_Response>;
  /** update single row of the table: "metric_descriptions" */
  update_metric_descriptions_by_pk?: Maybe<Metric_Descriptions>;
  /** update data of the table: "metric_lineage_data_sources" */
  update_metric_lineage_data_sources?: Maybe<Metric_Lineage_Data_Sources_Mutation_Response>;
  /** update single row of the table: "metric_lineage_data_sources" */
  update_metric_lineage_data_sources_by_pk?: Maybe<Metric_Lineage_Data_Sources>;
  /** update data of the table: "metric_team_owners" */
  update_metric_team_owners?: Maybe<Metric_Team_Owners_Mutation_Response>;
  /** update single row of the table: "metric_team_owners" */
  update_metric_team_owners_by_pk?: Maybe<Metric_Team_Owners>;
  /** update data of the table: "metric_user_owners" */
  update_metric_user_owners?: Maybe<Metric_User_Owners_Mutation_Response>;
  /** update single row of the table: "metric_user_owners" */
  update_metric_user_owners_by_pk?: Maybe<Metric_User_Owners>;
  /** update data of the table: "metric_versions" */
  update_metric_versions?: Maybe<Metric_Versions_Mutation_Response>;
  /** update single row of the table: "metric_versions" */
  update_metric_versions_by_pk?: Maybe<Metric_Versions>;
  /** update data of the table: "metric_view" */
  update_metric_view?: Maybe<Metric_View_Mutation_Response>;
  /** update data of the table: "model_data_sources" */
  update_model_data_sources?: Maybe<Model_Data_Sources_Mutation_Response>;
  /** update single row of the table: "model_data_sources" */
  update_model_data_sources_by_pk?: Maybe<Model_Data_Sources>;
  /** update data of the table: "model_metrics" */
  update_model_metrics?: Maybe<Model_Metrics_Mutation_Response>;
  /** update single row of the table: "model_metrics" */
  update_model_metrics_by_pk?: Maybe<Model_Metrics>;
  /** update data of the table: "models" */
  update_models?: Maybe<Models_Mutation_Response>;
  /** update single row of the table: "models" */
  update_models_by_pk?: Maybe<Models>;
  /** update data of the table: "mql_heartbeats" */
  update_mql_heartbeats?: Maybe<Mql_Heartbeats_Mutation_Response>;
  /** update single row of the table: "mql_heartbeats" */
  update_mql_heartbeats_by_pk?: Maybe<Mql_Heartbeats>;
  /** update data of the table: "org_data_sources" */
  update_org_data_sources?: Maybe<Org_Data_Sources_Mutation_Response>;
  /** update single row of the table: "org_data_sources" */
  update_org_data_sources_by_pk?: Maybe<Org_Data_Sources>;
  /** update data of the table: "org_metrics_current_view" */
  update_org_metrics_current_view?: Maybe<Org_Metrics_Current_View_Mutation_Response>;
  /** update single row of the table: "org_metrics_current_view" */
  update_org_metrics_current_view_by_pk?: Maybe<Org_Metrics_Current_View>;
  /** update data of the table: "org_mql_server_logs_types" */
  update_org_mql_server_logs_types?: Maybe<Org_Mql_Server_Logs_Types_Mutation_Response>;
  /** update single row of the table: "org_mql_server_logs_types" */
  update_org_mql_server_logs_types_by_pk?: Maybe<Org_Mql_Server_Logs_Types>;
  /** update data of the table: "priorities" */
  update_priorities?: Maybe<Priorities_Mutation_Response>;
  /** update single row of the table: "priorities" */
  update_priorities_by_pk?: Maybe<Priorities>;
  /** update data of the table: "question_directed_to" */
  update_question_directed_to?: Maybe<Question_Directed_To_Mutation_Response>;
  /** update single row of the table: "question_directed_to" */
  update_question_directed_to_by_pk?: Maybe<Question_Directed_To>;
  /** update data of the table: "question_likes" */
  update_question_likes?: Maybe<Question_Likes_Mutation_Response>;
  /** update single row of the table: "question_likes" */
  update_question_likes_by_pk?: Maybe<Question_Likes>;
  /** update data of the table: "saved_query_metrics" */
  update_saved_query_metrics?: Maybe<Saved_Query_Metrics_Mutation_Response>;
  /** update single row of the table: "saved_query_metrics" */
  update_saved_query_metrics_by_pk?: Maybe<Saved_Query_Metrics>;
  /** update data of the table: "team_page_theme_colors" */
  update_team_page_theme_colors?: Maybe<Team_Page_Theme_Colors_Mutation_Response>;
  /** update single row of the table: "team_page_theme_colors" */
  update_team_page_theme_colors_by_pk?: Maybe<Team_Page_Theme_Colors>;
  /** update data of the table: "team_views" */
  update_team_views?: Maybe<Team_Views_Mutation_Response>;
  /** update single row of the table: "team_views" */
  update_team_views_by_pk?: Maybe<Team_Views>;
  /** update data of the table: "unsubscribes" */
  update_unsubscribes?: Maybe<Unsubscribes_Mutation_Response>;
  /** update single row of the table: "unsubscribes" */
  update_unsubscribes_by_pk?: Maybe<Unsubscribes>;
  /** update data of the table: "user_role_types" */
  update_user_role_types?: Maybe<User_Role_Types_Mutation_Response>;
  /** update single row of the table: "user_role_types" */
  update_user_role_types_by_pk?: Maybe<User_Role_Types>;
};


/** mutation root */
export type Mutation_RootAddMetricCollectionMetricArgs = {
  object: Metric_Collection_Metrics_Insert_Input;
  on_conflict?: Maybe<Metric_Collection_Metrics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddMetricCollectionMetricsArgs = {
  objects: Array<Metric_Collection_Metrics_Insert_Input>;
  on_conflict?: Maybe<Metric_Collection_Metrics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddTeamMemberArgs = {
  object: Team_Members_Insert_Input;
  on_conflict?: Maybe<Team_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddTeamMembersArgs = {
  objects: Array<Team_Members_Insert_Input>;
  on_conflict?: Maybe<Team_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddUserRoleArgs = {
  input: AddUserRoleInput;
};


/** mutation root */
export type Mutation_RootApproveMetricArgs = {
  object: Metric_Approvals_Insert_Input;
  on_conflict?: Maybe<Metric_Approvals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootApproveMetricsArgs = {
  objects: Array<Metric_Approvals_Insert_Input>;
  on_conflict?: Maybe<Metric_Approvals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAssignUserRoleArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAssignUserRolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateAnnotationArgs = {
  object: Annotations_Insert_Input;
  on_conflict?: Maybe<Annotations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateAnnotationsArgs = {
  objects: Array<Annotations_Insert_Input>;
  on_conflict?: Maybe<Annotations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateApiKeyForUserArgs = {
  input: CreateApiKeyForUserInput;
};


/** mutation root */
export type Mutation_RootCreateDashboardArgs = {
  object: Dashboards_Insert_Input;
  on_conflict?: Maybe<Dashboards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateDashboardItemArgs = {
  object: Dashboard_Item_Configs_Insert_Input;
  on_conflict?: Maybe<Dashboard_Item_Configs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateDashboardItemsArgs = {
  objects: Array<Dashboard_Item_Configs_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Item_Configs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateDashboardSectionArgs = {
  object: Dashboard_Sections_Insert_Input;
  on_conflict?: Maybe<Dashboard_Sections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateDashboardSectionsArgs = {
  objects: Array<Dashboard_Sections_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Sections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateDashboardsArgs = {
  objects: Array<Dashboards_Insert_Input>;
  on_conflict?: Maybe<Dashboards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateFeatureArgs = {
  object: Features_Insert_Input;
  on_conflict?: Maybe<Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateFeaturesArgs = {
  objects: Array<Features_Insert_Input>;
  on_conflict?: Maybe<Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricAnnotationArgs = {
  object: Metric_Annotations_Insert_Input;
  on_conflict?: Maybe<Metric_Annotations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricAnnotationsArgs = {
  objects: Array<Metric_Annotations_Insert_Input>;
  on_conflict?: Maybe<Metric_Annotations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricCollectionArgs = {
  object: Metric_Collections_Insert_Input;
  on_conflict?: Maybe<Metric_Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricCollectionViewArgs = {
  object: Metric_Collection_View_Insert_Input;
  on_conflict?: Maybe<Metric_Collection_View_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricCollectionViewsArgs = {
  objects: Array<Metric_Collection_View_Insert_Input>;
  on_conflict?: Maybe<Metric_Collection_View_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricCollectionsArgs = {
  objects: Array<Metric_Collections_Insert_Input>;
  on_conflict?: Maybe<Metric_Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricDescriptionArgs = {
  object: Metric_Descriptions_Insert_Input;
  on_conflict?: Maybe<Metric_Descriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricDescriptionsArgs = {
  objects: Array<Metric_Descriptions_Insert_Input>;
  on_conflict?: Maybe<Metric_Descriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricTeamOwnerArgs = {
  object: Metric_Team_Owners_Insert_Input;
  on_conflict?: Maybe<Metric_Team_Owners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricTeamOwnersArgs = {
  objects: Array<Metric_Team_Owners_Insert_Input>;
  on_conflict?: Maybe<Metric_Team_Owners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricUserOwnerArgs = {
  object: Metric_User_Owners_Insert_Input;
  on_conflict?: Maybe<Metric_User_Owners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricUserOwnersArgs = {
  objects: Array<Metric_User_Owners_Insert_Input>;
  on_conflict?: Maybe<Metric_User_Owners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMetricViewArgs = {
  object: Metric_View_Insert_Input;
};


/** mutation root */
export type Mutation_RootCreateMetricViewsArgs = {
  objects: Array<Metric_View_Insert_Input>;
};


/** mutation root */
export type Mutation_RootCreateMqlHeartbeatArgs = {
  object: Mql_Heartbeats_Insert_Input;
  on_conflict?: Maybe<Mql_Heartbeats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateMqlHeartbeatsArgs = {
  objects: Array<Mql_Heartbeats_Insert_Input>;
  on_conflict?: Maybe<Mql_Heartbeats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOrgMqlServerArgs = {
  object: Org_Mql_Servers_Insert_Input;
  on_conflict?: Maybe<Org_Mql_Servers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOrgMqlServersArgs = {
  objects: Array<Org_Mql_Servers_Insert_Input>;
  on_conflict?: Maybe<Org_Mql_Servers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOrganizationArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOrganizationFeatureArgs = {
  object: Organization_Features_Insert_Input;
  on_conflict?: Maybe<Organization_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOrganizationFeaturesArgs = {
  objects: Array<Organization_Features_Insert_Input>;
  on_conflict?: Maybe<Organization_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateQuestionArgs = {
  object: Questions_Insert_Input;
  on_conflict?: Maybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateQuestionRepliesArgs = {
  objects: Array<Question_Replies_Insert_Input>;
  on_conflict?: Maybe<Question_Replies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateQuestionReplyArgs = {
  object: Question_Replies_Insert_Input;
  on_conflict?: Maybe<Question_Replies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateQuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: Maybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateSavedQueriesArgs = {
  objects: Array<Saved_Queries_Insert_Input>;
  on_conflict?: Maybe<Saved_Queries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateSavedQueryArgs = {
  object: Saved_Queries_Insert_Input;
  on_conflict?: Maybe<Saved_Queries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateTeamArgs = {
  object: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateTeamDashboardArgs = {
  object: Team_Dashboards_Insert_Input;
  on_conflict?: Maybe<Team_Dashboards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateTeamDashboardsArgs = {
  objects: Array<Team_Dashboards_Insert_Input>;
  on_conflict?: Maybe<Team_Dashboards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateTeamViewArgs = {
  object: Team_Views_Insert_Input;
  on_conflict?: Maybe<Team_Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateTeamViewsArgs = {
  objects: Array<Team_Views_Insert_Input>;
  on_conflict?: Maybe<Team_Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateTeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateUnsubscribeArgs = {
  object: Unsubscribes_Insert_Input;
  on_conflict?: Maybe<Unsubscribes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateUnsubscribesArgs = {
  objects: Array<Unsubscribes_Insert_Input>;
  on_conflict?: Maybe<Unsubscribes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateUserArgs = {
  input: CreateUserInput;
};


/** mutation root */
export type Mutation_RootCreateUserDashboardArgs = {
  object: User_Dashboards_Insert_Input;
  on_conflict?: Maybe<User_Dashboards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateUserDashboardsArgs = {
  objects: Array<User_Dashboards_Insert_Input>;
  on_conflict?: Maybe<User_Dashboards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateUserFeatureArgs = {
  object: User_Features_Insert_Input;
  on_conflict?: Maybe<User_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateUserFeaturesArgs = {
  objects: Array<User_Features_Insert_Input>;
  on_conflict?: Maybe<User_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateUserForOrgArgs = {
  input: CreateUserForOrgInput;
};


/** mutation root */
export type Mutation_RootCreateUserPreferenceArgs = {
  object: User_Prefs_Insert_Input;
  on_conflict?: Maybe<User_Prefs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateUserPreferencesArgs = {
  objects: Array<User_Prefs_Insert_Input>;
  on_conflict?: Maybe<User_Prefs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreatedSavedQueryMetricArgs = {
  object: Saved_Query_Metrics_Insert_Input;
  on_conflict?: Maybe<Saved_Query_Metrics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreatedSavedQueryMetricsArgs = {
  objects: Array<Saved_Query_Metrics_Insert_Input>;
  on_conflict?: Maybe<Saved_Query_Metrics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootDeactivateUserArgs = {
  input: DeactivateUserInput;
};


/** mutation root */
export type Mutation_RootDeleteAnnotationArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteAnnotationsArgs = {
  where: Annotations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteDashboardItemArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteDashboardItemsArgs = {
  where: Dashboard_Item_Configs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteDashboardSectionArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteDashboardSectionsArgs = {
  where: Dashboard_Sections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFeatureArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteFeaturesArgs = {
  where: Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteMetricAnnotationArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteMetricAnnotationsArgs = {
  where: Metric_Annotations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteMetricCollectionArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteMetricCollectionsArgs = {
  where: Metric_Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteMetricDescriptionArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteMetricDescriptionsArgs = {
  where: Metric_Descriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteMetricTeamOwnerArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteMetricTeamOwnersArgs = {
  where: Metric_Team_Owners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteMetricUserOwnerArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteMetricUserOwnersArgs = {
  where: Metric_User_Owners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOrgMqlServerArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteOrgMqlServersArgs = {
  where: Org_Mql_Servers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOrganizationArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteOrganizationFeatureArgs = {
  featureId: Scalars['Int'];
  organizationId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteOrganizationFeaturesArgs = {
  where: Organization_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteQuestionRepliesArgs = {
  where: Question_Replies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteQuestionReplyArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteSavedQueryMetricArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteSavedQueryMetricsArgs = {
  where: Saved_Query_Metrics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTeamDashboardArgs = {
  dashboardId: Scalars['Int'];
  team_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteTeamDashboardsArgs = {
  where: Team_Dashboards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUnsubscribeArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteUnsubscribesArgs = {
  where: Unsubscribes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserDashboardArgs = {
  dashboardId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteUserDashboardsArgs = {
  where: User_Dashboards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserFeatureArgs = {
  featureId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteUserFeaturesArgs = {
  where: User_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserPreferenceArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteUserPreferencesArgs = {
  where: User_Prefs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserRoleArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteUserRolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Api_KeysArgs = {
  where: Api_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Api_Keys_By_PkArgs = {
  prefix: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Branch_MetadatasArgs = {
  where: Branch_Metadatas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Branch_Metadatas_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Dashboard_LayoutsArgs = {
  where: Dashboard_Layouts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dashboard_Layouts_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Dashboard_Renderable_TypesArgs = {
  where: Dashboard_Renderable_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dashboard_Renderable_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Dashboard_Section_TypesArgs = {
  where: Dashboard_Section_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dashboard_Section_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_DashboardsArgs = {
  where: Dashboards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dashboards_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Data_Source_VersionsArgs = {
  where: Data_Source_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Data_Source_Versions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Dw_EnginesArgs = {
  where: Dw_Engines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dw_Engines_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Metric_Collection_ViewArgs = {
  where: Metric_Collection_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Metric_Collection_View_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Metric_Current_DescriptionArgs = {
  where: Metric_Current_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Metric_Lineage_Data_SourcesArgs = {
  where: Metric_Lineage_Data_Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Metric_Lineage_Data_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Metric_VersionsArgs = {
  where: Metric_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Metric_Versions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Metric_ViewArgs = {
  where: Metric_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Model_Data_SourcesArgs = {
  where: Model_Data_Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Model_Data_Sources_By_PkArgs = {
  dataSourceVersionId: Scalars['Int'];
  modelId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Model_MetricsArgs = {
  where: Model_Metrics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Model_Metrics_By_PkArgs = {
  metricId: Scalars['bigint'];
  metricVersionId: Scalars['bigint'];
  modelId: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ModelsArgs = {
  where: Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Models_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Mql_HeartbeatsArgs = {
  where: Mql_Heartbeats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mql_Heartbeats_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Org_Data_SourcesArgs = {
  where: Org_Data_Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Org_Data_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Org_Metrics_Current_ViewArgs = {
  where: Org_Metrics_Current_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Org_Metrics_Current_View_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Org_Mql_Server_Logs_TypesArgs = {
  where: Org_Mql_Server_Logs_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Org_Mql_Server_Logs_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PrioritiesArgs = {
  where: Priorities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Priorities_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Saved_QueriesArgs = {
  where: Saved_Queries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Saved_Queries_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Team_Page_Theme_ColorsArgs = {
  where: Team_Page_Theme_Colors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Page_Theme_Colors_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Team_ViewsArgs = {
  where: Team_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_Views_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_Role_TypesArgs = {
  where: User_Role_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Role_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDirectQuestionToArgs = {
  object: Question_Directed_To_Insert_Input;
  on_conflict?: Maybe<Question_Directed_To_On_Conflict>;
};


/** mutation root */
export type Mutation_RootDirectQuestionToMultipleArgs = {
  objects: Array<Question_Directed_To_Insert_Input>;
  on_conflict?: Maybe<Question_Directed_To_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Api_KeysArgs = {
  objects: Array<Api_Keys_Insert_Input>;
  on_conflict?: Maybe<Api_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Api_Keys_OneArgs = {
  object: Api_Keys_Insert_Input;
  on_conflict?: Maybe<Api_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Branch_MetadatasArgs = {
  objects: Array<Branch_Metadatas_Insert_Input>;
  on_conflict?: Maybe<Branch_Metadatas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Branch_Metadatas_OneArgs = {
  object: Branch_Metadatas_Insert_Input;
  on_conflict?: Maybe<Branch_Metadatas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dashboard_LayoutsArgs = {
  objects: Array<Dashboard_Layouts_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Layouts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dashboard_Layouts_OneArgs = {
  object: Dashboard_Layouts_Insert_Input;
  on_conflict?: Maybe<Dashboard_Layouts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dashboard_Renderable_TypesArgs = {
  objects: Array<Dashboard_Renderable_Types_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Renderable_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dashboard_Renderable_Types_OneArgs = {
  object: Dashboard_Renderable_Types_Insert_Input;
  on_conflict?: Maybe<Dashboard_Renderable_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dashboard_Section_TypesArgs = {
  objects: Array<Dashboard_Section_Types_Insert_Input>;
  on_conflict?: Maybe<Dashboard_Section_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dashboard_Section_Types_OneArgs = {
  object: Dashboard_Section_Types_Insert_Input;
  on_conflict?: Maybe<Dashboard_Section_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_Source_VersionsArgs = {
  objects: Array<Data_Source_Versions_Insert_Input>;
  on_conflict?: Maybe<Data_Source_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Data_Source_Versions_OneArgs = {
  object: Data_Source_Versions_Insert_Input;
  on_conflict?: Maybe<Data_Source_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dw_EnginesArgs = {
  objects: Array<Dw_Engines_Insert_Input>;
  on_conflict?: Maybe<Dw_Engines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dw_Engines_OneArgs = {
  object: Dw_Engines_Insert_Input;
  on_conflict?: Maybe<Dw_Engines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Metric_Current_DescriptionArgs = {
  objects: Array<Metric_Current_Description_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Metric_Current_Description_OneArgs = {
  object: Metric_Current_Description_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Metric_Lineage_Data_SourcesArgs = {
  objects: Array<Metric_Lineage_Data_Sources_Insert_Input>;
  on_conflict?: Maybe<Metric_Lineage_Data_Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Metric_Lineage_Data_Sources_OneArgs = {
  object: Metric_Lineage_Data_Sources_Insert_Input;
  on_conflict?: Maybe<Metric_Lineage_Data_Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Metric_VersionsArgs = {
  objects: Array<Metric_Versions_Insert_Input>;
  on_conflict?: Maybe<Metric_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Metric_Versions_OneArgs = {
  object: Metric_Versions_Insert_Input;
  on_conflict?: Maybe<Metric_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Model_Data_SourcesArgs = {
  objects: Array<Model_Data_Sources_Insert_Input>;
  on_conflict?: Maybe<Model_Data_Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Model_Data_Sources_OneArgs = {
  object: Model_Data_Sources_Insert_Input;
  on_conflict?: Maybe<Model_Data_Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Model_MetricsArgs = {
  objects: Array<Model_Metrics_Insert_Input>;
  on_conflict?: Maybe<Model_Metrics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Model_Metrics_OneArgs = {
  object: Model_Metrics_Insert_Input;
  on_conflict?: Maybe<Model_Metrics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ModelsArgs = {
  objects: Array<Models_Insert_Input>;
  on_conflict?: Maybe<Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Models_OneArgs = {
  object: Models_Insert_Input;
  on_conflict?: Maybe<Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_Data_SourcesArgs = {
  objects: Array<Org_Data_Sources_Insert_Input>;
  on_conflict?: Maybe<Org_Data_Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_Data_Sources_OneArgs = {
  object: Org_Data_Sources_Insert_Input;
  on_conflict?: Maybe<Org_Data_Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_Metrics_Current_ViewArgs = {
  objects: Array<Org_Metrics_Current_View_Insert_Input>;
  on_conflict?: Maybe<Org_Metrics_Current_View_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_Metrics_Current_View_OneArgs = {
  object: Org_Metrics_Current_View_Insert_Input;
  on_conflict?: Maybe<Org_Metrics_Current_View_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_Mql_Server_Logs_TypesArgs = {
  objects: Array<Org_Mql_Server_Logs_Types_Insert_Input>;
  on_conflict?: Maybe<Org_Mql_Server_Logs_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_Mql_Server_Logs_Types_OneArgs = {
  object: Org_Mql_Server_Logs_Types_Insert_Input;
  on_conflict?: Maybe<Org_Mql_Server_Logs_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrioritiesArgs = {
  objects: Array<Priorities_Insert_Input>;
  on_conflict?: Maybe<Priorities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Priorities_OneArgs = {
  object: Priorities_Insert_Input;
  on_conflict?: Maybe<Priorities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Page_Theme_ColorsArgs = {
  objects: Array<Team_Page_Theme_Colors_Insert_Input>;
  on_conflict?: Maybe<Team_Page_Theme_Colors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_Page_Theme_Colors_OneArgs = {
  object: Team_Page_Theme_Colors_Insert_Input;
  on_conflict?: Maybe<Team_Page_Theme_Colors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_TypesArgs = {
  objects: Array<User_Role_Types_Insert_Input>;
  on_conflict?: Maybe<User_Role_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_Types_OneArgs = {
  object: User_Role_Types_Insert_Input;
  on_conflict?: Maybe<User_Role_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLikeQuestionArgs = {
  object: Question_Likes_Insert_Input;
  on_conflict?: Maybe<Question_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLikeQuestionsArgs = {
  objects: Array<Question_Likes_Insert_Input>;
  on_conflict?: Maybe<Question_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLogMqlLogArgs = {
  level?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};


/** mutation root */
export type Mutation_RootReactivateUserArgs = {
  input: ReactivateUserInput;
};


/** mutation root */
export type Mutation_RootRemoveDirectQuestionToArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootRemoveDirectQuestionToMultipleArgs = {
  where: Question_Directed_To_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveMetricApprovalArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootRemoveMetricApprovalsArgs = {
  where: Metric_Approvals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveMetricCollectionMetricArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootRemoveMetricCollectionMetricsArgs = {
  where: Metric_Collection_Metrics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveTeamMemberArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootRemoveTeamMembersArgs = {
  where: Team_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveUserRoleArgs = {
  input: RemoveUserRoleInput;
};


/** mutation root */
export type Mutation_RootUnlikeQuestionArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootUnlikeQuestionsArgs = {
  where: Question_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAnnotationArgs = {
  _inc?: Maybe<Annotations_Inc_Input>;
  _set?: Maybe<Annotations_Set_Input>;
  pk_columns: Annotations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAnnotationsArgs = {
  _inc?: Maybe<Annotations_Inc_Input>;
  _set?: Maybe<Annotations_Set_Input>;
  where: Annotations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateApiKeyArgs = {
  _inc?: Maybe<Api_Keys_Inc_Input>;
  _set?: Maybe<Api_Keys_Set_Input>;
  pk_columns: Api_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateApiKeysArgs = {
  _inc?: Maybe<Api_Keys_Inc_Input>;
  _set?: Maybe<Api_Keys_Set_Input>;
  where: Api_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDashboardArgs = {
  _inc?: Maybe<Dashboards_Inc_Input>;
  _set?: Maybe<Dashboards_Set_Input>;
  pk_columns: Dashboards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDashboardItemArgs = {
  _inc?: Maybe<Dashboard_Item_Configs_Inc_Input>;
  _set?: Maybe<Dashboard_Item_Configs_Set_Input>;
  pk_columns: Dashboard_Item_Configs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDashboardItemsArgs = {
  _inc?: Maybe<Dashboard_Item_Configs_Inc_Input>;
  _set?: Maybe<Dashboard_Item_Configs_Set_Input>;
  where: Dashboard_Item_Configs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDashboardSectionArgs = {
  _inc?: Maybe<Dashboard_Sections_Inc_Input>;
  _set?: Maybe<Dashboard_Sections_Set_Input>;
  pk_columns: Dashboard_Sections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDashboardSectionsArgs = {
  _inc?: Maybe<Dashboard_Sections_Inc_Input>;
  _set?: Maybe<Dashboard_Sections_Set_Input>;
  where: Dashboard_Sections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDashboardsArgs = {
  _inc?: Maybe<Dashboards_Inc_Input>;
  _set?: Maybe<Dashboards_Set_Input>;
  where: Dashboards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFeatureArgs = {
  _inc?: Maybe<Features_Inc_Input>;
  _set?: Maybe<Features_Set_Input>;
  pk_columns: Features_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFeaturesArgs = {
  _inc?: Maybe<Features_Inc_Input>;
  _set?: Maybe<Features_Set_Input>;
  where: Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateMetricAnnotationArgs = {
  _inc?: Maybe<Metric_Annotations_Inc_Input>;
  _set?: Maybe<Metric_Annotations_Set_Input>;
  pk_columns: Metric_Annotations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateMetricAnnotationsArgs = {
  _inc?: Maybe<Metric_Annotations_Inc_Input>;
  _set?: Maybe<Metric_Annotations_Set_Input>;
  where: Metric_Annotations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateMetricCollectionArgs = {
  _inc?: Maybe<Metric_Collections_Inc_Input>;
  _set?: Maybe<Metric_Collections_Set_Input>;
  pk_columns: Metric_Collections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateMetricCollectionsArgs = {
  _inc?: Maybe<Metric_Collections_Inc_Input>;
  _set?: Maybe<Metric_Collections_Set_Input>;
  where: Metric_Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateMyEmailArgs = {
  input: UpdateMyEmailInput;
};


/** mutation root */
export type Mutation_RootUpdateOrgMqlServerArgs = {
  _inc?: Maybe<Org_Mql_Servers_Inc_Input>;
  _set?: Maybe<Org_Mql_Servers_Set_Input>;
  pk_columns: Org_Mql_Servers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrgMqlServersArgs = {
  _inc?: Maybe<Org_Mql_Servers_Inc_Input>;
  _set?: Maybe<Org_Mql_Servers_Set_Input>;
  where: Org_Mql_Servers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationArgs = {
  _inc?: Maybe<Organizations_Inc_Input>;
  _set?: Maybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationFeatureArgs = {
  _inc?: Maybe<Organization_Features_Inc_Input>;
  _set?: Maybe<Organization_Features_Set_Input>;
  pk_columns: Organization_Features_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationFeaturesArgs = {
  _inc?: Maybe<Organization_Features_Inc_Input>;
  _set?: Maybe<Organization_Features_Set_Input>;
  where: Organization_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationsArgs = {
  _inc?: Maybe<Organizations_Inc_Input>;
  _set?: Maybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateQuestionArgs = {
  _inc?: Maybe<Questions_Inc_Input>;
  _set?: Maybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateQuestionRepliesArgs = {
  _inc?: Maybe<Question_Replies_Inc_Input>;
  _set?: Maybe<Question_Replies_Set_Input>;
  where: Question_Replies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateQuestionReplyArgs = {
  _inc?: Maybe<Question_Replies_Inc_Input>;
  _set?: Maybe<Question_Replies_Set_Input>;
  pk_columns: Question_Replies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateQuestionsArgs = {
  _inc?: Maybe<Questions_Inc_Input>;
  _set?: Maybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateSavedQueriesArgs = {
  _inc?: Maybe<Saved_Queries_Inc_Input>;
  _set?: Maybe<Saved_Queries_Set_Input>;
  where: Saved_Queries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateSavedQueryArgs = {
  _inc?: Maybe<Saved_Queries_Inc_Input>;
  _set?: Maybe<Saved_Queries_Set_Input>;
  pk_columns: Saved_Queries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTeamArgs = {
  _inc?: Maybe<Teams_Inc_Input>;
  _set?: Maybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTeamDashboardArgs = {
  _inc?: Maybe<Team_Dashboards_Inc_Input>;
  _set?: Maybe<Team_Dashboards_Set_Input>;
  pk_columns: Team_Dashboards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTeamDashboardsArgs = {
  _inc?: Maybe<Team_Dashboards_Inc_Input>;
  _set?: Maybe<Team_Dashboards_Set_Input>;
  where: Team_Dashboards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTeamMemberArgs = {
  _inc?: Maybe<Team_Members_Inc_Input>;
  _set?: Maybe<Team_Members_Set_Input>;
  pk_columns: Team_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTeamMembersArgs = {
  _inc?: Maybe<Team_Members_Inc_Input>;
  _set?: Maybe<Team_Members_Set_Input>;
  where: Team_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTeamsArgs = {
  _inc?: Maybe<Teams_Inc_Input>;
  _set?: Maybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUserDashboardArgs = {
  _inc?: Maybe<User_Dashboards_Inc_Input>;
  _set?: Maybe<User_Dashboards_Set_Input>;
  pk_columns: User_Dashboards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUserDashboardsArgs = {
  _inc?: Maybe<User_Dashboards_Inc_Input>;
  _set?: Maybe<User_Dashboards_Set_Input>;
  where: User_Dashboards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserEmailForOrgArgs = {
  input: UpdateUserEmailForOrgInput;
};


/** mutation root */
export type Mutation_RootUpdateUserFeatureArgs = {
  _inc?: Maybe<User_Features_Inc_Input>;
  _set?: Maybe<User_Features_Set_Input>;
  pk_columns: User_Features_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUserFeaturesArgs = {
  _inc?: Maybe<User_Features_Inc_Input>;
  _set?: Maybe<User_Features_Set_Input>;
  where: User_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserPreferenceArgs = {
  _inc?: Maybe<User_Prefs_Inc_Input>;
  _set?: Maybe<User_Prefs_Set_Input>;
  pk_columns: User_Prefs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUserPreferencesArgs = {
  _inc?: Maybe<User_Prefs_Inc_Input>;
  _set?: Maybe<User_Prefs_Set_Input>;
  where: User_Prefs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserRoleArgs = {
  _inc?: Maybe<User_Roles_Inc_Input>;
  _set?: Maybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUserRolesArgs = {
  _inc?: Maybe<User_Roles_Inc_Input>;
  _set?: Maybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Branch_MetadatasArgs = {
  _inc?: Maybe<Branch_Metadatas_Inc_Input>;
  _set?: Maybe<Branch_Metadatas_Set_Input>;
  where: Branch_Metadatas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Branch_Metadatas_By_PkArgs = {
  _inc?: Maybe<Branch_Metadatas_Inc_Input>;
  _set?: Maybe<Branch_Metadatas_Set_Input>;
  pk_columns: Branch_Metadatas_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dashboard_LayoutsArgs = {
  _set?: Maybe<Dashboard_Layouts_Set_Input>;
  where: Dashboard_Layouts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dashboard_Layouts_By_PkArgs = {
  _set?: Maybe<Dashboard_Layouts_Set_Input>;
  pk_columns: Dashboard_Layouts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dashboard_Renderable_TypesArgs = {
  _set?: Maybe<Dashboard_Renderable_Types_Set_Input>;
  where: Dashboard_Renderable_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dashboard_Renderable_Types_By_PkArgs = {
  _set?: Maybe<Dashboard_Renderable_Types_Set_Input>;
  pk_columns: Dashboard_Renderable_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dashboard_Section_TypesArgs = {
  _set?: Maybe<Dashboard_Section_Types_Set_Input>;
  where: Dashboard_Section_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dashboard_Section_Types_By_PkArgs = {
  _set?: Maybe<Dashboard_Section_Types_Set_Input>;
  pk_columns: Dashboard_Section_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Data_Source_VersionsArgs = {
  _inc?: Maybe<Data_Source_Versions_Inc_Input>;
  _set?: Maybe<Data_Source_Versions_Set_Input>;
  where: Data_Source_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Data_Source_Versions_By_PkArgs = {
  _inc?: Maybe<Data_Source_Versions_Inc_Input>;
  _set?: Maybe<Data_Source_Versions_Set_Input>;
  pk_columns: Data_Source_Versions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dw_EnginesArgs = {
  _set?: Maybe<Dw_Engines_Set_Input>;
  where: Dw_Engines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dw_Engines_By_PkArgs = {
  _set?: Maybe<Dw_Engines_Set_Input>;
  pk_columns: Dw_Engines_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_ApprovalsArgs = {
  _inc?: Maybe<Metric_Approvals_Inc_Input>;
  _set?: Maybe<Metric_Approvals_Set_Input>;
  where: Metric_Approvals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Approvals_By_PkArgs = {
  _inc?: Maybe<Metric_Approvals_Inc_Input>;
  _set?: Maybe<Metric_Approvals_Set_Input>;
  pk_columns: Metric_Approvals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Collection_MetricsArgs = {
  _inc?: Maybe<Metric_Collection_Metrics_Inc_Input>;
  _set?: Maybe<Metric_Collection_Metrics_Set_Input>;
  where: Metric_Collection_Metrics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Collection_Metrics_By_PkArgs = {
  _inc?: Maybe<Metric_Collection_Metrics_Inc_Input>;
  _set?: Maybe<Metric_Collection_Metrics_Set_Input>;
  pk_columns: Metric_Collection_Metrics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Collection_ViewArgs = {
  _inc?: Maybe<Metric_Collection_View_Inc_Input>;
  _set?: Maybe<Metric_Collection_View_Set_Input>;
  where: Metric_Collection_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Collection_View_By_PkArgs = {
  _inc?: Maybe<Metric_Collection_View_Inc_Input>;
  _set?: Maybe<Metric_Collection_View_Set_Input>;
  pk_columns: Metric_Collection_View_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Current_DescriptionArgs = {
  _inc?: Maybe<Metric_Current_Description_Inc_Input>;
  _set?: Maybe<Metric_Current_Description_Set_Input>;
  where: Metric_Current_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_DescriptionsArgs = {
  _inc?: Maybe<Metric_Descriptions_Inc_Input>;
  _set?: Maybe<Metric_Descriptions_Set_Input>;
  where: Metric_Descriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Descriptions_By_PkArgs = {
  _inc?: Maybe<Metric_Descriptions_Inc_Input>;
  _set?: Maybe<Metric_Descriptions_Set_Input>;
  pk_columns: Metric_Descriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Lineage_Data_SourcesArgs = {
  _inc?: Maybe<Metric_Lineage_Data_Sources_Inc_Input>;
  _set?: Maybe<Metric_Lineage_Data_Sources_Set_Input>;
  where: Metric_Lineage_Data_Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Lineage_Data_Sources_By_PkArgs = {
  _inc?: Maybe<Metric_Lineage_Data_Sources_Inc_Input>;
  _set?: Maybe<Metric_Lineage_Data_Sources_Set_Input>;
  pk_columns: Metric_Lineage_Data_Sources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Team_OwnersArgs = {
  _inc?: Maybe<Metric_Team_Owners_Inc_Input>;
  _set?: Maybe<Metric_Team_Owners_Set_Input>;
  where: Metric_Team_Owners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Team_Owners_By_PkArgs = {
  _inc?: Maybe<Metric_Team_Owners_Inc_Input>;
  _set?: Maybe<Metric_Team_Owners_Set_Input>;
  pk_columns: Metric_Team_Owners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_User_OwnersArgs = {
  _inc?: Maybe<Metric_User_Owners_Inc_Input>;
  _set?: Maybe<Metric_User_Owners_Set_Input>;
  where: Metric_User_Owners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_User_Owners_By_PkArgs = {
  _inc?: Maybe<Metric_User_Owners_Inc_Input>;
  _set?: Maybe<Metric_User_Owners_Set_Input>;
  pk_columns: Metric_User_Owners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_VersionsArgs = {
  _append?: Maybe<Metric_Versions_Append_Input>;
  _delete_at_path?: Maybe<Metric_Versions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Metric_Versions_Delete_Elem_Input>;
  _delete_key?: Maybe<Metric_Versions_Delete_Key_Input>;
  _inc?: Maybe<Metric_Versions_Inc_Input>;
  _prepend?: Maybe<Metric_Versions_Prepend_Input>;
  _set?: Maybe<Metric_Versions_Set_Input>;
  where: Metric_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_Versions_By_PkArgs = {
  _append?: Maybe<Metric_Versions_Append_Input>;
  _delete_at_path?: Maybe<Metric_Versions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Metric_Versions_Delete_Elem_Input>;
  _delete_key?: Maybe<Metric_Versions_Delete_Key_Input>;
  _inc?: Maybe<Metric_Versions_Inc_Input>;
  _prepend?: Maybe<Metric_Versions_Prepend_Input>;
  _set?: Maybe<Metric_Versions_Set_Input>;
  pk_columns: Metric_Versions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_ViewArgs = {
  _inc?: Maybe<Metric_View_Inc_Input>;
  _set?: Maybe<Metric_View_Set_Input>;
  where: Metric_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Model_Data_SourcesArgs = {
  _inc?: Maybe<Model_Data_Sources_Inc_Input>;
  _set?: Maybe<Model_Data_Sources_Set_Input>;
  where: Model_Data_Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Model_Data_Sources_By_PkArgs = {
  _inc?: Maybe<Model_Data_Sources_Inc_Input>;
  _set?: Maybe<Model_Data_Sources_Set_Input>;
  pk_columns: Model_Data_Sources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Model_MetricsArgs = {
  _inc?: Maybe<Model_Metrics_Inc_Input>;
  _set?: Maybe<Model_Metrics_Set_Input>;
  where: Model_Metrics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Model_Metrics_By_PkArgs = {
  _inc?: Maybe<Model_Metrics_Inc_Input>;
  _set?: Maybe<Model_Metrics_Set_Input>;
  pk_columns: Model_Metrics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ModelsArgs = {
  _inc?: Maybe<Models_Inc_Input>;
  _set?: Maybe<Models_Set_Input>;
  where: Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Models_By_PkArgs = {
  _inc?: Maybe<Models_Inc_Input>;
  _set?: Maybe<Models_Set_Input>;
  pk_columns: Models_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Mql_HeartbeatsArgs = {
  _inc?: Maybe<Mql_Heartbeats_Inc_Input>;
  _set?: Maybe<Mql_Heartbeats_Set_Input>;
  where: Mql_Heartbeats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mql_Heartbeats_By_PkArgs = {
  _inc?: Maybe<Mql_Heartbeats_Inc_Input>;
  _set?: Maybe<Mql_Heartbeats_Set_Input>;
  pk_columns: Mql_Heartbeats_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Data_SourcesArgs = {
  _inc?: Maybe<Org_Data_Sources_Inc_Input>;
  _set?: Maybe<Org_Data_Sources_Set_Input>;
  where: Org_Data_Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Data_Sources_By_PkArgs = {
  _inc?: Maybe<Org_Data_Sources_Inc_Input>;
  _set?: Maybe<Org_Data_Sources_Set_Input>;
  pk_columns: Org_Data_Sources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Metrics_Current_ViewArgs = {
  _inc?: Maybe<Org_Metrics_Current_View_Inc_Input>;
  _set?: Maybe<Org_Metrics_Current_View_Set_Input>;
  where: Org_Metrics_Current_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Metrics_Current_View_By_PkArgs = {
  _inc?: Maybe<Org_Metrics_Current_View_Inc_Input>;
  _set?: Maybe<Org_Metrics_Current_View_Set_Input>;
  pk_columns: Org_Metrics_Current_View_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Mql_Server_Logs_TypesArgs = {
  _set?: Maybe<Org_Mql_Server_Logs_Types_Set_Input>;
  where: Org_Mql_Server_Logs_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Mql_Server_Logs_Types_By_PkArgs = {
  _set?: Maybe<Org_Mql_Server_Logs_Types_Set_Input>;
  pk_columns: Org_Mql_Server_Logs_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PrioritiesArgs = {
  _set?: Maybe<Priorities_Set_Input>;
  where: Priorities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Priorities_By_PkArgs = {
  _set?: Maybe<Priorities_Set_Input>;
  pk_columns: Priorities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Question_Directed_ToArgs = {
  _inc?: Maybe<Question_Directed_To_Inc_Input>;
  _set?: Maybe<Question_Directed_To_Set_Input>;
  where: Question_Directed_To_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_Directed_To_By_PkArgs = {
  _inc?: Maybe<Question_Directed_To_Inc_Input>;
  _set?: Maybe<Question_Directed_To_Set_Input>;
  pk_columns: Question_Directed_To_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Question_LikesArgs = {
  _inc?: Maybe<Question_Likes_Inc_Input>;
  _set?: Maybe<Question_Likes_Set_Input>;
  where: Question_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_Likes_By_PkArgs = {
  _inc?: Maybe<Question_Likes_Inc_Input>;
  _set?: Maybe<Question_Likes_Set_Input>;
  pk_columns: Question_Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Saved_Query_MetricsArgs = {
  _inc?: Maybe<Saved_Query_Metrics_Inc_Input>;
  _set?: Maybe<Saved_Query_Metrics_Set_Input>;
  where: Saved_Query_Metrics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Saved_Query_Metrics_By_PkArgs = {
  _inc?: Maybe<Saved_Query_Metrics_Inc_Input>;
  _set?: Maybe<Saved_Query_Metrics_Set_Input>;
  pk_columns: Saved_Query_Metrics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Page_Theme_ColorsArgs = {
  _set?: Maybe<Team_Page_Theme_Colors_Set_Input>;
  where: Team_Page_Theme_Colors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Page_Theme_Colors_By_PkArgs = {
  _set?: Maybe<Team_Page_Theme_Colors_Set_Input>;
  pk_columns: Team_Page_Theme_Colors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_ViewsArgs = {
  _inc?: Maybe<Team_Views_Inc_Input>;
  _set?: Maybe<Team_Views_Set_Input>;
  where: Team_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_Views_By_PkArgs = {
  _inc?: Maybe<Team_Views_Inc_Input>;
  _set?: Maybe<Team_Views_Set_Input>;
  pk_columns: Team_Views_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UnsubscribesArgs = {
  _inc?: Maybe<Unsubscribes_Inc_Input>;
  _set?: Maybe<Unsubscribes_Set_Input>;
  where: Unsubscribes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Unsubscribes_By_PkArgs = {
  _inc?: Maybe<Unsubscribes_Inc_Input>;
  _set?: Maybe<Unsubscribes_Set_Input>;
  pk_columns: Unsubscribes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_TypesArgs = {
  _set?: Maybe<User_Role_Types_Set_Input>;
  where: User_Role_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_Types_By_PkArgs = {
  _set?: Maybe<User_Role_Types_Set_Input>;
  pk_columns: User_Role_Types_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * Stable ID for a data source name, by organization
 *
 *
 * columns and relationships of "org_data_sources"
 */
export type Org_Data_Sources = {
  __typename?: 'org_data_sources';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  metricVersions: Array<Metric_Versions>;
  /** An aggregated array relationship */
  metricVersions_aggregate: Metric_Versions_Aggregate;
  /** An array relationship */
  modelDataSources: Array<Model_Data_Sources>;
  /** An aggregated array relationship */
  modelDataSources_aggregate: Model_Data_Sources_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
};


/**
 * Stable ID for a data source name, by organization
 *
 *
 * columns and relationships of "org_data_sources"
 */
export type Org_Data_SourcesMetricVersionsArgs = {
  distinct_on?: Maybe<Array<Metric_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Versions_Order_By>>;
  where?: Maybe<Metric_Versions_Bool_Exp>;
};


/**
 * Stable ID for a data source name, by organization
 *
 *
 * columns and relationships of "org_data_sources"
 */
export type Org_Data_SourcesMetricVersions_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Versions_Order_By>>;
  where?: Maybe<Metric_Versions_Bool_Exp>;
};


/**
 * Stable ID for a data source name, by organization
 *
 *
 * columns and relationships of "org_data_sources"
 */
export type Org_Data_SourcesModelDataSourcesArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/**
 * Stable ID for a data source name, by organization
 *
 *
 * columns and relationships of "org_data_sources"
 */
export type Org_Data_SourcesModelDataSources_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};

/** aggregated selection of "org_data_sources" */
export type Org_Data_Sources_Aggregate = {
  __typename?: 'org_data_sources_aggregate';
  aggregate?: Maybe<Org_Data_Sources_Aggregate_Fields>;
  nodes: Array<Org_Data_Sources>;
};

/** aggregate fields of "org_data_sources" */
export type Org_Data_Sources_Aggregate_Fields = {
  __typename?: 'org_data_sources_aggregate_fields';
  avg?: Maybe<Org_Data_Sources_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Org_Data_Sources_Max_Fields>;
  min?: Maybe<Org_Data_Sources_Min_Fields>;
  stddev?: Maybe<Org_Data_Sources_Stddev_Fields>;
  stddev_pop?: Maybe<Org_Data_Sources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Org_Data_Sources_Stddev_Samp_Fields>;
  sum?: Maybe<Org_Data_Sources_Sum_Fields>;
  var_pop?: Maybe<Org_Data_Sources_Var_Pop_Fields>;
  var_samp?: Maybe<Org_Data_Sources_Var_Samp_Fields>;
  variance?: Maybe<Org_Data_Sources_Variance_Fields>;
};


/** aggregate fields of "org_data_sources" */
export type Org_Data_Sources_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Org_Data_Sources_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "org_data_sources" */
export type Org_Data_Sources_Aggregate_Order_By = {
  avg?: Maybe<Org_Data_Sources_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Org_Data_Sources_Max_Order_By>;
  min?: Maybe<Org_Data_Sources_Min_Order_By>;
  stddev?: Maybe<Org_Data_Sources_Stddev_Order_By>;
  stddev_pop?: Maybe<Org_Data_Sources_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Org_Data_Sources_Stddev_Samp_Order_By>;
  sum?: Maybe<Org_Data_Sources_Sum_Order_By>;
  var_pop?: Maybe<Org_Data_Sources_Var_Pop_Order_By>;
  var_samp?: Maybe<Org_Data_Sources_Var_Samp_Order_By>;
  variance?: Maybe<Org_Data_Sources_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "org_data_sources" */
export type Org_Data_Sources_Arr_Rel_Insert_Input = {
  data: Array<Org_Data_Sources_Insert_Input>;
  on_conflict?: Maybe<Org_Data_Sources_On_Conflict>;
};

/** aggregate avg on columns */
export type Org_Data_Sources_Avg_Fields = {
  __typename?: 'org_data_sources_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "org_data_sources" */
export type Org_Data_Sources_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "org_data_sources". All fields are combined with a logical 'AND'. */
export type Org_Data_Sources_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Org_Data_Sources_Bool_Exp>>>;
  _not?: Maybe<Org_Data_Sources_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Org_Data_Sources_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metricVersions?: Maybe<Metric_Versions_Bool_Exp>;
  modelDataSources?: Maybe<Model_Data_Sources_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_data_sources" */
export enum Org_Data_Sources_Constraint {
  /** unique or primary key constraint */
  OrgDataSourcesPkey = 'org_data_sources_pkey'
}

/** input type for incrementing integer column in table "org_data_sources" */
export type Org_Data_Sources_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "org_data_sources" */
export type Org_Data_Sources_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metricVersions?: Maybe<Metric_Versions_Arr_Rel_Insert_Input>;
  modelDataSources?: Maybe<Model_Data_Sources_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Org_Data_Sources_Max_Fields = {
  __typename?: 'org_data_sources_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "org_data_sources" */
export type Org_Data_Sources_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Org_Data_Sources_Min_Fields = {
  __typename?: 'org_data_sources_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "org_data_sources" */
export type Org_Data_Sources_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** response of any mutation on the table "org_data_sources" */
export type Org_Data_Sources_Mutation_Response = {
  __typename?: 'org_data_sources_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Org_Data_Sources>;
};

/** input type for inserting object relation for remote table "org_data_sources" */
export type Org_Data_Sources_Obj_Rel_Insert_Input = {
  data: Org_Data_Sources_Insert_Input;
  on_conflict?: Maybe<Org_Data_Sources_On_Conflict>;
};

/** on conflict condition type for table "org_data_sources" */
export type Org_Data_Sources_On_Conflict = {
  constraint: Org_Data_Sources_Constraint;
  update_columns: Array<Org_Data_Sources_Update_Column>;
  where?: Maybe<Org_Data_Sources_Bool_Exp>;
};

/** ordering options when selecting data from "org_data_sources" */
export type Org_Data_Sources_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricVersions_aggregate?: Maybe<Metric_Versions_Aggregate_Order_By>;
  modelDataSources_aggregate?: Maybe<Model_Data_Sources_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** primary key columns input for table: "org_data_sources" */
export type Org_Data_Sources_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "org_data_sources" */
export enum Org_Data_Sources_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId'
}

/** input type for updating data in table "org_data_sources" */
export type Org_Data_Sources_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Org_Data_Sources_Stddev_Fields = {
  __typename?: 'org_data_sources_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "org_data_sources" */
export type Org_Data_Sources_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Org_Data_Sources_Stddev_Pop_Fields = {
  __typename?: 'org_data_sources_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "org_data_sources" */
export type Org_Data_Sources_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Org_Data_Sources_Stddev_Samp_Fields = {
  __typename?: 'org_data_sources_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "org_data_sources" */
export type Org_Data_Sources_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Org_Data_Sources_Sum_Fields = {
  __typename?: 'org_data_sources_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "org_data_sources" */
export type Org_Data_Sources_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** update columns of table "org_data_sources" */
export enum Org_Data_Sources_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId'
}

/** aggregate var_pop on columns */
export type Org_Data_Sources_Var_Pop_Fields = {
  __typename?: 'org_data_sources_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "org_data_sources" */
export type Org_Data_Sources_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Org_Data_Sources_Var_Samp_Fields = {
  __typename?: 'org_data_sources_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "org_data_sources" */
export type Org_Data_Sources_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Org_Data_Sources_Variance_Fields = {
  __typename?: 'org_data_sources_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "org_data_sources" */
export type Org_Data_Sources_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_View = {
  __typename?: 'org_metrics_current_view';
  /** An array relationship */
  annotations: Array<Metric_Annotations>;
  /** An aggregated array relationship */
  annotations_aggregate: Metric_Annotations_Aggregate;
  /** An array relationship */
  approvals: Array<Metric_Approvals>;
  /** An aggregated array relationship */
  approvals_aggregate: Metric_Approvals_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  currentDescription?: Maybe<Metric_Current_Description>;
  /** An object relationship */
  currentModelMetric?: Maybe<Model_Metrics>;
  definition: Scalars['String'];
  /** An array relationship */
  descriptions: Array<Metric_Descriptions>;
  /** An aggregated array relationship */
  descriptions_aggregate: Metric_Descriptions_Aggregate;
  displayName: Scalars['String'];
  id: Scalars['Int'];
  metadata: Scalars['json'];
  /** An array relationship */
  metricCollections: Array<Metric_Collection_Metrics>;
  /** An aggregated array relationship */
  metricCollections_aggregate: Metric_Collection_Metrics_Aggregate;
  metricType: Scalars['Int'];
  /** An object relationship */
  model: Models;
  modelId: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  params: Scalars['json'];
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregated array relationship */
  questions_aggregate: Questions_Aggregate;
  removedAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  savedQueries: Array<Saved_Query_Metrics>;
  /** An aggregated array relationship */
  savedQueries_aggregate: Saved_Query_Metrics_Aggregate;
  /** An array relationship */
  teamOwners: Array<Metric_Team_Owners>;
  /** An aggregated array relationship */
  teamOwners_aggregate: Metric_Team_Owners_Aggregate;
  tier: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  userOwners: Array<Metric_User_Owners>;
  /** An aggregated array relationship */
  userOwners_aggregate: Metric_User_Owners_Aggregate;
  /** An array relationship */
  views: Array<Metric_View>;
  /** An aggregated array relationship */
  views_aggregate: Metric_View_Aggregate;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewAnnotationsArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewApprovalsArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewApprovals_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewDescriptionsArgs = {
  distinct_on?: Maybe<Array<Metric_Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Descriptions_Order_By>>;
  where?: Maybe<Metric_Descriptions_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewDescriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Descriptions_Order_By>>;
  where?: Maybe<Metric_Descriptions_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewMetricCollectionsArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_Metrics_Order_By>>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewMetricCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_Metrics_Order_By>>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewParamsArgs = {
  path?: Maybe<Scalars['String']>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewSavedQueriesArgs = {
  distinct_on?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Query_Metrics_Order_By>>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewSavedQueries_AggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Query_Metrics_Order_By>>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewTeamOwnersArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewTeamOwners_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewUserOwnersArgs = {
  distinct_on?: Maybe<Array<Metric_User_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_User_Owners_Order_By>>;
  where?: Maybe<Metric_User_Owners_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewUserOwners_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_User_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_User_Owners_Order_By>>;
  where?: Maybe<Metric_User_Owners_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewViewsArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/**
 * A Materialized View of the Current state of all Metrics
 *
 *
 * columns and relationships of "org_metrics_current_view"
 */
export type Org_Metrics_Current_ViewViews_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};

/** aggregated selection of "org_metrics_current_view" */
export type Org_Metrics_Current_View_Aggregate = {
  __typename?: 'org_metrics_current_view_aggregate';
  aggregate?: Maybe<Org_Metrics_Current_View_Aggregate_Fields>;
  nodes: Array<Org_Metrics_Current_View>;
};

/** aggregate fields of "org_metrics_current_view" */
export type Org_Metrics_Current_View_Aggregate_Fields = {
  __typename?: 'org_metrics_current_view_aggregate_fields';
  avg?: Maybe<Org_Metrics_Current_View_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Org_Metrics_Current_View_Max_Fields>;
  min?: Maybe<Org_Metrics_Current_View_Min_Fields>;
  stddev?: Maybe<Org_Metrics_Current_View_Stddev_Fields>;
  stddev_pop?: Maybe<Org_Metrics_Current_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Org_Metrics_Current_View_Stddev_Samp_Fields>;
  sum?: Maybe<Org_Metrics_Current_View_Sum_Fields>;
  var_pop?: Maybe<Org_Metrics_Current_View_Var_Pop_Fields>;
  var_samp?: Maybe<Org_Metrics_Current_View_Var_Samp_Fields>;
  variance?: Maybe<Org_Metrics_Current_View_Variance_Fields>;
};


/** aggregate fields of "org_metrics_current_view" */
export type Org_Metrics_Current_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Aggregate_Order_By = {
  avg?: Maybe<Org_Metrics_Current_View_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Org_Metrics_Current_View_Max_Order_By>;
  min?: Maybe<Org_Metrics_Current_View_Min_Order_By>;
  stddev?: Maybe<Org_Metrics_Current_View_Stddev_Order_By>;
  stddev_pop?: Maybe<Org_Metrics_Current_View_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Org_Metrics_Current_View_Stddev_Samp_Order_By>;
  sum?: Maybe<Org_Metrics_Current_View_Sum_Order_By>;
  var_pop?: Maybe<Org_Metrics_Current_View_Var_Pop_Order_By>;
  var_samp?: Maybe<Org_Metrics_Current_View_Var_Samp_Order_By>;
  variance?: Maybe<Org_Metrics_Current_View_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Arr_Rel_Insert_Input = {
  data: Array<Org_Metrics_Current_View_Insert_Input>;
  on_conflict?: Maybe<Org_Metrics_Current_View_On_Conflict>;
};

/** aggregate avg on columns */
export type Org_Metrics_Current_View_Avg_Fields = {
  __typename?: 'org_metrics_current_view_avg_fields';
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Avg_Order_By = {
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "org_metrics_current_view". All fields are combined with a logical 'AND'. */
export type Org_Metrics_Current_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Org_Metrics_Current_View_Bool_Exp>>>;
  _not?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Org_Metrics_Current_View_Bool_Exp>>>;
  annotations?: Maybe<Metric_Annotations_Bool_Exp>;
  approvals?: Maybe<Metric_Approvals_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  currentDescription?: Maybe<Metric_Current_Description_Bool_Exp>;
  currentModelMetric?: Maybe<Model_Metrics_Bool_Exp>;
  definition?: Maybe<String_Comparison_Exp>;
  descriptions?: Maybe<Metric_Descriptions_Bool_Exp>;
  displayName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metadata?: Maybe<Json_Comparison_Exp>;
  metricCollections?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
  metricType?: Maybe<Int_Comparison_Exp>;
  model?: Maybe<Models_Bool_Exp>;
  modelId?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  params?: Maybe<Json_Comparison_Exp>;
  questions?: Maybe<Questions_Bool_Exp>;
  removedAt?: Maybe<Timestamptz_Comparison_Exp>;
  savedQueries?: Maybe<Saved_Query_Metrics_Bool_Exp>;
  teamOwners?: Maybe<Metric_Team_Owners_Bool_Exp>;
  tier?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userOwners?: Maybe<Metric_User_Owners_Bool_Exp>;
  views?: Maybe<Metric_View_Bool_Exp>;
};

/** unique or primary key constraints on table "org_metrics_current_view" */
export enum Org_Metrics_Current_View_Constraint {
  /** unique or primary key constraint */
  OrgMetricsCurrentViewOrganizationIdNameKey = 'org_metrics_current_view_organization_id_name_key',
  /** unique or primary key constraint */
  OrgMetricsCurrentViewPkey = 'org_metrics_current_view_pkey'
}

/** input type for incrementing integer column in table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  metricType?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Insert_Input = {
  annotations?: Maybe<Metric_Annotations_Arr_Rel_Insert_Input>;
  approvals?: Maybe<Metric_Approvals_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentDescription?: Maybe<Metric_Current_Description_Obj_Rel_Insert_Input>;
  currentModelMetric?: Maybe<Model_Metrics_Obj_Rel_Insert_Input>;
  definition?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Metric_Descriptions_Arr_Rel_Insert_Input>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['json']>;
  metricCollections?: Maybe<Metric_Collection_Metrics_Arr_Rel_Insert_Input>;
  metricType?: Maybe<Scalars['Int']>;
  model?: Maybe<Models_Obj_Rel_Insert_Input>;
  modelId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['json']>;
  questions?: Maybe<Questions_Arr_Rel_Insert_Input>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  savedQueries?: Maybe<Saved_Query_Metrics_Arr_Rel_Insert_Input>;
  teamOwners?: Maybe<Metric_Team_Owners_Arr_Rel_Insert_Input>;
  tier?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userOwners?: Maybe<Metric_User_Owners_Arr_Rel_Insert_Input>;
  views?: Maybe<Metric_View_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Org_Metrics_Current_View_Max_Fields = {
  __typename?: 'org_metrics_current_view_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  definition?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricType?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  tier?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  definition?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  removedAt?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Org_Metrics_Current_View_Min_Fields = {
  __typename?: 'org_metrics_current_view_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  definition?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metricType?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  tier?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  definition?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  removedAt?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Mutation_Response = {
  __typename?: 'org_metrics_current_view_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Org_Metrics_Current_View>;
};

/** input type for inserting object relation for remote table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Obj_Rel_Insert_Input = {
  data: Org_Metrics_Current_View_Insert_Input;
  on_conflict?: Maybe<Org_Metrics_Current_View_On_Conflict>;
};

/** on conflict condition type for table "org_metrics_current_view" */
export type Org_Metrics_Current_View_On_Conflict = {
  constraint: Org_Metrics_Current_View_Constraint;
  update_columns: Array<Org_Metrics_Current_View_Update_Column>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};

/** ordering options when selecting data from "org_metrics_current_view" */
export type Org_Metrics_Current_View_Order_By = {
  annotations_aggregate?: Maybe<Metric_Annotations_Aggregate_Order_By>;
  approvals_aggregate?: Maybe<Metric_Approvals_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  currentDescription?: Maybe<Metric_Current_Description_Order_By>;
  currentModelMetric?: Maybe<Model_Metrics_Order_By>;
  definition?: Maybe<Order_By>;
  descriptions_aggregate?: Maybe<Metric_Descriptions_Aggregate_Order_By>;
  displayName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  metricCollections_aggregate?: Maybe<Metric_Collection_Metrics_Aggregate_Order_By>;
  metricType?: Maybe<Order_By>;
  model?: Maybe<Models_Order_By>;
  modelId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  params?: Maybe<Order_By>;
  questions_aggregate?: Maybe<Questions_Aggregate_Order_By>;
  removedAt?: Maybe<Order_By>;
  savedQueries_aggregate?: Maybe<Saved_Query_Metrics_Aggregate_Order_By>;
  teamOwners_aggregate?: Maybe<Metric_Team_Owners_Aggregate_Order_By>;
  tier?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userOwners_aggregate?: Maybe<Metric_User_Owners_Aggregate_Order_By>;
  views_aggregate?: Maybe<Metric_View_Aggregate_Order_By>;
};

/** primary key columns input for table: "org_metrics_current_view" */
export type Org_Metrics_Current_View_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "org_metrics_current_view" */
export enum Org_Metrics_Current_View_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Definition = 'definition',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetricType = 'metricType',
  /** column name */
  ModelId = 'modelId',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Params = 'params',
  /** column name */
  RemovedAt = 'removedAt',
  /** column name */
  Tier = 'tier',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  definition?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['json']>;
  metricType?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['json']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  tier?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Org_Metrics_Current_View_Stddev_Fields = {
  __typename?: 'org_metrics_current_view_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Org_Metrics_Current_View_Stddev_Pop_Fields = {
  __typename?: 'org_metrics_current_view_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Org_Metrics_Current_View_Stddev_Samp_Fields = {
  __typename?: 'org_metrics_current_view_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Org_Metrics_Current_View_Sum_Fields = {
  __typename?: 'org_metrics_current_view_sum_fields';
  id?: Maybe<Scalars['Int']>;
  metricType?: Maybe<Scalars['Int']>;
  modelId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Sum_Order_By = {
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** update columns of table "org_metrics_current_view" */
export enum Org_Metrics_Current_View_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Definition = 'definition',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetricType = 'metricType',
  /** column name */
  ModelId = 'modelId',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Params = 'params',
  /** column name */
  RemovedAt = 'removedAt',
  /** column name */
  Tier = 'tier',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Org_Metrics_Current_View_Var_Pop_Fields = {
  __typename?: 'org_metrics_current_view_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Org_Metrics_Current_View_Var_Samp_Fields = {
  __typename?: 'org_metrics_current_view_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Org_Metrics_Current_View_Variance_Fields = {
  __typename?: 'org_metrics_current_view_variance_fields';
  id?: Maybe<Scalars['Float']>;
  metricType?: Maybe<Scalars['Float']>;
  modelId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  tier?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "org_metrics_current_view" */
export type Org_Metrics_Current_View_Variance_Order_By = {
  id?: Maybe<Order_By>;
  metricType?: Maybe<Order_By>;
  modelId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/**
 * Contains options what we do with an org's MQL server logs
 *
 *
 * columns and relationships of "org_mql_server_logs_types"
 */
export type Org_Mql_Server_Logs_Types = {
  __typename?: 'org_mql_server_logs_types';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Aggregate = {
  __typename?: 'org_mql_server_logs_types_aggregate';
  aggregate?: Maybe<Org_Mql_Server_Logs_Types_Aggregate_Fields>;
  nodes: Array<Org_Mql_Server_Logs_Types>;
};

/** aggregate fields of "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Aggregate_Fields = {
  __typename?: 'org_mql_server_logs_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Org_Mql_Server_Logs_Types_Max_Fields>;
  min?: Maybe<Org_Mql_Server_Logs_Types_Min_Fields>;
};


/** aggregate fields of "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Org_Mql_Server_Logs_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Org_Mql_Server_Logs_Types_Max_Order_By>;
  min?: Maybe<Org_Mql_Server_Logs_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Arr_Rel_Insert_Input = {
  data: Array<Org_Mql_Server_Logs_Types_Insert_Input>;
  on_conflict?: Maybe<Org_Mql_Server_Logs_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "org_mql_server_logs_types". All fields are combined with a logical 'AND'. */
export type Org_Mql_Server_Logs_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Org_Mql_Server_Logs_Types_Bool_Exp>>>;
  _not?: Maybe<Org_Mql_Server_Logs_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Org_Mql_Server_Logs_Types_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_mql_server_logs_types" */
export enum Org_Mql_Server_Logs_Types_Constraint {
  /** unique or primary key constraint */
  OrgMqlServerLogsTypesPkey = 'org_mql_server_logs_types_pkey'
}

export enum Org_Mql_Server_Logs_Types_Enum {
  /** stream MQL logs back to transform backend */
  Always = 'ALWAYS',
  /** never upload mql server logs to transform backend */
  Never = 'NEVER',
  /** upload mql server logs to transform backend on error */
  OnError = 'ON_ERROR'
}

/** expression to compare columns of type org_mql_server_logs_types_enum. All fields are combined with logical 'AND'. */
export type Org_Mql_Server_Logs_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Org_Mql_Server_Logs_Types_Enum>;
  _in?: Maybe<Array<Org_Mql_Server_Logs_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Org_Mql_Server_Logs_Types_Enum>;
  _nin?: Maybe<Array<Org_Mql_Server_Logs_Types_Enum>>;
};

/** input type for inserting data into table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Org_Mql_Server_Logs_Types_Max_Fields = {
  __typename?: 'org_mql_server_logs_types_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Org_Mql_Server_Logs_Types_Min_Fields = {
  __typename?: 'org_mql_server_logs_types_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Mutation_Response = {
  __typename?: 'org_mql_server_logs_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Org_Mql_Server_Logs_Types>;
};

/** input type for inserting object relation for remote table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Obj_Rel_Insert_Input = {
  data: Org_Mql_Server_Logs_Types_Insert_Input;
  on_conflict?: Maybe<Org_Mql_Server_Logs_Types_On_Conflict>;
};

/** on conflict condition type for table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_On_Conflict = {
  constraint: Org_Mql_Server_Logs_Types_Constraint;
  update_columns: Array<Org_Mql_Server_Logs_Types_Update_Column>;
  where?: Maybe<Org_Mql_Server_Logs_Types_Bool_Exp>;
};

/** ordering options when selecting data from "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "org_mql_server_logs_types" */
export enum Org_Mql_Server_Logs_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "org_mql_server_logs_types" */
export type Org_Mql_Server_Logs_Types_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "org_mql_server_logs_types" */
export enum Org_Mql_Server_Logs_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/**
 * Allowing for multiple MQL Servers for an Organization enables the use of development environments and other non-production applications.
 *
 *
 * columns and relationships of "org_mql_servers"
 */
export type Org_Mql_Servers = {
  __typename?: 'org_mql_servers';
  configSecret?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  dw_engine?: Maybe<Dw_Engines_Enum>;
  /** An array relationship */
  heartbeats: Array<Mql_Heartbeats>;
  /** An aggregated array relationship */
  heartbeats_aggregate: Mql_Heartbeats_Aggregate;
  id: Scalars['Int'];
  isOrgDefault: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  url: Scalars['String'];
};


/**
 * Allowing for multiple MQL Servers for an Organization enables the use of development environments and other non-production applications.
 *
 *
 * columns and relationships of "org_mql_servers"
 */
export type Org_Mql_ServersHeartbeatsArgs = {
  distinct_on?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mql_Heartbeats_Order_By>>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};


/**
 * Allowing for multiple MQL Servers for an Organization enables the use of development environments and other non-production applications.
 *
 *
 * columns and relationships of "org_mql_servers"
 */
export type Org_Mql_ServersHeartbeats_AggregateArgs = {
  distinct_on?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mql_Heartbeats_Order_By>>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};

/** aggregated selection of "org_mql_servers" */
export type Org_Mql_Servers_Aggregate = {
  __typename?: 'org_mql_servers_aggregate';
  aggregate?: Maybe<Org_Mql_Servers_Aggregate_Fields>;
  nodes: Array<Org_Mql_Servers>;
};

/** aggregate fields of "org_mql_servers" */
export type Org_Mql_Servers_Aggregate_Fields = {
  __typename?: 'org_mql_servers_aggregate_fields';
  avg?: Maybe<Org_Mql_Servers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Org_Mql_Servers_Max_Fields>;
  min?: Maybe<Org_Mql_Servers_Min_Fields>;
  stddev?: Maybe<Org_Mql_Servers_Stddev_Fields>;
  stddev_pop?: Maybe<Org_Mql_Servers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Org_Mql_Servers_Stddev_Samp_Fields>;
  sum?: Maybe<Org_Mql_Servers_Sum_Fields>;
  var_pop?: Maybe<Org_Mql_Servers_Var_Pop_Fields>;
  var_samp?: Maybe<Org_Mql_Servers_Var_Samp_Fields>;
  variance?: Maybe<Org_Mql_Servers_Variance_Fields>;
};


/** aggregate fields of "org_mql_servers" */
export type Org_Mql_Servers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Org_Mql_Servers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "org_mql_servers" */
export type Org_Mql_Servers_Aggregate_Order_By = {
  avg?: Maybe<Org_Mql_Servers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Org_Mql_Servers_Max_Order_By>;
  min?: Maybe<Org_Mql_Servers_Min_Order_By>;
  stddev?: Maybe<Org_Mql_Servers_Stddev_Order_By>;
  stddev_pop?: Maybe<Org_Mql_Servers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Org_Mql_Servers_Stddev_Samp_Order_By>;
  sum?: Maybe<Org_Mql_Servers_Sum_Order_By>;
  var_pop?: Maybe<Org_Mql_Servers_Var_Pop_Order_By>;
  var_samp?: Maybe<Org_Mql_Servers_Var_Samp_Order_By>;
  variance?: Maybe<Org_Mql_Servers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "org_mql_servers" */
export type Org_Mql_Servers_Arr_Rel_Insert_Input = {
  data: Array<Org_Mql_Servers_Insert_Input>;
  on_conflict?: Maybe<Org_Mql_Servers_On_Conflict>;
};

/** aggregate avg on columns */
export type Org_Mql_Servers_Avg_Fields = {
  __typename?: 'org_mql_servers_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "org_mql_servers". All fields are combined with a logical 'AND'. */
export type Org_Mql_Servers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Org_Mql_Servers_Bool_Exp>>>;
  _not?: Maybe<Org_Mql_Servers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Org_Mql_Servers_Bool_Exp>>>;
  configSecret?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dw_engine?: Maybe<Dw_Engines_Enum_Comparison_Exp>;
  heartbeats?: Maybe<Mql_Heartbeats_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isOrgDefault?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_mql_servers" */
export enum Org_Mql_Servers_Constraint {
  /** unique or primary key constraint */
  OrgMqlServersOrganizationIdNameKey = 'org_mql_servers_organization_id_name_key',
  /** unique or primary key constraint */
  OrgMqlServersPkey = 'org_mql_servers_pkey'
}

/** input type for incrementing integer column in table "org_mql_servers" */
export type Org_Mql_Servers_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "org_mql_servers" */
export type Org_Mql_Servers_Insert_Input = {
  configSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dw_engine?: Maybe<Dw_Engines_Enum>;
  heartbeats?: Maybe<Mql_Heartbeats_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  isOrgDefault?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Org_Mql_Servers_Max_Fields = {
  __typename?: 'org_mql_servers_max_fields';
  configSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Max_Order_By = {
  configSecret?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Org_Mql_Servers_Min_Fields = {
  __typename?: 'org_mql_servers_min_fields';
  configSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Min_Order_By = {
  configSecret?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "org_mql_servers" */
export type Org_Mql_Servers_Mutation_Response = {
  __typename?: 'org_mql_servers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Org_Mql_Servers>;
};

/** input type for inserting object relation for remote table "org_mql_servers" */
export type Org_Mql_Servers_Obj_Rel_Insert_Input = {
  data: Org_Mql_Servers_Insert_Input;
  on_conflict?: Maybe<Org_Mql_Servers_On_Conflict>;
};

/** on conflict condition type for table "org_mql_servers" */
export type Org_Mql_Servers_On_Conflict = {
  constraint: Org_Mql_Servers_Constraint;
  update_columns: Array<Org_Mql_Servers_Update_Column>;
  where?: Maybe<Org_Mql_Servers_Bool_Exp>;
};

/** ordering options when selecting data from "org_mql_servers" */
export type Org_Mql_Servers_Order_By = {
  configSecret?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dw_engine?: Maybe<Order_By>;
  heartbeats_aggregate?: Maybe<Mql_Heartbeats_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  isOrgDefault?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "org_mql_servers" */
export type Org_Mql_Servers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "org_mql_servers" */
export enum Org_Mql_Servers_Select_Column {
  /** column name */
  ConfigSecret = 'configSecret',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DwEngine = 'dw_engine',
  /** column name */
  Id = 'id',
  /** column name */
  IsOrgDefault = 'isOrgDefault',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "org_mql_servers" */
export type Org_Mql_Servers_Set_Input = {
  configSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dw_engine?: Maybe<Dw_Engines_Enum>;
  id?: Maybe<Scalars['Int']>;
  isOrgDefault?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Org_Mql_Servers_Stddev_Fields = {
  __typename?: 'org_mql_servers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Org_Mql_Servers_Stddev_Pop_Fields = {
  __typename?: 'org_mql_servers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Org_Mql_Servers_Stddev_Samp_Fields = {
  __typename?: 'org_mql_servers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Org_Mql_Servers_Sum_Fields = {
  __typename?: 'org_mql_servers_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** update columns of table "org_mql_servers" */
export enum Org_Mql_Servers_Update_Column {
  /** column name */
  ConfigSecret = 'configSecret',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DwEngine = 'dw_engine',
  /** column name */
  Id = 'id',
  /** column name */
  IsOrgDefault = 'isOrgDefault',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Org_Mql_Servers_Var_Pop_Fields = {
  __typename?: 'org_mql_servers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Org_Mql_Servers_Var_Samp_Fields = {
  __typename?: 'org_mql_servers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Org_Mql_Servers_Variance_Fields = {
  __typename?: 'org_mql_servers_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "org_mql_servers" */
export type Org_Mql_Servers_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** columns and relationships of "organization_features" */
export type Organization_Features = {
  __typename?: 'organization_features';
  /** An object relationship */
  feature: Features;
  featureId: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
};

/** aggregated selection of "organization_features" */
export type Organization_Features_Aggregate = {
  __typename?: 'organization_features_aggregate';
  aggregate?: Maybe<Organization_Features_Aggregate_Fields>;
  nodes: Array<Organization_Features>;
};

/** aggregate fields of "organization_features" */
export type Organization_Features_Aggregate_Fields = {
  __typename?: 'organization_features_aggregate_fields';
  avg?: Maybe<Organization_Features_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Organization_Features_Max_Fields>;
  min?: Maybe<Organization_Features_Min_Fields>;
  stddev?: Maybe<Organization_Features_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Features_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Features_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Features_Sum_Fields>;
  var_pop?: Maybe<Organization_Features_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Features_Var_Samp_Fields>;
  variance?: Maybe<Organization_Features_Variance_Fields>;
};


/** aggregate fields of "organization_features" */
export type Organization_Features_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organization_Features_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization_features" */
export type Organization_Features_Aggregate_Order_By = {
  avg?: Maybe<Organization_Features_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organization_Features_Max_Order_By>;
  min?: Maybe<Organization_Features_Min_Order_By>;
  stddev?: Maybe<Organization_Features_Stddev_Order_By>;
  stddev_pop?: Maybe<Organization_Features_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organization_Features_Stddev_Samp_Order_By>;
  sum?: Maybe<Organization_Features_Sum_Order_By>;
  var_pop?: Maybe<Organization_Features_Var_Pop_Order_By>;
  var_samp?: Maybe<Organization_Features_Var_Samp_Order_By>;
  variance?: Maybe<Organization_Features_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organization_features" */
export type Organization_Features_Arr_Rel_Insert_Input = {
  data: Array<Organization_Features_Insert_Input>;
  on_conflict?: Maybe<Organization_Features_On_Conflict>;
};

/** aggregate avg on columns */
export type Organization_Features_Avg_Fields = {
  __typename?: 'organization_features_avg_fields';
  featureId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organization_features" */
export type Organization_Features_Avg_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organization_features". All fields are combined with a logical 'AND'. */
export type Organization_Features_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organization_Features_Bool_Exp>>>;
  _not?: Maybe<Organization_Features_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organization_Features_Bool_Exp>>>;
  feature?: Maybe<Features_Bool_Exp>;
  featureId?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_features" */
export enum Organization_Features_Constraint {
  /** unique or primary key constraint */
  OrganizationFeaturesPkey = 'organization_features_pkey'
}

/** input type for incrementing integer column in table "organization_features" */
export type Organization_Features_Inc_Input = {
  featureId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organization_features" */
export type Organization_Features_Insert_Input = {
  feature?: Maybe<Features_Obj_Rel_Insert_Input>;
  featureId?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Organization_Features_Max_Fields = {
  __typename?: 'organization_features_max_fields';
  featureId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "organization_features" */
export type Organization_Features_Max_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organization_Features_Min_Fields = {
  __typename?: 'organization_features_min_fields';
  featureId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "organization_features" */
export type Organization_Features_Min_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** response of any mutation on the table "organization_features" */
export type Organization_Features_Mutation_Response = {
  __typename?: 'organization_features_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Organization_Features>;
};

/** input type for inserting object relation for remote table "organization_features" */
export type Organization_Features_Obj_Rel_Insert_Input = {
  data: Organization_Features_Insert_Input;
  on_conflict?: Maybe<Organization_Features_On_Conflict>;
};

/** on conflict condition type for table "organization_features" */
export type Organization_Features_On_Conflict = {
  constraint: Organization_Features_Constraint;
  update_columns: Array<Organization_Features_Update_Column>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};

/** ordering options when selecting data from "organization_features" */
export type Organization_Features_Order_By = {
  feature?: Maybe<Features_Order_By>;
  featureId?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** primary key columns input for table: "organization_features" */
export type Organization_Features_Pk_Columns_Input = {
  featureId: Scalars['Int'];
  organizationId: Scalars['Int'];
};

/** select columns of table "organization_features" */
export enum Organization_Features_Select_Column {
  /** column name */
  FeatureId = 'featureId',
  /** column name */
  OrganizationId = 'organizationId'
}

/** input type for updating data in table "organization_features" */
export type Organization_Features_Set_Input = {
  featureId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Organization_Features_Stddev_Fields = {
  __typename?: 'organization_features_stddev_fields';
  featureId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organization_features" */
export type Organization_Features_Stddev_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organization_Features_Stddev_Pop_Fields = {
  __typename?: 'organization_features_stddev_pop_fields';
  featureId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organization_features" */
export type Organization_Features_Stddev_Pop_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organization_Features_Stddev_Samp_Fields = {
  __typename?: 'organization_features_stddev_samp_fields';
  featureId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organization_features" */
export type Organization_Features_Stddev_Samp_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organization_Features_Sum_Fields = {
  __typename?: 'organization_features_sum_fields';
  featureId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "organization_features" */
export type Organization_Features_Sum_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** update columns of table "organization_features" */
export enum Organization_Features_Update_Column {
  /** column name */
  FeatureId = 'featureId',
  /** column name */
  OrganizationId = 'organizationId'
}

/** aggregate var_pop on columns */
export type Organization_Features_Var_Pop_Fields = {
  __typename?: 'organization_features_var_pop_fields';
  featureId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organization_features" */
export type Organization_Features_Var_Pop_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organization_Features_Var_Samp_Fields = {
  __typename?: 'organization_features_var_samp_fields';
  featureId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organization_features" */
export type Organization_Features_Var_Samp_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organization_Features_Variance_Fields = {
  __typename?: 'organization_features_variance_fields';
  featureId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organization_features" */
export type Organization_Features_Variance_Order_By = {
  featureId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
};

/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type Organizations = {
  __typename?: 'organizations';
  /** An array relationship */
  annotations: Array<Annotations>;
  /** An aggregated array relationship */
  annotations_aggregate: Annotations_Aggregate;
  /** An array relationship */
  api_keys: Array<Api_Keys>;
  /** An aggregated array relationship */
  api_keys_aggregate: Api_Keys_Aggregate;
  /** Timestamp indicating when the `Organization` was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  currentModel?: Maybe<Model_Current>;
  /** An array relationship */
  dashboards: Array<Dashboards>;
  /** An aggregated array relationship */
  dashboards_aggregate: Dashboards_Aggregate;
  /** An array relationship */
  dataSources: Array<Org_Data_Sources>;
  /** An aggregated array relationship */
  dataSources_aggregate: Org_Data_Sources_Aggregate;
  date_create?: Maybe<Scalars['Int']>;
  date_delete?: Maybe<Scalars['Int']>;
  /** This is a soft delete for the Organization model. If the Organization has been deactivated, this value will reflect the timestamp of that operation. If the Organization is active, this value will be null. */
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  /** An array relationship */
  features: Array<Organization_Features>;
  /** An aggregated array relationship */
  features_aggregate: Organization_Features_Aggregate;
  /** A unique identifier for the `Organization` */
  id: Scalars['Int'];
  isHosted: Scalars['Boolean'];
  /** A string representing a URL where an image of the `Organization`'s logo can be found */
  logoUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  metricCollections: Array<Metric_Collections>;
  /** An aggregated array relationship */
  metricCollections_aggregate: Metric_Collections_Aggregate;
  /** An array relationship */
  metric_annotations: Array<Metric_Annotations>;
  /** An aggregated array relationship */
  metric_annotations_aggregate: Metric_Annotations_Aggregate;
  /** An array relationship */
  metric_approvals: Array<Metric_Approvals>;
  /** An aggregated array relationship */
  metric_approvals_aggregate: Metric_Approvals_Aggregate;
  /** An array relationship */
  metric_team_owners: Array<Metric_Team_Owners>;
  /** An aggregated array relationship */
  metric_team_owners_aggregate: Metric_Team_Owners_Aggregate;
  /** An array relationship */
  metric_views: Array<Metric_View>;
  /** An aggregated array relationship */
  metric_views_aggregate: Metric_View_Aggregate;
  /** An array relationship */
  metrics: Array<Org_Metrics_Current_View>;
  /** An aggregated array relationship */
  metrics_aggregate: Org_Metrics_Current_View_Aggregate;
  /** An array relationship */
  models: Array<Models>;
  /** An aggregated array relationship */
  models_aggregate: Models_Aggregate;
  /** An array relationship */
  mqlHeartbeats: Array<Mql_Heartbeats>;
  /** An aggregated array relationship */
  mqlHeartbeats_aggregate: Mql_Heartbeats_Aggregate;
  mqlServerLogs?: Maybe<Org_Mql_Server_Logs_Types_Enum>;
  /** The URL of your MQL Server */
  mqlServerUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  mqlServers: Array<Org_Mql_Servers>;
  /** An aggregated array relationship */
  mqlServers_aggregate: Org_Mql_Servers_Aggregate;
  /** The name of the `Organization` */
  name: Scalars['String'];
  /** The branch name representing the current config (default "main") */
  primaryConfigBranch: Scalars['String'];
  /** The repo name — not the full URL — for the repository storing the Transform config */
  primaryConfigRepo: Scalars['String'];
  /** An array relationship */
  question_directed_tos: Array<Question_Directed_To>;
  /** An aggregated array relationship */
  question_directed_tos_aggregate: Question_Directed_To_Aggregate;
  /** An array relationship */
  question_likes: Array<Question_Likes>;
  /** An aggregated array relationship */
  question_likes_aggregate: Question_Likes_Aggregate;
  /** An array relationship */
  question_replies: Array<Question_Replies>;
  /** An aggregated array relationship */
  question_replies_aggregate: Question_Replies_Aggregate;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregated array relationship */
  questions_aggregate: Questions_Aggregate;
  /** An array relationship */
  savedQueries: Array<Saved_Queries>;
  /** An aggregated array relationship */
  savedQueries_aggregate: Saved_Queries_Aggregate;
  shardId?: Maybe<Scalars['Int']>;
  /** The slug is a URL-friendly string used to identify an organization in the App */
  slug?: Maybe<Scalars['String']>;
  /** The URL of your source control system, used for generating links to config files */
  sourceControlUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  team_members: Array<Team_Members>;
  /** An aggregated array relationship */
  team_members_aggregate: Team_Members_Aggregate;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregated array relationship */
  teams_aggregate: Teams_Aggregate;
  /** Timestamp representing the last update to the Organization */
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "user_is_org_admin" */
  userIsOrgAdmin?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  user_prefs: Array<User_Prefs>;
  /** An aggregated array relationship */
  user_prefs_aggregate: User_Prefs_Aggregate;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregated array relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregated array relationship */
  users_aggregate: Users_Aggregate;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsApi_KeysArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsApi_Keys_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsDashboardsArgs = {
  distinct_on?: Maybe<Array<Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboards_Order_By>>;
  where?: Maybe<Dashboards_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsDashboards_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboards_Order_By>>;
  where?: Maybe<Dashboards_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsDataSourcesArgs = {
  distinct_on?: Maybe<Array<Org_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Data_Sources_Order_By>>;
  where?: Maybe<Org_Data_Sources_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsDataSources_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Data_Sources_Order_By>>;
  where?: Maybe<Org_Data_Sources_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsFeaturesArgs = {
  distinct_on?: Maybe<Array<Organization_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Features_Order_By>>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsFeatures_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Features_Order_By>>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetricCollectionsArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetricCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetric_AnnotationsArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetric_Annotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetric_ApprovalsArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetric_Approvals_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetric_Team_OwnersArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetric_Team_Owners_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetric_ViewsArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetric_Views_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetricsArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMetrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsModelsArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsModels_AggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMqlHeartbeatsArgs = {
  distinct_on?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mql_Heartbeats_Order_By>>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMqlHeartbeats_AggregateArgs = {
  distinct_on?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mql_Heartbeats_Order_By>>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMqlServersArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Servers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Servers_Order_By>>;
  where?: Maybe<Org_Mql_Servers_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsMqlServers_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Servers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Servers_Order_By>>;
  where?: Maybe<Org_Mql_Servers_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsQuestion_Directed_TosArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsQuestion_Directed_Tos_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsQuestion_LikesArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsQuestion_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsQuestion_RepliesArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsQuestion_Replies_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsSavedQueriesArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsSavedQueries_AggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsTeam_MembersArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsTeam_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsUser_PrefsArgs = {
  distinct_on?: Maybe<Array<User_Prefs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Prefs_Order_By>>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsUser_Prefs_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Prefs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Prefs_Order_By>>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/**
 * An Organization is a company that is a customer of Transform
 *
 *
 * columns and relationships of "organizations"
 */
export type OrganizationsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  avg?: Maybe<Organizations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
  stddev?: Maybe<Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Organizations_Sum_Fields>;
  var_pop?: Maybe<Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Organizations_Var_Samp_Fields>;
  variance?: Maybe<Organizations_Variance_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organizations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organizations" */
export type Organizations_Aggregate_Order_By = {
  avg?: Maybe<Organizations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organizations_Max_Order_By>;
  min?: Maybe<Organizations_Min_Order_By>;
  stddev?: Maybe<Organizations_Stddev_Order_By>;
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Order_By>;
  sum?: Maybe<Organizations_Sum_Order_By>;
  var_pop?: Maybe<Organizations_Var_Pop_Order_By>;
  var_samp?: Maybe<Organizations_Var_Samp_Order_By>;
  variance?: Maybe<Organizations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organizations" */
export type Organizations_Arr_Rel_Insert_Input = {
  data: Array<Organizations_Insert_Input>;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** aggregate avg on columns */
export type Organizations_Avg_Fields = {
  __typename?: 'organizations_avg_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_delete?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shardId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organizations" */
export type Organizations_Avg_Order_By = {
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organizations_Bool_Exp>>>;
  _not?: Maybe<Organizations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organizations_Bool_Exp>>>;
  annotations?: Maybe<Annotations_Bool_Exp>;
  api_keys?: Maybe<Api_Keys_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  currentModel?: Maybe<Model_Current_Bool_Exp>;
  dashboards?: Maybe<Dashboards_Bool_Exp>;
  dataSources?: Maybe<Org_Data_Sources_Bool_Exp>;
  date_create?: Maybe<Int_Comparison_Exp>;
  date_delete?: Maybe<Int_Comparison_Exp>;
  deactivatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  domain?: Maybe<String_Comparison_Exp>;
  features?: Maybe<Organization_Features_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isHosted?: Maybe<Boolean_Comparison_Exp>;
  logoUrl?: Maybe<String_Comparison_Exp>;
  metricCollections?: Maybe<Metric_Collections_Bool_Exp>;
  metric_annotations?: Maybe<Metric_Annotations_Bool_Exp>;
  metric_approvals?: Maybe<Metric_Approvals_Bool_Exp>;
  metric_team_owners?: Maybe<Metric_Team_Owners_Bool_Exp>;
  metric_views?: Maybe<Metric_View_Bool_Exp>;
  metrics?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  models?: Maybe<Models_Bool_Exp>;
  mqlHeartbeats?: Maybe<Mql_Heartbeats_Bool_Exp>;
  mqlServerLogs?: Maybe<Org_Mql_Server_Logs_Types_Enum_Comparison_Exp>;
  mqlServerUrl?: Maybe<String_Comparison_Exp>;
  mqlServers?: Maybe<Org_Mql_Servers_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  primaryConfigBranch?: Maybe<String_Comparison_Exp>;
  primaryConfigRepo?: Maybe<String_Comparison_Exp>;
  question_directed_tos?: Maybe<Question_Directed_To_Bool_Exp>;
  question_likes?: Maybe<Question_Likes_Bool_Exp>;
  question_replies?: Maybe<Question_Replies_Bool_Exp>;
  questions?: Maybe<Questions_Bool_Exp>;
  savedQueries?: Maybe<Saved_Queries_Bool_Exp>;
  shardId?: Maybe<Int_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  sourceControlUrl?: Maybe<String_Comparison_Exp>;
  team_members?: Maybe<Team_Members_Bool_Exp>;
  teams?: Maybe<Teams_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user_prefs?: Maybe<User_Prefs_Bool_Exp>;
  user_roles?: Maybe<User_Roles_Bool_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for incrementing integer column in table "organizations" */
export type Organizations_Inc_Input = {
  date_create?: Maybe<Scalars['Int']>;
  date_delete?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  shardId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  annotations?: Maybe<Annotations_Arr_Rel_Insert_Input>;
  api_keys?: Maybe<Api_Keys_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboards?: Maybe<Dashboards_Arr_Rel_Insert_Input>;
  dataSources?: Maybe<Org_Data_Sources_Arr_Rel_Insert_Input>;
  date_create?: Maybe<Scalars['Int']>;
  date_delete?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  features?: Maybe<Organization_Features_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  isHosted?: Maybe<Scalars['Boolean']>;
  logoUrl?: Maybe<Scalars['String']>;
  metricCollections?: Maybe<Metric_Collections_Arr_Rel_Insert_Input>;
  metric_annotations?: Maybe<Metric_Annotations_Arr_Rel_Insert_Input>;
  metric_approvals?: Maybe<Metric_Approvals_Arr_Rel_Insert_Input>;
  metric_team_owners?: Maybe<Metric_Team_Owners_Arr_Rel_Insert_Input>;
  metric_views?: Maybe<Metric_View_Arr_Rel_Insert_Input>;
  metrics?: Maybe<Org_Metrics_Current_View_Arr_Rel_Insert_Input>;
  models?: Maybe<Models_Arr_Rel_Insert_Input>;
  mqlHeartbeats?: Maybe<Mql_Heartbeats_Arr_Rel_Insert_Input>;
  mqlServerLogs?: Maybe<Org_Mql_Server_Logs_Types_Enum>;
  mqlServerUrl?: Maybe<Scalars['String']>;
  mqlServers?: Maybe<Org_Mql_Servers_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  primaryConfigBranch?: Maybe<Scalars['String']>;
  primaryConfigRepo?: Maybe<Scalars['String']>;
  question_directed_tos?: Maybe<Question_Directed_To_Arr_Rel_Insert_Input>;
  question_likes?: Maybe<Question_Likes_Arr_Rel_Insert_Input>;
  question_replies?: Maybe<Question_Replies_Arr_Rel_Insert_Input>;
  questions?: Maybe<Questions_Arr_Rel_Insert_Input>;
  savedQueries?: Maybe<Saved_Queries_Arr_Rel_Insert_Input>;
  shardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sourceControlUrl?: Maybe<Scalars['String']>;
  team_members?: Maybe<Team_Members_Arr_Rel_Insert_Input>;
  teams?: Maybe<Teams_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user_prefs?: Maybe<User_Prefs_Arr_Rel_Insert_Input>;
  user_roles?: Maybe<User_Roles_Arr_Rel_Insert_Input>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_delete?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logoUrl?: Maybe<Scalars['String']>;
  mqlServerUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryConfigBranch?: Maybe<Scalars['String']>;
  primaryConfigRepo?: Maybe<Scalars['String']>;
  shardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sourceControlUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "organizations" */
export type Organizations_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  domain?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logoUrl?: Maybe<Order_By>;
  mqlServerUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  primaryConfigBranch?: Maybe<Order_By>;
  primaryConfigRepo?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  sourceControlUrl?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_delete?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logoUrl?: Maybe<Scalars['String']>;
  mqlServerUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryConfigBranch?: Maybe<Scalars['String']>;
  primaryConfigRepo?: Maybe<Scalars['String']>;
  shardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sourceControlUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "organizations" */
export type Organizations_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  domain?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logoUrl?: Maybe<Order_By>;
  mqlServerUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  primaryConfigBranch?: Maybe<Order_By>;
  primaryConfigRepo?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  sourceControlUrl?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** on conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns: Array<Organizations_Update_Column>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** ordering options when selecting data from "organizations" */
export type Organizations_Order_By = {
  annotations_aggregate?: Maybe<Annotations_Aggregate_Order_By>;
  api_keys_aggregate?: Maybe<Api_Keys_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  currentModel?: Maybe<Model_Current_Order_By>;
  dashboards_aggregate?: Maybe<Dashboards_Aggregate_Order_By>;
  dataSources_aggregate?: Maybe<Org_Data_Sources_Aggregate_Order_By>;
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  domain?: Maybe<Order_By>;
  features_aggregate?: Maybe<Organization_Features_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  isHosted?: Maybe<Order_By>;
  logoUrl?: Maybe<Order_By>;
  metricCollections_aggregate?: Maybe<Metric_Collections_Aggregate_Order_By>;
  metric_annotations_aggregate?: Maybe<Metric_Annotations_Aggregate_Order_By>;
  metric_approvals_aggregate?: Maybe<Metric_Approvals_Aggregate_Order_By>;
  metric_team_owners_aggregate?: Maybe<Metric_Team_Owners_Aggregate_Order_By>;
  metric_views_aggregate?: Maybe<Metric_View_Aggregate_Order_By>;
  metrics_aggregate?: Maybe<Org_Metrics_Current_View_Aggregate_Order_By>;
  models_aggregate?: Maybe<Models_Aggregate_Order_By>;
  mqlHeartbeats_aggregate?: Maybe<Mql_Heartbeats_Aggregate_Order_By>;
  mqlServerLogs?: Maybe<Order_By>;
  mqlServerUrl?: Maybe<Order_By>;
  mqlServers_aggregate?: Maybe<Org_Mql_Servers_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  primaryConfigBranch?: Maybe<Order_By>;
  primaryConfigRepo?: Maybe<Order_By>;
  question_directed_tos_aggregate?: Maybe<Question_Directed_To_Aggregate_Order_By>;
  question_likes_aggregate?: Maybe<Question_Likes_Aggregate_Order_By>;
  question_replies_aggregate?: Maybe<Question_Replies_Aggregate_Order_By>;
  questions_aggregate?: Maybe<Questions_Aggregate_Order_By>;
  savedQueries_aggregate?: Maybe<Saved_Queries_Aggregate_Order_By>;
  shardId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  sourceControlUrl?: Maybe<Order_By>;
  team_members_aggregate?: Maybe<Team_Members_Aggregate_Order_By>;
  teams_aggregate?: Maybe<Teams_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  user_prefs_aggregate?: Maybe<User_Prefs_Aggregate_Order_By>;
  user_roles_aggregate?: Maybe<User_Roles_Aggregate_Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "organizations" */
export type Organizations_Pk_Columns_Input = {
  /** A unique identifier for the `Organization` */
  id: Scalars['Int'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  DateDelete = 'date_delete',
  /** column name */
  DeactivatedAt = 'deactivatedAt',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  IsHosted = 'isHosted',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  MqlServerLogs = 'mqlServerLogs',
  /** column name */
  MqlServerUrl = 'mqlServerUrl',
  /** column name */
  Name = 'name',
  /** column name */
  PrimaryConfigBranch = 'primaryConfigBranch',
  /** column name */
  PrimaryConfigRepo = 'primaryConfigRepo',
  /** column name */
  ShardId = 'shardId',
  /** column name */
  Slug = 'slug',
  /** column name */
  SourceControlUrl = 'sourceControlUrl',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_delete?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isHosted?: Maybe<Scalars['Boolean']>;
  logoUrl?: Maybe<Scalars['String']>;
  mqlServerLogs?: Maybe<Org_Mql_Server_Logs_Types_Enum>;
  mqlServerUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryConfigBranch?: Maybe<Scalars['String']>;
  primaryConfigRepo?: Maybe<Scalars['String']>;
  shardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sourceControlUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Organizations_Stddev_Fields = {
  __typename?: 'organizations_stddev_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_delete?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shardId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organizations" */
export type Organizations_Stddev_Order_By = {
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organizations_Stddev_Pop_Fields = {
  __typename?: 'organizations_stddev_pop_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_delete?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shardId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organizations" */
export type Organizations_Stddev_Pop_Order_By = {
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organizations_Stddev_Samp_Fields = {
  __typename?: 'organizations_stddev_samp_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_delete?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shardId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organizations" */
export type Organizations_Stddev_Samp_Order_By = {
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organizations_Sum_Fields = {
  __typename?: 'organizations_sum_fields';
  date_create?: Maybe<Scalars['Int']>;
  date_delete?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  shardId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "organizations" */
export type Organizations_Sum_Order_By = {
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  DateDelete = 'date_delete',
  /** column name */
  DeactivatedAt = 'deactivatedAt',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  IsHosted = 'isHosted',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  MqlServerLogs = 'mqlServerLogs',
  /** column name */
  MqlServerUrl = 'mqlServerUrl',
  /** column name */
  Name = 'name',
  /** column name */
  PrimaryConfigBranch = 'primaryConfigBranch',
  /** column name */
  PrimaryConfigRepo = 'primaryConfigRepo',
  /** column name */
  ShardId = 'shardId',
  /** column name */
  Slug = 'slug',
  /** column name */
  SourceControlUrl = 'sourceControlUrl',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Organizations_Var_Pop_Fields = {
  __typename?: 'organizations_var_pop_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_delete?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shardId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organizations" */
export type Organizations_Var_Pop_Order_By = {
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organizations_Var_Samp_Fields = {
  __typename?: 'organizations_var_samp_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_delete?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shardId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organizations" */
export type Organizations_Var_Samp_Order_By = {
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organizations_Variance_Fields = {
  __typename?: 'organizations_variance_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_delete?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shardId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organizations" */
export type Organizations_Variance_Order_By = {
  date_create?: Maybe<Order_By>;
  date_delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shardId?: Maybe<Order_By>;
};

/** columns and relationships of "priorities" */
export type Priorities = {
  __typename?: 'priorities';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "priorities" */
export type Priorities_Aggregate = {
  __typename?: 'priorities_aggregate';
  aggregate?: Maybe<Priorities_Aggregate_Fields>;
  nodes: Array<Priorities>;
};

/** aggregate fields of "priorities" */
export type Priorities_Aggregate_Fields = {
  __typename?: 'priorities_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Priorities_Max_Fields>;
  min?: Maybe<Priorities_Min_Fields>;
};


/** aggregate fields of "priorities" */
export type Priorities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Priorities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "priorities" */
export type Priorities_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Priorities_Max_Order_By>;
  min?: Maybe<Priorities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "priorities" */
export type Priorities_Arr_Rel_Insert_Input = {
  data: Array<Priorities_Insert_Input>;
  on_conflict?: Maybe<Priorities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "priorities". All fields are combined with a logical 'AND'. */
export type Priorities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Priorities_Bool_Exp>>>;
  _not?: Maybe<Priorities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Priorities_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "priorities" */
export enum Priorities_Constraint {
  /** unique or primary key constraint */
  PrioritiesNameKey = 'priorities_name_key',
  /** unique or primary key constraint */
  PrioritiesPkey = 'priorities_pkey'
}

export enum Priorities_Enum {
  Critical = 'CRITICAL',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  NoPriority = 'NO_PRIORITY'
}

/** expression to compare columns of type priorities_enum. All fields are combined with logical 'AND'. */
export type Priorities_Enum_Comparison_Exp = {
  _eq?: Maybe<Priorities_Enum>;
  _in?: Maybe<Array<Priorities_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Priorities_Enum>;
  _nin?: Maybe<Array<Priorities_Enum>>;
};

/** input type for inserting data into table "priorities" */
export type Priorities_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Priorities_Max_Fields = {
  __typename?: 'priorities_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "priorities" */
export type Priorities_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Priorities_Min_Fields = {
  __typename?: 'priorities_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "priorities" */
export type Priorities_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "priorities" */
export type Priorities_Mutation_Response = {
  __typename?: 'priorities_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Priorities>;
};

/** input type for inserting object relation for remote table "priorities" */
export type Priorities_Obj_Rel_Insert_Input = {
  data: Priorities_Insert_Input;
  on_conflict?: Maybe<Priorities_On_Conflict>;
};

/** on conflict condition type for table "priorities" */
export type Priorities_On_Conflict = {
  constraint: Priorities_Constraint;
  update_columns: Array<Priorities_Update_Column>;
  where?: Maybe<Priorities_Bool_Exp>;
};

/** ordering options when selecting data from "priorities" */
export type Priorities_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "priorities" */
export type Priorities_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "priorities" */
export enum Priorities_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "priorities" */
export type Priorities_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "priorities" */
export enum Priorities_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "annotations" using primary key columns */
  annotation?: Maybe<Annotations>;
  /** fetch data from the table: "annotations" */
  annotations: Array<Annotations>;
  /** fetch aggregated fields from the table: "annotations" */
  annotationsAggregate: Annotations_Aggregate;
  /** fetch data from the table: "api_keys" using primary key columns */
  apiKey?: Maybe<Api_Keys>;
  /** fetch data from the table: "api_keys" */
  apiKeys: Array<Api_Keys>;
  /** fetch aggregated fields from the table: "api_keys" */
  apiKeysAggregate: Api_Keys_Aggregate;
  auth0Profile?: Maybe<Auth0Profile>;
  /** fetch data from the table: "branch_metadatas" */
  branch_metadatas: Array<Branch_Metadatas>;
  /** fetch aggregated fields from the table: "branch_metadatas" */
  branch_metadatas_aggregate: Branch_Metadatas_Aggregate;
  /** fetch data from the table: "branch_metadatas" using primary key columns */
  branch_metadatas_by_pk?: Maybe<Branch_Metadatas>;
  /** fetch data from the table: "dashboards" using primary key columns */
  dashboard?: Maybe<Dashboards>;
  /** fetch data from the table: "dashboard_item_configs" using primary key columns */
  dashboardItemConfig?: Maybe<Dashboard_Item_Configs>;
  /** fetch data from the table: "dashboard_item_configs" */
  dashboardItemConfigs: Array<Dashboard_Item_Configs>;
  /** fetch aggregated fields from the table: "dashboard_item_configs" */
  dashboardItemConfigsAggregate: Dashboard_Item_Configs_Aggregate;
  /** fetch data from the table: "dashboard_layouts" using primary key columns */
  dashboardLayout?: Maybe<Dashboard_Layouts>;
  /** fetch data from the table: "dashboard_layouts" */
  dashboardLayouts: Array<Dashboard_Layouts>;
  /** fetch data from the table: "dashboard_renderable_types" using primary key columns */
  dashboardRenderableType?: Maybe<Dashboard_Renderable_Types>;
  /** fetch data from the table: "dashboard_renderable_types" */
  dashboardRenderableTypes: Array<Dashboard_Renderable_Types>;
  /** fetch data from the table: "dashboard_sections" using primary key columns */
  dashboardSection?: Maybe<Dashboard_Sections>;
  /** fetch data from the table: "dashboard_section_types" using primary key columns */
  dashboardSectionType?: Maybe<Dashboard_Section_Types>;
  /** fetch data from the table: "dashboard_section_types" */
  dashboardSectionTypes: Array<Dashboard_Section_Types>;
  /** fetch data from the table: "dashboard_sections" */
  dashboardSections: Array<Dashboard_Sections>;
  /** fetch aggregated fields from the table: "dashboard_sections" */
  dashboardSectionsAggregate: Dashboard_Sections_Aggregate;
  /** fetch aggregated fields from the table: "dashboard_layouts" */
  dashboard_layouts_aggregate: Dashboard_Layouts_Aggregate;
  /** fetch aggregated fields from the table: "dashboard_renderable_types" */
  dashboard_renderable_types_aggregate: Dashboard_Renderable_Types_Aggregate;
  /** fetch aggregated fields from the table: "dashboard_section_types" */
  dashboard_section_types_aggregate: Dashboard_Section_Types_Aggregate;
  /** fetch data from the table: "dashboards" */
  dashboards: Array<Dashboards>;
  /** fetch aggregated fields from the table: "dashboards" */
  dashboardsAggregate: Dashboards_Aggregate;
  /** fetch data from the table: "org_data_sources" using primary key columns */
  dataSource?: Maybe<Org_Data_Sources>;
  /** fetch data from the table: "data_source_versions" using primary key columns */
  dataSourceVersion?: Maybe<Data_Source_Versions>;
  /** fetch data from the table: "data_source_versions" */
  dataSourceVersions: Array<Data_Source_Versions>;
  /** fetch aggregated fields from the table: "data_source_versions" */
  dataSourceVersionsAggregate: Data_Source_Versions_Aggregate;
  /** fetch data from the table: "org_data_sources" */
  dataSources: Array<Org_Data_Sources>;
  /** fetch aggregated fields from the table: "org_data_sources" */
  dataSourcesAggregate: Org_Data_Sources_Aggregate;
  /** fetch data from the table: "dw_engines" */
  dw_engines: Array<Dw_Engines>;
  /** fetch aggregated fields from the table: "dw_engines" */
  dw_engines_aggregate: Dw_Engines_Aggregate;
  /** fetch data from the table: "dw_engines" using primary key columns */
  dw_engines_by_pk?: Maybe<Dw_Engines>;
  /** fetch data from the table: "features" using primary key columns */
  feature?: Maybe<Features>;
  /** fetch data from the table: "features" */
  features: Array<Features>;
  /** fetch aggregated fields from the table: "features" */
  featuresAggregate: Features_Aggregate;
  latestMqlServer?: Maybe<MqlServerVersion>;
  /** execute function "me" which returns "users" */
  me: Array<Users>;
  /** execute function "me" and query aggregates on result of table type "users" */
  me_aggregate: Users_Aggregate;
  /** fetch data from the table: "metric_annotations" using primary key columns */
  metricAnnotation?: Maybe<Metric_Annotations>;
  /** fetch data from the table: "metric_annotations" */
  metricAnnotations: Array<Metric_Annotations>;
  /** fetch aggregated fields from the table: "metric_annotations" */
  metricAnnotationsAggregate: Metric_Annotations_Aggregate;
  /** fetch data from the table: "metric_approvals" using primary key columns */
  metricApproval?: Maybe<Metric_Approvals>;
  /** fetch data from the table: "metric_approvals" */
  metricApprovals: Array<Metric_Approvals>;
  /** fetch aggregated fields from the table: "metric_approvals" */
  metricApprovalsAggregate: Metric_Approvals_Aggregate;
  /** fetch data from the table: "org_metrics_current_view" using primary key columns */
  metricByIdTemp?: Maybe<Org_Metrics_Current_View>;
  /** fetch data from the table: "metric_collections" using primary key columns */
  metricCollection?: Maybe<Metric_Collections>;
  /** fetch data from the table: "metric_collection_metrics" using primary key columns */
  metricCollectionMetric?: Maybe<Metric_Collection_Metrics>;
  /** fetch data from the table: "metric_collection_metrics" */
  metricCollectionMetrics: Array<Metric_Collection_Metrics>;
  /** fetch aggregated fields from the table: "metric_collection_metrics" */
  metricCollectionMetricsAggregate: Metric_Collection_Metrics_Aggregate;
  /** fetch data from the table: "metric_collection_view" using primary key columns */
  metricCollectionView?: Maybe<Metric_Collection_View>;
  /** fetch aggregated fields from the table: "metric_collection_view" */
  metricCollectionViewAggregate: Metric_Collection_View_Aggregate;
  /** fetch data from the table: "metric_collection_view" */
  metricCollectionViews: Array<Metric_Collection_View>;
  /** fetch data from the table: "metric_collections" */
  metricCollections: Array<Metric_Collections>;
  /** fetch aggregated fields from the table: "metric_collections" */
  metricCollectionsAggregate: Metric_Collections_Aggregate;
  /** fetch data from the table: "metric_current_description" */
  metricCurrentDescriptions: Array<Metric_Current_Description>;
  /** fetch data from the table: "metric_descriptions" using primary key columns */
  metricDescription?: Maybe<Metric_Descriptions>;
  /** fetch data from the table: "metric_descriptions" */
  metricDescriptions: Array<Metric_Descriptions>;
  /** fetch aggregated fields from the table: "metric_descriptions" */
  metricDescriptionsAggregate: Metric_Descriptions_Aggregate;
  /** fetch data from the table: "metric_team_owners" using primary key columns */
  metricTeamOwner?: Maybe<Metric_Team_Owners>;
  /** fetch data from the table: "metric_team_owners" */
  metricTeamOwners: Array<Metric_Team_Owners>;
  /** fetch aggregated fields from the table: "metric_team_owners" */
  metricTeamOwnersAggregate: Metric_Team_Owners_Aggregate;
  /** fetch data from the table: "metric_user_owners" using primary key columns */
  metricUserOwner?: Maybe<Metric_User_Owners>;
  /** fetch data from the table: "metric_user_owners" */
  metricUserOwners: Array<Metric_User_Owners>;
  /** fetch aggregated fields from the table: "metric_user_owners" */
  metricUserOwnersAggregate: Metric_User_Owners_Aggregate;
  /** fetch data from the table: "metric_versions" using primary key columns */
  metricVersion?: Maybe<Metric_Versions>;
  /** fetch data from the table: "metric_versions" */
  metricVersions: Array<Metric_Versions>;
  /** fetch aggregated fields from the table: "metric_versions" */
  metricVersionsAggregate: Metric_Versions_Aggregate;
  /** fetch data from the table: "metric_view" */
  metricViews: Array<Metric_View>;
  /** fetch aggregated fields from the table: "metric_view" */
  metricViewsAggregate: Metric_View_Aggregate;
  /** fetch aggregated fields from the table: "metric_current_description" */
  metric_current_description_aggregate: Metric_Current_Description_Aggregate;
  /** fetch data from the table: "metric_lineage_data_sources" */
  metric_lineage_data_sources: Array<Metric_Lineage_Data_Sources>;
  /** fetch aggregated fields from the table: "metric_lineage_data_sources" */
  metric_lineage_data_sources_aggregate: Metric_Lineage_Data_Sources_Aggregate;
  /** fetch data from the table: "metric_lineage_data_sources" using primary key columns */
  metric_lineage_data_sources_by_pk?: Maybe<Metric_Lineage_Data_Sources>;
  /** fetch data from the table: "org_metrics_current_view" */
  metrics: Array<Org_Metrics_Current_View>;
  /** fetch aggregated fields from the table: "org_metrics_current_view" */
  metricsAggregate: Org_Metrics_Current_View_Aggregate;
  /** fetch data from the table: "models" using primary key columns */
  model?: Maybe<Models>;
  /** fetch data from the table: "model_data_sources" using primary key columns */
  modelDataSource?: Maybe<Model_Data_Sources>;
  /** fetch data from the table: "model_data_sources" */
  modelDataSources: Array<Model_Data_Sources>;
  /** fetch aggregated fields from the table: "model_data_sources" */
  modelDataSourcesAggregate: Model_Data_Sources_Aggregate;
  /** fetch data from the table: "model_metrics" using primary key columns */
  modelMetric?: Maybe<Model_Metrics>;
  /** fetch data from the table: "model_metrics" */
  modelMetrics: Array<Model_Metrics>;
  /** fetch aggregated fields from the table: "model_metrics" */
  modelMetricsAggregate: Model_Metrics_Aggregate;
  /** fetch data from the table: "model_current" */
  model_current: Array<Model_Current>;
  /** fetch aggregated fields from the table: "model_current" */
  model_current_aggregate: Model_Current_Aggregate;
  /** fetch data from the table: "models" */
  models: Array<Models>;
  /** fetch aggregated fields from the table: "models" */
  modelsAggregate: Models_Aggregate;
  /** fetch data from the table: "mql_heartbeats" using primary key columns */
  mqlHeartbeat?: Maybe<Mql_Heartbeats>;
  /** fetch data from the table: "mql_heartbeats" */
  mqlHeartbeats: Array<Mql_Heartbeats>;
  /** fetch aggregated fields from the table: "mql_heartbeats" */
  mqlHeartbeatsAggregate: Mql_Heartbeats_Aggregate;
  mqlServerUrl?: Maybe<Scalars['String']>;
  /** execute function "my_most_viewed_metrics" which returns "org_metrics_current_view" */
  my_most_viewed_metrics: Array<Org_Metrics_Current_View>;
  /** execute function "my_most_viewed_metrics" and query aggregates on result of table type "org_metrics_current_view" */
  my_most_viewed_metrics_aggregate: Org_Metrics_Current_View_Aggregate;
  /** execute function "my_org" which returns "organizations" */
  my_org: Array<Organizations>;
  /** execute function "my_org" and query aggregates on result of table type "organizations" */
  my_org_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "org_mql_servers" using primary key columns */
  orgMqlServer?: Maybe<Org_Mql_Servers>;
  /** fetch data from the table: "org_mql_servers" */
  orgMqlServers: Array<Org_Mql_Servers>;
  /** fetch aggregated fields from the table: "org_mql_servers" */
  orgMqlServersAggregate: Org_Mql_Servers_Aggregate;
  /** fetch data from the table: "org_mql_server_logs_types" */
  org_mql_server_logs_types: Array<Org_Mql_Server_Logs_Types>;
  /** fetch aggregated fields from the table: "org_mql_server_logs_types" */
  org_mql_server_logs_types_aggregate: Org_Mql_Server_Logs_Types_Aggregate;
  /** fetch data from the table: "org_mql_server_logs_types" using primary key columns */
  org_mql_server_logs_types_by_pk?: Maybe<Org_Mql_Server_Logs_Types>;
  /** fetch data from the table: "organizations" using primary key columns */
  organization?: Maybe<Organizations>;
  /** fetch data from the table: "organization_features" using primary key columns */
  organizationFeature?: Maybe<Organization_Features>;
  /** fetch data from the table: "organization_features" */
  organizationFeatures: Array<Organization_Features>;
  /** fetch aggregated fields from the table: "organization_features" */
  organizationFeaturesAggregate: Organization_Features_Aggregate;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizationsAggregate: Organizations_Aggregate;
  /** fetch data from the table: "priorities" */
  priorities: Array<Priorities>;
  /** fetch aggregated fields from the table: "priorities" */
  priorities_aggregate: Priorities_Aggregate;
  /** fetch data from the table: "priorities" using primary key columns */
  priorities_by_pk?: Maybe<Priorities>;
  /** fetch data from the table: "questions" using primary key columns */
  question?: Maybe<Questions>;
  /** fetch data from the table: "question_directed_to" */
  questionDirectedTo: Array<Question_Directed_To>;
  /** fetch aggregated fields from the table: "question_directed_to" */
  questionDirectedToAggregate: Question_Directed_To_Aggregate;
  /** fetch data from the table: "question_directed_to" using primary key columns */
  questionDirectedToByPK?: Maybe<Question_Directed_To>;
  /** fetch data from the table: "question_likes" using primary key columns */
  questionLike?: Maybe<Question_Likes>;
  /** fetch data from the table: "question_likes" */
  questionLikes: Array<Question_Likes>;
  /** fetch aggregated fields from the table: "question_likes" */
  questionLikesAggregate: Question_Likes_Aggregate;
  /** fetch data from the table: "question_replies" */
  questionReplies: Array<Question_Replies>;
  /** fetch aggregated fields from the table: "question_replies" */
  questionRepliesAggregate: Question_Replies_Aggregate;
  /** fetch data from the table: "question_replies" using primary key columns */
  questionReply?: Maybe<Question_Replies>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questionsAggregate: Questions_Aggregate;
  /** fetch data from the table: "saved_queries" */
  savedQueries: Array<Saved_Queries>;
  /** fetch aggregated fields from the table: "saved_queries" */
  savedQueriesAggregate: Saved_Queries_Aggregate;
  /** fetch data from the table: "saved_queries" using primary key columns */
  savedQuery?: Maybe<Saved_Queries>;
  /** fetch data from the table: "saved_query_metrics" using primary key columns */
  savedQueryMetric?: Maybe<Saved_Query_Metrics>;
  /** fetch data from the table: "saved_query_metrics" */
  savedQueryMetrics: Array<Saved_Query_Metrics>;
  /** fetch aggregated fields from the table: "saved_query_metrics" */
  savedQueryMetricsAggregate: Saved_Query_Metrics_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  team?: Maybe<Teams>;
  /** fetch data from the table: "team_dashboards" using primary key columns */
  teamDashboard?: Maybe<Team_Dashboards>;
  /** fetch data from the table: "team_dashboards" */
  teamDashboards: Array<Team_Dashboards>;
  /** fetch aggregated fields from the table: "team_dashboards" */
  teamDashboardsAggregate: Team_Dashboards_Aggregate;
  /** fetch data from the table: "team_members" using primary key columns */
  teamMember?: Maybe<Team_Members>;
  /** fetch data from the table: "team_members" */
  teamMembers: Array<Team_Members>;
  /** fetch aggregated fields from the table: "team_members" */
  teamMembersAggregate: Team_Members_Aggregate;
  /** fetch aggregated fields from the table: "team_views" */
  teamViewsAggregate: Team_Views_Aggregate;
  /** fetch data from the table: "team_page_theme_colors" */
  team_page_theme_colors: Array<Team_Page_Theme_Colors>;
  /** fetch aggregated fields from the table: "team_page_theme_colors" */
  team_page_theme_colors_aggregate: Team_Page_Theme_Colors_Aggregate;
  /** fetch data from the table: "team_page_theme_colors" using primary key columns */
  team_page_theme_colors_by_pk?: Maybe<Team_Page_Theme_Colors>;
  /** fetch data from the table: "team_views" */
  team_views: Array<Team_Views>;
  /** fetch data from the table: "team_views" using primary key columns */
  team_views_by_pk?: Maybe<Team_Views>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teamsAggregate: Teams_Aggregate;
  /** fetch data from the table: "unsubscribes" */
  unsubscribes: Array<Unsubscribes>;
  /** fetch aggregated fields from the table: "unsubscribes" */
  unsubscribes_aggregate: Unsubscribes_Aggregate;
  /** fetch data from the table: "unsubscribes" using primary key columns */
  unsubscribes_by_pk?: Maybe<Unsubscribes>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_dashboards" using primary key columns */
  userDashboard?: Maybe<User_Dashboards>;
  /** fetch data from the table: "user_dashboards" */
  userDashboards: Array<User_Dashboards>;
  /** fetch aggregated fields from the table: "user_dashboards" */
  userDashboardsAggregate: User_Dashboards_Aggregate;
  /** fetch data from the table: "user_features" using primary key columns */
  userFeature?: Maybe<User_Features>;
  /** fetch data from the table: "user_features" */
  userFeatures: Array<User_Features>;
  /** fetch aggregated fields from the table: "user_features" */
  userFeaturesAggregate: User_Features_Aggregate;
  /** fetch data from the table: "user_prefs" using primary key columns */
  userPreference?: Maybe<User_Prefs>;
  /** fetch data from the table: "user_prefs" */
  userPreferences: Array<User_Prefs>;
  /** fetch aggregated fields from the table: "user_prefs" */
  userPreferencesAggregate: User_Prefs_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  userRole?: Maybe<User_Roles>;
  /** fetch data from the table: "user_roles" */
  userRoles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  userRolesAggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_role_types" */
  user_role_types: Array<User_Role_Types>;
  /** fetch aggregated fields from the table: "user_role_types" */
  user_role_types_aggregate: User_Role_Types_Aggregate;
  /** fetch data from the table: "user_role_types" using primary key columns */
  user_role_types_by_pk?: Maybe<User_Role_Types>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: Users_Aggregate;
};


/** query root */
export type Query_RootAnnotationArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** query root */
export type Query_RootAnnotationsAggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** query root */
export type Query_RootApiKeyArgs = {
  prefix: Scalars['String'];
};


/** query root */
export type Query_RootApiKeysArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/** query root */
export type Query_RootApiKeysAggregateArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/** query root */
export type Query_RootAuth0ProfileArgs = {
  auth0Id: Scalars['String'];
};


/** query root */
export type Query_RootBranch_MetadatasArgs = {
  distinct_on?: Maybe<Array<Branch_Metadatas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Metadatas_Order_By>>;
  where?: Maybe<Branch_Metadatas_Bool_Exp>;
};


/** query root */
export type Query_RootBranch_Metadatas_AggregateArgs = {
  distinct_on?: Maybe<Array<Branch_Metadatas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Metadatas_Order_By>>;
  where?: Maybe<Branch_Metadatas_Bool_Exp>;
};


/** query root */
export type Query_RootBranch_Metadatas_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDashboardArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDashboardItemConfigArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDashboardItemConfigsArgs = {
  distinct_on?: Maybe<Array<Dashboard_Item_Configs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Item_Configs_Order_By>>;
  where?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
};


/** query root */
export type Query_RootDashboardItemConfigsAggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Item_Configs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Item_Configs_Order_By>>;
  where?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
};


/** query root */
export type Query_RootDashboardLayoutArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootDashboardLayoutsArgs = {
  distinct_on?: Maybe<Array<Dashboard_Layouts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Layouts_Order_By>>;
  where?: Maybe<Dashboard_Layouts_Bool_Exp>;
};


/** query root */
export type Query_RootDashboardRenderableTypeArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootDashboardRenderableTypesArgs = {
  distinct_on?: Maybe<Array<Dashboard_Renderable_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Renderable_Types_Order_By>>;
  where?: Maybe<Dashboard_Renderable_Types_Bool_Exp>;
};


/** query root */
export type Query_RootDashboardSectionArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDashboardSectionTypeArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootDashboardSectionTypesArgs = {
  distinct_on?: Maybe<Array<Dashboard_Section_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Section_Types_Order_By>>;
  where?: Maybe<Dashboard_Section_Types_Bool_Exp>;
};


/** query root */
export type Query_RootDashboardSectionsArgs = {
  distinct_on?: Maybe<Array<Dashboard_Sections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Sections_Order_By>>;
  where?: Maybe<Dashboard_Sections_Bool_Exp>;
};


/** query root */
export type Query_RootDashboardSectionsAggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Sections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Sections_Order_By>>;
  where?: Maybe<Dashboard_Sections_Bool_Exp>;
};


/** query root */
export type Query_RootDashboard_Layouts_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Layouts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Layouts_Order_By>>;
  where?: Maybe<Dashboard_Layouts_Bool_Exp>;
};


/** query root */
export type Query_RootDashboard_Renderable_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Renderable_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Renderable_Types_Order_By>>;
  where?: Maybe<Dashboard_Renderable_Types_Bool_Exp>;
};


/** query root */
export type Query_RootDashboard_Section_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Section_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Section_Types_Order_By>>;
  where?: Maybe<Dashboard_Section_Types_Bool_Exp>;
};


/** query root */
export type Query_RootDashboardsArgs = {
  distinct_on?: Maybe<Array<Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboards_Order_By>>;
  where?: Maybe<Dashboards_Bool_Exp>;
};


/** query root */
export type Query_RootDashboardsAggregateArgs = {
  distinct_on?: Maybe<Array<Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboards_Order_By>>;
  where?: Maybe<Dashboards_Bool_Exp>;
};


/** query root */
export type Query_RootDataSourceArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDataSourceVersionArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDataSourceVersionsArgs = {
  distinct_on?: Maybe<Array<Data_Source_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Source_Versions_Order_By>>;
  where?: Maybe<Data_Source_Versions_Bool_Exp>;
};


/** query root */
export type Query_RootDataSourceVersionsAggregateArgs = {
  distinct_on?: Maybe<Array<Data_Source_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Source_Versions_Order_By>>;
  where?: Maybe<Data_Source_Versions_Bool_Exp>;
};


/** query root */
export type Query_RootDataSourcesArgs = {
  distinct_on?: Maybe<Array<Org_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Data_Sources_Order_By>>;
  where?: Maybe<Org_Data_Sources_Bool_Exp>;
};


/** query root */
export type Query_RootDataSourcesAggregateArgs = {
  distinct_on?: Maybe<Array<Org_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Data_Sources_Order_By>>;
  where?: Maybe<Org_Data_Sources_Bool_Exp>;
};


/** query root */
export type Query_RootDw_EnginesArgs = {
  distinct_on?: Maybe<Array<Dw_Engines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dw_Engines_Order_By>>;
  where?: Maybe<Dw_Engines_Bool_Exp>;
};


/** query root */
export type Query_RootDw_Engines_AggregateArgs = {
  distinct_on?: Maybe<Array<Dw_Engines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dw_Engines_Order_By>>;
  where?: Maybe<Dw_Engines_Bool_Exp>;
};


/** query root */
export type Query_RootDw_Engines_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootFeatureArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootFeaturesArgs = {
  distinct_on?: Maybe<Array<Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Features_Order_By>>;
  where?: Maybe<Features_Bool_Exp>;
};


/** query root */
export type Query_RootFeaturesAggregateArgs = {
  distinct_on?: Maybe<Array<Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Features_Order_By>>;
  where?: Maybe<Features_Bool_Exp>;
};


/** query root */
export type Query_RootMeArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootMe_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootMetricAnnotationArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricAnnotationsArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/** query root */
export type Query_RootMetricAnnotationsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/** query root */
export type Query_RootMetricApprovalArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricApprovalsArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/** query root */
export type Query_RootMetricApprovalsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/** query root */
export type Query_RootMetricByIdTempArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricCollectionArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricCollectionMetricArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricCollectionMetricsArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_Metrics_Order_By>>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};


/** query root */
export type Query_RootMetricCollectionMetricsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_Metrics_Order_By>>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};


/** query root */
export type Query_RootMetricCollectionViewArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricCollectionViewAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_View_Order_By>>;
  where?: Maybe<Metric_Collection_View_Bool_Exp>;
};


/** query root */
export type Query_RootMetricCollectionViewsArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_View_Order_By>>;
  where?: Maybe<Metric_Collection_View_Bool_Exp>;
};


/** query root */
export type Query_RootMetricCollectionsArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/** query root */
export type Query_RootMetricCollectionsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/** query root */
export type Query_RootMetricCurrentDescriptionsArgs = {
  distinct_on?: Maybe<Array<Metric_Current_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Current_Description_Order_By>>;
  where?: Maybe<Metric_Current_Description_Bool_Exp>;
};


/** query root */
export type Query_RootMetricDescriptionArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricDescriptionsArgs = {
  distinct_on?: Maybe<Array<Metric_Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Descriptions_Order_By>>;
  where?: Maybe<Metric_Descriptions_Bool_Exp>;
};


/** query root */
export type Query_RootMetricDescriptionsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Descriptions_Order_By>>;
  where?: Maybe<Metric_Descriptions_Bool_Exp>;
};


/** query root */
export type Query_RootMetricTeamOwnerArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricTeamOwnersArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/** query root */
export type Query_RootMetricTeamOwnersAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/** query root */
export type Query_RootMetricUserOwnerArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricUserOwnersArgs = {
  distinct_on?: Maybe<Array<Metric_User_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_User_Owners_Order_By>>;
  where?: Maybe<Metric_User_Owners_Bool_Exp>;
};


/** query root */
export type Query_RootMetricUserOwnersAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_User_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_User_Owners_Order_By>>;
  where?: Maybe<Metric_User_Owners_Bool_Exp>;
};


/** query root */
export type Query_RootMetricVersionArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootMetricVersionsArgs = {
  distinct_on?: Maybe<Array<Metric_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Versions_Order_By>>;
  where?: Maybe<Metric_Versions_Bool_Exp>;
};


/** query root */
export type Query_RootMetricVersionsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Versions_Order_By>>;
  where?: Maybe<Metric_Versions_Bool_Exp>;
};


/** query root */
export type Query_RootMetricViewsArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/** query root */
export type Query_RootMetricViewsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/** query root */
export type Query_RootMetric_Current_Description_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Current_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Current_Description_Order_By>>;
  where?: Maybe<Metric_Current_Description_Bool_Exp>;
};


/** query root */
export type Query_RootMetric_Lineage_Data_SourcesArgs = {
  distinct_on?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Lineage_Data_Sources_Order_By>>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};


/** query root */
export type Query_RootMetric_Lineage_Data_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Lineage_Data_Sources_Order_By>>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};


/** query root */
export type Query_RootMetric_Lineage_Data_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricsArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/** query root */
export type Query_RootMetricsAggregateArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/** query root */
export type Query_RootModelArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootModelDataSourceArgs = {
  dataSourceVersionId: Scalars['Int'];
  modelId: Scalars['Int'];
};


/** query root */
export type Query_RootModelDataSourcesArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/** query root */
export type Query_RootModelDataSourcesAggregateArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/** query root */
export type Query_RootModelMetricArgs = {
  metricId: Scalars['bigint'];
  metricVersionId: Scalars['bigint'];
  modelId: Scalars['bigint'];
};


/** query root */
export type Query_RootModelMetricsArgs = {
  distinct_on?: Maybe<Array<Model_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Metrics_Order_By>>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};


/** query root */
export type Query_RootModelMetricsAggregateArgs = {
  distinct_on?: Maybe<Array<Model_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Metrics_Order_By>>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};


/** query root */
export type Query_RootModel_CurrentArgs = {
  distinct_on?: Maybe<Array<Model_Current_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Current_Order_By>>;
  where?: Maybe<Model_Current_Bool_Exp>;
};


/** query root */
export type Query_RootModel_Current_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Current_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Current_Order_By>>;
  where?: Maybe<Model_Current_Bool_Exp>;
};


/** query root */
export type Query_RootModelsArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** query root */
export type Query_RootModelsAggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** query root */
export type Query_RootMqlHeartbeatArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMqlHeartbeatsArgs = {
  distinct_on?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mql_Heartbeats_Order_By>>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};


/** query root */
export type Query_RootMqlHeartbeatsAggregateArgs = {
  distinct_on?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mql_Heartbeats_Order_By>>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};


/** query root */
export type Query_RootMy_Most_Viewed_MetricsArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/** query root */
export type Query_RootMy_Most_Viewed_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/** query root */
export type Query_RootMy_OrgArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


/** query root */
export type Query_RootMy_Org_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


/** query root */
export type Query_RootOrgMqlServerArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOrgMqlServersArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Servers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Servers_Order_By>>;
  where?: Maybe<Org_Mql_Servers_Bool_Exp>;
};


/** query root */
export type Query_RootOrgMqlServersAggregateArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Servers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Servers_Order_By>>;
  where?: Maybe<Org_Mql_Servers_Bool_Exp>;
};


/** query root */
export type Query_RootOrg_Mql_Server_Logs_TypesArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Server_Logs_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Server_Logs_Types_Order_By>>;
  where?: Maybe<Org_Mql_Server_Logs_Types_Bool_Exp>;
};


/** query root */
export type Query_RootOrg_Mql_Server_Logs_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Server_Logs_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Server_Logs_Types_Order_By>>;
  where?: Maybe<Org_Mql_Server_Logs_Types_Bool_Exp>;
};


/** query root */
export type Query_RootOrg_Mql_Server_Logs_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootOrganizationArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOrganizationFeatureArgs = {
  featureId: Scalars['Int'];
  organizationId: Scalars['Int'];
};


/** query root */
export type Query_RootOrganizationFeaturesArgs = {
  distinct_on?: Maybe<Array<Organization_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Features_Order_By>>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};


/** query root */
export type Query_RootOrganizationFeaturesAggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Features_Order_By>>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};


/** query root */
export type Query_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


/** query root */
export type Query_RootOrganizationsAggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


/** query root */
export type Query_RootPrioritiesArgs = {
  distinct_on?: Maybe<Array<Priorities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Priorities_Order_By>>;
  where?: Maybe<Priorities_Bool_Exp>;
};


/** query root */
export type Query_RootPriorities_AggregateArgs = {
  distinct_on?: Maybe<Array<Priorities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Priorities_Order_By>>;
  where?: Maybe<Priorities_Bool_Exp>;
};


/** query root */
export type Query_RootPriorities_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootQuestionArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootQuestionDirectedToArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionDirectedToAggregateArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionDirectedToByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootQuestionLikeArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootQuestionLikesArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionLikesAggregateArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionRepliesArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionRepliesAggregateArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionReplyArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** query root */
export type Query_RootQuestionsAggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** query root */
export type Query_RootSavedQueriesArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/** query root */
export type Query_RootSavedQueriesAggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/** query root */
export type Query_RootSavedQueryArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSavedQueryMetricArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSavedQueryMetricsArgs = {
  distinct_on?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Query_Metrics_Order_By>>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};


/** query root */
export type Query_RootSavedQueryMetricsAggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Query_Metrics_Order_By>>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};


/** query root */
export type Query_RootTeamArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTeamDashboardArgs = {
  dashboardId: Scalars['Int'];
  team_id: Scalars['Int'];
};


/** query root */
export type Query_RootTeamDashboardsArgs = {
  distinct_on?: Maybe<Array<Team_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Dashboards_Order_By>>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};


/** query root */
export type Query_RootTeamDashboardsAggregateArgs = {
  distinct_on?: Maybe<Array<Team_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Dashboards_Order_By>>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};


/** query root */
export type Query_RootTeamMemberArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTeamMembersArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/** query root */
export type Query_RootTeamMembersAggregateArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/** query root */
export type Query_RootTeamViewsAggregateArgs = {
  distinct_on?: Maybe<Array<Team_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Views_Order_By>>;
  where?: Maybe<Team_Views_Bool_Exp>;
};


/** query root */
export type Query_RootTeam_Page_Theme_ColorsArgs = {
  distinct_on?: Maybe<Array<Team_Page_Theme_Colors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Page_Theme_Colors_Order_By>>;
  where?: Maybe<Team_Page_Theme_Colors_Bool_Exp>;
};


/** query root */
export type Query_RootTeam_Page_Theme_Colors_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Page_Theme_Colors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Page_Theme_Colors_Order_By>>;
  where?: Maybe<Team_Page_Theme_Colors_Bool_Exp>;
};


/** query root */
export type Query_RootTeam_Page_Theme_Colors_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootTeam_ViewsArgs = {
  distinct_on?: Maybe<Array<Team_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Views_Order_By>>;
  where?: Maybe<Team_Views_Bool_Exp>;
};


/** query root */
export type Query_RootTeam_Views_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** query root */
export type Query_RootTeamsAggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** query root */
export type Query_RootUnsubscribesArgs = {
  distinct_on?: Maybe<Array<Unsubscribes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unsubscribes_Order_By>>;
  where?: Maybe<Unsubscribes_Bool_Exp>;
};


/** query root */
export type Query_RootUnsubscribes_AggregateArgs = {
  distinct_on?: Maybe<Array<Unsubscribes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unsubscribes_Order_By>>;
  where?: Maybe<Unsubscribes_Bool_Exp>;
};


/** query root */
export type Query_RootUnsubscribes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserDashboardArgs = {
  dashboardId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** query root */
export type Query_RootUserDashboardsArgs = {
  distinct_on?: Maybe<Array<User_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Dashboards_Order_By>>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};


/** query root */
export type Query_RootUserDashboardsAggregateArgs = {
  distinct_on?: Maybe<Array<User_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Dashboards_Order_By>>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};


/** query root */
export type Query_RootUserFeatureArgs = {
  featureId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** query root */
export type Query_RootUserFeaturesArgs = {
  distinct_on?: Maybe<Array<User_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Features_Order_By>>;
  where?: Maybe<User_Features_Bool_Exp>;
};


/** query root */
export type Query_RootUserFeaturesAggregateArgs = {
  distinct_on?: Maybe<Array<User_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Features_Order_By>>;
  where?: Maybe<User_Features_Bool_Exp>;
};


/** query root */
export type Query_RootUserPreferenceArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserPreferencesArgs = {
  distinct_on?: Maybe<Array<User_Prefs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Prefs_Order_By>>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};


/** query root */
export type Query_RootUserPreferencesAggregateArgs = {
  distinct_on?: Maybe<Array<User_Prefs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Prefs_Order_By>>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};


/** query root */
export type Query_RootUserRoleArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserRolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootUserRolesAggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Role_TypesArgs = {
  distinct_on?: Maybe<Array<User_Role_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Types_Order_By>>;
  where?: Maybe<User_Role_Types_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Role_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Types_Order_By>>;
  where?: Maybe<User_Role_Types_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Role_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/**
 * Indicates to which User or Team a Question is directed.
 *
 *
 * columns and relationships of "question_directed_to"
 */
export type Question_Directed_To = {
  __typename?: 'question_directed_to';
  /** Timestamp indicated when a Question Directed To entry was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['Int']>;
  entity_type?: Maybe<Scalars['entity']>;
  /** Unique identifier for a target to whom the Question is directed */
  id: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  question: Questions;
  questionid: Scalars['Int'];
  /** An object relationship */
  team?: Maybe<Teams>;
  teamId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "question_directed_to" */
export type Question_Directed_To_Aggregate = {
  __typename?: 'question_directed_to_aggregate';
  aggregate?: Maybe<Question_Directed_To_Aggregate_Fields>;
  nodes: Array<Question_Directed_To>;
};

/** aggregate fields of "question_directed_to" */
export type Question_Directed_To_Aggregate_Fields = {
  __typename?: 'question_directed_to_aggregate_fields';
  avg?: Maybe<Question_Directed_To_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Question_Directed_To_Max_Fields>;
  min?: Maybe<Question_Directed_To_Min_Fields>;
  stddev?: Maybe<Question_Directed_To_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Directed_To_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Directed_To_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Directed_To_Sum_Fields>;
  var_pop?: Maybe<Question_Directed_To_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Directed_To_Var_Samp_Fields>;
  variance?: Maybe<Question_Directed_To_Variance_Fields>;
};


/** aggregate fields of "question_directed_to" */
export type Question_Directed_To_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Question_Directed_To_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "question_directed_to" */
export type Question_Directed_To_Aggregate_Order_By = {
  avg?: Maybe<Question_Directed_To_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Question_Directed_To_Max_Order_By>;
  min?: Maybe<Question_Directed_To_Min_Order_By>;
  stddev?: Maybe<Question_Directed_To_Stddev_Order_By>;
  stddev_pop?: Maybe<Question_Directed_To_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Question_Directed_To_Stddev_Samp_Order_By>;
  sum?: Maybe<Question_Directed_To_Sum_Order_By>;
  var_pop?: Maybe<Question_Directed_To_Var_Pop_Order_By>;
  var_samp?: Maybe<Question_Directed_To_Var_Samp_Order_By>;
  variance?: Maybe<Question_Directed_To_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "question_directed_to" */
export type Question_Directed_To_Arr_Rel_Insert_Input = {
  data: Array<Question_Directed_To_Insert_Input>;
  on_conflict?: Maybe<Question_Directed_To_On_Conflict>;
};

/** aggregate avg on columns */
export type Question_Directed_To_Avg_Fields = {
  __typename?: 'question_directed_to_avg_fields';
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionid?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "question_directed_to" */
export type Question_Directed_To_Avg_Order_By = {
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "question_directed_to". All fields are combined with a logical 'AND'. */
export type Question_Directed_To_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Question_Directed_To_Bool_Exp>>>;
  _not?: Maybe<Question_Directed_To_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Question_Directed_To_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  entity_id?: Maybe<Int_Comparison_Exp>;
  entity_type?: Maybe<Entity_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  question?: Maybe<Questions_Bool_Exp>;
  questionid?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  teamId?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "question_directed_to" */
export enum Question_Directed_To_Constraint {
  /** unique or primary key constraint */
  QuestionDirectedToIdKey = 'question_directed_to_id_key',
  /** unique or primary key constraint */
  QuestionDirectedToPkey = 'question_directed_to_pkey'
}

/** input type for incrementing integer column in table "question_directed_to" */
export type Question_Directed_To_Inc_Input = {
  entity_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionid?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "question_directed_to" */
export type Question_Directed_To_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['Int']>;
  entity_type?: Maybe<Scalars['entity']>;
  id?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  question?: Maybe<Questions_Obj_Rel_Insert_Input>;
  questionid?: Maybe<Scalars['Int']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  teamId?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Question_Directed_To_Max_Fields = {
  __typename?: 'question_directed_to_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionid?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "question_directed_to" */
export type Question_Directed_To_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Question_Directed_To_Min_Fields = {
  __typename?: 'question_directed_to_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionid?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "question_directed_to" */
export type Question_Directed_To_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "question_directed_to" */
export type Question_Directed_To_Mutation_Response = {
  __typename?: 'question_directed_to_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Question_Directed_To>;
};

/** input type for inserting object relation for remote table "question_directed_to" */
export type Question_Directed_To_Obj_Rel_Insert_Input = {
  data: Question_Directed_To_Insert_Input;
  on_conflict?: Maybe<Question_Directed_To_On_Conflict>;
};

/** on conflict condition type for table "question_directed_to" */
export type Question_Directed_To_On_Conflict = {
  constraint: Question_Directed_To_Constraint;
  update_columns: Array<Question_Directed_To_Update_Column>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};

/** ordering options when selecting data from "question_directed_to" */
export type Question_Directed_To_Order_By = {
  createdAt?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  entity_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  question?: Maybe<Questions_Order_By>;
  questionid?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  teamId?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "question_directed_to" */
export type Question_Directed_To_Pk_Columns_Input = {
  /** Unique identifier for a target to whom the Question is directed */
  id: Scalars['Int'];
};

/** select columns of table "question_directed_to" */
export enum Question_Directed_To_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EntityType = 'entity_type',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Questionid = 'questionid',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "question_directed_to" */
export type Question_Directed_To_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['Int']>;
  entity_type?: Maybe<Scalars['entity']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionid?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Question_Directed_To_Stddev_Fields = {
  __typename?: 'question_directed_to_stddev_fields';
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionid?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "question_directed_to" */
export type Question_Directed_To_Stddev_Order_By = {
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Question_Directed_To_Stddev_Pop_Fields = {
  __typename?: 'question_directed_to_stddev_pop_fields';
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionid?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "question_directed_to" */
export type Question_Directed_To_Stddev_Pop_Order_By = {
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Question_Directed_To_Stddev_Samp_Fields = {
  __typename?: 'question_directed_to_stddev_samp_fields';
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionid?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "question_directed_to" */
export type Question_Directed_To_Stddev_Samp_Order_By = {
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Question_Directed_To_Sum_Fields = {
  __typename?: 'question_directed_to_sum_fields';
  entity_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionid?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "question_directed_to" */
export type Question_Directed_To_Sum_Order_By = {
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "question_directed_to" */
export enum Question_Directed_To_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EntityType = 'entity_type',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Questionid = 'questionid',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Question_Directed_To_Var_Pop_Fields = {
  __typename?: 'question_directed_to_var_pop_fields';
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionid?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "question_directed_to" */
export type Question_Directed_To_Var_Pop_Order_By = {
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Question_Directed_To_Var_Samp_Fields = {
  __typename?: 'question_directed_to_var_samp_fields';
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionid?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "question_directed_to" */
export type Question_Directed_To_Var_Samp_Order_By = {
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Question_Directed_To_Variance_Fields = {
  __typename?: 'question_directed_to_variance_fields';
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionid?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "question_directed_to" */
export type Question_Directed_To_Variance_Order_By = {
  entity_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionid?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/**
 * Question Likes are signals that you think the Question being liked is important and worth focusing on
 *
 *
 * columns and relationships of "question_likes"
 */
export type Question_Likes = {
  __typename?: 'question_likes';
  /** Timestamp indicating when the Question was liked */
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** A primary identifier for the Question Like */
  id: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  question?: Maybe<Questions>;
  questionId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  questionReply?: Maybe<Question_Replies>;
  questionReplyId?: Maybe<Scalars['Int']>;
  question_or_reply?: Maybe<Scalars['questionorreply']>;
  question_or_reply_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
};

/** aggregated selection of "question_likes" */
export type Question_Likes_Aggregate = {
  __typename?: 'question_likes_aggregate';
  aggregate?: Maybe<Question_Likes_Aggregate_Fields>;
  nodes: Array<Question_Likes>;
};

/** aggregate fields of "question_likes" */
export type Question_Likes_Aggregate_Fields = {
  __typename?: 'question_likes_aggregate_fields';
  avg?: Maybe<Question_Likes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Question_Likes_Max_Fields>;
  min?: Maybe<Question_Likes_Min_Fields>;
  stddev?: Maybe<Question_Likes_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Likes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Likes_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Likes_Sum_Fields>;
  var_pop?: Maybe<Question_Likes_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Likes_Var_Samp_Fields>;
  variance?: Maybe<Question_Likes_Variance_Fields>;
};


/** aggregate fields of "question_likes" */
export type Question_Likes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Question_Likes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "question_likes" */
export type Question_Likes_Aggregate_Order_By = {
  avg?: Maybe<Question_Likes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Question_Likes_Max_Order_By>;
  min?: Maybe<Question_Likes_Min_Order_By>;
  stddev?: Maybe<Question_Likes_Stddev_Order_By>;
  stddev_pop?: Maybe<Question_Likes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Question_Likes_Stddev_Samp_Order_By>;
  sum?: Maybe<Question_Likes_Sum_Order_By>;
  var_pop?: Maybe<Question_Likes_Var_Pop_Order_By>;
  var_samp?: Maybe<Question_Likes_Var_Samp_Order_By>;
  variance?: Maybe<Question_Likes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "question_likes" */
export type Question_Likes_Arr_Rel_Insert_Input = {
  data: Array<Question_Likes_Insert_Input>;
  on_conflict?: Maybe<Question_Likes_On_Conflict>;
};

/** aggregate avg on columns */
export type Question_Likes_Avg_Fields = {
  __typename?: 'question_likes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  questionReplyId?: Maybe<Scalars['Float']>;
  question_or_reply_id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "question_likes" */
export type Question_Likes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "question_likes". All fields are combined with a logical 'AND'. */
export type Question_Likes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Question_Likes_Bool_Exp>>>;
  _not?: Maybe<Question_Likes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Question_Likes_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  question?: Maybe<Questions_Bool_Exp>;
  questionId?: Maybe<Int_Comparison_Exp>;
  questionReply?: Maybe<Question_Replies_Bool_Exp>;
  questionReplyId?: Maybe<Int_Comparison_Exp>;
  question_or_reply?: Maybe<Questionorreply_Comparison_Exp>;
  question_or_reply_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "question_likes" */
export enum Question_Likes_Constraint {
  /** unique or primary key constraint */
  QuestionLikesIdKey = 'question_likes_id_key',
  /** unique or primary key constraint */
  QuestionLikesPkey = 'question_likes_pkey',
  /** unique or primary key constraint */
  QuestionLikesUserIdQuestionIdKey = 'question_likes_user_id_question_id_key',
  /** unique or primary key constraint */
  QuestionLikesUserIdQuestionReplyIdKey = 'question_likes_user_id_question_reply_id_key'
}

/** input type for incrementing integer column in table "question_likes" */
export type Question_Likes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  questionReplyId?: Maybe<Scalars['Int']>;
  question_or_reply_id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "question_likes" */
export type Question_Likes_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  question?: Maybe<Questions_Obj_Rel_Insert_Input>;
  questionId?: Maybe<Scalars['Int']>;
  questionReply?: Maybe<Question_Replies_Obj_Rel_Insert_Input>;
  questionReplyId?: Maybe<Scalars['Int']>;
  question_or_reply?: Maybe<Scalars['questionorreply']>;
  question_or_reply_id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Question_Likes_Max_Fields = {
  __typename?: 'question_likes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  questionReplyId?: Maybe<Scalars['Int']>;
  question_or_reply_id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "question_likes" */
export type Question_Likes_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Question_Likes_Min_Fields = {
  __typename?: 'question_likes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  questionReplyId?: Maybe<Scalars['Int']>;
  question_or_reply_id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "question_likes" */
export type Question_Likes_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "question_likes" */
export type Question_Likes_Mutation_Response = {
  __typename?: 'question_likes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Question_Likes>;
};

/** input type for inserting object relation for remote table "question_likes" */
export type Question_Likes_Obj_Rel_Insert_Input = {
  data: Question_Likes_Insert_Input;
  on_conflict?: Maybe<Question_Likes_On_Conflict>;
};

/** on conflict condition type for table "question_likes" */
export type Question_Likes_On_Conflict = {
  constraint: Question_Likes_Constraint;
  update_columns: Array<Question_Likes_Update_Column>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};

/** ordering options when selecting data from "question_likes" */
export type Question_Likes_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  question?: Maybe<Questions_Order_By>;
  questionId?: Maybe<Order_By>;
  questionReply?: Maybe<Question_Replies_Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "question_likes" */
export type Question_Likes_Pk_Columns_Input = {
  /** A primary identifier for the Question Like */
  id: Scalars['Int'];
};

/** select columns of table "question_likes" */
export enum Question_Likes_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  QuestionReplyId = 'questionReplyId',
  /** column name */
  QuestionOrReply = 'question_or_reply',
  /** column name */
  QuestionOrReplyId = 'question_or_reply_id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "question_likes" */
export type Question_Likes_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  questionReplyId?: Maybe<Scalars['Int']>;
  question_or_reply?: Maybe<Scalars['questionorreply']>;
  question_or_reply_id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Question_Likes_Stddev_Fields = {
  __typename?: 'question_likes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  questionReplyId?: Maybe<Scalars['Float']>;
  question_or_reply_id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "question_likes" */
export type Question_Likes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Question_Likes_Stddev_Pop_Fields = {
  __typename?: 'question_likes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  questionReplyId?: Maybe<Scalars['Float']>;
  question_or_reply_id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "question_likes" */
export type Question_Likes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Question_Likes_Stddev_Samp_Fields = {
  __typename?: 'question_likes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  questionReplyId?: Maybe<Scalars['Float']>;
  question_or_reply_id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "question_likes" */
export type Question_Likes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Question_Likes_Sum_Fields = {
  __typename?: 'question_likes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  questionReplyId?: Maybe<Scalars['Int']>;
  question_or_reply_id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "question_likes" */
export type Question_Likes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "question_likes" */
export enum Question_Likes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  QuestionReplyId = 'questionReplyId',
  /** column name */
  QuestionOrReply = 'question_or_reply',
  /** column name */
  QuestionOrReplyId = 'question_or_reply_id',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Question_Likes_Var_Pop_Fields = {
  __typename?: 'question_likes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  questionReplyId?: Maybe<Scalars['Float']>;
  question_or_reply_id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "question_likes" */
export type Question_Likes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Question_Likes_Var_Samp_Fields = {
  __typename?: 'question_likes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  questionReplyId?: Maybe<Scalars['Float']>;
  question_or_reply_id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "question_likes" */
export type Question_Likes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Question_Likes_Variance_Fields = {
  __typename?: 'question_likes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  questionReplyId?: Maybe<Scalars['Float']>;
  question_or_reply_id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "question_likes" */
export type Question_Likes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  questionReplyId?: Maybe<Order_By>;
  question_or_reply_id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/**
 * A reply from a User in answer to a Question
 *
 *
 * columns and relationships of "question_replies"
 */
export type Question_Replies = {
  __typename?: 'question_replies';
  /** An object relationship */
  author: Users;
  authorId: Scalars['Int'];
  /** Timestamp indicating when the Question Reply was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  /** A unique identifier for the Question Reply */
  id: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  question: Questions;
  questionId: Scalars['Int'];
  /** An array relationship */
  questionLikes: Array<Question_Likes>;
  /** An aggregated array relationship */
  questionLikes_aggregate: Question_Likes_Aggregate;
  /** The content of the Question Reply */
  text: Scalars['String'];
  /** Timestamp indicating when the Question Reply was last updated */
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "user_has_liked_reply" */
  userHasLiked?: Maybe<Scalars['Boolean']>;
};


/**
 * A reply from a User in answer to a Question
 *
 *
 * columns and relationships of "question_replies"
 */
export type Question_RepliesQuestionLikesArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/**
 * A reply from a User in answer to a Question
 *
 *
 * columns and relationships of "question_replies"
 */
export type Question_RepliesQuestionLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};

/** aggregated selection of "question_replies" */
export type Question_Replies_Aggregate = {
  __typename?: 'question_replies_aggregate';
  aggregate?: Maybe<Question_Replies_Aggregate_Fields>;
  nodes: Array<Question_Replies>;
};

/** aggregate fields of "question_replies" */
export type Question_Replies_Aggregate_Fields = {
  __typename?: 'question_replies_aggregate_fields';
  avg?: Maybe<Question_Replies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Question_Replies_Max_Fields>;
  min?: Maybe<Question_Replies_Min_Fields>;
  stddev?: Maybe<Question_Replies_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Replies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Replies_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Replies_Sum_Fields>;
  var_pop?: Maybe<Question_Replies_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Replies_Var_Samp_Fields>;
  variance?: Maybe<Question_Replies_Variance_Fields>;
};


/** aggregate fields of "question_replies" */
export type Question_Replies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Question_Replies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "question_replies" */
export type Question_Replies_Aggregate_Order_By = {
  avg?: Maybe<Question_Replies_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Question_Replies_Max_Order_By>;
  min?: Maybe<Question_Replies_Min_Order_By>;
  stddev?: Maybe<Question_Replies_Stddev_Order_By>;
  stddev_pop?: Maybe<Question_Replies_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Question_Replies_Stddev_Samp_Order_By>;
  sum?: Maybe<Question_Replies_Sum_Order_By>;
  var_pop?: Maybe<Question_Replies_Var_Pop_Order_By>;
  var_samp?: Maybe<Question_Replies_Var_Samp_Order_By>;
  variance?: Maybe<Question_Replies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "question_replies" */
export type Question_Replies_Arr_Rel_Insert_Input = {
  data: Array<Question_Replies_Insert_Input>;
  on_conflict?: Maybe<Question_Replies_On_Conflict>;
};

/** aggregate avg on columns */
export type Question_Replies_Avg_Fields = {
  __typename?: 'question_replies_avg_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "question_replies" */
export type Question_Replies_Avg_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "question_replies". All fields are combined with a logical 'AND'. */
export type Question_Replies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Question_Replies_Bool_Exp>>>;
  _not?: Maybe<Question_Replies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Question_Replies_Bool_Exp>>>;
  author?: Maybe<Users_Bool_Exp>;
  authorId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  created_ts?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  question?: Maybe<Questions_Bool_Exp>;
  questionId?: Maybe<Int_Comparison_Exp>;
  questionLikes?: Maybe<Question_Likes_Bool_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "question_replies" */
export enum Question_Replies_Constraint {
  /** unique or primary key constraint */
  QuestionRepliesPkey = 'question_replies_pkey'
}

/** input type for incrementing integer column in table "question_replies" */
export type Question_Replies_Inc_Input = {
  authorId?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "question_replies" */
export type Question_Replies_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  question?: Maybe<Questions_Obj_Rel_Insert_Input>;
  questionId?: Maybe<Scalars['Int']>;
  questionLikes?: Maybe<Question_Likes_Arr_Rel_Insert_Input>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Question_Replies_Max_Fields = {
  __typename?: 'question_replies_max_fields';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "question_replies" */
export type Question_Replies_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Question_Replies_Min_Fields = {
  __typename?: 'question_replies_min_fields';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "question_replies" */
export type Question_Replies_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "question_replies" */
export type Question_Replies_Mutation_Response = {
  __typename?: 'question_replies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Question_Replies>;
};

/** input type for inserting object relation for remote table "question_replies" */
export type Question_Replies_Obj_Rel_Insert_Input = {
  data: Question_Replies_Insert_Input;
  on_conflict?: Maybe<Question_Replies_On_Conflict>;
};

/** on conflict condition type for table "question_replies" */
export type Question_Replies_On_Conflict = {
  constraint: Question_Replies_Constraint;
  update_columns: Array<Question_Replies_Update_Column>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};

/** ordering options when selecting data from "question_replies" */
export type Question_Replies_Order_By = {
  author?: Maybe<Users_Order_By>;
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  question?: Maybe<Questions_Order_By>;
  questionId?: Maybe<Order_By>;
  questionLikes_aggregate?: Maybe<Question_Likes_Aggregate_Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "question_replies" */
export type Question_Replies_Pk_Columns_Input = {
  /** A unique identifier for the Question Reply */
  id: Scalars['Int'];
};

/** select columns of table "question_replies" */
export enum Question_Replies_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedTs = 'created_ts',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "question_replies" */
export type Question_Replies_Set_Input = {
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Question_Replies_Stddev_Fields = {
  __typename?: 'question_replies_stddev_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "question_replies" */
export type Question_Replies_Stddev_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Question_Replies_Stddev_Pop_Fields = {
  __typename?: 'question_replies_stddev_pop_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "question_replies" */
export type Question_Replies_Stddev_Pop_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Question_Replies_Stddev_Samp_Fields = {
  __typename?: 'question_replies_stddev_samp_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "question_replies" */
export type Question_Replies_Stddev_Samp_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Question_Replies_Sum_Fields = {
  __typename?: 'question_replies_sum_fields';
  authorId?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "question_replies" */
export type Question_Replies_Sum_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
};

/** update columns of table "question_replies" */
export enum Question_Replies_Update_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedTs = 'created_ts',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Question_Replies_Var_Pop_Fields = {
  __typename?: 'question_replies_var_pop_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "question_replies" */
export type Question_Replies_Var_Pop_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Question_Replies_Var_Samp_Fields = {
  __typename?: 'question_replies_var_samp_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "question_replies" */
export type Question_Replies_Var_Samp_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Question_Replies_Variance_Fields = {
  __typename?: 'question_replies_variance_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "question_replies" */
export type Question_Replies_Variance_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  questionId?: Maybe<Order_By>;
};


/** expression to compare columns of type questionorreply. All fields are combined with logical 'AND'. */
export type Questionorreply_Comparison_Exp = {
  _eq?: Maybe<Scalars['questionorreply']>;
  _gt?: Maybe<Scalars['questionorreply']>;
  _gte?: Maybe<Scalars['questionorreply']>;
  _in?: Maybe<Array<Scalars['questionorreply']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['questionorreply']>;
  _lte?: Maybe<Scalars['questionorreply']>;
  _neq?: Maybe<Scalars['questionorreply']>;
  _nin?: Maybe<Array<Scalars['questionorreply']>>;
};

/**
 * Questions are asked by team members about metrics. We record these discussions to provide future explorers with all the context behind a metric.
 *
 *
 * columns and relationships of "questions"
 */
export type Questions = {
  __typename?: 'questions';
  /** An object relationship */
  author: Users;
  authorId: Scalars['Int'];
  /** Timestamp indicating when the `Question` was created. */
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  /** The primary key for the `Question` */
  id: Scalars['Int'];
  /** An object relationship */
  metric?: Maybe<Org_Metrics_Current_View>;
  metricId?: Maybe<Scalars['Int']>;
  metricName: Scalars['String'];
  notified_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  priority: Priorities_Enum;
  /** An array relationship */
  questionDirectedTos: Array<Question_Directed_To>;
  /** An aggregated array relationship */
  questionDirectedTos_aggregate: Question_Directed_To_Aggregate;
  /** An array relationship */
  questionLikes: Array<Question_Likes>;
  /** An aggregated array relationship */
  questionLikes_aggregate: Question_Likes_Aggregate;
  /** An array relationship */
  questionReplies: Array<Question_Replies>;
  /** An aggregated array relationship */
  questionReplies_aggregate: Question_Replies_Aggregate;
  resolved?: Maybe<Scalars['Boolean']>;
  /** Timestamp indicating when the `Question` was resolved. */
  resolvedAt?: Maybe<Scalars['timestamptz']>;
  resolvedBy?: Maybe<Scalars['Int']>;
  resolved_ts?: Maybe<Scalars['Int']>;
  text: Scalars['String'];
  /** Timestamp indicating the last time the `Question` was updated */
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  userByResolvedBy?: Maybe<Users>;
  /** A computed field, executes function "user_has_liked_question" */
  userHasLiked?: Maybe<Scalars['Boolean']>;
};


/**
 * Questions are asked by team members about metrics. We record these discussions to provide future explorers with all the context behind a metric.
 *
 *
 * columns and relationships of "questions"
 */
export type QuestionsQuestionDirectedTosArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/**
 * Questions are asked by team members about metrics. We record these discussions to provide future explorers with all the context behind a metric.
 *
 *
 * columns and relationships of "questions"
 */
export type QuestionsQuestionDirectedTos_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/**
 * Questions are asked by team members about metrics. We record these discussions to provide future explorers with all the context behind a metric.
 *
 *
 * columns and relationships of "questions"
 */
export type QuestionsQuestionLikesArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/**
 * Questions are asked by team members about metrics. We record these discussions to provide future explorers with all the context behind a metric.
 *
 *
 * columns and relationships of "questions"
 */
export type QuestionsQuestionLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/**
 * Questions are asked by team members about metrics. We record these discussions to provide future explorers with all the context behind a metric.
 *
 *
 * columns and relationships of "questions"
 */
export type QuestionsQuestionRepliesArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/**
 * Questions are asked by team members about metrics. We record these discussions to provide future explorers with all the context behind a metric.
 *
 *
 * columns and relationships of "questions"
 */
export type QuestionsQuestionReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  avg?: Maybe<Questions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
  stddev?: Maybe<Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Questions_Sum_Fields>;
  var_pop?: Maybe<Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Questions_Var_Samp_Fields>;
  variance?: Maybe<Questions_Variance_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questions" */
export type Questions_Aggregate_Order_By = {
  avg?: Maybe<Questions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Questions_Max_Order_By>;
  min?: Maybe<Questions_Min_Order_By>;
  stddev?: Maybe<Questions_Stddev_Order_By>;
  stddev_pop?: Maybe<Questions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Questions_Stddev_Samp_Order_By>;
  sum?: Maybe<Questions_Sum_Order_By>;
  var_pop?: Maybe<Questions_Var_Pop_Order_By>;
  var_samp?: Maybe<Questions_Var_Samp_Order_By>;
  variance?: Maybe<Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questions" */
export type Questions_Arr_Rel_Insert_Input = {
  data: Array<Questions_Insert_Input>;
  on_conflict?: Maybe<Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Questions_Avg_Fields = {
  __typename?: 'questions_avg_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  resolvedBy?: Maybe<Scalars['Float']>;
  resolved_ts?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "questions" */
export type Questions_Avg_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questions_Bool_Exp>>>;
  _not?: Maybe<Questions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questions_Bool_Exp>>>;
  author?: Maybe<Users_Bool_Exp>;
  authorId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  created_ts?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  metricName?: Maybe<String_Comparison_Exp>;
  notified_at?: Maybe<Timestamptz_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  priority?: Maybe<Priorities_Enum_Comparison_Exp>;
  questionDirectedTos?: Maybe<Question_Directed_To_Bool_Exp>;
  questionLikes?: Maybe<Question_Likes_Bool_Exp>;
  questionReplies?: Maybe<Question_Replies_Bool_Exp>;
  resolved?: Maybe<Boolean_Comparison_Exp>;
  resolvedAt?: Maybe<Timestamptz_Comparison_Exp>;
  resolvedBy?: Maybe<Int_Comparison_Exp>;
  resolved_ts?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userByResolvedBy?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint */
  QuestionsIdKey = 'questions_id_key',
  /** unique or primary key constraint */
  QuestionsPkey = 'questions_pkey'
}

/** input type for incrementing integer column in table "questions" */
export type Questions_Inc_Input = {
  authorId?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  resolvedBy?: Maybe<Scalars['Int']>;
  resolved_ts?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['Int']>;
  metricName?: Maybe<Scalars['String']>;
  notified_at?: Maybe<Scalars['timestamptz']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  priority?: Maybe<Priorities_Enum>;
  questionDirectedTos?: Maybe<Question_Directed_To_Arr_Rel_Insert_Input>;
  questionLikes?: Maybe<Question_Likes_Arr_Rel_Insert_Input>;
  questionReplies?: Maybe<Question_Replies_Arr_Rel_Insert_Input>;
  resolved?: Maybe<Scalars['Boolean']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
  resolvedBy?: Maybe<Scalars['Int']>;
  resolved_ts?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userByResolvedBy?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metricName?: Maybe<Scalars['String']>;
  notified_at?: Maybe<Scalars['timestamptz']>;
  organizationId?: Maybe<Scalars['Int']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
  resolvedBy?: Maybe<Scalars['Int']>;
  resolved_ts?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "questions" */
export type Questions_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metricName?: Maybe<Order_By>;
  notified_at?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedAt?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metricName?: Maybe<Scalars['String']>;
  notified_at?: Maybe<Scalars['timestamptz']>;
  organizationId?: Maybe<Scalars['Int']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
  resolvedBy?: Maybe<Scalars['Int']>;
  resolved_ts?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "questions" */
export type Questions_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  metricName?: Maybe<Order_By>;
  notified_at?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedAt?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questions>;
};

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input;
  on_conflict?: Maybe<Questions_On_Conflict>;
};

/** on conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns: Array<Questions_Update_Column>;
  where?: Maybe<Questions_Bool_Exp>;
};

/** ordering options when selecting data from "questions" */
export type Questions_Order_By = {
  author?: Maybe<Users_Order_By>;
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  metricName?: Maybe<Order_By>;
  notified_at?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  questionDirectedTos_aggregate?: Maybe<Question_Directed_To_Aggregate_Order_By>;
  questionLikes_aggregate?: Maybe<Question_Likes_Aggregate_Order_By>;
  questionReplies_aggregate?: Maybe<Question_Replies_Aggregate_Order_By>;
  resolved?: Maybe<Order_By>;
  resolvedAt?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userByResolvedBy?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "questions" */
export type Questions_Pk_Columns_Input = {
  /** The primary key for the `Question` */
  id: Scalars['Int'];
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedTs = 'created_ts',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metricName',
  /** column name */
  NotifiedAt = 'notified_at',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Priority = 'priority',
  /** column name */
  Resolved = 'resolved',
  /** column name */
  ResolvedAt = 'resolvedAt',
  /** column name */
  ResolvedBy = 'resolvedBy',
  /** column name */
  ResolvedTs = 'resolved_ts',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metricName?: Maybe<Scalars['String']>;
  notified_at?: Maybe<Scalars['timestamptz']>;
  organizationId?: Maybe<Scalars['Int']>;
  priority?: Maybe<Priorities_Enum>;
  resolved?: Maybe<Scalars['Boolean']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
  resolvedBy?: Maybe<Scalars['Int']>;
  resolved_ts?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Questions_Stddev_Fields = {
  __typename?: 'questions_stddev_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  resolvedBy?: Maybe<Scalars['Float']>;
  resolved_ts?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "questions" */
export type Questions_Stddev_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questions_Stddev_Pop_Fields = {
  __typename?: 'questions_stddev_pop_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  resolvedBy?: Maybe<Scalars['Float']>;
  resolved_ts?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "questions" */
export type Questions_Stddev_Pop_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questions_Stddev_Samp_Fields = {
  __typename?: 'questions_stddev_samp_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  resolvedBy?: Maybe<Scalars['Float']>;
  resolved_ts?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "questions" */
export type Questions_Stddev_Samp_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Questions_Sum_Fields = {
  __typename?: 'questions_sum_fields';
  authorId?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  resolvedBy?: Maybe<Scalars['Int']>;
  resolved_ts?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "questions" */
export type Questions_Sum_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedTs = 'created_ts',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  MetricName = 'metricName',
  /** column name */
  NotifiedAt = 'notified_at',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Priority = 'priority',
  /** column name */
  Resolved = 'resolved',
  /** column name */
  ResolvedAt = 'resolvedAt',
  /** column name */
  ResolvedBy = 'resolvedBy',
  /** column name */
  ResolvedTs = 'resolved_ts',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Questions_Var_Pop_Fields = {
  __typename?: 'questions_var_pop_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  resolvedBy?: Maybe<Scalars['Float']>;
  resolved_ts?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "questions" */
export type Questions_Var_Pop_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questions_Var_Samp_Fields = {
  __typename?: 'questions_var_samp_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  resolvedBy?: Maybe<Scalars['Float']>;
  resolved_ts?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "questions" */
export type Questions_Var_Samp_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Questions_Variance_Fields = {
  __typename?: 'questions_variance_fields';
  authorId?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  resolvedBy?: Maybe<Scalars['Float']>;
  resolved_ts?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "questions" */
export type Questions_Variance_Order_By = {
  authorId?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  resolvedBy?: Maybe<Order_By>;
  resolved_ts?: Maybe<Order_By>;
};

/**
 * Saved Queries are like "Presets" that save the state of a query for reusability and reporting.
 *
 *
 * columns and relationships of "saved_queries"
 */
export type Saved_Queries = {
  __typename?: 'saved_queries';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** User ID for the creator of the query */
  createdBy: Scalars['Int'];
  /** An object relationship */
  createdByUser: Users;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An array relationship */
  metrics: Array<Saved_Query_Metrics>;
  /** An aggregated array relationship */
  metrics_aggregate: Saved_Query_Metrics_Aggregate;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  ownerTeam?: Maybe<Teams>;
  /** Team ID for the team that owns the query if a team owns the query */
  ownerTeamId?: Maybe<Scalars['Int']>;
  /** JSON representative of the full query */
  serializedQuery: Scalars['json'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/**
 * Saved Queries are like "Presets" that save the state of a query for reusability and reporting.
 *
 *
 * columns and relationships of "saved_queries"
 */
export type Saved_QueriesMetricsArgs = {
  distinct_on?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Query_Metrics_Order_By>>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};


/**
 * Saved Queries are like "Presets" that save the state of a query for reusability and reporting.
 *
 *
 * columns and relationships of "saved_queries"
 */
export type Saved_QueriesMetrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Query_Metrics_Order_By>>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};


/**
 * Saved Queries are like "Presets" that save the state of a query for reusability and reporting.
 *
 *
 * columns and relationships of "saved_queries"
 */
export type Saved_QueriesSerializedQueryArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "saved_queries" */
export type Saved_Queries_Aggregate = {
  __typename?: 'saved_queries_aggregate';
  aggregate?: Maybe<Saved_Queries_Aggregate_Fields>;
  nodes: Array<Saved_Queries>;
};

/** aggregate fields of "saved_queries" */
export type Saved_Queries_Aggregate_Fields = {
  __typename?: 'saved_queries_aggregate_fields';
  avg?: Maybe<Saved_Queries_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Saved_Queries_Max_Fields>;
  min?: Maybe<Saved_Queries_Min_Fields>;
  stddev?: Maybe<Saved_Queries_Stddev_Fields>;
  stddev_pop?: Maybe<Saved_Queries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Saved_Queries_Stddev_Samp_Fields>;
  sum?: Maybe<Saved_Queries_Sum_Fields>;
  var_pop?: Maybe<Saved_Queries_Var_Pop_Fields>;
  var_samp?: Maybe<Saved_Queries_Var_Samp_Fields>;
  variance?: Maybe<Saved_Queries_Variance_Fields>;
};


/** aggregate fields of "saved_queries" */
export type Saved_Queries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Saved_Queries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "saved_queries" */
export type Saved_Queries_Aggregate_Order_By = {
  avg?: Maybe<Saved_Queries_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Saved_Queries_Max_Order_By>;
  min?: Maybe<Saved_Queries_Min_Order_By>;
  stddev?: Maybe<Saved_Queries_Stddev_Order_By>;
  stddev_pop?: Maybe<Saved_Queries_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Saved_Queries_Stddev_Samp_Order_By>;
  sum?: Maybe<Saved_Queries_Sum_Order_By>;
  var_pop?: Maybe<Saved_Queries_Var_Pop_Order_By>;
  var_samp?: Maybe<Saved_Queries_Var_Samp_Order_By>;
  variance?: Maybe<Saved_Queries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "saved_queries" */
export type Saved_Queries_Arr_Rel_Insert_Input = {
  data: Array<Saved_Queries_Insert_Input>;
  on_conflict?: Maybe<Saved_Queries_On_Conflict>;
};

/** aggregate avg on columns */
export type Saved_Queries_Avg_Fields = {
  __typename?: 'saved_queries_avg_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "saved_queries" */
export type Saved_Queries_Avg_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "saved_queries". All fields are combined with a logical 'AND'. */
export type Saved_Queries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Saved_Queries_Bool_Exp>>>;
  _not?: Maybe<Saved_Queries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Saved_Queries_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<Int_Comparison_Exp>;
  createdByUser?: Maybe<Users_Bool_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metrics?: Maybe<Saved_Query_Metrics_Bool_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  ownerTeam?: Maybe<Teams_Bool_Exp>;
  ownerTeamId?: Maybe<Int_Comparison_Exp>;
  serializedQuery?: Maybe<Json_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "saved_queries" */
export enum Saved_Queries_Constraint {
  /** unique or primary key constraint */
  SavedQueriesPkey = 'saved_queries_pkey'
}

/** input type for incrementing integer column in table "saved_queries" */
export type Saved_Queries_Inc_Input = {
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "saved_queries" */
export type Saved_Queries_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdByUser?: Maybe<Users_Obj_Rel_Insert_Input>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Saved_Query_Metrics_Arr_Rel_Insert_Input>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeam?: Maybe<Teams_Obj_Rel_Insert_Input>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  serializedQuery?: Maybe<Scalars['json']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Saved_Queries_Max_Fields = {
  __typename?: 'saved_queries_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "saved_queries" */
export type Saved_Queries_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Saved_Queries_Min_Fields = {
  __typename?: 'saved_queries_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "saved_queries" */
export type Saved_Queries_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "saved_queries" */
export type Saved_Queries_Mutation_Response = {
  __typename?: 'saved_queries_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Saved_Queries>;
};

/** input type for inserting object relation for remote table "saved_queries" */
export type Saved_Queries_Obj_Rel_Insert_Input = {
  data: Saved_Queries_Insert_Input;
  on_conflict?: Maybe<Saved_Queries_On_Conflict>;
};

/** on conflict condition type for table "saved_queries" */
export type Saved_Queries_On_Conflict = {
  constraint: Saved_Queries_Constraint;
  update_columns: Array<Saved_Queries_Update_Column>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};

/** ordering options when selecting data from "saved_queries" */
export type Saved_Queries_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  createdByUser?: Maybe<Users_Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metrics_aggregate?: Maybe<Saved_Query_Metrics_Aggregate_Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeam?: Maybe<Teams_Order_By>;
  ownerTeamId?: Maybe<Order_By>;
  serializedQuery?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "saved_queries" */
export type Saved_Queries_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "saved_queries" */
export enum Saved_Queries_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  OwnerTeamId = 'ownerTeamId',
  /** column name */
  SerializedQuery = 'serializedQuery',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "saved_queries" */
export type Saved_Queries_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  serializedQuery?: Maybe<Scalars['json']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Saved_Queries_Stddev_Fields = {
  __typename?: 'saved_queries_stddev_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "saved_queries" */
export type Saved_Queries_Stddev_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Saved_Queries_Stddev_Pop_Fields = {
  __typename?: 'saved_queries_stddev_pop_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "saved_queries" */
export type Saved_Queries_Stddev_Pop_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Saved_Queries_Stddev_Samp_Fields = {
  __typename?: 'saved_queries_stddev_samp_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "saved_queries" */
export type Saved_Queries_Stddev_Samp_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Saved_Queries_Sum_Fields = {
  __typename?: 'saved_queries_sum_fields';
  createdBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "saved_queries" */
export type Saved_Queries_Sum_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
};

/** update columns of table "saved_queries" */
export enum Saved_Queries_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  OwnerTeamId = 'ownerTeamId',
  /** column name */
  SerializedQuery = 'serializedQuery',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Saved_Queries_Var_Pop_Fields = {
  __typename?: 'saved_queries_var_pop_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "saved_queries" */
export type Saved_Queries_Var_Pop_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Saved_Queries_Var_Samp_Fields = {
  __typename?: 'saved_queries_var_samp_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "saved_queries" */
export type Saved_Queries_Var_Samp_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Saved_Queries_Variance_Fields = {
  __typename?: 'saved_queries_variance_fields';
  createdBy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  ownerTeamId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "saved_queries" */
export type Saved_Queries_Variance_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  ownerTeamId?: Maybe<Order_By>;
};

/**
 * Join Table linking Saved Queries and the Metrics they include
 *
 *
 * columns and relationships of "saved_query_metrics"
 */
export type Saved_Query_Metrics = {
  __typename?: 'saved_query_metrics';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  metric: Org_Metrics_Current_View;
  metricId: Scalars['Int'];
  /** An object relationship */
  savedQuery: Saved_Queries;
  savedQueryId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "saved_query_metrics" */
export type Saved_Query_Metrics_Aggregate = {
  __typename?: 'saved_query_metrics_aggregate';
  aggregate?: Maybe<Saved_Query_Metrics_Aggregate_Fields>;
  nodes: Array<Saved_Query_Metrics>;
};

/** aggregate fields of "saved_query_metrics" */
export type Saved_Query_Metrics_Aggregate_Fields = {
  __typename?: 'saved_query_metrics_aggregate_fields';
  avg?: Maybe<Saved_Query_Metrics_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Saved_Query_Metrics_Max_Fields>;
  min?: Maybe<Saved_Query_Metrics_Min_Fields>;
  stddev?: Maybe<Saved_Query_Metrics_Stddev_Fields>;
  stddev_pop?: Maybe<Saved_Query_Metrics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Saved_Query_Metrics_Stddev_Samp_Fields>;
  sum?: Maybe<Saved_Query_Metrics_Sum_Fields>;
  var_pop?: Maybe<Saved_Query_Metrics_Var_Pop_Fields>;
  var_samp?: Maybe<Saved_Query_Metrics_Var_Samp_Fields>;
  variance?: Maybe<Saved_Query_Metrics_Variance_Fields>;
};


/** aggregate fields of "saved_query_metrics" */
export type Saved_Query_Metrics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "saved_query_metrics" */
export type Saved_Query_Metrics_Aggregate_Order_By = {
  avg?: Maybe<Saved_Query_Metrics_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Saved_Query_Metrics_Max_Order_By>;
  min?: Maybe<Saved_Query_Metrics_Min_Order_By>;
  stddev?: Maybe<Saved_Query_Metrics_Stddev_Order_By>;
  stddev_pop?: Maybe<Saved_Query_Metrics_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Saved_Query_Metrics_Stddev_Samp_Order_By>;
  sum?: Maybe<Saved_Query_Metrics_Sum_Order_By>;
  var_pop?: Maybe<Saved_Query_Metrics_Var_Pop_Order_By>;
  var_samp?: Maybe<Saved_Query_Metrics_Var_Samp_Order_By>;
  variance?: Maybe<Saved_Query_Metrics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "saved_query_metrics" */
export type Saved_Query_Metrics_Arr_Rel_Insert_Input = {
  data: Array<Saved_Query_Metrics_Insert_Input>;
  on_conflict?: Maybe<Saved_Query_Metrics_On_Conflict>;
};

/** aggregate avg on columns */
export type Saved_Query_Metrics_Avg_Fields = {
  __typename?: 'saved_query_metrics_avg_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  savedQueryId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Avg_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "saved_query_metrics". All fields are combined with a logical 'AND'. */
export type Saved_Query_Metrics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Saved_Query_Metrics_Bool_Exp>>>;
  _not?: Maybe<Saved_Query_Metrics_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Saved_Query_Metrics_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metric?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
  metricId?: Maybe<Int_Comparison_Exp>;
  savedQuery?: Maybe<Saved_Queries_Bool_Exp>;
  savedQueryId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "saved_query_metrics" */
export enum Saved_Query_Metrics_Constraint {
  /** unique or primary key constraint */
  SavedQueryMetricsMetricIdSavedQueryIdKey = 'saved_query_metrics_metric_id_saved_query_id_key',
  /** unique or primary key constraint */
  SavedQueryMetricsPkey = 'saved_query_metrics_pkey'
}

/** input type for incrementing integer column in table "saved_query_metrics" */
export type Saved_Query_Metrics_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  savedQueryId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "saved_query_metrics" */
export type Saved_Query_Metrics_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metric?: Maybe<Org_Metrics_Current_View_Obj_Rel_Insert_Input>;
  metricId?: Maybe<Scalars['Int']>;
  savedQuery?: Maybe<Saved_Queries_Obj_Rel_Insert_Input>;
  savedQueryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Saved_Query_Metrics_Max_Fields = {
  __typename?: 'saved_query_metrics_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  savedQueryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Saved_Query_Metrics_Min_Fields = {
  __typename?: 'saved_query_metrics_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  savedQueryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "saved_query_metrics" */
export type Saved_Query_Metrics_Mutation_Response = {
  __typename?: 'saved_query_metrics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Saved_Query_Metrics>;
};

/** input type for inserting object relation for remote table "saved_query_metrics" */
export type Saved_Query_Metrics_Obj_Rel_Insert_Input = {
  data: Saved_Query_Metrics_Insert_Input;
  on_conflict?: Maybe<Saved_Query_Metrics_On_Conflict>;
};

/** on conflict condition type for table "saved_query_metrics" */
export type Saved_Query_Metrics_On_Conflict = {
  constraint: Saved_Query_Metrics_Constraint;
  update_columns: Array<Saved_Query_Metrics_Update_Column>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};

/** ordering options when selecting data from "saved_query_metrics" */
export type Saved_Query_Metrics_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metric?: Maybe<Org_Metrics_Current_View_Order_By>;
  metricId?: Maybe<Order_By>;
  savedQuery?: Maybe<Saved_Queries_Order_By>;
  savedQueryId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "saved_query_metrics" */
export type Saved_Query_Metrics_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "saved_query_metrics" */
export enum Saved_Query_Metrics_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  SavedQueryId = 'savedQueryId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "saved_query_metrics" */
export type Saved_Query_Metrics_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  savedQueryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Saved_Query_Metrics_Stddev_Fields = {
  __typename?: 'saved_query_metrics_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  savedQueryId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Saved_Query_Metrics_Stddev_Pop_Fields = {
  __typename?: 'saved_query_metrics_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  savedQueryId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Saved_Query_Metrics_Stddev_Samp_Fields = {
  __typename?: 'saved_query_metrics_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  savedQueryId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Saved_Query_Metrics_Sum_Fields = {
  __typename?: 'saved_query_metrics_sum_fields';
  id?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  savedQueryId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Sum_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
};

/** update columns of table "saved_query_metrics" */
export enum Saved_Query_Metrics_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MetricId = 'metricId',
  /** column name */
  SavedQueryId = 'savedQueryId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Saved_Query_Metrics_Var_Pop_Fields = {
  __typename?: 'saved_query_metrics_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  savedQueryId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Saved_Query_Metrics_Var_Samp_Fields = {
  __typename?: 'saved_query_metrics_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  savedQueryId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Saved_Query_Metrics_Variance_Fields = {
  __typename?: 'saved_query_metrics_variance_fields';
  id?: Maybe<Scalars['Float']>;
  metricId?: Maybe<Scalars['Float']>;
  savedQueryId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "saved_query_metrics" */
export type Saved_Query_Metrics_Variance_Order_By = {
  id?: Maybe<Order_By>;
  metricId?: Maybe<Order_By>;
  savedQueryId?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "annotations" using primary key columns */
  annotation?: Maybe<Annotations>;
  /** fetch data from the table: "annotations" */
  annotations: Array<Annotations>;
  /** fetch aggregated fields from the table: "annotations" */
  annotationsAggregate: Annotations_Aggregate;
  /** fetch data from the table: "api_keys" using primary key columns */
  apiKey?: Maybe<Api_Keys>;
  /** fetch data from the table: "api_keys" */
  apiKeys: Array<Api_Keys>;
  /** fetch aggregated fields from the table: "api_keys" */
  apiKeysAggregate: Api_Keys_Aggregate;
  /** fetch data from the table: "branch_metadatas" */
  branch_metadatas: Array<Branch_Metadatas>;
  /** fetch aggregated fields from the table: "branch_metadatas" */
  branch_metadatas_aggregate: Branch_Metadatas_Aggregate;
  /** fetch data from the table: "branch_metadatas" using primary key columns */
  branch_metadatas_by_pk?: Maybe<Branch_Metadatas>;
  /** fetch data from the table: "dashboards" using primary key columns */
  dashboard?: Maybe<Dashboards>;
  /** fetch data from the table: "dashboard_item_configs" using primary key columns */
  dashboardItemConfig?: Maybe<Dashboard_Item_Configs>;
  /** fetch data from the table: "dashboard_item_configs" */
  dashboardItemConfigs: Array<Dashboard_Item_Configs>;
  /** fetch aggregated fields from the table: "dashboard_item_configs" */
  dashboardItemConfigsAggregate: Dashboard_Item_Configs_Aggregate;
  /** fetch data from the table: "dashboard_layouts" using primary key columns */
  dashboardLayout?: Maybe<Dashboard_Layouts>;
  /** fetch data from the table: "dashboard_layouts" */
  dashboardLayouts: Array<Dashboard_Layouts>;
  /** fetch data from the table: "dashboard_renderable_types" using primary key columns */
  dashboardRenderableType?: Maybe<Dashboard_Renderable_Types>;
  /** fetch data from the table: "dashboard_renderable_types" */
  dashboardRenderableTypes: Array<Dashboard_Renderable_Types>;
  /** fetch data from the table: "dashboard_sections" using primary key columns */
  dashboardSection?: Maybe<Dashboard_Sections>;
  /** fetch data from the table: "dashboard_section_types" using primary key columns */
  dashboardSectionType?: Maybe<Dashboard_Section_Types>;
  /** fetch data from the table: "dashboard_section_types" */
  dashboardSectionTypes: Array<Dashboard_Section_Types>;
  /** fetch data from the table: "dashboard_sections" */
  dashboardSections: Array<Dashboard_Sections>;
  /** fetch aggregated fields from the table: "dashboard_sections" */
  dashboardSectionsAggregate: Dashboard_Sections_Aggregate;
  /** fetch aggregated fields from the table: "dashboard_layouts" */
  dashboard_layouts_aggregate: Dashboard_Layouts_Aggregate;
  /** fetch aggregated fields from the table: "dashboard_renderable_types" */
  dashboard_renderable_types_aggregate: Dashboard_Renderable_Types_Aggregate;
  /** fetch aggregated fields from the table: "dashboard_section_types" */
  dashboard_section_types_aggregate: Dashboard_Section_Types_Aggregate;
  /** fetch data from the table: "dashboards" */
  dashboards: Array<Dashboards>;
  /** fetch aggregated fields from the table: "dashboards" */
  dashboardsAggregate: Dashboards_Aggregate;
  /** fetch data from the table: "org_data_sources" using primary key columns */
  dataSource?: Maybe<Org_Data_Sources>;
  /** fetch data from the table: "data_source_versions" using primary key columns */
  dataSourceVersion?: Maybe<Data_Source_Versions>;
  /** fetch data from the table: "data_source_versions" */
  dataSourceVersions: Array<Data_Source_Versions>;
  /** fetch aggregated fields from the table: "data_source_versions" */
  dataSourceVersionsAggregate: Data_Source_Versions_Aggregate;
  /** fetch data from the table: "org_data_sources" */
  dataSources: Array<Org_Data_Sources>;
  /** fetch aggregated fields from the table: "org_data_sources" */
  dataSourcesAggregate: Org_Data_Sources_Aggregate;
  /** fetch data from the table: "dw_engines" */
  dw_engines: Array<Dw_Engines>;
  /** fetch aggregated fields from the table: "dw_engines" */
  dw_engines_aggregate: Dw_Engines_Aggregate;
  /** fetch data from the table: "dw_engines" using primary key columns */
  dw_engines_by_pk?: Maybe<Dw_Engines>;
  /** fetch data from the table: "features" using primary key columns */
  feature?: Maybe<Features>;
  /** fetch data from the table: "features" */
  features: Array<Features>;
  /** fetch aggregated fields from the table: "features" */
  featuresAggregate: Features_Aggregate;
  /** execute function "me" which returns "users" */
  me: Array<Users>;
  /** execute function "me" and query aggregates on result of table type "users" */
  me_aggregate: Users_Aggregate;
  /** fetch data from the table: "metric_annotations" using primary key columns */
  metricAnnotation?: Maybe<Metric_Annotations>;
  /** fetch data from the table: "metric_annotations" */
  metricAnnotations: Array<Metric_Annotations>;
  /** fetch aggregated fields from the table: "metric_annotations" */
  metricAnnotationsAggregate: Metric_Annotations_Aggregate;
  /** fetch data from the table: "metric_approvals" using primary key columns */
  metricApproval?: Maybe<Metric_Approvals>;
  /** fetch data from the table: "metric_approvals" */
  metricApprovals: Array<Metric_Approvals>;
  /** fetch aggregated fields from the table: "metric_approvals" */
  metricApprovalsAggregate: Metric_Approvals_Aggregate;
  /** fetch data from the table: "org_metrics_current_view" using primary key columns */
  metricByIdTemp?: Maybe<Org_Metrics_Current_View>;
  /** fetch data from the table: "metric_collections" using primary key columns */
  metricCollection?: Maybe<Metric_Collections>;
  /** fetch data from the table: "metric_collection_metrics" using primary key columns */
  metricCollectionMetric?: Maybe<Metric_Collection_Metrics>;
  /** fetch data from the table: "metric_collection_metrics" */
  metricCollectionMetrics: Array<Metric_Collection_Metrics>;
  /** fetch aggregated fields from the table: "metric_collection_metrics" */
  metricCollectionMetricsAggregate: Metric_Collection_Metrics_Aggregate;
  /** fetch data from the table: "metric_collection_view" using primary key columns */
  metricCollectionView?: Maybe<Metric_Collection_View>;
  /** fetch aggregated fields from the table: "metric_collection_view" */
  metricCollectionViewAggregate: Metric_Collection_View_Aggregate;
  /** fetch data from the table: "metric_collection_view" */
  metricCollectionViews: Array<Metric_Collection_View>;
  /** fetch data from the table: "metric_collections" */
  metricCollections: Array<Metric_Collections>;
  /** fetch aggregated fields from the table: "metric_collections" */
  metricCollectionsAggregate: Metric_Collections_Aggregate;
  /** fetch data from the table: "metric_current_description" */
  metricCurrentDescriptions: Array<Metric_Current_Description>;
  /** fetch data from the table: "metric_descriptions" using primary key columns */
  metricDescription?: Maybe<Metric_Descriptions>;
  /** fetch data from the table: "metric_descriptions" */
  metricDescriptions: Array<Metric_Descriptions>;
  /** fetch aggregated fields from the table: "metric_descriptions" */
  metricDescriptionsAggregate: Metric_Descriptions_Aggregate;
  /** fetch data from the table: "metric_team_owners" using primary key columns */
  metricTeamOwner?: Maybe<Metric_Team_Owners>;
  /** fetch data from the table: "metric_team_owners" */
  metricTeamOwners: Array<Metric_Team_Owners>;
  /** fetch aggregated fields from the table: "metric_team_owners" */
  metricTeamOwnersAggregate: Metric_Team_Owners_Aggregate;
  /** fetch data from the table: "metric_user_owners" using primary key columns */
  metricUserOwner?: Maybe<Metric_User_Owners>;
  /** fetch data from the table: "metric_user_owners" */
  metricUserOwners: Array<Metric_User_Owners>;
  /** fetch aggregated fields from the table: "metric_user_owners" */
  metricUserOwnersAggregate: Metric_User_Owners_Aggregate;
  /** fetch data from the table: "metric_versions" using primary key columns */
  metricVersion?: Maybe<Metric_Versions>;
  /** fetch data from the table: "metric_versions" */
  metricVersions: Array<Metric_Versions>;
  /** fetch aggregated fields from the table: "metric_versions" */
  metricVersionsAggregate: Metric_Versions_Aggregate;
  /** fetch data from the table: "metric_view" */
  metricViews: Array<Metric_View>;
  /** fetch aggregated fields from the table: "metric_view" */
  metricViewsAggregate: Metric_View_Aggregate;
  /** fetch aggregated fields from the table: "metric_current_description" */
  metric_current_description_aggregate: Metric_Current_Description_Aggregate;
  /** fetch data from the table: "metric_lineage_data_sources" */
  metric_lineage_data_sources: Array<Metric_Lineage_Data_Sources>;
  /** fetch aggregated fields from the table: "metric_lineage_data_sources" */
  metric_lineage_data_sources_aggregate: Metric_Lineage_Data_Sources_Aggregate;
  /** fetch data from the table: "metric_lineage_data_sources" using primary key columns */
  metric_lineage_data_sources_by_pk?: Maybe<Metric_Lineage_Data_Sources>;
  /** fetch data from the table: "org_metrics_current_view" */
  metrics: Array<Org_Metrics_Current_View>;
  /** fetch aggregated fields from the table: "org_metrics_current_view" */
  metricsAggregate: Org_Metrics_Current_View_Aggregate;
  /** fetch data from the table: "models" using primary key columns */
  model?: Maybe<Models>;
  /** fetch data from the table: "model_data_sources" using primary key columns */
  modelDataSource?: Maybe<Model_Data_Sources>;
  /** fetch data from the table: "model_data_sources" */
  modelDataSources: Array<Model_Data_Sources>;
  /** fetch aggregated fields from the table: "model_data_sources" */
  modelDataSourcesAggregate: Model_Data_Sources_Aggregate;
  /** fetch data from the table: "model_metrics" using primary key columns */
  modelMetric?: Maybe<Model_Metrics>;
  /** fetch data from the table: "model_metrics" */
  modelMetrics: Array<Model_Metrics>;
  /** fetch aggregated fields from the table: "model_metrics" */
  modelMetricsAggregate: Model_Metrics_Aggregate;
  /** fetch data from the table: "model_current" */
  model_current: Array<Model_Current>;
  /** fetch aggregated fields from the table: "model_current" */
  model_current_aggregate: Model_Current_Aggregate;
  /** fetch data from the table: "models" */
  models: Array<Models>;
  /** fetch aggregated fields from the table: "models" */
  modelsAggregate: Models_Aggregate;
  /** fetch data from the table: "mql_heartbeats" using primary key columns */
  mqlHeartbeat?: Maybe<Mql_Heartbeats>;
  /** fetch data from the table: "mql_heartbeats" */
  mqlHeartbeats: Array<Mql_Heartbeats>;
  /** fetch aggregated fields from the table: "mql_heartbeats" */
  mqlHeartbeatsAggregate: Mql_Heartbeats_Aggregate;
  /** execute function "my_most_viewed_metrics" which returns "org_metrics_current_view" */
  my_most_viewed_metrics: Array<Org_Metrics_Current_View>;
  /** execute function "my_most_viewed_metrics" and query aggregates on result of table type "org_metrics_current_view" */
  my_most_viewed_metrics_aggregate: Org_Metrics_Current_View_Aggregate;
  /** execute function "my_org" which returns "organizations" */
  my_org: Array<Organizations>;
  /** execute function "my_org" and query aggregates on result of table type "organizations" */
  my_org_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "org_mql_servers" using primary key columns */
  orgMqlServer?: Maybe<Org_Mql_Servers>;
  /** fetch data from the table: "org_mql_servers" */
  orgMqlServers: Array<Org_Mql_Servers>;
  /** fetch aggregated fields from the table: "org_mql_servers" */
  orgMqlServersAggregate: Org_Mql_Servers_Aggregate;
  /** fetch data from the table: "org_mql_server_logs_types" */
  org_mql_server_logs_types: Array<Org_Mql_Server_Logs_Types>;
  /** fetch aggregated fields from the table: "org_mql_server_logs_types" */
  org_mql_server_logs_types_aggregate: Org_Mql_Server_Logs_Types_Aggregate;
  /** fetch data from the table: "org_mql_server_logs_types" using primary key columns */
  org_mql_server_logs_types_by_pk?: Maybe<Org_Mql_Server_Logs_Types>;
  /** fetch data from the table: "organizations" using primary key columns */
  organization?: Maybe<Organizations>;
  /** fetch data from the table: "organization_features" using primary key columns */
  organizationFeature?: Maybe<Organization_Features>;
  /** fetch data from the table: "organization_features" */
  organizationFeatures: Array<Organization_Features>;
  /** fetch aggregated fields from the table: "organization_features" */
  organizationFeaturesAggregate: Organization_Features_Aggregate;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizationsAggregate: Organizations_Aggregate;
  /** fetch data from the table: "priorities" */
  priorities: Array<Priorities>;
  /** fetch aggregated fields from the table: "priorities" */
  priorities_aggregate: Priorities_Aggregate;
  /** fetch data from the table: "priorities" using primary key columns */
  priorities_by_pk?: Maybe<Priorities>;
  /** fetch data from the table: "questions" using primary key columns */
  question?: Maybe<Questions>;
  /** fetch data from the table: "question_directed_to" */
  questionDirectedTo: Array<Question_Directed_To>;
  /** fetch aggregated fields from the table: "question_directed_to" */
  questionDirectedToAggregate: Question_Directed_To_Aggregate;
  /** fetch data from the table: "question_directed_to" using primary key columns */
  questionDirectedToByPK?: Maybe<Question_Directed_To>;
  /** fetch data from the table: "question_likes" using primary key columns */
  questionLike?: Maybe<Question_Likes>;
  /** fetch data from the table: "question_likes" */
  questionLikes: Array<Question_Likes>;
  /** fetch aggregated fields from the table: "question_likes" */
  questionLikesAggregate: Question_Likes_Aggregate;
  /** fetch data from the table: "question_replies" */
  questionReplies: Array<Question_Replies>;
  /** fetch aggregated fields from the table: "question_replies" */
  questionRepliesAggregate: Question_Replies_Aggregate;
  /** fetch data from the table: "question_replies" using primary key columns */
  questionReply?: Maybe<Question_Replies>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questionsAggregate: Questions_Aggregate;
  /** fetch data from the table: "saved_queries" */
  savedQueries: Array<Saved_Queries>;
  /** fetch aggregated fields from the table: "saved_queries" */
  savedQueriesAggregate: Saved_Queries_Aggregate;
  /** fetch data from the table: "saved_queries" using primary key columns */
  savedQuery?: Maybe<Saved_Queries>;
  /** fetch data from the table: "saved_query_metrics" using primary key columns */
  savedQueryMetric?: Maybe<Saved_Query_Metrics>;
  /** fetch data from the table: "saved_query_metrics" */
  savedQueryMetrics: Array<Saved_Query_Metrics>;
  /** fetch aggregated fields from the table: "saved_query_metrics" */
  savedQueryMetricsAggregate: Saved_Query_Metrics_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  team?: Maybe<Teams>;
  /** fetch data from the table: "team_dashboards" using primary key columns */
  teamDashboard?: Maybe<Team_Dashboards>;
  /** fetch data from the table: "team_dashboards" */
  teamDashboards: Array<Team_Dashboards>;
  /** fetch aggregated fields from the table: "team_dashboards" */
  teamDashboardsAggregate: Team_Dashboards_Aggregate;
  /** fetch data from the table: "team_members" using primary key columns */
  teamMember?: Maybe<Team_Members>;
  /** fetch data from the table: "team_members" */
  teamMembers: Array<Team_Members>;
  /** fetch aggregated fields from the table: "team_members" */
  teamMembersAggregate: Team_Members_Aggregate;
  /** fetch aggregated fields from the table: "team_views" */
  teamViewsAggregate: Team_Views_Aggregate;
  /** fetch data from the table: "team_page_theme_colors" */
  team_page_theme_colors: Array<Team_Page_Theme_Colors>;
  /** fetch aggregated fields from the table: "team_page_theme_colors" */
  team_page_theme_colors_aggregate: Team_Page_Theme_Colors_Aggregate;
  /** fetch data from the table: "team_page_theme_colors" using primary key columns */
  team_page_theme_colors_by_pk?: Maybe<Team_Page_Theme_Colors>;
  /** fetch data from the table: "team_views" */
  team_views: Array<Team_Views>;
  /** fetch data from the table: "team_views" using primary key columns */
  team_views_by_pk?: Maybe<Team_Views>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teamsAggregate: Teams_Aggregate;
  /** fetch data from the table: "unsubscribes" */
  unsubscribes: Array<Unsubscribes>;
  /** fetch aggregated fields from the table: "unsubscribes" */
  unsubscribes_aggregate: Unsubscribes_Aggregate;
  /** fetch data from the table: "unsubscribes" using primary key columns */
  unsubscribes_by_pk?: Maybe<Unsubscribes>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_dashboards" using primary key columns */
  userDashboard?: Maybe<User_Dashboards>;
  /** fetch data from the table: "user_dashboards" */
  userDashboards: Array<User_Dashboards>;
  /** fetch aggregated fields from the table: "user_dashboards" */
  userDashboardsAggregate: User_Dashboards_Aggregate;
  /** fetch data from the table: "user_features" using primary key columns */
  userFeature?: Maybe<User_Features>;
  /** fetch data from the table: "user_features" */
  userFeatures: Array<User_Features>;
  /** fetch aggregated fields from the table: "user_features" */
  userFeaturesAggregate: User_Features_Aggregate;
  /** fetch data from the table: "user_prefs" using primary key columns */
  userPreference?: Maybe<User_Prefs>;
  /** fetch data from the table: "user_prefs" */
  userPreferences: Array<User_Prefs>;
  /** fetch aggregated fields from the table: "user_prefs" */
  userPreferencesAggregate: User_Prefs_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  userRole?: Maybe<User_Roles>;
  /** fetch data from the table: "user_roles" */
  userRoles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  userRolesAggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_role_types" */
  user_role_types: Array<User_Role_Types>;
  /** fetch aggregated fields from the table: "user_role_types" */
  user_role_types_aggregate: User_Role_Types_Aggregate;
  /** fetch data from the table: "user_role_types" using primary key columns */
  user_role_types_by_pk?: Maybe<User_Role_Types>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: Users_Aggregate;
};


/** subscription root */
export type Subscription_RootAnnotationArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnnotationsAggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApiKeyArgs = {
  prefix: Scalars['String'];
};


/** subscription root */
export type Subscription_RootApiKeysArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootApiKeysAggregateArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBranch_MetadatasArgs = {
  distinct_on?: Maybe<Array<Branch_Metadatas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Metadatas_Order_By>>;
  where?: Maybe<Branch_Metadatas_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBranch_Metadatas_AggregateArgs = {
  distinct_on?: Maybe<Array<Branch_Metadatas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Metadatas_Order_By>>;
  where?: Maybe<Branch_Metadatas_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBranch_Metadatas_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDashboardArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDashboardItemConfigArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDashboardItemConfigsArgs = {
  distinct_on?: Maybe<Array<Dashboard_Item_Configs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Item_Configs_Order_By>>;
  where?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboardItemConfigsAggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Item_Configs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Item_Configs_Order_By>>;
  where?: Maybe<Dashboard_Item_Configs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboardLayoutArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootDashboardLayoutsArgs = {
  distinct_on?: Maybe<Array<Dashboard_Layouts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Layouts_Order_By>>;
  where?: Maybe<Dashboard_Layouts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboardRenderableTypeArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootDashboardRenderableTypesArgs = {
  distinct_on?: Maybe<Array<Dashboard_Renderable_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Renderable_Types_Order_By>>;
  where?: Maybe<Dashboard_Renderable_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboardSectionArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDashboardSectionTypeArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootDashboardSectionTypesArgs = {
  distinct_on?: Maybe<Array<Dashboard_Section_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Section_Types_Order_By>>;
  where?: Maybe<Dashboard_Section_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboardSectionsArgs = {
  distinct_on?: Maybe<Array<Dashboard_Sections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Sections_Order_By>>;
  where?: Maybe<Dashboard_Sections_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboardSectionsAggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Sections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Sections_Order_By>>;
  where?: Maybe<Dashboard_Sections_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboard_Layouts_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Layouts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Layouts_Order_By>>;
  where?: Maybe<Dashboard_Layouts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboard_Renderable_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Renderable_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Renderable_Types_Order_By>>;
  where?: Maybe<Dashboard_Renderable_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboard_Section_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Dashboard_Section_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboard_Section_Types_Order_By>>;
  where?: Maybe<Dashboard_Section_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboardsArgs = {
  distinct_on?: Maybe<Array<Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboards_Order_By>>;
  where?: Maybe<Dashboards_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDashboardsAggregateArgs = {
  distinct_on?: Maybe<Array<Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dashboards_Order_By>>;
  where?: Maybe<Dashboards_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDataSourceArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDataSourceVersionArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDataSourceVersionsArgs = {
  distinct_on?: Maybe<Array<Data_Source_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Source_Versions_Order_By>>;
  where?: Maybe<Data_Source_Versions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDataSourceVersionsAggregateArgs = {
  distinct_on?: Maybe<Array<Data_Source_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Source_Versions_Order_By>>;
  where?: Maybe<Data_Source_Versions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDataSourcesArgs = {
  distinct_on?: Maybe<Array<Org_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Data_Sources_Order_By>>;
  where?: Maybe<Org_Data_Sources_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDataSourcesAggregateArgs = {
  distinct_on?: Maybe<Array<Org_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Data_Sources_Order_By>>;
  where?: Maybe<Org_Data_Sources_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDw_EnginesArgs = {
  distinct_on?: Maybe<Array<Dw_Engines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dw_Engines_Order_By>>;
  where?: Maybe<Dw_Engines_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDw_Engines_AggregateArgs = {
  distinct_on?: Maybe<Array<Dw_Engines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dw_Engines_Order_By>>;
  where?: Maybe<Dw_Engines_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDw_Engines_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFeatureArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFeaturesArgs = {
  distinct_on?: Maybe<Array<Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Features_Order_By>>;
  where?: Maybe<Features_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFeaturesAggregateArgs = {
  distinct_on?: Maybe<Array<Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Features_Order_By>>;
  where?: Maybe<Features_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMeArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMe_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricAnnotationArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricAnnotationsArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricAnnotationsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Annotations_Order_By>>;
  where?: Maybe<Metric_Annotations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricApprovalArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricApprovalsArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricApprovalsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricByIdTempArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricCollectionArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricCollectionMetricArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricCollectionMetricsArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_Metrics_Order_By>>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricCollectionMetricsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_Metrics_Order_By>>;
  where?: Maybe<Metric_Collection_Metrics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricCollectionViewArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricCollectionViewAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_View_Order_By>>;
  where?: Maybe<Metric_Collection_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricCollectionViewsArgs = {
  distinct_on?: Maybe<Array<Metric_Collection_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collection_View_Order_By>>;
  where?: Maybe<Metric_Collection_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricCollectionsArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricCollectionsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricCurrentDescriptionsArgs = {
  distinct_on?: Maybe<Array<Metric_Current_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Current_Description_Order_By>>;
  where?: Maybe<Metric_Current_Description_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricDescriptionArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricDescriptionsArgs = {
  distinct_on?: Maybe<Array<Metric_Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Descriptions_Order_By>>;
  where?: Maybe<Metric_Descriptions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricDescriptionsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Descriptions_Order_By>>;
  where?: Maybe<Metric_Descriptions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricTeamOwnerArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricTeamOwnersArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricTeamOwnersAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricUserOwnerArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricUserOwnersArgs = {
  distinct_on?: Maybe<Array<Metric_User_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_User_Owners_Order_By>>;
  where?: Maybe<Metric_User_Owners_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricUserOwnersAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_User_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_User_Owners_Order_By>>;
  where?: Maybe<Metric_User_Owners_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricVersionArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootMetricVersionsArgs = {
  distinct_on?: Maybe<Array<Metric_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Versions_Order_By>>;
  where?: Maybe<Metric_Versions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricVersionsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Versions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Versions_Order_By>>;
  where?: Maybe<Metric_Versions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricViewsArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricViewsAggregateArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetric_Current_Description_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Current_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Current_Description_Order_By>>;
  where?: Maybe<Metric_Current_Description_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetric_Lineage_Data_SourcesArgs = {
  distinct_on?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Lineage_Data_Sources_Order_By>>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetric_Lineage_Data_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Lineage_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Lineage_Data_Sources_Order_By>>;
  where?: Maybe<Metric_Lineage_Data_Sources_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetric_Lineage_Data_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricsArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetricsAggregateArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModelArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootModelDataSourceArgs = {
  dataSourceVersionId: Scalars['Int'];
  modelId: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootModelDataSourcesArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModelDataSourcesAggregateArgs = {
  distinct_on?: Maybe<Array<Model_Data_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Data_Sources_Order_By>>;
  where?: Maybe<Model_Data_Sources_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModelMetricArgs = {
  metricId: Scalars['bigint'];
  metricVersionId: Scalars['bigint'];
  modelId: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootModelMetricsArgs = {
  distinct_on?: Maybe<Array<Model_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Metrics_Order_By>>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModelMetricsAggregateArgs = {
  distinct_on?: Maybe<Array<Model_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Metrics_Order_By>>;
  where?: Maybe<Model_Metrics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModel_CurrentArgs = {
  distinct_on?: Maybe<Array<Model_Current_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Current_Order_By>>;
  where?: Maybe<Model_Current_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModel_Current_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Current_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Current_Order_By>>;
  where?: Maybe<Model_Current_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModelsArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModelsAggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMqlHeartbeatArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMqlHeartbeatsArgs = {
  distinct_on?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mql_Heartbeats_Order_By>>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMqlHeartbeatsAggregateArgs = {
  distinct_on?: Maybe<Array<Mql_Heartbeats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mql_Heartbeats_Order_By>>;
  where?: Maybe<Mql_Heartbeats_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMy_Most_Viewed_MetricsArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMy_Most_Viewed_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Metrics_Current_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Metrics_Current_View_Order_By>>;
  where?: Maybe<Org_Metrics_Current_View_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMy_OrgArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMy_Org_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrgMqlServerArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrgMqlServersArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Servers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Servers_Order_By>>;
  where?: Maybe<Org_Mql_Servers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrgMqlServersAggregateArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Servers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Servers_Order_By>>;
  where?: Maybe<Org_Mql_Servers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrg_Mql_Server_Logs_TypesArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Server_Logs_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Server_Logs_Types_Order_By>>;
  where?: Maybe<Org_Mql_Server_Logs_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrg_Mql_Server_Logs_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Mql_Server_Logs_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Mql_Server_Logs_Types_Order_By>>;
  where?: Maybe<Org_Mql_Server_Logs_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrg_Mql_Server_Logs_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootOrganizationArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrganizationFeatureArgs = {
  featureId: Scalars['Int'];
  organizationId: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrganizationFeaturesArgs = {
  distinct_on?: Maybe<Array<Organization_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Features_Order_By>>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganizationFeaturesAggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Features_Order_By>>;
  where?: Maybe<Organization_Features_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganizationsAggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrioritiesArgs = {
  distinct_on?: Maybe<Array<Priorities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Priorities_Order_By>>;
  where?: Maybe<Priorities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPriorities_AggregateArgs = {
  distinct_on?: Maybe<Array<Priorities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Priorities_Order_By>>;
  where?: Maybe<Priorities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPriorities_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuestionArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootQuestionDirectedToArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionDirectedToAggregateArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionDirectedToByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootQuestionLikeArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootQuestionLikesArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionLikesAggregateArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionRepliesArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionRepliesAggregateArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionReplyArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestionsAggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSavedQueriesArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSavedQueriesAggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSavedQueryArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSavedQueryMetricArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSavedQueryMetricsArgs = {
  distinct_on?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Query_Metrics_Order_By>>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSavedQueryMetricsAggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Query_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Query_Metrics_Order_By>>;
  where?: Maybe<Saved_Query_Metrics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeamArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTeamDashboardArgs = {
  dashboardId: Scalars['Int'];
  team_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTeamDashboardsArgs = {
  distinct_on?: Maybe<Array<Team_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Dashboards_Order_By>>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeamDashboardsAggregateArgs = {
  distinct_on?: Maybe<Array<Team_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Dashboards_Order_By>>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeamMemberArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTeamMembersArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeamMembersAggregateArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeamViewsAggregateArgs = {
  distinct_on?: Maybe<Array<Team_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Views_Order_By>>;
  where?: Maybe<Team_Views_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeam_Page_Theme_ColorsArgs = {
  distinct_on?: Maybe<Array<Team_Page_Theme_Colors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Page_Theme_Colors_Order_By>>;
  where?: Maybe<Team_Page_Theme_Colors_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeam_Page_Theme_Colors_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Page_Theme_Colors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Page_Theme_Colors_Order_By>>;
  where?: Maybe<Team_Page_Theme_Colors_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeam_Page_Theme_Colors_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTeam_ViewsArgs = {
  distinct_on?: Maybe<Array<Team_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Views_Order_By>>;
  where?: Maybe<Team_Views_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeam_Views_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeamsAggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUnsubscribesArgs = {
  distinct_on?: Maybe<Array<Unsubscribes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unsubscribes_Order_By>>;
  where?: Maybe<Unsubscribes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUnsubscribes_AggregateArgs = {
  distinct_on?: Maybe<Array<Unsubscribes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unsubscribes_Order_By>>;
  where?: Maybe<Unsubscribes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUnsubscribes_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserDashboardArgs = {
  dashboardId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserDashboardsArgs = {
  distinct_on?: Maybe<Array<User_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Dashboards_Order_By>>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserDashboardsAggregateArgs = {
  distinct_on?: Maybe<Array<User_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Dashboards_Order_By>>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserFeatureArgs = {
  featureId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserFeaturesArgs = {
  distinct_on?: Maybe<Array<User_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Features_Order_By>>;
  where?: Maybe<User_Features_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserFeaturesAggregateArgs = {
  distinct_on?: Maybe<Array<User_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Features_Order_By>>;
  where?: Maybe<User_Features_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserPreferenceArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserPreferencesArgs = {
  distinct_on?: Maybe<Array<User_Prefs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Prefs_Order_By>>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserPreferencesAggregateArgs = {
  distinct_on?: Maybe<Array<User_Prefs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Prefs_Order_By>>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserRoleArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserRolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserRolesAggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Role_TypesArgs = {
  distinct_on?: Maybe<Array<User_Role_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Types_Order_By>>;
  where?: Maybe<User_Role_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Role_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Types_Order_By>>;
  where?: Maybe<User_Role_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Role_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** columns and relationships of "team_dashboards" */
export type Team_Dashboards = {
  __typename?: 'team_dashboards';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId: Scalars['Int'];
  organizationId: Scalars['Int'];
  team_id: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "team_dashboards" */
export type Team_Dashboards_Aggregate = {
  __typename?: 'team_dashboards_aggregate';
  aggregate?: Maybe<Team_Dashboards_Aggregate_Fields>;
  nodes: Array<Team_Dashboards>;
};

/** aggregate fields of "team_dashboards" */
export type Team_Dashboards_Aggregate_Fields = {
  __typename?: 'team_dashboards_aggregate_fields';
  avg?: Maybe<Team_Dashboards_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Team_Dashboards_Max_Fields>;
  min?: Maybe<Team_Dashboards_Min_Fields>;
  stddev?: Maybe<Team_Dashboards_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Dashboards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Dashboards_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Dashboards_Sum_Fields>;
  var_pop?: Maybe<Team_Dashboards_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Dashboards_Var_Samp_Fields>;
  variance?: Maybe<Team_Dashboards_Variance_Fields>;
};


/** aggregate fields of "team_dashboards" */
export type Team_Dashboards_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Dashboards_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_dashboards" */
export type Team_Dashboards_Aggregate_Order_By = {
  avg?: Maybe<Team_Dashboards_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Team_Dashboards_Max_Order_By>;
  min?: Maybe<Team_Dashboards_Min_Order_By>;
  stddev?: Maybe<Team_Dashboards_Stddev_Order_By>;
  stddev_pop?: Maybe<Team_Dashboards_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Team_Dashboards_Stddev_Samp_Order_By>;
  sum?: Maybe<Team_Dashboards_Sum_Order_By>;
  var_pop?: Maybe<Team_Dashboards_Var_Pop_Order_By>;
  var_samp?: Maybe<Team_Dashboards_Var_Samp_Order_By>;
  variance?: Maybe<Team_Dashboards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "team_dashboards" */
export type Team_Dashboards_Arr_Rel_Insert_Input = {
  data: Array<Team_Dashboards_Insert_Input>;
  on_conflict?: Maybe<Team_Dashboards_On_Conflict>;
};

/** aggregate avg on columns */
export type Team_Dashboards_Avg_Fields = {
  __typename?: 'team_dashboards_avg_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team_dashboards" */
export type Team_Dashboards_Avg_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "team_dashboards". All fields are combined with a logical 'AND'. */
export type Team_Dashboards_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Team_Dashboards_Bool_Exp>>>;
  _not?: Maybe<Team_Dashboards_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Team_Dashboards_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dashboardId?: Maybe<Int_Comparison_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  team_id?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_dashboards" */
export enum Team_Dashboards_Constraint {
  /** unique or primary key constraint */
  TeamDashboardsPkey = 'team_dashboards_pkey'
}

/** input type for incrementing integer column in table "team_dashboards" */
export type Team_Dashboards_Inc_Input = {
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "team_dashboards" */
export type Team_Dashboards_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Team_Dashboards_Max_Fields = {
  __typename?: 'team_dashboards_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "team_dashboards" */
export type Team_Dashboards_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Dashboards_Min_Fields = {
  __typename?: 'team_dashboards_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "team_dashboards" */
export type Team_Dashboards_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "team_dashboards" */
export type Team_Dashboards_Mutation_Response = {
  __typename?: 'team_dashboards_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Team_Dashboards>;
};

/** input type for inserting object relation for remote table "team_dashboards" */
export type Team_Dashboards_Obj_Rel_Insert_Input = {
  data: Team_Dashboards_Insert_Input;
  on_conflict?: Maybe<Team_Dashboards_On_Conflict>;
};

/** on conflict condition type for table "team_dashboards" */
export type Team_Dashboards_On_Conflict = {
  constraint: Team_Dashboards_Constraint;
  update_columns: Array<Team_Dashboards_Update_Column>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};

/** ordering options when selecting data from "team_dashboards" */
export type Team_Dashboards_Order_By = {
  createdAt?: Maybe<Order_By>;
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "team_dashboards" */
export type Team_Dashboards_Pk_Columns_Input = {
  dashboardId: Scalars['Int'];
  team_id: Scalars['Int'];
};

/** select columns of table "team_dashboards" */
export enum Team_Dashboards_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DashboardId = 'dashboardId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "team_dashboards" */
export type Team_Dashboards_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Team_Dashboards_Stddev_Fields = {
  __typename?: 'team_dashboards_stddev_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team_dashboards" */
export type Team_Dashboards_Stddev_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Team_Dashboards_Stddev_Pop_Fields = {
  __typename?: 'team_dashboards_stddev_pop_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team_dashboards" */
export type Team_Dashboards_Stddev_Pop_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Team_Dashboards_Stddev_Samp_Fields = {
  __typename?: 'team_dashboards_stddev_samp_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team_dashboards" */
export type Team_Dashboards_Stddev_Samp_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Team_Dashboards_Sum_Fields = {
  __typename?: 'team_dashboards_sum_fields';
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team_dashboards" */
export type Team_Dashboards_Sum_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** update columns of table "team_dashboards" */
export enum Team_Dashboards_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DashboardId = 'dashboardId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Team_Dashboards_Var_Pop_Fields = {
  __typename?: 'team_dashboards_var_pop_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team_dashboards" */
export type Team_Dashboards_Var_Pop_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Team_Dashboards_Var_Samp_Fields = {
  __typename?: 'team_dashboards_var_samp_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team_dashboards" */
export type Team_Dashboards_Var_Samp_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Team_Dashboards_Variance_Fields = {
  __typename?: 'team_dashboards_variance_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team_dashboards" */
export type Team_Dashboards_Variance_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/**
 * Users belonging to a Team
 *
 *
 * columns and relationships of "team_members"
 */
export type Team_Members = {
  __typename?: 'team_members';
  id: Scalars['Int'];
  /** Indicates if a Team Member is an Admin for the Team */
  isTeamAdmin: Scalars['Boolean'];
  /** Indicates when the User was added to the Team */
  joinedAt?: Maybe<Scalars['timestamptz']>;
  joined_ts?: Maybe<Scalars['Int']>;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "team_members" */
export type Team_Members_Aggregate = {
  __typename?: 'team_members_aggregate';
  aggregate?: Maybe<Team_Members_Aggregate_Fields>;
  nodes: Array<Team_Members>;
};

/** aggregate fields of "team_members" */
export type Team_Members_Aggregate_Fields = {
  __typename?: 'team_members_aggregate_fields';
  avg?: Maybe<Team_Members_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Team_Members_Max_Fields>;
  min?: Maybe<Team_Members_Min_Fields>;
  stddev?: Maybe<Team_Members_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Members_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Members_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Members_Sum_Fields>;
  var_pop?: Maybe<Team_Members_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Members_Var_Samp_Fields>;
  variance?: Maybe<Team_Members_Variance_Fields>;
};


/** aggregate fields of "team_members" */
export type Team_Members_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Members_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_members" */
export type Team_Members_Aggregate_Order_By = {
  avg?: Maybe<Team_Members_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Team_Members_Max_Order_By>;
  min?: Maybe<Team_Members_Min_Order_By>;
  stddev?: Maybe<Team_Members_Stddev_Order_By>;
  stddev_pop?: Maybe<Team_Members_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Team_Members_Stddev_Samp_Order_By>;
  sum?: Maybe<Team_Members_Sum_Order_By>;
  var_pop?: Maybe<Team_Members_Var_Pop_Order_By>;
  var_samp?: Maybe<Team_Members_Var_Samp_Order_By>;
  variance?: Maybe<Team_Members_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "team_members" */
export type Team_Members_Arr_Rel_Insert_Input = {
  data: Array<Team_Members_Insert_Input>;
  on_conflict?: Maybe<Team_Members_On_Conflict>;
};

/** aggregate avg on columns */
export type Team_Members_Avg_Fields = {
  __typename?: 'team_members_avg_fields';
  id?: Maybe<Scalars['Float']>;
  joined_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team_members" */
export type Team_Members_Avg_Order_By = {
  id?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "team_members". All fields are combined with a logical 'AND'. */
export type Team_Members_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Team_Members_Bool_Exp>>>;
  _not?: Maybe<Team_Members_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Team_Members_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  isTeamAdmin?: Maybe<Boolean_Comparison_Exp>;
  joinedAt?: Maybe<Timestamptz_Comparison_Exp>;
  joined_ts?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  teamId?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_members" */
export enum Team_Members_Constraint {
  /** unique or primary key constraint */
  TeamMembersPkey = 'team_members_pkey'
}

/** input type for incrementing integer column in table "team_members" */
export type Team_Members_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  joined_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "team_members" */
export type Team_Members_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  isTeamAdmin?: Maybe<Scalars['Boolean']>;
  joinedAt?: Maybe<Scalars['timestamptz']>;
  joined_ts?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  teamId?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Team_Members_Max_Fields = {
  __typename?: 'team_members_max_fields';
  id?: Maybe<Scalars['Int']>;
  joinedAt?: Maybe<Scalars['timestamptz']>;
  joined_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "team_members" */
export type Team_Members_Max_Order_By = {
  id?: Maybe<Order_By>;
  joinedAt?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Members_Min_Fields = {
  __typename?: 'team_members_min_fields';
  id?: Maybe<Scalars['Int']>;
  joinedAt?: Maybe<Scalars['timestamptz']>;
  joined_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "team_members" */
export type Team_Members_Min_Order_By = {
  id?: Maybe<Order_By>;
  joinedAt?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "team_members" */
export type Team_Members_Mutation_Response = {
  __typename?: 'team_members_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Team_Members>;
};

/** input type for inserting object relation for remote table "team_members" */
export type Team_Members_Obj_Rel_Insert_Input = {
  data: Team_Members_Insert_Input;
  on_conflict?: Maybe<Team_Members_On_Conflict>;
};

/** on conflict condition type for table "team_members" */
export type Team_Members_On_Conflict = {
  constraint: Team_Members_Constraint;
  update_columns: Array<Team_Members_Update_Column>;
  where?: Maybe<Team_Members_Bool_Exp>;
};

/** ordering options when selecting data from "team_members" */
export type Team_Members_Order_By = {
  id?: Maybe<Order_By>;
  isTeamAdmin?: Maybe<Order_By>;
  joinedAt?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  teamId?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "team_members" */
export type Team_Members_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "team_members" */
export enum Team_Members_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsTeamAdmin = 'isTeamAdmin',
  /** column name */
  JoinedAt = 'joinedAt',
  /** column name */
  JoinedTs = 'joined_ts',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "team_members" */
export type Team_Members_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  isTeamAdmin?: Maybe<Scalars['Boolean']>;
  joinedAt?: Maybe<Scalars['timestamptz']>;
  joined_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Team_Members_Stddev_Fields = {
  __typename?: 'team_members_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  joined_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team_members" */
export type Team_Members_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Team_Members_Stddev_Pop_Fields = {
  __typename?: 'team_members_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  joined_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team_members" */
export type Team_Members_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Team_Members_Stddev_Samp_Fields = {
  __typename?: 'team_members_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  joined_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team_members" */
export type Team_Members_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Team_Members_Sum_Fields = {
  __typename?: 'team_members_sum_fields';
  id?: Maybe<Scalars['Int']>;
  joined_ts?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team_members" */
export type Team_Members_Sum_Order_By = {
  id?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "team_members" */
export enum Team_Members_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsTeamAdmin = 'isTeamAdmin',
  /** column name */
  JoinedAt = 'joinedAt',
  /** column name */
  JoinedTs = 'joined_ts',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Team_Members_Var_Pop_Fields = {
  __typename?: 'team_members_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  joined_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team_members" */
export type Team_Members_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Team_Members_Var_Samp_Fields = {
  __typename?: 'team_members_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  joined_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team_members" */
export type Team_Members_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Team_Members_Variance_Fields = {
  __typename?: 'team_members_variance_fields';
  id?: Maybe<Scalars['Float']>;
  joined_ts?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team_members" */
export type Team_Members_Variance_Order_By = {
  id?: Maybe<Order_By>;
  joined_ts?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  teamId?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "team_page_theme_colors" */
export type Team_Page_Theme_Colors = {
  __typename?: 'team_page_theme_colors';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Aggregate = {
  __typename?: 'team_page_theme_colors_aggregate';
  aggregate?: Maybe<Team_Page_Theme_Colors_Aggregate_Fields>;
  nodes: Array<Team_Page_Theme_Colors>;
};

/** aggregate fields of "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Aggregate_Fields = {
  __typename?: 'team_page_theme_colors_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Team_Page_Theme_Colors_Max_Fields>;
  min?: Maybe<Team_Page_Theme_Colors_Min_Fields>;
};


/** aggregate fields of "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Page_Theme_Colors_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Team_Page_Theme_Colors_Max_Order_By>;
  min?: Maybe<Team_Page_Theme_Colors_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Arr_Rel_Insert_Input = {
  data: Array<Team_Page_Theme_Colors_Insert_Input>;
  on_conflict?: Maybe<Team_Page_Theme_Colors_On_Conflict>;
};

/** Boolean expression to filter rows from the table "team_page_theme_colors". All fields are combined with a logical 'AND'. */
export type Team_Page_Theme_Colors_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Team_Page_Theme_Colors_Bool_Exp>>>;
  _not?: Maybe<Team_Page_Theme_Colors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Team_Page_Theme_Colors_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_page_theme_colors" */
export enum Team_Page_Theme_Colors_Constraint {
  /** unique or primary key constraint */
  TeamPageThemeColorsPkey = 'team_page_theme_colors_pkey'
}

/** input type for inserting data into table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Team_Page_Theme_Colors_Max_Fields = {
  __typename?: 'team_page_theme_colors_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Page_Theme_Colors_Min_Fields = {
  __typename?: 'team_page_theme_colors_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Mutation_Response = {
  __typename?: 'team_page_theme_colors_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Team_Page_Theme_Colors>;
};

/** input type for inserting object relation for remote table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Obj_Rel_Insert_Input = {
  data: Team_Page_Theme_Colors_Insert_Input;
  on_conflict?: Maybe<Team_Page_Theme_Colors_On_Conflict>;
};

/** on conflict condition type for table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_On_Conflict = {
  constraint: Team_Page_Theme_Colors_Constraint;
  update_columns: Array<Team_Page_Theme_Colors_Update_Column>;
  where?: Maybe<Team_Page_Theme_Colors_Bool_Exp>;
};

/** ordering options when selecting data from "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "team_page_theme_colors" */
export enum Team_Page_Theme_Colors_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "team_page_theme_colors" */
export type Team_Page_Theme_Colors_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "team_page_theme_colors" */
export enum Team_Page_Theme_Colors_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "team_views" */
export type Team_Views = {
  __typename?: 'team_views';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  organization_id: Scalars['Int'];
  team_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "team_views" */
export type Team_Views_Aggregate = {
  __typename?: 'team_views_aggregate';
  aggregate?: Maybe<Team_Views_Aggregate_Fields>;
  nodes: Array<Team_Views>;
};

/** aggregate fields of "team_views" */
export type Team_Views_Aggregate_Fields = {
  __typename?: 'team_views_aggregate_fields';
  avg?: Maybe<Team_Views_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Team_Views_Max_Fields>;
  min?: Maybe<Team_Views_Min_Fields>;
  stddev?: Maybe<Team_Views_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Views_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Views_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Views_Sum_Fields>;
  var_pop?: Maybe<Team_Views_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Views_Var_Samp_Fields>;
  variance?: Maybe<Team_Views_Variance_Fields>;
};


/** aggregate fields of "team_views" */
export type Team_Views_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Views_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_views" */
export type Team_Views_Aggregate_Order_By = {
  avg?: Maybe<Team_Views_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Team_Views_Max_Order_By>;
  min?: Maybe<Team_Views_Min_Order_By>;
  stddev?: Maybe<Team_Views_Stddev_Order_By>;
  stddev_pop?: Maybe<Team_Views_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Team_Views_Stddev_Samp_Order_By>;
  sum?: Maybe<Team_Views_Sum_Order_By>;
  var_pop?: Maybe<Team_Views_Var_Pop_Order_By>;
  var_samp?: Maybe<Team_Views_Var_Samp_Order_By>;
  variance?: Maybe<Team_Views_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "team_views" */
export type Team_Views_Arr_Rel_Insert_Input = {
  data: Array<Team_Views_Insert_Input>;
  on_conflict?: Maybe<Team_Views_On_Conflict>;
};

/** aggregate avg on columns */
export type Team_Views_Avg_Fields = {
  __typename?: 'team_views_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team_views" */
export type Team_Views_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "team_views". All fields are combined with a logical 'AND'. */
export type Team_Views_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Team_Views_Bool_Exp>>>;
  _not?: Maybe<Team_Views_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Team_Views_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
  team_id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "team_views" */
export enum Team_Views_Constraint {
  /** unique or primary key constraint */
  TeamViewsPkey = 'team_views_pkey'
}

/** input type for incrementing integer column in table "team_views" */
export type Team_Views_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "team_views" */
export type Team_Views_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Team_Views_Max_Fields = {
  __typename?: 'team_views_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "team_views" */
export type Team_Views_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Views_Min_Fields = {
  __typename?: 'team_views_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "team_views" */
export type Team_Views_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "team_views" */
export type Team_Views_Mutation_Response = {
  __typename?: 'team_views_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Team_Views>;
};

/** input type for inserting object relation for remote table "team_views" */
export type Team_Views_Obj_Rel_Insert_Input = {
  data: Team_Views_Insert_Input;
  on_conflict?: Maybe<Team_Views_On_Conflict>;
};

/** on conflict condition type for table "team_views" */
export type Team_Views_On_Conflict = {
  constraint: Team_Views_Constraint;
  update_columns: Array<Team_Views_Update_Column>;
  where?: Maybe<Team_Views_Bool_Exp>;
};

/** ordering options when selecting data from "team_views" */
export type Team_Views_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "team_views" */
export type Team_Views_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "team_views" */
export enum Team_Views_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "team_views" */
export type Team_Views_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Team_Views_Stddev_Fields = {
  __typename?: 'team_views_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team_views" */
export type Team_Views_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Team_Views_Stddev_Pop_Fields = {
  __typename?: 'team_views_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team_views" */
export type Team_Views_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Team_Views_Stddev_Samp_Fields = {
  __typename?: 'team_views_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team_views" */
export type Team_Views_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Team_Views_Sum_Fields = {
  __typename?: 'team_views_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team_views" */
export type Team_Views_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "team_views" */
export enum Team_Views_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Team_Views_Var_Pop_Fields = {
  __typename?: 'team_views_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team_views" */
export type Team_Views_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Team_Views_Var_Samp_Fields = {
  __typename?: 'team_views_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team_views" */
export type Team_Views_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Team_Views_Variance_Fields = {
  __typename?: 'team_views_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team_views" */
export type Team_Views_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type Teams = {
  __typename?: 'teams';
  /** Timestamp indicating when the Team was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  createdBy?: Maybe<Users>;
  created_by?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  /** An array relationship */
  dashboards: Array<Team_Dashboards>;
  /** An aggregated array relationship */
  dashboards_aggregate: Team_Dashboards_Aggregate;
  deactivated?: Maybe<Scalars['Int']>;
  /** A soft delete mechanism for removing a Team */
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  featuredMetricCollection?: Maybe<Metric_Collections>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  /** A unique identifier for a Team */
  id: Scalars['Int'];
  /** An array relationship */
  metricCollections: Array<Metric_Collections>;
  /** An aggregated array relationship */
  metricCollections_aggregate: Metric_Collections_Aggregate;
  /** An array relationship */
  metricTeamOwners: Array<Metric_Team_Owners>;
  /** An aggregated array relationship */
  metricTeamOwners_aggregate: Metric_Team_Owners_Aggregate;
  /** The name of the Team */
  name: Scalars['String'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  primaryDashboard?: Maybe<Dashboards>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  /** An array relationship */
  questionsDirectedTo: Array<Question_Directed_To>;
  /** An aggregated array relationship */
  questionsDirectedTo_aggregate: Question_Directed_To_Aggregate;
  /** An array relationship */
  savedQueries: Array<Saved_Queries>;
  /** An aggregated array relationship */
  savedQueries_aggregate: Saved_Queries_Aggregate;
  /** The slug is a URL-friendly string used to identify a team in the App */
  slug?: Maybe<Scalars['String']>;
  /** An array relationship */
  teamMembers: Array<Team_Members>;
  /** An aggregated array relationship */
  teamMembers_aggregate: Team_Members_Aggregate;
  /** An array relationship */
  teamViews: Array<Team_Views>;
  /** An aggregated array relationship */
  teamViews_aggregate: Team_Views_Aggregate;
  theme?: Maybe<Scalars['String']>;
  /** An object relationship */
  theme_color?: Maybe<Team_Page_Theme_Colors>;
  /** Timestamp indicating when the Team was last updated */
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "user_is_team_admin" */
  userIsTeamAdmin?: Maybe<Scalars['Boolean']>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsDashboardsArgs = {
  distinct_on?: Maybe<Array<Team_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Dashboards_Order_By>>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsDashboards_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Dashboards_Order_By>>;
  where?: Maybe<Team_Dashboards_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsMetricCollectionsArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsMetricCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsMetricTeamOwnersArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsMetricTeamOwners_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Team_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Team_Owners_Order_By>>;
  where?: Maybe<Metric_Team_Owners_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsQuestionsDirectedToArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsQuestionsDirectedTo_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsSavedQueriesArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsSavedQueries_AggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsTeamMembersArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsTeamMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsTeamViewsArgs = {
  distinct_on?: Maybe<Array<Team_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Views_Order_By>>;
  where?: Maybe<Team_Views_Bool_Exp>;
};


/**
 * Teams are groups of Users within an Organization
 *
 *
 * columns and relationships of "teams"
 */
export type TeamsTeamViews_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Views_Order_By>>;
  where?: Maybe<Team_Views_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
  __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'teams_aggregate_fields';
  avg?: Maybe<Teams_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
  stddev?: Maybe<Teams_Stddev_Fields>;
  stddev_pop?: Maybe<Teams_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teams_Stddev_Samp_Fields>;
  sum?: Maybe<Teams_Sum_Fields>;
  var_pop?: Maybe<Teams_Var_Pop_Fields>;
  var_samp?: Maybe<Teams_Var_Samp_Fields>;
  variance?: Maybe<Teams_Variance_Fields>;
};


/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  avg?: Maybe<Teams_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Max_Order_By>;
  min?: Maybe<Teams_Min_Order_By>;
  stddev?: Maybe<Teams_Stddev_Order_By>;
  stddev_pop?: Maybe<Teams_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Teams_Stddev_Samp_Order_By>;
  sum?: Maybe<Teams_Sum_Order_By>;
  var_pop?: Maybe<Teams_Var_Pop_Order_By>;
  var_samp?: Maybe<Teams_Var_Samp_Order_By>;
  variance?: Maybe<Teams_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** aggregate avg on columns */
export type Teams_Avg_Fields = {
  __typename?: 'teams_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  deactivated?: Maybe<Scalars['Float']>;
  featuredMetricCollectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "teams" */
export type Teams_Avg_Order_By = {
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  _not?: Maybe<Teams_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<Users_Bool_Exp>;
  created_by?: Maybe<Int_Comparison_Exp>;
  created_ts?: Maybe<Int_Comparison_Exp>;
  dashboards?: Maybe<Team_Dashboards_Bool_Exp>;
  deactivated?: Maybe<Int_Comparison_Exp>;
  deactivatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  featuredMetricCollection?: Maybe<Metric_Collections_Bool_Exp>;
  featuredMetricCollectionId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metricCollections?: Maybe<Metric_Collections_Bool_Exp>;
  metricTeamOwners?: Maybe<Metric_Team_Owners_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  primaryDashboard?: Maybe<Dashboards_Bool_Exp>;
  primaryDashboardId?: Maybe<Int_Comparison_Exp>;
  questionsDirectedTo?: Maybe<Question_Directed_To_Bool_Exp>;
  savedQueries?: Maybe<Saved_Queries_Bool_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  teamMembers?: Maybe<Team_Members_Bool_Exp>;
  teamViews?: Maybe<Team_Views_Bool_Exp>;
  theme?: Maybe<String_Comparison_Exp>;
  theme_color?: Maybe<Team_Page_Theme_Colors_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint */
  TeamsNameOrganizationIdKey = 'teams_name_organization_id_key',
  /** unique or primary key constraint */
  TeamsPkey = 'teams_pkey'
}

/** input type for incrementing integer column in table "teams" */
export type Teams_Inc_Input = {
  created_by?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  deactivated?: Maybe<Scalars['Int']>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy?: Maybe<Users_Obj_Rel_Insert_Input>;
  created_by?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  dashboards?: Maybe<Team_Dashboards_Arr_Rel_Insert_Input>;
  deactivated?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  featuredMetricCollection?: Maybe<Metric_Collections_Obj_Rel_Insert_Input>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  metricCollections?: Maybe<Metric_Collections_Arr_Rel_Insert_Input>;
  metricTeamOwners?: Maybe<Metric_Team_Owners_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboard?: Maybe<Dashboards_Obj_Rel_Insert_Input>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  questionsDirectedTo?: Maybe<Question_Directed_To_Arr_Rel_Insert_Input>;
  savedQueries?: Maybe<Saved_Queries_Arr_Rel_Insert_Input>;
  slug?: Maybe<Scalars['String']>;
  teamMembers?: Maybe<Team_Members_Arr_Rel_Insert_Input>;
  teamViews?: Maybe<Team_Views_Arr_Rel_Insert_Input>;
  theme?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Team_Page_Theme_Colors_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  deactivated?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  theme?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  deactivated?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  theme?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** on conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns: Array<Teams_Update_Column>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** ordering options when selecting data from "teams" */
export type Teams_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Users_Order_By>;
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  dashboards_aggregate?: Maybe<Team_Dashboards_Aggregate_Order_By>;
  deactivated?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  featuredMetricCollection?: Maybe<Metric_Collections_Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metricCollections_aggregate?: Maybe<Metric_Collections_Aggregate_Order_By>;
  metricTeamOwners_aggregate?: Maybe<Metric_Team_Owners_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboard?: Maybe<Dashboards_Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  questionsDirectedTo_aggregate?: Maybe<Question_Directed_To_Aggregate_Order_By>;
  savedQueries_aggregate?: Maybe<Saved_Queries_Aggregate_Order_By>;
  slug?: Maybe<Order_By>;
  teamMembers_aggregate?: Maybe<Team_Members_Aggregate_Order_By>;
  teamViews_aggregate?: Maybe<Team_Views_Aggregate_Order_By>;
  theme?: Maybe<Order_By>;
  theme_color?: Maybe<Team_Page_Theme_Colors_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "teams" */
export type Teams_Pk_Columns_Input = {
  /** A unique identifier for a Team */
  id: Scalars['Int'];
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CreatedTs = 'created_ts',
  /** column name */
  Deactivated = 'deactivated',
  /** column name */
  DeactivatedAt = 'deactivatedAt',
  /** column name */
  FeaturedMetricCollectionId = 'featuredMetricCollectionId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrimaryDashboardId = 'primaryDashboardId',
  /** column name */
  Slug = 'slug',
  /** column name */
  Theme = 'theme',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  deactivated?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Teams_Stddev_Fields = {
  __typename?: 'teams_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  deactivated?: Maybe<Scalars['Float']>;
  featuredMetricCollectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "teams" */
export type Teams_Stddev_Order_By = {
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Teams_Stddev_Pop_Fields = {
  __typename?: 'teams_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  deactivated?: Maybe<Scalars['Float']>;
  featuredMetricCollectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "teams" */
export type Teams_Stddev_Pop_Order_By = {
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Teams_Stddev_Samp_Fields = {
  __typename?: 'teams_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  deactivated?: Maybe<Scalars['Float']>;
  featuredMetricCollectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "teams" */
export type Teams_Stddev_Samp_Order_By = {
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Teams_Sum_Fields = {
  __typename?: 'teams_sum_fields';
  created_by?: Maybe<Scalars['Int']>;
  created_ts?: Maybe<Scalars['Int']>;
  deactivated?: Maybe<Scalars['Int']>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "teams" */
export type Teams_Sum_Order_By = {
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CreatedTs = 'created_ts',
  /** column name */
  Deactivated = 'deactivated',
  /** column name */
  DeactivatedAt = 'deactivatedAt',
  /** column name */
  FeaturedMetricCollectionId = 'featuredMetricCollectionId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrimaryDashboardId = 'primaryDashboardId',
  /** column name */
  Slug = 'slug',
  /** column name */
  Theme = 'theme',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Teams_Var_Pop_Fields = {
  __typename?: 'teams_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  deactivated?: Maybe<Scalars['Float']>;
  featuredMetricCollectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "teams" */
export type Teams_Var_Pop_Order_By = {
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Teams_Var_Samp_Fields = {
  __typename?: 'teams_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  deactivated?: Maybe<Scalars['Float']>;
  featuredMetricCollectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "teams" */
export type Teams_Var_Samp_Order_By = {
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Teams_Variance_Fields = {
  __typename?: 'teams_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  created_ts?: Maybe<Scalars['Float']>;
  deactivated?: Maybe<Scalars['Float']>;
  featuredMetricCollectionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "teams" */
export type Teams_Variance_Order_By = {
  created_by?: Maybe<Order_By>;
  created_ts?: Maybe<Order_By>;
  deactivated?: Maybe<Order_By>;
  featuredMetricCollectionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/**
 * Tracks which users have unsubscribed from which transactional emails.
 *
 *
 * columns and relationships of "unsubscribes"
 */
export type Unsubscribes = {
  __typename?: 'unsubscribes';
  email_type: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "unsubscribes" */
export type Unsubscribes_Aggregate = {
  __typename?: 'unsubscribes_aggregate';
  aggregate?: Maybe<Unsubscribes_Aggregate_Fields>;
  nodes: Array<Unsubscribes>;
};

/** aggregate fields of "unsubscribes" */
export type Unsubscribes_Aggregate_Fields = {
  __typename?: 'unsubscribes_aggregate_fields';
  avg?: Maybe<Unsubscribes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Unsubscribes_Max_Fields>;
  min?: Maybe<Unsubscribes_Min_Fields>;
  stddev?: Maybe<Unsubscribes_Stddev_Fields>;
  stddev_pop?: Maybe<Unsubscribes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Unsubscribes_Stddev_Samp_Fields>;
  sum?: Maybe<Unsubscribes_Sum_Fields>;
  var_pop?: Maybe<Unsubscribes_Var_Pop_Fields>;
  var_samp?: Maybe<Unsubscribes_Var_Samp_Fields>;
  variance?: Maybe<Unsubscribes_Variance_Fields>;
};


/** aggregate fields of "unsubscribes" */
export type Unsubscribes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Unsubscribes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "unsubscribes" */
export type Unsubscribes_Aggregate_Order_By = {
  avg?: Maybe<Unsubscribes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Unsubscribes_Max_Order_By>;
  min?: Maybe<Unsubscribes_Min_Order_By>;
  stddev?: Maybe<Unsubscribes_Stddev_Order_By>;
  stddev_pop?: Maybe<Unsubscribes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Unsubscribes_Stddev_Samp_Order_By>;
  sum?: Maybe<Unsubscribes_Sum_Order_By>;
  var_pop?: Maybe<Unsubscribes_Var_Pop_Order_By>;
  var_samp?: Maybe<Unsubscribes_Var_Samp_Order_By>;
  variance?: Maybe<Unsubscribes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "unsubscribes" */
export type Unsubscribes_Arr_Rel_Insert_Input = {
  data: Array<Unsubscribes_Insert_Input>;
  on_conflict?: Maybe<Unsubscribes_On_Conflict>;
};

/** aggregate avg on columns */
export type Unsubscribes_Avg_Fields = {
  __typename?: 'unsubscribes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "unsubscribes" */
export type Unsubscribes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "unsubscribes". All fields are combined with a logical 'AND'. */
export type Unsubscribes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Unsubscribes_Bool_Exp>>>;
  _not?: Maybe<Unsubscribes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Unsubscribes_Bool_Exp>>>;
  email_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "unsubscribes" */
export enum Unsubscribes_Constraint {
  /** unique or primary key constraint */
  UnsubscribesEmailTypeUserIdKey = 'unsubscribes_email_type_user_id_key',
  /** unique or primary key constraint */
  UnsubscribesPkey = 'unsubscribes_pkey'
}

/** input type for incrementing integer column in table "unsubscribes" */
export type Unsubscribes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "unsubscribes" */
export type Unsubscribes_Insert_Input = {
  email_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Unsubscribes_Max_Fields = {
  __typename?: 'unsubscribes_max_fields';
  email_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "unsubscribes" */
export type Unsubscribes_Max_Order_By = {
  email_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Unsubscribes_Min_Fields = {
  __typename?: 'unsubscribes_min_fields';
  email_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "unsubscribes" */
export type Unsubscribes_Min_Order_By = {
  email_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "unsubscribes" */
export type Unsubscribes_Mutation_Response = {
  __typename?: 'unsubscribes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Unsubscribes>;
};

/** input type for inserting object relation for remote table "unsubscribes" */
export type Unsubscribes_Obj_Rel_Insert_Input = {
  data: Unsubscribes_Insert_Input;
  on_conflict?: Maybe<Unsubscribes_On_Conflict>;
};

/** on conflict condition type for table "unsubscribes" */
export type Unsubscribes_On_Conflict = {
  constraint: Unsubscribes_Constraint;
  update_columns: Array<Unsubscribes_Update_Column>;
  where?: Maybe<Unsubscribes_Bool_Exp>;
};

/** ordering options when selecting data from "unsubscribes" */
export type Unsubscribes_Order_By = {
  email_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "unsubscribes" */
export type Unsubscribes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "unsubscribes" */
export enum Unsubscribes_Select_Column {
  /** column name */
  EmailType = 'email_type',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "unsubscribes" */
export type Unsubscribes_Set_Input = {
  email_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Unsubscribes_Stddev_Fields = {
  __typename?: 'unsubscribes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "unsubscribes" */
export type Unsubscribes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Unsubscribes_Stddev_Pop_Fields = {
  __typename?: 'unsubscribes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "unsubscribes" */
export type Unsubscribes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Unsubscribes_Stddev_Samp_Fields = {
  __typename?: 'unsubscribes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "unsubscribes" */
export type Unsubscribes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Unsubscribes_Sum_Fields = {
  __typename?: 'unsubscribes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "unsubscribes" */
export type Unsubscribes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "unsubscribes" */
export enum Unsubscribes_Update_Column {
  /** column name */
  EmailType = 'email_type',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Unsubscribes_Var_Pop_Fields = {
  __typename?: 'unsubscribes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "unsubscribes" */
export type Unsubscribes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Unsubscribes_Var_Samp_Fields = {
  __typename?: 'unsubscribes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "unsubscribes" */
export type Unsubscribes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Unsubscribes_Variance_Fields = {
  __typename?: 'unsubscribes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "unsubscribes" */
export type Unsubscribes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "user_dashboards" */
export type User_Dashboards = {
  __typename?: 'user_dashboards';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId: Scalars['Int'];
  organizationId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId: Scalars['Int'];
};

/** aggregated selection of "user_dashboards" */
export type User_Dashboards_Aggregate = {
  __typename?: 'user_dashboards_aggregate';
  aggregate?: Maybe<User_Dashboards_Aggregate_Fields>;
  nodes: Array<User_Dashboards>;
};

/** aggregate fields of "user_dashboards" */
export type User_Dashboards_Aggregate_Fields = {
  __typename?: 'user_dashboards_aggregate_fields';
  avg?: Maybe<User_Dashboards_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Dashboards_Max_Fields>;
  min?: Maybe<User_Dashboards_Min_Fields>;
  stddev?: Maybe<User_Dashboards_Stddev_Fields>;
  stddev_pop?: Maybe<User_Dashboards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Dashboards_Stddev_Samp_Fields>;
  sum?: Maybe<User_Dashboards_Sum_Fields>;
  var_pop?: Maybe<User_Dashboards_Var_Pop_Fields>;
  var_samp?: Maybe<User_Dashboards_Var_Samp_Fields>;
  variance?: Maybe<User_Dashboards_Variance_Fields>;
};


/** aggregate fields of "user_dashboards" */
export type User_Dashboards_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Dashboards_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_dashboards" */
export type User_Dashboards_Aggregate_Order_By = {
  avg?: Maybe<User_Dashboards_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Dashboards_Max_Order_By>;
  min?: Maybe<User_Dashboards_Min_Order_By>;
  stddev?: Maybe<User_Dashboards_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Dashboards_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Dashboards_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Dashboards_Sum_Order_By>;
  var_pop?: Maybe<User_Dashboards_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Dashboards_Var_Samp_Order_By>;
  variance?: Maybe<User_Dashboards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_dashboards" */
export type User_Dashboards_Arr_Rel_Insert_Input = {
  data: Array<User_Dashboards_Insert_Input>;
  on_conflict?: Maybe<User_Dashboards_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Dashboards_Avg_Fields = {
  __typename?: 'user_dashboards_avg_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_dashboards" */
export type User_Dashboards_Avg_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_dashboards". All fields are combined with a logical 'AND'. */
export type User_Dashboards_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Dashboards_Bool_Exp>>>;
  _not?: Maybe<User_Dashboards_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Dashboards_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dashboardId?: Maybe<Int_Comparison_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_dashboards" */
export enum User_Dashboards_Constraint {
  /** unique or primary key constraint */
  UserDashboardsPkey = 'user_dashboards_pkey'
}

/** input type for incrementing integer column in table "user_dashboards" */
export type User_Dashboards_Inc_Input = {
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_dashboards" */
export type User_Dashboards_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Dashboards_Max_Fields = {
  __typename?: 'user_dashboards_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_dashboards" */
export type User_Dashboards_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Dashboards_Min_Fields = {
  __typename?: 'user_dashboards_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_dashboards" */
export type User_Dashboards_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_dashboards" */
export type User_Dashboards_Mutation_Response = {
  __typename?: 'user_dashboards_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Dashboards>;
};

/** input type for inserting object relation for remote table "user_dashboards" */
export type User_Dashboards_Obj_Rel_Insert_Input = {
  data: User_Dashboards_Insert_Input;
  on_conflict?: Maybe<User_Dashboards_On_Conflict>;
};

/** on conflict condition type for table "user_dashboards" */
export type User_Dashboards_On_Conflict = {
  constraint: User_Dashboards_Constraint;
  update_columns: Array<User_Dashboards_Update_Column>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};

/** ordering options when selecting data from "user_dashboards" */
export type User_Dashboards_Order_By = {
  createdAt?: Maybe<Order_By>;
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_dashboards" */
export type User_Dashboards_Pk_Columns_Input = {
  dashboardId: Scalars['Int'];
  userId: Scalars['Int'];
};

/** select columns of table "user_dashboards" */
export enum User_Dashboards_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DashboardId = 'dashboardId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_dashboards" */
export type User_Dashboards_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Dashboards_Stddev_Fields = {
  __typename?: 'user_dashboards_stddev_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_dashboards" */
export type User_Dashboards_Stddev_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Dashboards_Stddev_Pop_Fields = {
  __typename?: 'user_dashboards_stddev_pop_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_dashboards" */
export type User_Dashboards_Stddev_Pop_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Dashboards_Stddev_Samp_Fields = {
  __typename?: 'user_dashboards_stddev_samp_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_dashboards" */
export type User_Dashboards_Stddev_Samp_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Dashboards_Sum_Fields = {
  __typename?: 'user_dashboards_sum_fields';
  dashboardId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_dashboards" */
export type User_Dashboards_Sum_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "user_dashboards" */
export enum User_Dashboards_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DashboardId = 'dashboardId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type User_Dashboards_Var_Pop_Fields = {
  __typename?: 'user_dashboards_var_pop_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_dashboards" */
export type User_Dashboards_Var_Pop_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Dashboards_Var_Samp_Fields = {
  __typename?: 'user_dashboards_var_samp_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_dashboards" */
export type User_Dashboards_Var_Samp_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Dashboards_Variance_Fields = {
  __typename?: 'user_dashboards_variance_fields';
  dashboardId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_dashboards" */
export type User_Dashboards_Variance_Order_By = {
  dashboardId?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** columns and relationships of "user_features" */
export type User_Features = {
  __typename?: 'user_features';
  /** An object relationship */
  feature: Features;
  featureId: Scalars['Int'];
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
};

/** aggregated selection of "user_features" */
export type User_Features_Aggregate = {
  __typename?: 'user_features_aggregate';
  aggregate?: Maybe<User_Features_Aggregate_Fields>;
  nodes: Array<User_Features>;
};

/** aggregate fields of "user_features" */
export type User_Features_Aggregate_Fields = {
  __typename?: 'user_features_aggregate_fields';
  avg?: Maybe<User_Features_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Features_Max_Fields>;
  min?: Maybe<User_Features_Min_Fields>;
  stddev?: Maybe<User_Features_Stddev_Fields>;
  stddev_pop?: Maybe<User_Features_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Features_Stddev_Samp_Fields>;
  sum?: Maybe<User_Features_Sum_Fields>;
  var_pop?: Maybe<User_Features_Var_Pop_Fields>;
  var_samp?: Maybe<User_Features_Var_Samp_Fields>;
  variance?: Maybe<User_Features_Variance_Fields>;
};


/** aggregate fields of "user_features" */
export type User_Features_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Features_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_features" */
export type User_Features_Aggregate_Order_By = {
  avg?: Maybe<User_Features_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Features_Max_Order_By>;
  min?: Maybe<User_Features_Min_Order_By>;
  stddev?: Maybe<User_Features_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Features_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Features_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Features_Sum_Order_By>;
  var_pop?: Maybe<User_Features_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Features_Var_Samp_Order_By>;
  variance?: Maybe<User_Features_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_features" */
export type User_Features_Arr_Rel_Insert_Input = {
  data: Array<User_Features_Insert_Input>;
  on_conflict?: Maybe<User_Features_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Features_Avg_Fields = {
  __typename?: 'user_features_avg_fields';
  featureId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_features" */
export type User_Features_Avg_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_features". All fields are combined with a logical 'AND'. */
export type User_Features_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Features_Bool_Exp>>>;
  _not?: Maybe<User_Features_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Features_Bool_Exp>>>;
  feature?: Maybe<Features_Bool_Exp>;
  featureId?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_features" */
export enum User_Features_Constraint {
  /** unique or primary key constraint */
  UserFeaturesPkey = 'user_features_pkey'
}

/** input type for incrementing integer column in table "user_features" */
export type User_Features_Inc_Input = {
  featureId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_features" */
export type User_Features_Insert_Input = {
  feature?: Maybe<Features_Obj_Rel_Insert_Input>;
  featureId?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Features_Max_Fields = {
  __typename?: 'user_features_max_fields';
  featureId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_features" */
export type User_Features_Max_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Features_Min_Fields = {
  __typename?: 'user_features_min_fields';
  featureId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_features" */
export type User_Features_Min_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_features" */
export type User_Features_Mutation_Response = {
  __typename?: 'user_features_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Features>;
};

/** input type for inserting object relation for remote table "user_features" */
export type User_Features_Obj_Rel_Insert_Input = {
  data: User_Features_Insert_Input;
  on_conflict?: Maybe<User_Features_On_Conflict>;
};

/** on conflict condition type for table "user_features" */
export type User_Features_On_Conflict = {
  constraint: User_Features_Constraint;
  update_columns: Array<User_Features_Update_Column>;
  where?: Maybe<User_Features_Bool_Exp>;
};

/** ordering options when selecting data from "user_features" */
export type User_Features_Order_By = {
  feature?: Maybe<Features_Order_By>;
  featureId?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_features" */
export type User_Features_Pk_Columns_Input = {
  featureId: Scalars['Int'];
  userId: Scalars['Int'];
};

/** select columns of table "user_features" */
export enum User_Features_Select_Column {
  /** column name */
  FeatureId = 'featureId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_features" */
export type User_Features_Set_Input = {
  featureId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Features_Stddev_Fields = {
  __typename?: 'user_features_stddev_fields';
  featureId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_features" */
export type User_Features_Stddev_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Features_Stddev_Pop_Fields = {
  __typename?: 'user_features_stddev_pop_fields';
  featureId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_features" */
export type User_Features_Stddev_Pop_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Features_Stddev_Samp_Fields = {
  __typename?: 'user_features_stddev_samp_fields';
  featureId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_features" */
export type User_Features_Stddev_Samp_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Features_Sum_Fields = {
  __typename?: 'user_features_sum_fields';
  featureId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_features" */
export type User_Features_Sum_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "user_features" */
export enum User_Features_Update_Column {
  /** column name */
  FeatureId = 'featureId',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type User_Features_Var_Pop_Fields = {
  __typename?: 'user_features_var_pop_fields';
  featureId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_features" */
export type User_Features_Var_Pop_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Features_Var_Samp_Fields = {
  __typename?: 'user_features_var_samp_fields';
  featureId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_features" */
export type User_Features_Var_Samp_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Features_Variance_Fields = {
  __typename?: 'user_features_variance_fields';
  featureId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_features" */
export type User_Features_Variance_Order_By = {
  featureId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/**
 * A list of User Preferences organized by Key
 *
 *
 * columns and relationships of "user_prefs"
 */
export type User_Prefs = {
  __typename?: 'user_prefs';
  /** Timestamp indicating when the User Preference was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** A key used to specify which User Preference is being set */
  prefKey: Scalars['String'];
  /** The Value to be set (the type varies based on the Key!) */
  prefValue: Scalars['String'];
  /** Timestamp indicating when the User Preference was last updated */
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
};

/** aggregated selection of "user_prefs" */
export type User_Prefs_Aggregate = {
  __typename?: 'user_prefs_aggregate';
  aggregate?: Maybe<User_Prefs_Aggregate_Fields>;
  nodes: Array<User_Prefs>;
};

/** aggregate fields of "user_prefs" */
export type User_Prefs_Aggregate_Fields = {
  __typename?: 'user_prefs_aggregate_fields';
  avg?: Maybe<User_Prefs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Prefs_Max_Fields>;
  min?: Maybe<User_Prefs_Min_Fields>;
  stddev?: Maybe<User_Prefs_Stddev_Fields>;
  stddev_pop?: Maybe<User_Prefs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Prefs_Stddev_Samp_Fields>;
  sum?: Maybe<User_Prefs_Sum_Fields>;
  var_pop?: Maybe<User_Prefs_Var_Pop_Fields>;
  var_samp?: Maybe<User_Prefs_Var_Samp_Fields>;
  variance?: Maybe<User_Prefs_Variance_Fields>;
};


/** aggregate fields of "user_prefs" */
export type User_Prefs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Prefs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_prefs" */
export type User_Prefs_Aggregate_Order_By = {
  avg?: Maybe<User_Prefs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Prefs_Max_Order_By>;
  min?: Maybe<User_Prefs_Min_Order_By>;
  stddev?: Maybe<User_Prefs_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Prefs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Prefs_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Prefs_Sum_Order_By>;
  var_pop?: Maybe<User_Prefs_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Prefs_Var_Samp_Order_By>;
  variance?: Maybe<User_Prefs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_prefs" */
export type User_Prefs_Arr_Rel_Insert_Input = {
  data: Array<User_Prefs_Insert_Input>;
  on_conflict?: Maybe<User_Prefs_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Prefs_Avg_Fields = {
  __typename?: 'user_prefs_avg_fields';
  date_create?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_prefs" */
export type User_Prefs_Avg_Order_By = {
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_prefs". All fields are combined with a logical 'AND'. */
export type User_Prefs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Prefs_Bool_Exp>>>;
  _not?: Maybe<User_Prefs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Prefs_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  date_create?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  prefKey?: Maybe<String_Comparison_Exp>;
  prefValue?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_prefs" */
export enum User_Prefs_Constraint {
  /** unique or primary key constraint */
  UserPrefsPkey = 'user_prefs_pkey',
  /** unique or primary key constraint */
  UserPrefsUserIdPrefKeyKey = 'user_prefs_user_id_pref_key_key'
}

/** input type for incrementing integer column in table "user_prefs" */
export type User_Prefs_Inc_Input = {
  date_create?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_prefs" */
export type User_Prefs_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  prefKey?: Maybe<Scalars['String']>;
  prefValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Prefs_Max_Fields = {
  __typename?: 'user_prefs_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  prefKey?: Maybe<Scalars['String']>;
  prefValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_prefs" */
export type User_Prefs_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  prefKey?: Maybe<Order_By>;
  prefValue?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Prefs_Min_Fields = {
  __typename?: 'user_prefs_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  prefKey?: Maybe<Scalars['String']>;
  prefValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_prefs" */
export type User_Prefs_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  prefKey?: Maybe<Order_By>;
  prefValue?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_prefs" */
export type User_Prefs_Mutation_Response = {
  __typename?: 'user_prefs_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Prefs>;
};

/** input type for inserting object relation for remote table "user_prefs" */
export type User_Prefs_Obj_Rel_Insert_Input = {
  data: User_Prefs_Insert_Input;
  on_conflict?: Maybe<User_Prefs_On_Conflict>;
};

/** on conflict condition type for table "user_prefs" */
export type User_Prefs_On_Conflict = {
  constraint: User_Prefs_Constraint;
  update_columns: Array<User_Prefs_Update_Column>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};

/** ordering options when selecting data from "user_prefs" */
export type User_Prefs_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  prefKey?: Maybe<Order_By>;
  prefValue?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_prefs" */
export type User_Prefs_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_prefs" */
export enum User_Prefs_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrefKey = 'prefKey',
  /** column name */
  PrefValue = 'prefValue',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_prefs" */
export type User_Prefs_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  prefKey?: Maybe<Scalars['String']>;
  prefValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Prefs_Stddev_Fields = {
  __typename?: 'user_prefs_stddev_fields';
  date_create?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_prefs" */
export type User_Prefs_Stddev_Order_By = {
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Prefs_Stddev_Pop_Fields = {
  __typename?: 'user_prefs_stddev_pop_fields';
  date_create?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_prefs" */
export type User_Prefs_Stddev_Pop_Order_By = {
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Prefs_Stddev_Samp_Fields = {
  __typename?: 'user_prefs_stddev_samp_fields';
  date_create?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_prefs" */
export type User_Prefs_Stddev_Samp_Order_By = {
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Prefs_Sum_Fields = {
  __typename?: 'user_prefs_sum_fields';
  date_create?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_prefs" */
export type User_Prefs_Sum_Order_By = {
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "user_prefs" */
export enum User_Prefs_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrefKey = 'prefKey',
  /** column name */
  PrefValue = 'prefValue',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type User_Prefs_Var_Pop_Fields = {
  __typename?: 'user_prefs_var_pop_fields';
  date_create?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_prefs" */
export type User_Prefs_Var_Pop_Order_By = {
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Prefs_Var_Samp_Fields = {
  __typename?: 'user_prefs_var_samp_fields';
  date_create?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_prefs" */
export type User_Prefs_Var_Samp_Order_By = {
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Prefs_Variance_Fields = {
  __typename?: 'user_prefs_variance_fields';
  date_create?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_prefs" */
export type User_Prefs_Variance_Order_By = {
  date_create?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/**
 * Enum for our User Roles
 *
 *
 * columns and relationships of "user_role_types"
 */
export type User_Role_Types = {
  __typename?: 'user_role_types';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "user_role_types" */
export type User_Role_Types_Aggregate = {
  __typename?: 'user_role_types_aggregate';
  aggregate?: Maybe<User_Role_Types_Aggregate_Fields>;
  nodes: Array<User_Role_Types>;
};

/** aggregate fields of "user_role_types" */
export type User_Role_Types_Aggregate_Fields = {
  __typename?: 'user_role_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Role_Types_Max_Fields>;
  min?: Maybe<User_Role_Types_Min_Fields>;
};


/** aggregate fields of "user_role_types" */
export type User_Role_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Role_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_role_types" */
export type User_Role_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Role_Types_Max_Order_By>;
  min?: Maybe<User_Role_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_role_types" */
export type User_Role_Types_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Types_Insert_Input>;
  on_conflict?: Maybe<User_Role_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_role_types". All fields are combined with a logical 'AND'. */
export type User_Role_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Role_Types_Bool_Exp>>>;
  _not?: Maybe<User_Role_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Role_Types_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role_types" */
export enum User_Role_Types_Constraint {
  /** unique or primary key constraint */
  UserRoleTypesPkey = 'user_role_types_pkey'
}

export enum User_Role_Types_Enum {
  /** 	Full administrator access. */
  Admin = 'admin',
  /** Org Admins have extends permissions within their Organization */
  OrgAdmin = 'org_admin',
  /** A Service User is set up for each Organization as a user account to manage machine changes, such as processing model changes. */
  ServiceUser = 'service_user',
  /** Transform Employees have limited visibility across Organizations to help manage and facilitate deployment */
  TransformEmployee = 'transform_employee'
}

/** expression to compare columns of type user_role_types_enum. All fields are combined with logical 'AND'. */
export type User_Role_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Role_Types_Enum>;
  _in?: Maybe<Array<User_Role_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Role_Types_Enum>;
  _nin?: Maybe<Array<User_Role_Types_Enum>>;
};

/** input type for inserting data into table "user_role_types" */
export type User_Role_Types_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Role_Types_Max_Fields = {
  __typename?: 'user_role_types_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_role_types" */
export type User_Role_Types_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Types_Min_Fields = {
  __typename?: 'user_role_types_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_role_types" */
export type User_Role_Types_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_role_types" */
export type User_Role_Types_Mutation_Response = {
  __typename?: 'user_role_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Role_Types>;
};

/** input type for inserting object relation for remote table "user_role_types" */
export type User_Role_Types_Obj_Rel_Insert_Input = {
  data: User_Role_Types_Insert_Input;
  on_conflict?: Maybe<User_Role_Types_On_Conflict>;
};

/** on conflict condition type for table "user_role_types" */
export type User_Role_Types_On_Conflict = {
  constraint: User_Role_Types_Constraint;
  update_columns: Array<User_Role_Types_Update_Column>;
  where?: Maybe<User_Role_Types_Bool_Exp>;
};

/** ordering options when selecting data from "user_role_types" */
export type User_Role_Types_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_role_types" */
export type User_Role_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_role_types" */
export enum User_Role_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_role_types" */
export type User_Role_Types_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "user_role_types" */
export enum User_Role_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  /** Timestamp indicating when a user role was added */
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_added?: Maybe<Scalars['Int']>;
  date_removed?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** Soft delete mechanism for a User Role. Rows with non-null values are omitted from list results. */
  removedAt?: Maybe<Scalars['timestamptz']>;
  role: User_Role_Types_Enum;
  /** Timestamp indicating the last time a user role was updated */
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  avg?: Maybe<User_Roles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
  stddev?: Maybe<User_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Roles_Sum_Fields>;
  var_pop?: Maybe<User_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Roles_Var_Samp_Fields>;
  variance?: Maybe<User_Roles_Variance_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_roles" */
export type User_Roles_Aggregate_Order_By = {
  avg?: Maybe<User_Roles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Roles_Max_Order_By>;
  min?: Maybe<User_Roles_Min_Order_By>;
  stddev?: Maybe<User_Roles_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Roles_Sum_Order_By>;
  var_pop?: Maybe<User_Roles_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Roles_Var_Samp_Order_By>;
  variance?: Maybe<User_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_roles" */
export type User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Roles_Insert_Input>;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Roles_Avg_Fields = {
  __typename?: 'user_roles_avg_fields';
  date_added?: Maybe<Scalars['Float']>;
  date_removed?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_roles" */
export type User_Roles_Avg_Order_By = {
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Roles_Bool_Exp>>>;
  _not?: Maybe<User_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Roles_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  date_added?: Maybe<Int_Comparison_Exp>;
  date_removed?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  removedAt?: Maybe<Timestamptz_Comparison_Exp>;
  role?: Maybe<User_Role_Types_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for incrementing integer column in table "user_roles" */
export type User_Roles_Inc_Input = {
  date_added?: Maybe<Scalars['Int']>;
  date_removed?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_added?: Maybe<Scalars['Int']>;
  date_removed?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  role?: Maybe<User_Role_Types_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_added?: Maybe<Scalars['Int']>;
  date_removed?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_roles" */
export type User_Roles_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  removedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_added?: Maybe<Scalars['Int']>;
  date_removed?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_roles" */
export type User_Roles_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  removedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Roles>;
};

/** input type for inserting object relation for remote table "user_roles" */
export type User_Roles_Obj_Rel_Insert_Input = {
  data: User_Roles_Insert_Input;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};

/** on conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns: Array<User_Roles_Update_Column>;
  where?: Maybe<User_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "user_roles" */
export type User_Roles_Order_By = {
  createdAt?: Maybe<Order_By>;
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  removedAt?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_roles" */
export type User_Roles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateAdded = 'date_added',
  /** column name */
  DateRemoved = 'date_removed',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  RemovedAt = 'removedAt',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_added?: Maybe<Scalars['Int']>;
  date_removed?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  role?: Maybe<User_Role_Types_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Roles_Stddev_Fields = {
  __typename?: 'user_roles_stddev_fields';
  date_added?: Maybe<Scalars['Float']>;
  date_removed?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_roles" */
export type User_Roles_Stddev_Order_By = {
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Roles_Stddev_Pop_Fields = {
  __typename?: 'user_roles_stddev_pop_fields';
  date_added?: Maybe<Scalars['Float']>;
  date_removed?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_roles" */
export type User_Roles_Stddev_Pop_Order_By = {
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Roles_Stddev_Samp_Fields = {
  __typename?: 'user_roles_stddev_samp_fields';
  date_added?: Maybe<Scalars['Float']>;
  date_removed?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_roles" */
export type User_Roles_Stddev_Samp_Order_By = {
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Roles_Sum_Fields = {
  __typename?: 'user_roles_sum_fields';
  date_added?: Maybe<Scalars['Int']>;
  date_removed?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_roles" */
export type User_Roles_Sum_Order_By = {
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateAdded = 'date_added',
  /** column name */
  DateRemoved = 'date_removed',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  RemovedAt = 'removedAt',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type User_Roles_Var_Pop_Fields = {
  __typename?: 'user_roles_var_pop_fields';
  date_added?: Maybe<Scalars['Float']>;
  date_removed?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_roles" */
export type User_Roles_Var_Pop_Order_By = {
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Roles_Var_Samp_Fields = {
  __typename?: 'user_roles_var_samp_fields';
  date_added?: Maybe<Scalars['Float']>;
  date_removed?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_roles" */
export type User_Roles_Var_Samp_Order_By = {
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Roles_Variance_Fields = {
  __typename?: 'user_roles_variance_fields';
  date_added?: Maybe<Scalars['Float']>;
  date_removed?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_roles" */
export type User_Roles_Variance_Order_By = {
  date_added?: Maybe<Order_By>;
  date_removed?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  annotations: Array<Annotations>;
  /** An aggregated array relationship */
  annotations_aggregate: Annotations_Aggregate;
  /** An array relationship */
  apiKeys: Array<Api_Keys>;
  /** An array relationship */
  apiKeysByRevokerId: Array<Api_Keys>;
  /** An aggregated array relationship */
  apiKeysByRevokerId_aggregate: Api_Keys_Aggregate;
  /** An aggregated array relationship */
  apiKeys_aggregate: Api_Keys_Aggregate;
  auth0Id?: Maybe<Scalars['String']>;
  /** Remote relationship field */
  auth0Profile?: Maybe<Auth0Profile>;
  avatarUrl?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the user was created */
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  dashboards: Array<User_Dashboards>;
  /** An aggregated array relationship */
  dashboards_aggregate: User_Dashboards_Aggregate;
  date_create?: Maybe<Scalars['Int']>;
  date_deactivate?: Maybe<Scalars['Int']>;
  /** Soft delete mechanism for a User. Rows with non-null values are omitted from list results. */
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  /** The `User`'s email address */
  email: Scalars['String'];
  /** An array relationship */
  features: Array<User_Features>;
  /** An aggregated array relationship */
  features_aggregate: User_Features_Aggregate;
  id: Scalars['Int'];
  /** A computed field, executes function "user_is_admin" */
  isAdmin?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  metricCollections: Array<Metric_Collections>;
  /** An aggregated array relationship */
  metricCollections_aggregate: Metric_Collections_Aggregate;
  /** An array relationship */
  metric_approvals: Array<Metric_Approvals>;
  /** An aggregated array relationship */
  metric_approvals_aggregate: Metric_Approvals_Aggregate;
  /** An array relationship */
  metric_views: Array<Metric_View>;
  /** An aggregated array relationship */
  metric_views_aggregate: Metric_View_Aggregate;
  /** An array relationship */
  modelsUploaded: Array<Models>;
  /** An aggregated array relationship */
  modelsUploaded_aggregate: Models_Aggregate;
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['Int'];
  /** An object relationship */
  primaryDashboard?: Maybe<Dashboards>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  /** An array relationship */
  question_likes: Array<Question_Likes>;
  /** An aggregated array relationship */
  question_likes_aggregate: Question_Likes_Aggregate;
  /** An array relationship */
  question_replies: Array<Question_Replies>;
  /** An aggregated array relationship */
  question_replies_aggregate: Question_Replies_Aggregate;
  /** An array relationship */
  questions: Array<Questions>;
  /** An array relationship */
  questionsByResolvedBy: Array<Questions>;
  /** An aggregated array relationship */
  questionsByResolvedBy_aggregate: Questions_Aggregate;
  /** An array relationship */
  questionsDirectedTo: Array<Question_Directed_To>;
  /** An aggregated array relationship */
  questionsDirectedTo_aggregate: Question_Directed_To_Aggregate;
  /** An aggregated array relationship */
  questions_aggregate: Questions_Aggregate;
  /** An array relationship */
  savedQueries: Array<Saved_Queries>;
  /** An aggregated array relationship */
  savedQueries_aggregate: Saved_Queries_Aggregate;
  /** An array relationship */
  team_members: Array<Team_Members>;
  /** An aggregated array relationship */
  team_members_aggregate: Team_Members_Aggregate;
  /** An array relationship */
  teamsCreated: Array<Teams>;
  /** An aggregated array relationship */
  teamsCreated_aggregate: Teams_Aggregate;
  /** Timestamp indicating the last time the user was updated */
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** The `User`'s full name */
  userName: Scalars['String'];
  /** An array relationship */
  userRoles: Array<User_Roles>;
  /** An aggregated array relationship */
  userRoles_aggregate: User_Roles_Aggregate;
  /** An array relationship */
  user_prefs: Array<User_Prefs>;
  /** An aggregated array relationship */
  user_prefs_aggregate: User_Prefs_Aggregate;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotations_Order_By>>;
  where?: Maybe<Annotations_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersApiKeysArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersApiKeysByRevokerIdArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersApiKeysByRevokerId_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersApiKeys_AggregateArgs = {
  distinct_on?: Maybe<Array<Api_Keys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Api_Keys_Order_By>>;
  where?: Maybe<Api_Keys_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersDashboardsArgs = {
  distinct_on?: Maybe<Array<User_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Dashboards_Order_By>>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersDashboards_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Dashboards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Dashboards_Order_By>>;
  where?: Maybe<User_Dashboards_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersFeaturesArgs = {
  distinct_on?: Maybe<Array<User_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Features_Order_By>>;
  where?: Maybe<User_Features_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersFeatures_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Features_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Features_Order_By>>;
  where?: Maybe<User_Features_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersMetricCollectionsArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersMetricCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Collections_Order_By>>;
  where?: Maybe<Metric_Collections_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersMetric_ApprovalsArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersMetric_Approvals_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Approvals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Approvals_Order_By>>;
  where?: Maybe<Metric_Approvals_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersMetric_ViewsArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersMetric_Views_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_View_Order_By>>;
  where?: Maybe<Metric_View_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersModelsUploadedArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersModelsUploaded_AggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestion_LikesArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestion_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Likes_Order_By>>;
  where?: Maybe<Question_Likes_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestion_RepliesArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestion_Replies_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Replies_Order_By>>;
  where?: Maybe<Question_Replies_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestionsByResolvedByArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestionsByResolvedBy_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestionsDirectedToArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestionsDirectedTo_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Directed_To_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Directed_To_Order_By>>;
  where?: Maybe<Question_Directed_To_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersSavedQueriesArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersSavedQueries_AggregateArgs = {
  distinct_on?: Maybe<Array<Saved_Queries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saved_Queries_Order_By>>;
  where?: Maybe<Saved_Queries_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersTeam_MembersArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersTeam_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Members_Order_By>>;
  where?: Maybe<Team_Members_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersTeamsCreatedArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersTeamsCreated_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersUserRolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersUserRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersUser_PrefsArgs = {
  distinct_on?: Maybe<Array<User_Prefs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Prefs_Order_By>>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};


/**
 * Users are Transform end users. They belong to Organizations and Teams within Organizations.
 *
 *
 * columns and relationships of "users"
 */
export type UsersUser_Prefs_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Prefs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Prefs_Order_By>>;
  where?: Maybe<User_Prefs_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_deactivate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  annotations?: Maybe<Annotations_Bool_Exp>;
  apiKeys?: Maybe<Api_Keys_Bool_Exp>;
  apiKeysByRevokerId?: Maybe<Api_Keys_Bool_Exp>;
  auth0Id?: Maybe<String_Comparison_Exp>;
  avatarUrl?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  dashboards?: Maybe<User_Dashboards_Bool_Exp>;
  date_create?: Maybe<Int_Comparison_Exp>;
  date_deactivate?: Maybe<Int_Comparison_Exp>;
  deactivatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  features?: Maybe<User_Features_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  metricCollections?: Maybe<Metric_Collections_Bool_Exp>;
  metric_approvals?: Maybe<Metric_Approvals_Bool_Exp>;
  metric_views?: Maybe<Metric_View_Bool_Exp>;
  modelsUploaded?: Maybe<Models_Bool_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organizationId?: Maybe<Int_Comparison_Exp>;
  primaryDashboard?: Maybe<Dashboards_Bool_Exp>;
  primaryDashboardId?: Maybe<Int_Comparison_Exp>;
  question_likes?: Maybe<Question_Likes_Bool_Exp>;
  question_replies?: Maybe<Question_Replies_Bool_Exp>;
  questions?: Maybe<Questions_Bool_Exp>;
  questionsByResolvedBy?: Maybe<Questions_Bool_Exp>;
  questionsDirectedTo?: Maybe<Question_Directed_To_Bool_Exp>;
  savedQueries?: Maybe<Saved_Queries_Bool_Exp>;
  team_members?: Maybe<Team_Members_Bool_Exp>;
  teamsCreated?: Maybe<Teams_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userName?: Maybe<String_Comparison_Exp>;
  userRoles?: Maybe<User_Roles_Bool_Exp>;
  user_prefs?: Maybe<User_Prefs_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersAuth0IdKey = 'users_auth0_id_key',
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  date_create?: Maybe<Scalars['Int']>;
  date_deactivate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  annotations?: Maybe<Annotations_Arr_Rel_Insert_Input>;
  apiKeys?: Maybe<Api_Keys_Arr_Rel_Insert_Input>;
  apiKeysByRevokerId?: Maybe<Api_Keys_Arr_Rel_Insert_Input>;
  auth0Id?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  dashboards?: Maybe<User_Dashboards_Arr_Rel_Insert_Input>;
  date_create?: Maybe<Scalars['Int']>;
  date_deactivate?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  features?: Maybe<User_Features_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  metricCollections?: Maybe<Metric_Collections_Arr_Rel_Insert_Input>;
  metric_approvals?: Maybe<Metric_Approvals_Arr_Rel_Insert_Input>;
  metric_views?: Maybe<Metric_View_Arr_Rel_Insert_Input>;
  modelsUploaded?: Maybe<Models_Arr_Rel_Insert_Input>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboard?: Maybe<Dashboards_Obj_Rel_Insert_Input>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  question_likes?: Maybe<Question_Likes_Arr_Rel_Insert_Input>;
  question_replies?: Maybe<Question_Replies_Arr_Rel_Insert_Input>;
  questions?: Maybe<Questions_Arr_Rel_Insert_Input>;
  questionsByResolvedBy?: Maybe<Questions_Arr_Rel_Insert_Input>;
  questionsDirectedTo?: Maybe<Question_Directed_To_Arr_Rel_Insert_Input>;
  savedQueries?: Maybe<Saved_Queries_Arr_Rel_Insert_Input>;
  team_members?: Maybe<Team_Members_Arr_Rel_Insert_Input>;
  teamsCreated?: Maybe<Teams_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userName?: Maybe<Scalars['String']>;
  userRoles?: Maybe<User_Roles_Arr_Rel_Insert_Input>;
  user_prefs?: Maybe<User_Prefs_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth0Id?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_deactivate?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userName?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  auth0Id?: Maybe<Order_By>;
  avatarUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userName?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth0Id?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_deactivate?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userName?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  auth0Id?: Maybe<Order_By>;
  avatarUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userName?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  annotations_aggregate?: Maybe<Annotations_Aggregate_Order_By>;
  apiKeysByRevokerId_aggregate?: Maybe<Api_Keys_Aggregate_Order_By>;
  apiKeys_aggregate?: Maybe<Api_Keys_Aggregate_Order_By>;
  auth0Id?: Maybe<Order_By>;
  avatarUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  dashboards_aggregate?: Maybe<User_Dashboards_Aggregate_Order_By>;
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  deactivatedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  features_aggregate?: Maybe<User_Features_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  metricCollections_aggregate?: Maybe<Metric_Collections_Aggregate_Order_By>;
  metric_approvals_aggregate?: Maybe<Metric_Approvals_Aggregate_Order_By>;
  metric_views_aggregate?: Maybe<Metric_View_Aggregate_Order_By>;
  modelsUploaded_aggregate?: Maybe<Models_Aggregate_Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboard?: Maybe<Dashboards_Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
  question_likes_aggregate?: Maybe<Question_Likes_Aggregate_Order_By>;
  question_replies_aggregate?: Maybe<Question_Replies_Aggregate_Order_By>;
  questionsByResolvedBy_aggregate?: Maybe<Questions_Aggregate_Order_By>;
  questionsDirectedTo_aggregate?: Maybe<Question_Directed_To_Aggregate_Order_By>;
  questions_aggregate?: Maybe<Questions_Aggregate_Order_By>;
  savedQueries_aggregate?: Maybe<Saved_Queries_Aggregate_Order_By>;
  team_members_aggregate?: Maybe<Team_Members_Aggregate_Order_By>;
  teamsCreated_aggregate?: Maybe<Teams_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  userName?: Maybe<Order_By>;
  userRoles_aggregate?: Maybe<User_Roles_Aggregate_Order_By>;
  user_prefs_aggregate?: Maybe<User_Prefs_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Auth0Id = 'auth0Id',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  DateDeactivate = 'date_deactivate',
  /** column name */
  DeactivatedAt = 'deactivatedAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrimaryDashboardId = 'primaryDashboardId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserName = 'userName'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth0Id?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  date_create?: Maybe<Scalars['Int']>;
  date_deactivate?: Maybe<Scalars['Int']>;
  deactivatedAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userName?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_deactivate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_deactivate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_deactivate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  date_create?: Maybe<Scalars['Int']>;
  date_deactivate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Auth0Id = 'auth0Id',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateCreate = 'date_create',
  /** column name */
  DateDeactivate = 'date_deactivate',
  /** column name */
  DeactivatedAt = 'deactivatedAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PrimaryDashboardId = 'primaryDashboardId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserName = 'userName'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_deactivate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_deactivate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  date_create?: Maybe<Scalars['Float']>;
  date_deactivate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  primaryDashboardId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  date_create?: Maybe<Order_By>;
  date_deactivate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organizationId?: Maybe<Order_By>;
  primaryDashboardId?: Maybe<Order_By>;
};


export type MqlServerUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type MqlServerUrlQuery = (
  { __typename?: 'query_root' }
  & Pick<Query_Root, 'mqlServerUrl'>
);
