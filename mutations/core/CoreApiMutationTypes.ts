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
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
};

/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type Query = {
  __typename?: 'Query';
  auth0Profile?: Maybe<Auth0Profile>;
  mqlServerUrl?: Maybe<Scalars['String']>;
  latestMqlServer?: Maybe<MqlServerVersion>;
  myOrganization?: Maybe<Organization>;
  myUser?: Maybe<User>;
  allFeatures?: Maybe<Array<Maybe<Feature>>>;
  allOrganizations?: Maybe<Array<Maybe<Organization>>>;
  totalFeatures?: Maybe<Scalars['Int']>;
  totalOrganizations?: Maybe<Scalars['Int']>;
  organizationTest?: Maybe<Organization>;
  featureTest?: Maybe<Feature>;
  allMetricFilters?: Maybe<Scalars['GenericScalar']>;
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryAuth0ProfileArgs = {
  auth0Id: Scalars['String'];
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryAllFeaturesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<FeatureStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FeatureOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryAllOrganizationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<OrganizationStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryOrganizationTestArgs = {
  id: Scalars['ID'];
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryFeatureTestArgs = {
  id: Scalars['ID'];
};

/** A wrapper for the response we get from Auth0's user profile API */
export type Auth0Profile = {
  __typename?: 'Auth0Profile';
  picture?: Maybe<Scalars['String']>;
  lastIp?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  loginsCount?: Maybe<Scalars['Int']>;
  blocked?: Maybe<Scalars['Boolean']>;
};


/**
 * This is the externally-facing Graphene object representing the available MQL server download.
 *
 * TODO: There's likely a simple way to merge these two objects together
 */
export type MqlServerVersion = {
  __typename?: 'MQLServerVersion';
  version?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  versionHash?: Maybe<Scalars['String']>;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['ID'];
  name: Scalars['String'];
  domain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deactivatedAt?: Maybe<Scalars['DateTime']>;
  shardId: Scalars['Int'];
  logoUrl?: Maybe<Scalars['String']>;
  primaryConfigRepo: Scalars['String'];
  primaryConfigBranch: Scalars['String'];
  mqlServerUrl?: Maybe<Scalars['String']>;
  sourceControlUrl?: Maybe<Scalars['String']>;
  mqlServerLogs?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  isHosted: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<User>>>;
  mqlServers?: Maybe<Array<Maybe<OrgMqlServer>>>;
  models?: Maybe<Array<Maybe<Model>>>;
  orgMetrics?: Maybe<Array<Maybe<OrgMetric>>>;
  mqlHeartbeats?: Maybe<Array<Maybe<MqlHeartbeat>>>;
  currentModel?: Maybe<Array<Maybe<Model>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  metricViews?: Maybe<Array<Maybe<MetricView>>>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  teamViews?: Maybe<Array<Maybe<TeamView>>>;
  activeFeatures?: Maybe<Array<Maybe<Feature>>>;
  dashboards?: Maybe<Array<Maybe<Dashboard>>>;
  metricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
  apiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  questions?: Maybe<Array<Maybe<Question>>>;
  question?: Maybe<Question>;
  annotations?: Maybe<Array<Maybe<Annotation>>>;
  recentQuestions?: Maybe<Array<Maybe<Question>>>;
  recentAnnotations?: Maybe<Array<Maybe<Annotation>>>;
  totalQuestions?: Maybe<Scalars['Int']>;
  totalAnnotations?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
  totalMetrics?: Maybe<Scalars['Int']>;
  latestMqlHeartbeat?: Maybe<MqlHeartbeat>;
  totalUsers?: Maybe<Scalars['Int']>;
  totalTeams?: Maybe<Scalars['Int']>;
  totalMqlServers?: Maybe<Scalars['Int']>;
  metric?: Maybe<Metric>;
  team?: Maybe<Team>;
  dashboard?: Maybe<Dashboard>;
  savedQuery?: Maybe<SavedQuery>;
  metricCollection?: Maybe<MetricCollection>;
  totalMetricCollections?: Maybe<Scalars['Int']>;
  totalSavedQueries?: Maybe<Scalars['Int']>;
};


export type OrganizationUsersArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationMqlServersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<OrgMqlServerStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrgMqlServerOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationModelsArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type OrganizationTeamsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationQuestionArgs = {
  id: Scalars['ID'];
};


export type OrganizationAnnotationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationRecentQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationRecentAnnotationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationMetricsArgs = {
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  tiers?: Maybe<Array<Maybe<MetricTier>>>;
  types?: Maybe<Array<Maybe<MetricType>>>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationMetricArgs = {
  name: Scalars['String'];
};


export type OrganizationTeamArgs = {
  slug: Scalars['String'];
};


export type OrganizationDashboardArgs = {
  id: Scalars['ID'];
};


export type OrganizationSavedQueryArgs = {
  id: Scalars['ID'];
};


export type OrganizationMetricCollectionArgs = {
  slug: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  auth0Id: Scalars['String'];
  userName: Scalars['String'];
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deactivatedAt?: Maybe<Scalars['DateTime']>;
  avatarUrl?: Maybe<Scalars['String']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  dateCreate?: Maybe<Scalars['Int']>;
  dateDeactivate?: Maybe<Scalars['Int']>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
  prefs?: Maybe<Array<Maybe<UserPref>>>;
  activeUserRoles?: Maybe<Array<Maybe<UserRole>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  teamMemberships?: Maybe<Array<Maybe<TeamMember>>>;
  dashboards?: Maybe<Array<Maybe<Dashboard>>>;
  primaryDashboard?: Maybe<Dashboard>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  organization?: Maybe<Organization>;
  teamViews?: Maybe<Array<Maybe<TeamView>>>;
  activeFeatures?: Maybe<Array<Maybe<Feature>>>;
  metricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
  apiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  mqlServerUrl?: Maybe<Scalars['String']>;
  activeRoles?: Maybe<Array<Maybe<Scalars['String']>>>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isOrgAdmin?: Maybe<Scalars['Boolean']>;
  auth0Profile?: Maybe<Auth0Profile>;
  totalTeams?: Maybe<Scalars['Int']>;
  totalApiKeys?: Maybe<Scalars['Int']>;
  totalSavedQueries?: Maybe<Scalars['Int']>;
  totalViewedMetrics?: Maybe<Scalars['Int']>;
  totalMetricCollections?: Maybe<Scalars['Int']>;
  viewedTeams?: Maybe<Array<Maybe<Team>>>;
  totalViewedTeams?: Maybe<Scalars['Int']>;
  viewedMetricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
  totalViewedMetricCollections?: Maybe<Scalars['Int']>;
  viewedMetrics?: Maybe<Array<Maybe<Metric>>>;
};


export type UserTeamsArgs = {
  isAdminOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserApiKeysArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<ApiKeyStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApiKeyOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserViewedTeamsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserViewedMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserViewedMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};

export type UserRole = {
  __typename?: 'UserRole';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  userId: Scalars['Int'];
  role: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  dateAdded?: Maybe<Scalars['Int']>;
  dateRemoved?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization>;
  user?: Maybe<User>;
};

export type UserPref = {
  __typename?: 'UserPref';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  userId: Scalars['Int'];
  prefKey: Scalars['String'];
  prefValue: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  dateCreate?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization>;
  user?: Maybe<User>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  name: Scalars['String'];
  createdBy?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  theme?: Maybe<Scalars['String']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deactivatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  createdTs?: Maybe<Scalars['Int']>;
  deactivatedTs?: Maybe<Scalars['Int']>;
  createdByUser?: Maybe<User>;
  organization?: Maybe<Organization>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  adminMembers?: Maybe<Array<Maybe<TeamMember>>>;
  memberUsers?: Maybe<Array<Maybe<User>>>;
  dashboards?: Maybe<Array<Maybe<Dashboard>>>;
  primaryDashboard?: Maybe<Dashboard>;
  featuredMetricCollection?: Maybe<MetricCollection>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  views?: Maybe<Array<Maybe<TeamView>>>;
  metricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
  teamAdminIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userIsTeamAdmin?: Maybe<Scalars['Boolean']>;
  totalMetrics?: Maybe<Scalars['Int']>;
  totalSavedQueries?: Maybe<Scalars['Int']>;
  totalMetricCollections?: Maybe<Scalars['Int']>;
  totalMembers?: Maybe<Scalars['Int']>;
  totalRecentViews?: Maybe<Scalars['Int']>;
  totalRecentViewsForUser?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
};


export type TeamMembersArgs = {
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamMemberUserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type TeamSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type TeamMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type TeamMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  id: Scalars['ID'];
  teamId: Scalars['Int'];
  organizationId: Scalars['Int'];
  userId: Scalars['Int'];
  isTeamAdmin: Scalars['Boolean'];
  joinedAt?: Maybe<Scalars['DateTime']>;
  joinedTs?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
};

/** An enumeration. */
export enum TeamMemberUserOrderBy {
  TeamMemberId = 'TeamMember_ID',
  TeamMemberTeamId = 'TeamMember_TEAM_ID',
  TeamMemberOrganizationId = 'TeamMember_ORGANIZATION_ID',
  TeamMemberUserId = 'TeamMember_USER_ID',
  TeamMemberIsTeamAdmin = 'TeamMember_IS_TEAM_ADMIN',
  TeamMemberJoinedAt = 'TeamMember_JOINED_AT',
  TeamMemberJoinedTs = 'TeamMember_JOINED_TS',
  UserId = 'User_ID',
  UserOrganizationId = 'User_ORGANIZATION_ID',
  UserAuth0Id = 'User_AUTH0_ID',
  UserUserName = 'User_USER_NAME',
  UserEmail = 'User_EMAIL',
  UserCreatedAt = 'User_CREATED_AT',
  UserUpdatedAt = 'User_UPDATED_AT',
  UserDeactivatedAt = 'User_DEACTIVATED_AT',
  UserAvatarUrl = 'User_AVATAR_URL',
  UserPrimaryDashboardId = 'User_PRIMARY_DASHBOARD_ID',
  UserDateCreate = 'User_DATE_CREATE',
  UserDateDeactivate = 'User_DATE_DEACTIVATE'
}

export type Dashboard = {
  __typename?: 'Dashboard';
  id: Scalars['ID'];
  title: Scalars['String'];
  dashboardLayout: Scalars['String'];
  organizationId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  organization?: Maybe<Organization>;
  sections?: Maybe<Array<Maybe<DashboardSection>>>;
};

export type DashboardSection = {
  __typename?: 'DashboardSection';
  id: Scalars['ID'];
  dashboardId: Scalars['Int'];
  dashboardSectionType: Scalars['String'];
  dashboard?: Maybe<Dashboard>;
  items?: Maybe<Array<Maybe<DashboardItem>>>;
};

export type DashboardItem = {
  __typename?: 'DashboardItem';
  id: Scalars['ID'];
  dashboardSectionId: Scalars['Int'];
  dashboardRenderableType: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
  metricId?: Maybe<Scalars['Int']>;
  metricCollectionId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  dashboardSection?: Maybe<DashboardSection>;
  metricCollection?: Maybe<MetricCollection>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
};

export type MetricCollection = {
  __typename?: 'MetricCollection';
  id: Scalars['ID'];
  title: Scalars['String'];
  organizationId: Scalars['Int'];
  primaryDashboardId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  createdBy: Scalars['Int'];
  ownerTeamId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  createdByUser?: Maybe<User>;
  organization?: Maybe<Organization>;
  teamOwner?: Maybe<Team>;
  primaryDashboard?: Maybe<Dashboard>;
  items?: Maybe<Array<Maybe<MetricCollectionMetric>>>;
  views?: Maybe<Array<Maybe<MetricCollectionView>>>;
  totalItems?: Maybe<Scalars['Int']>;
  totalRecentViews?: Maybe<Scalars['Int']>;
  totalRecentViewsForUser?: Maybe<Scalars['Int']>;
  userCanEdit?: Maybe<Scalars['Boolean']>;
};


export type MetricCollectionItemsArgs = {
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionMetricOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};

export type MetricCollectionMetric = {
  __typename?: 'MetricCollectionMetric';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  metricCollectionId: Scalars['Int'];
  metricId: Scalars['Int'];
  position: Scalars['Int'];
  emphasis: Scalars['Int'];
  metricCollection?: Maybe<MetricCollection>;
  orgMetric?: Maybe<OrgMetric>;
  metric?: Maybe<Metric>;
};

export type OrgMetric = {
  __typename?: 'OrgMetric';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  organizationId: Scalars['Int'];
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  userOwners?: Maybe<Array<Maybe<MetricUserOwner>>>;
  teamOwners?: Maybe<Array<Maybe<MetricTeamOwner>>>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  versions?: Maybe<Array<Maybe<Metric>>>;
  metricAnnotations?: Maybe<Array<Maybe<MetricAnnotation>>>;
};

export type MetricUserOwner = {
  __typename?: 'MetricUserOwner';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  orgMetricId?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  organization?: Maybe<Organization>;
};

export type MetricTeamOwner = {
  __typename?: 'MetricTeamOwner';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  metricName?: Maybe<Scalars['String']>;
  teamId: Scalars['Int'];
  createdTs?: Maybe<Scalars['Int']>;
  orgMetricId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  team?: Maybe<Team>;
  organization?: Maybe<Organization>;
};

export type SavedQuery = {
  __typename?: 'SavedQuery';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdBy: Scalars['Int'];
  ownerTeamId?: Maybe<Scalars['Int']>;
  serializedQuery?: Maybe<Scalars['GenericScalar']>;
  createdByUser?: Maybe<User>;
  organization?: Maybe<Organization>;
  ownerTeam?: Maybe<Team>;
  orgMetrics?: Maybe<Array<Maybe<OrgMetric>>>;
  totalMetrics?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
};


export type SavedQueryMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type Metric = {
  __typename?: 'Metric';
  metadata_: Scalars['JSONString'];
  id?: Maybe<Scalars['Int']>;
  displayName: Scalars['String'];
  description: Scalars['String'];
  tier: Scalars['Int'];
  metricType: Scalars['Int'];
  metricId?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['GenericScalar']>;
  createdAt: Scalars['DateTime'];
  hash: Scalars['String'];
  organizationId: Scalars['Int'];
  sourceDataSourceVersions: Scalars['JSONString'];
  orgDataSourceId?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization>;
  orgMetric?: Maybe<OrgMetric>;
  model?: Maybe<Array<Maybe<Model>>>;
  userOwners?: Maybe<Array<Maybe<MetricUserOwner>>>;
  teamOwners?: Maybe<Array<Maybe<MetricTeamOwner>>>;
  views?: Maybe<MetricView>;
  questions?: Maybe<Array<Maybe<Question>>>;
  resolvedQuestions?: Maybe<Question>;
  unresolvedQuestions?: Maybe<Question>;
  metricLineageDataSources?: Maybe<Array<Maybe<MetricLineageDataSource>>>;
  metadata?: Maybe<Scalars['GenericScalar']>;
  recentQuestions?: Maybe<Array<Maybe<Question>>>;
  recentAnnotations?: Maybe<Array<Maybe<Annotation>>>;
  totalQuestions?: Maybe<Scalars['Int']>;
  totalAnnotations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  latestApproval?: Maybe<MetricApproval>;
  annotations?: Maybe<Array<Maybe<Annotation>>>;
  currentDescription?: Maybe<Scalars['String']>;
  totalRecentViews?: Maybe<Scalars['Int']>;
  totalRecentViewsForUser?: Maybe<Scalars['Int']>;
  userIsMetricOwner?: Maybe<Scalars['Boolean']>;
  userCanEdit?: Maybe<Scalars['Boolean']>;
  dataSources?: Maybe<Array<Maybe<DataSourceVersion>>>;
  totalDataSources?: Maybe<Scalars['Int']>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  totalSavedQueries?: Maybe<Scalars['Int']>;
  totalResolvedQuestions?: Maybe<Scalars['Int']>;
  totalUnresolvedQuestions?: Maybe<Scalars['Int']>;
  ownerTeams?: Maybe<Array<Maybe<Team>>>;
  totalOwnerTeams?: Maybe<Scalars['Int']>;
  ownerUsers?: Maybe<Array<Maybe<User>>>;
  totalOwnerUsers?: Maybe<Scalars['Int']>;
};


export type MetricQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricRecentQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricRecentAnnotationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricAnnotationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricDataSourcesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<DataSourceVersionStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DataSourceVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricOwnerTeamsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricOwnerUsersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type Model = {
  __typename?: 'Model';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  uploaderId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  gitRepo: Scalars['String'];
  gitBranch: Scalars['String'];
  gitCommit: Scalars['String'];
  gitIsDirty: Scalars['Boolean'];
  executionContext?: Maybe<Scalars['String']>;
  isCurrent: Scalars['Boolean'];
  uploader?: Maybe<User>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
  modelDataSources?: Maybe<Array<Maybe<ModelDataSource>>>;
  organization?: Maybe<Organization>;
};

export type ModelDataSource = {
  __typename?: 'ModelDataSource';
  orgDataSourceId: Scalars['ID'];
  modelId: Scalars['ID'];
  dataSourceVersionId: Scalars['ID'];
  dataSourceVersion?: Maybe<DataSourceVersion>;
  model?: Maybe<Model>;
};

export type DataSourceVersion = {
  __typename?: 'DataSourceVersion';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  owners?: Maybe<Scalars['JSONString']>;
  connection: Scalars['String'];
  sqlTable?: Maybe<Scalars['String']>;
  sqlQuery?: Maybe<Scalars['String']>;
  identifiers: Scalars['JSONString'];
  measures?: Maybe<Scalars['GenericScalar']>;
  dimensions: Scalars['JSONString'];
  dataSourceMetadata?: Maybe<Scalars['GenericScalar']>;
  mutability: Scalars['JSONString'];
  constraint?: Maybe<Scalars['JSONString']>;
  createdAt: Scalars['DateTime'];
  hash: Scalars['String'];
  organizationId: Scalars['Int'];
  organization?: Maybe<Organization>;
  metricLineageDataSources?: Maybe<Array<Maybe<MetricLineageDataSource>>>;
};

export type MetricLineageDataSource = {
  __typename?: 'MetricLineageDataSource';
  id: Scalars['ID'];
  metricVersionId?: Maybe<Scalars['Int']>;
  dataSourceVersionId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  organizationId: Scalars['Int'];
  dataSourceVersion?: Maybe<DataSourceVersion>;
  metric?: Maybe<Metric>;
  organization?: Maybe<Organization>;
};

export type MetricView = {
  __typename?: 'MetricView';
  organizationId: Scalars['Int'];
  userId: Scalars['ID'];
  metricId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  metricName?: Maybe<Scalars['String']>;
  viewedTs?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization>;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  authorId: Scalars['Int'];
  resolved?: Maybe<Scalars['Boolean']>;
  resolvedBy?: Maybe<Scalars['Int']>;
  resolvedAt?: Maybe<Scalars['DateTime']>;
  text: Scalars['String'];
  priority: Scalars['String'];
  notifiedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  metricId?: Maybe<Scalars['Int']>;
  resolvedTs?: Maybe<Scalars['Int']>;
  createdTs?: Maybe<Scalars['Int']>;
  metricName: Scalars['String'];
  organization?: Maybe<Organization>;
  replies?: Maybe<Array<Maybe<QuestionReply>>>;
  orgMetric?: Maybe<OrgMetric>;
  author?: Maybe<User>;
  resolvedByUser?: Maybe<User>;
  directedToUsers?: Maybe<Array<Maybe<User>>>;
  directedToTeams?: Maybe<Array<Maybe<Team>>>;
  totalLikes?: Maybe<Scalars['Int']>;
  likedByCurrentUser?: Maybe<Scalars['Boolean']>;
  totalReplies?: Maybe<Scalars['Int']>;
  currentUserIsAuthor?: Maybe<Scalars['Boolean']>;
  metric?: Maybe<Metric>;
};


export type QuestionRepliesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionReplyStrColumn>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionReplyOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};

export type QuestionReply = {
  __typename?: 'QuestionReply';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  questionId: Scalars['Int'];
  authorId: Scalars['Int'];
  text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdTs?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization>;
  author?: Maybe<User>;
  question?: Maybe<Question>;
  likedByCurrentUser?: Maybe<Scalars['Boolean']>;
  totalLikes?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum QuestionReplyStrColumn {
  Text = 'TEXT'
}

/** An enumeration. */
export enum QuestionReplyOrderBy {
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  QuestionId = 'QUESTION_ID',
  AuthorId = 'AUTHOR_ID',
  Text = 'TEXT',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  CreatedTs = 'CREATED_TS'
}

/** An enumeration. */
export enum QuestionStrColumn {
  Text = 'TEXT',
  Priority = 'PRIORITY',
  MetricName = 'METRIC_NAME'
}

/** An enumeration. */
export enum QuestionOrderBy {
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  AuthorId = 'AUTHOR_ID',
  Resolved = 'RESOLVED',
  ResolvedBy = 'RESOLVED_BY',
  ResolvedAt = 'RESOLVED_AT',
  Text = 'TEXT',
  Priority = 'PRIORITY',
  NotifiedAt = 'NOTIFIED_AT',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  MetricId = 'METRIC_ID',
  ResolvedTs = 'RESOLVED_TS',
  CreatedTs = 'CREATED_TS',
  MetricName = 'METRIC_NAME'
}

export type Annotation = {
  __typename?: 'Annotation';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  authorId: Scalars['Int'];
  title: Scalars['String'];
  text: Scalars['String'];
  expectedImpact: Scalars['String'];
  priority: Scalars['String'];
  dateStartedAt: Scalars['String'];
  dateEndedAt: Scalars['String'];
  notifiedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  dateStart?: Maybe<Scalars['String']>;
  dateEnd?: Maybe<Scalars['String']>;
  timestampCreated?: Maybe<Scalars['Int']>;
  orgMetrics?: Maybe<Array<Maybe<OrgMetric>>>;
  author?: Maybe<User>;
  organization?: Maybe<Organization>;
  metricAnnotations?: Maybe<Array<Maybe<MetricAnnotation>>>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
};

export type MetricAnnotation = {
  __typename?: 'MetricAnnotation';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  annotationId: Scalars['Int'];
  metricId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  metricName?: Maybe<Scalars['String']>;
  dimensionName?: Maybe<Scalars['String']>;
  dimensionValue?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  orgMetric?: Maybe<OrgMetric>;
  dimensions?: Maybe<Array<Maybe<MetricAnnotationDimension>>>;
  annotation?: Maybe<Annotation>;
  metric?: Maybe<Metric>;
};

export type MetricAnnotationDimension = {
  __typename?: 'MetricAnnotationDimension';
  id: Scalars['ID'];
  metricAnnotationId: Scalars['Int'];
  dimensionName: Scalars['String'];
  valueHashes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** An enumeration. */
export enum AnnotationStrColumn {
  Title = 'TITLE',
  Text = 'TEXT',
  ExpectedImpact = 'EXPECTED_IMPACT',
  Priority = 'PRIORITY',
  DateStart = 'DATE_START',
  DateEnd = 'DATE_END'
}

/** An enumeration. */
export enum AnnotationOrderBy {
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  AuthorId = 'AUTHOR_ID',
  Title = 'TITLE',
  Text = 'TEXT',
  ExpectedImpact = 'EXPECTED_IMPACT',
  Priority = 'PRIORITY',
  DateStartedAt = 'DATE_STARTED_AT',
  DateEndedAt = 'DATE_ENDED_AT',
  NotifiedAt = 'NOTIFIED_AT',
  DeletedAt = 'DELETED_AT',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  DateStart = 'DATE_START',
  DateEnd = 'DATE_END',
  TimestampCreated = 'TIMESTAMP_CREATED'
}

export type MetricApproval = {
  __typename?: 'MetricApproval';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  approverId: Scalars['Int'];
  approvedAt?: Maybe<Scalars['DateTime']>;
  metricId?: Maybe<Scalars['Int']>;
  approvalTs?: Maybe<Scalars['Int']>;
  metricName?: Maybe<Scalars['String']>;
  approver?: Maybe<User>;
  organization?: Maybe<Organization>;
};

/** An enumeration. */
export enum DataSourceVersionStrColumn {
  Name = 'NAME',
  Description = 'DESCRIPTION',
  Connection = 'CONNECTION',
  SqlTable = 'SQL_TABLE',
  SqlQuery = 'SQL_QUERY',
  Hash = 'HASH'
}

/** An enumeration. */
export enum DataSourceVersionOrderBy {
  Id = 'ID',
  Name = 'NAME',
  Description = 'DESCRIPTION',
  Owners = 'OWNERS',
  Connection = 'CONNECTION',
  SqlTable = 'SQL_TABLE',
  SqlQuery = 'SQL_QUERY',
  Identifiers = 'IDENTIFIERS',
  Measures = 'MEASURES',
  Dimensions = 'DIMENSIONS',
  DataSourceMetadata = 'DATA_SOURCE_METADATA',
  Mutability = 'MUTABILITY',
  Constraint = 'CONSTRAINT',
  CreatedAt = 'CREATED_AT',
  Hash = 'HASH',
  OrganizationId = 'ORGANIZATION_ID'
}

/** An enumeration. */
export enum SavedQueryStrColumn {
  Title = 'TITLE'
}

/** An enumeration. */
export enum SavedQueryOrderBy {
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Title = 'TITLE',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  DeletedAt = 'DELETED_AT',
  CreatedBy = 'CREATED_BY',
  OwnerTeamId = 'OWNER_TEAM_ID',
  SerializedQuery = 'SERIALIZED_QUERY'
}

/** An enumeration. */
export enum TeamStrColumn {
  Name = 'NAME',
  Slug = 'SLUG',
  Theme = 'THEME',
  Description = 'DESCRIPTION'
}

/** An enumeration. */
export enum TeamOrderBy {
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Name = 'NAME',
  CreatedBy = 'CREATED_BY',
  Slug = 'SLUG',
  Theme = 'THEME',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID',
  FeaturedMetricCollectionId = 'FEATURED_METRIC_COLLECTION_ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  DeactivatedAt = 'DEACTIVATED_AT',
  Description = 'DESCRIPTION',
  CreatedTs = 'CREATED_TS',
  DeactivatedTs = 'DEACTIVATED_TS',
  Views = 'VIEWS'
}

/** An enumeration. */
export enum UserStrColumn {
  Auth0Id = 'AUTH0_ID',
  UserName = 'USER_NAME',
  Email = 'EMAIL',
  AvatarUrl = 'AVATAR_URL'
}

/** An enumeration. */
export enum UserOrderBy {
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Auth0Id = 'AUTH0_ID',
  UserName = 'USER_NAME',
  Email = 'EMAIL',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  DeactivatedAt = 'DEACTIVATED_AT',
  AvatarUrl = 'AVATAR_URL',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID',
  DateCreate = 'DATE_CREATE',
  DateDeactivate = 'DATE_DEACTIVATE'
}

/** An enumeration. */
export enum MetricVersionStrColumn {
  DisplayName = 'DISPLAY_NAME',
  Description = 'DESCRIPTION',
  Hash = 'HASH'
}

/** An enumeration. */
export enum MetricVersionOrderBy {
  Id = 'ID',
  DisplayName = 'DISPLAY_NAME',
  Description = 'DESCRIPTION',
  Tier = 'TIER',
  MetricType = 'METRIC_TYPE',
  MetricId = 'METRIC_ID',
  Params = 'PARAMS',
  Metadata = 'METADATA',
  CreatedAt = 'CREATED_AT',
  Hash = 'HASH',
  OrganizationId = 'ORGANIZATION_ID',
  SourceDataSourceVersions = 'SOURCE_DATA_SOURCE_VERSIONS',
  OrgDataSourceId = 'ORG_DATA_SOURCE_ID',
  Views = 'VIEWS'
}

/** An enumeration. */
export enum MetricCollectionMetricOrderBy {
  Id = 'ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  MetricCollectionId = 'METRIC_COLLECTION_ID',
  MetricId = 'METRIC_ID',
  Position = 'POSITION',
  Emphasis = 'EMPHASIS'
}

export type MetricCollectionView = {
  __typename?: 'MetricCollectionView';
  id: Scalars['ID'];
  metricCollectionId: Scalars['Int'];
  userId: Scalars['Int'];
  organizationId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  metricCollection?: Maybe<MetricCollection>;
  organization?: Maybe<Organization>;
  user?: Maybe<User>;
};

export type TeamView = {
  __typename?: 'TeamView';
  id: Scalars['ID'];
  teamId: Scalars['Int'];
  userId: Scalars['Int'];
  organizationId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  organization?: Maybe<Organization>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
};

/** An enumeration. */
export enum MetricCollectionStrColumn {
  Title = 'TITLE',
  Slug = 'SLUG',
  Description = 'DESCRIPTION'
}

/** An enumeration. */
export enum MetricCollectionOrderBy {
  Id = 'ID',
  Title = 'TITLE',
  OrganizationId = 'ORGANIZATION_ID',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  DeletedAt = 'DELETED_AT',
  Slug = 'SLUG',
  CreatedBy = 'CREATED_BY',
  OwnerTeamId = 'OWNER_TEAM_ID',
  Description = 'DESCRIPTION',
  DefaultEmphasis = 'DEFAULT_EMPHASIS',
  Views = 'VIEWS'
}

export type Feature = {
  __typename?: 'Feature';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  retiredAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<Array<Maybe<User>>>;
  organizations?: Maybe<Array<Maybe<Organization>>>;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  prefix: Scalars['String'];
  organizationId: Scalars['Int'];
  userId: Scalars['Int'];
  type: Scalars['String'];
  secretHash: Scalars['String'];
  dateRevoked?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  revokedAt?: Maybe<Scalars['DateTime']>;
  revokerId?: Maybe<Scalars['Int']>;
  lastUsedAt?: Maybe<Scalars['DateTime']>;
  scope?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  organization?: Maybe<Organization>;
  revoker?: Maybe<User>;
};

/** An enumeration. */
export enum ApiKeyStrColumn {
  Prefix = 'PREFIX',
  Type = 'TYPE',
  SecretHash = 'SECRET_HASH',
  Scope = 'SCOPE'
}

/** An enumeration. */
export enum ApiKeyOrderBy {
  Prefix = 'PREFIX',
  OrganizationId = 'ORGANIZATION_ID',
  UserId = 'USER_ID',
  Type = 'TYPE',
  SecretHash = 'SECRET_HASH',
  DateRevoked = 'DATE_REVOKED',
  CreatedAt = 'CREATED_AT',
  RevokedAt = 'REVOKED_AT',
  RevokerId = 'REVOKER_ID',
  LastUsedAt = 'LAST_USED_AT',
  Scope = 'SCOPE'
}

export type OrgMqlServer = {
  __typename?: 'OrgMqlServer';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  url: Scalars['String'];
  isOrgDefault?: Maybe<Scalars['Boolean']>;
  configSecret?: Maybe<Scalars['String']>;
  dwEngine?: Maybe<Scalars['String']>;
  heartbeats?: Maybe<Array<Maybe<MqlHeartbeat>>>;
  organization?: Maybe<Organization>;
  latestHeartbeat?: Maybe<MqlHeartbeat>;
};

export type MqlHeartbeat = {
  __typename?: 'MqlHeartbeat';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  userId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  versionSha: Scalars['String'];
  status: Scalars['String'];
  details?: Maybe<Scalars['JSONString']>;
  mqlServerId?: Maybe<Scalars['Int']>;
  mqlServer?: Maybe<OrgMqlServer>;
  user?: Maybe<User>;
  org?: Maybe<Organization>;
  orgMqlServers?: Maybe<OrgMqlServer>;
};

/** An enumeration. */
export enum OrgMqlServerStrColumn {
  Name = 'NAME',
  Url = 'URL',
  ConfigSecret = 'CONFIG_SECRET',
  DwEngine = 'DW_ENGINE'
}

/** An enumeration. */
export enum OrgMqlServerOrderBy {
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Name = 'NAME',
  Url = 'URL',
  IsOrgDefault = 'IS_ORG_DEFAULT',
  ConfigSecret = 'CONFIG_SECRET',
  DwEngine = 'DW_ENGINE'
}

/** An enumeration. */
export enum MetricTier {
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE'
}

/** An enumeration. */
export enum MetricType {
  MeasureProxy = 'MEASURE_PROXY',
  Ratio = 'RATIO',
  Expr = 'EXPR'
}

/** An enumeration. */
export enum FeatureStrColumn {
  Name = 'NAME'
}

/** An enumeration. */
export enum FeatureOrderBy {
  Id = 'ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Name = 'NAME',
  RetiredAt = 'RETIRED_AT'
}

/** An enumeration. */
export enum OrganizationStrColumn {
  Name = 'NAME',
  Domain = 'DOMAIN',
  LogoUrl = 'LOGO_URL',
  PrimaryConfigRepo = 'PRIMARY_CONFIG_REPO',
  PrimaryConfigBranch = 'PRIMARY_CONFIG_BRANCH',
  MqlServerUrl = 'MQL_SERVER_URL',
  SourceControlUrl = 'SOURCE_CONTROL_URL',
  MqlServerLogs = 'MQL_SERVER_LOGS',
  Slug = 'SLUG'
}

/** An enumeration. */
export enum OrganizationOrderBy {
  Id = 'ID',
  Name = 'NAME',
  Domain = 'DOMAIN',
  CreatedAt = 'CREATED_AT',
  DeactivatedAt = 'DEACTIVATED_AT',
  ShardId = 'SHARD_ID',
  LogoUrl = 'LOGO_URL',
  PrimaryConfigRepo = 'PRIMARY_CONFIG_REPO',
  PrimaryConfigBranch = 'PRIMARY_CONFIG_BRANCH',
  MqlServerUrl = 'MQL_SERVER_URL',
  SourceControlUrl = 'SOURCE_CONTROL_URL',
  MqlServerLogs = 'MQL_SERVER_LOGS',
  UpdatedAt = 'UPDATED_AT',
  Slug = 'SLUG',
  IsHosted = 'IS_HOSTED'
}

/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type Mutation = {
  __typename?: 'Mutation';
  revokeApiKeyTest?: Maybe<ApiKey>;
  createOrganizationTest?: Maybe<Organization>;
  logMqlLog?: Maybe<LogMqlLogs>;
  setOrgMqlServerConfigSecret?: Maybe<SetOrgMqlServerConfigSecretId>;
  sendMqlHeartbeat?: Maybe<SendMqlHeartbeat>;
  createAnnotationTest?: Maybe<CreateAnnotation>;
  updateAnnotationTest?: Maybe<UpdateAnnotation>;
  removeAnnotation?: Maybe<RemoveAnnotation>;
  /** Update user's email in DB and auth0. Auth0 needs to match for user to login with new email. */
  updateUserEmail?: Maybe<UpdateUserEmail>;
  /** Create API Key for given user. If no user_id passed, create key for authenticated user. */
  createApiKeyTest?: Maybe<CreateApiKey>;
  /** Create User for given org. If no org_id passed, create user in org of authenticated user. */
  createUserTest?: Maybe<CreateUser>;
  /** Add role to user in DB and Auth0. */
  addRoleToUserTest?: Maybe<AddRoleToUser>;
  /** Remove role from user in DB and Auth0. */
  removeRoleFromUserTest?: Maybe<RemoveRoleFromUser>;
  /** Deactivate user in DB and Auth0. */
  deactivateUserTest?: Maybe<DeactivateUser>;
  /** Reactivate user in DB and Auth0. */
  reactivateUserTest?: Maybe<ReactivateUser>;
  /** Update fields on a User. */
  updateUserTest?: Maybe<UpdateUser>;
  setUserPreference?: Maybe<SetUserPreference>;
  featuresCreate?: Maybe<Feature>;
  featuresUpdate?: Maybe<Feature>;
  featuresAddOrg?: Maybe<Feature>;
  featuresAddUser?: Maybe<Feature>;
  featuresRemoveAccess?: Maybe<Feature>;
  questionsCreateReply?: Maybe<Question>;
  questionRepliesLike?: Maybe<QuestionReply>;
  questionsLike?: Maybe<Question>;
  questionRepliesUnlike?: Maybe<QuestionReply>;
  questionsUnlike?: Maybe<Question>;
  questionsCreate?: Maybe<Question>;
  questionsEdit?: Maybe<Question>;
  metricCollectionCreate?: Maybe<MetricCollection>;
  metricCollectionUpdate?: Maybe<MetricCollection>;
  metricCollectionDelete?: Maybe<MetricCollection>;
  orgMqlServerUpdate?: Maybe<OrgMqlServer>;
  orgMqlServerDelete?: Maybe<OrgMqlServer>;
  orgMqlServerCreate?: Maybe<OrgMqlServer>;
  teamsCreate?: Maybe<Team>;
  teamsUpdate?: Maybe<Team>;
  teamsAddMember?: Maybe<Team>;
  teamsRemoveMember?: Maybe<Team>;
  teamSetMemberAdminStatus?: Maybe<Team>;
  teamsAssignAsMetricOwner?: Maybe<Team>;
  teamsRemoveAsMetricOwner?: Maybe<Team>;
  organizationsUpdate?: Maybe<Organization>;
  organizationsDelete?: Maybe<Organization>;
  metricsApprove?: Maybe<Metric>;
  metricsLogView?: Maybe<MetricView>;
  metricCollectionsLogView?: Maybe<MetricCollectionView>;
  teamsLogView?: Maybe<TeamView>;
  metricsAddUserOwners?: Maybe<Metric>;
  metricsRemoveUserOwners?: Maybe<Metric>;
  metricsAssignTeamOwners?: Maybe<Metric>;
  metricsRemoveTeamOwners?: Maybe<Metric>;
  metricsAddDescription?: Maybe<Metric>;
  savedQueryCreate?: Maybe<SavedQuery>;
  savedQueryUpdate?: Maybe<SavedQuery>;
  savedQueryDeactivate?: Maybe<SavedQuery>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationRevokeApiKeyTestArgs = {
  prefix: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateOrganizationTestArgs = {
  name: Scalars['String'];
  primaryConfigRepo?: Maybe<Scalars['String']>;
  primaryConfigBranch?: Maybe<Scalars['String']>;
  mqlServerUrl?: Maybe<Scalars['String']>;
  sourceControlUrl?: Maybe<Scalars['String']>;
  mqlServerLogs?: Maybe<Scalars['String']>;
  isHosted?: Maybe<Scalars['Boolean']>;
  dwEngine?: Maybe<Scalars['String']>;
  mqlServerName?: Maybe<Scalars['String']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationLogMqlLogArgs = {
  level?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSetOrgMqlServerConfigSecretArgs = {
  clientConfigSecretId?: Maybe<Scalars['String']>;
  mqlServerId?: Maybe<Scalars['Int']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSendMqlHeartbeatArgs = {
  mqlServerId?: Maybe<Scalars['Int']>;
  sha: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateAnnotationTestArgs = {
  dateEndedAt: Scalars['Date'];
  dateStartedAt: Scalars['Date'];
  expectedImpact: Scalars['String'];
  metricInputs: Array<Maybe<GMetricAnnotationInput>>;
  priority: Priority;
  text: Scalars['String'];
  title: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationUpdateAnnotationTestArgs = {
  annotationId: Scalars['Int'];
  dateEndedAt?: Maybe<Scalars['Date']>;
  dateStartedAt?: Maybe<Scalars['Date']>;
  expectedImpact?: Maybe<Scalars['String']>;
  metricInputs?: Maybe<Array<Maybe<GMetricAnnotationInput>>>;
  priority?: Maybe<Priority>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationRemoveAnnotationArgs = {
  annotationId: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationUpdateUserEmailArgs = {
  email: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateApiKeyTestArgs = {
  userId?: Maybe<Scalars['Int']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateUserTestArgs = {
  email: Scalars['String'];
  isOrgOwner?: Maybe<Scalars['Boolean']>;
  organizationId?: Maybe<Scalars['Int']>;
  userName: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationAddRoleToUserTestArgs = {
  role: Scalars['String'];
  userId: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationRemoveRoleFromUserTestArgs = {
  role: Scalars['String'];
  userId: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationDeactivateUserTestArgs = {
  userId: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationReactivateUserTestArgs = {
  userId: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationUpdateUserTestArgs = {
  avatarUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  primaryDashboardId?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSetUserPreferenceArgs = {
  prefKey: Scalars['String'];
  prefValue: Scalars['String'];
  userId?: Maybe<Scalars['ID']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationFeaturesCreateArgs = {
  name: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationFeaturesUpdateArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  retireFeature?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationFeaturesAddOrgArgs = {
  featureId: Scalars['ID'];
  organizationId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationFeaturesAddUserArgs = {
  featureId: Scalars['ID'];
  userId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationFeaturesRemoveAccessArgs = {
  featureId: Scalars['ID'];
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  organizationIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationQuestionsCreateReplyArgs = {
  questionId: Scalars['ID'];
  text: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationQuestionRepliesLikeArgs = {
  id: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationQuestionsLikeArgs = {
  id: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationQuestionRepliesUnlikeArgs = {
  id: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationQuestionsUnlikeArgs = {
  id: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationQuestionsCreateArgs = {
  text: Scalars['String'];
  priority: Scalars['String'];
  metricId: Scalars['ID'];
  directedToUsers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  directedToTeams?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationQuestionsEditArgs = {
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  directedToTeams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  directedToUsers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  resolved?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricCollectionCreateArgs = {
  title: Scalars['String'];
  description: Scalars['String'];
  slug: Scalars['String'];
  defaultEmphasis: Scalars['Int'];
  metrics?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ownerTeamId?: Maybe<Scalars['ID']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricCollectionUpdateArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  primaryDashboardId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  defaultEmphasis?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<MetricCollectionItem>>>;
  ownerTeamId?: Maybe<Scalars['ID']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricCollectionDeleteArgs = {
  id: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrgMqlServerUpdateArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  isOrgDefault?: Maybe<Scalars['Boolean']>;
  configSecret?: Maybe<Scalars['String']>;
  dwEngine?: Maybe<Scalars['String']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrgMqlServerDeleteArgs = {
  id: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrgMqlServerCreateArgs = {
  organizationId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  url: Scalars['String'];
  isOrgDefault?: Maybe<Scalars['Boolean']>;
  configSecret?: Maybe<Scalars['String']>;
  dwEngine?: Maybe<Scalars['String']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTeamsCreateArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
  organizationId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  regularMemberUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  teamAdminUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTeamsUpdateArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  primaryDashboardId?: Maybe<Scalars['Int']>;
  featuredMetricCollectionId?: Maybe<Scalars['Int']>;
  deactivate?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTeamsAddMemberArgs = {
  teamId: Scalars['ID'];
  regularMemberUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  teamAdminUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTeamsRemoveMemberArgs = {
  teamId: Scalars['ID'];
  userId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTeamSetMemberAdminStatusArgs = {
  teamMemberId: Scalars['ID'];
  isTeamAdmin: Scalars['Boolean'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTeamsAssignAsMetricOwnerArgs = {
  teamId: Scalars['ID'];
  metricIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTeamsRemoveAsMetricOwnerArgs = {
  teamId: Scalars['ID'];
  metricIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsUpdateArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  primaryConfigRepo?: Maybe<Scalars['String']>;
  primaryConfigBranch?: Maybe<Scalars['String']>;
  sourceControlUrl?: Maybe<Scalars['String']>;
  mqlServerLogs?: Maybe<Scalars['String']>;
  isHosted?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsDeleteArgs = {
  id: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricsApproveArgs = {
  metricId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricsLogViewArgs = {
  metricId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricCollectionsLogViewArgs = {
  metricCollectionId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTeamsLogViewArgs = {
  teamId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricsAddUserOwnersArgs = {
  metricId: Scalars['ID'];
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricsRemoveUserOwnersArgs = {
  metricId: Scalars['ID'];
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricsAssignTeamOwnersArgs = {
  metricId: Scalars['ID'];
  teamIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricsRemoveTeamOwnersArgs = {
  metricId: Scalars['ID'];
  teamIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMetricsAddDescriptionArgs = {
  metricId: Scalars['ID'];
  description: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSavedQueryCreateArgs = {
  title: Scalars['String'];
  serializedQuery: Scalars['GenericScalar'];
  metricIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ownerTeamId?: Maybe<Scalars['ID']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSavedQueryUpdateArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  ownerTeamId?: Maybe<Scalars['Int']>;
  serializedQuery?: Maybe<Scalars['GenericScalar']>;
  metricIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSavedQueryDeactivateArgs = {
  id: Scalars['ID'];
};

export type LogMqlLogs = {
  __typename?: 'LogMQLLogs';
  ok?: Maybe<Scalars['Boolean']>;
};

export type SetOrgMqlServerConfigSecretId = {
  __typename?: 'SetOrgMqlServerConfigSecretId';
  mqlServer?: Maybe<OrgMqlServer>;
};

export type SendMqlHeartbeat = {
  __typename?: 'SendMqlHeartbeat';
  success?: Maybe<Scalars['Boolean']>;
  heartbeat?: Maybe<MqlHeartbeat>;
};

export type CreateAnnotation = {
  __typename?: 'CreateAnnotation';
  annotation?: Maybe<Annotation>;
};


export type GMetricAnnotationInput = {
  metricId: Scalars['Int'];
  dimensions: Array<Maybe<GMetricAnnotationDimensionInput>>;
};

export type GMetricAnnotationDimensionInput = {
  dimensionName: Scalars['String'];
  valueHashes: Array<Maybe<Scalars['String']>>;
};

/** An enumeration. */
export enum Priority {
  NoPriority = 'NO_PRIORITY',
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
  Critical = 'CRITICAL'
}

export type UpdateAnnotation = {
  __typename?: 'UpdateAnnotation';
  annotation?: Maybe<Annotation>;
};

export type RemoveAnnotation = {
  __typename?: 'RemoveAnnotation';
  ok?: Maybe<Scalars['Boolean']>;
};

/** Update user's email in DB and auth0. Auth0 needs to match for user to login with new email. */
export type UpdateUserEmail = {
  __typename?: 'UpdateUserEmail';
  user?: Maybe<User>;
};

/** Create API Key for given user. If no user_id passed, create key for authenticated user. */
export type CreateApiKey = {
  __typename?: 'CreateApiKey';
  createdKeyFullString?: Maybe<Scalars['String']>;
  createdKeyPrefix?: Maybe<Scalars['String']>;
};

/** Create User for given org. If no org_id passed, create user in org of authenticated user. */
export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<User>;
};

/** Add role to user in DB and Auth0. */
export type AddRoleToUser = {
  __typename?: 'AddRoleToUser';
  user?: Maybe<User>;
};

/** Remove role from user in DB and Auth0. */
export type RemoveRoleFromUser = {
  __typename?: 'RemoveRoleFromUser';
  user?: Maybe<User>;
};

/** Deactivate user in DB and Auth0. */
export type DeactivateUser = {
  __typename?: 'DeactivateUser';
  user?: Maybe<User>;
};

/** Reactivate user in DB and Auth0. */
export type ReactivateUser = {
  __typename?: 'ReactivateUser';
  user?: Maybe<User>;
};

/** Update fields on a User. */
export type UpdateUser = {
  __typename?: 'UpdateUser';
  user?: Maybe<User>;
};

export type SetUserPreference = {
  __typename?: 'SetUserPreference';
  user?: Maybe<User>;
};

/** Graphene input object for a metric collection item. Essentially a dataclass. */
export type MetricCollectionItem = {
  metricId: Scalars['ID'];
  emphasis: Scalars['Int'];
  position: Scalars['Int'];
};

export type SetMqlServerMutationVariables = Exact<{
  newServerIdAsString: Scalars['String'];
  userId: Scalars['ID'];
}>;


export type SetMqlServerMutation = (
  { __typename?: 'Mutation' }
  & { setUserPreference?: Maybe<(
    { __typename?: 'SetUserPreference' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & { prefs?: Maybe<Array<Maybe<(
        { __typename?: 'UserPref' }
        & Pick<UserPref, 'id' | 'prefKey' | 'prefValue' | 'userId' | 'createdAt'>
      )>>> }
    )> }
  )> }
);
