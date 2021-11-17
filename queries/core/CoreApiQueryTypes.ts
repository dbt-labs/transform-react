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
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
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
  latestMqlServer?: Maybe<ServiceRelease>;
  latestAvaticaServer?: Maybe<ServiceRelease>;
  myOrganization?: Maybe<Organization>;
  myUser?: Maybe<User>;
  allFeatures?: Maybe<Array<Maybe<Feature>>>;
  allOrganizations?: Maybe<Array<Maybe<Organization>>>;
  totalFeatures?: Maybe<Scalars['Int']>;
  totalOrganizations?: Maybe<Scalars['Int']>;
  organizationTest?: Maybe<Organization>;
  featureTest?: Maybe<Feature>;
  allMetricFilters?: Maybe<Scalars['GenericScalar']>;
  boom?: Maybe<Scalars['Boolean']>;
  transformConfig?: Maybe<TransformConfig>;
  emailCanSignUp?: Maybe<Scalars['Boolean']>;
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
  searchColumns?: Maybe<Array<Maybe<FeatureStrColumns>>>;
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
  searchColumns?: Maybe<Array<Maybe<OrganizationStrColumns>>>;
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


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryBoomArgs = {
  raise_?: Maybe<Scalars['Boolean']>;
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryEmailCanSignUpArgs = {
  email: Scalars['String'];
};

/** A wrapper for the response we get from Auth0's user profile API */
export type Auth0Profile = {
  __typename?: 'Auth0Profile';
  picture?: Maybe<Scalars['String']>;
  lastIp?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  loginsCount?: Maybe<Scalars['Int']>;
  blocked?: Maybe<Scalars['Boolean']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
};


/**
 * This is the externally-facing Graphene object representing the available MQL server download.
 *
 * TODO: There's likely a simple way to merge these two objects together
 */
export type ServiceRelease = {
  __typename?: 'ServiceRelease';
  serviceName?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  versionHash?: Maybe<Scalars['String']>;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['ID'];
  name: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  primaryConfigRepo?: Maybe<Scalars['String']>;
  primaryConfigBranch?: Maybe<Scalars['String']>;
  sourceControlUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deactivatedAt?: Maybe<Scalars['DateTime']>;
  mqlServerLogs?: Maybe<Scalars['String']>;
  isHosted: Scalars['Boolean'];
  type?: Maybe<OrgType>;
  users?: Maybe<Array<Maybe<User>>>;
  mqlServers?: Maybe<Array<Maybe<OrgMqlServer>>>;
  models?: Maybe<Array<Maybe<Model>>>;
  orgMetrics?: Maybe<Array<Maybe<OrgMetric>>>;
  mqlHeartbeats?: Maybe<Array<Maybe<MqlHeartbeat>>>;
  currentModel?: Maybe<Array<Maybe<Model>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  apiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  metricViews?: Maybe<Array<Maybe<MetricView>>>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  teamViews?: Maybe<Array<Maybe<TeamView>>>;
  dashboards?: Maybe<Array<Maybe<Dashboard>>>;
  metricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
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
  mqlServer?: Maybe<OrgMqlServer>;
  totalMqlServers?: Maybe<Scalars['Int']>;
  metric?: Maybe<Metric>;
  team?: Maybe<Team>;
  dashboard?: Maybe<Dashboard>;
  savedQuery?: Maybe<SavedQuery>;
  metricCollection?: Maybe<MetricCollection>;
  totalMetricCollections?: Maybe<Scalars['Int']>;
  totalSavedQueries?: Maybe<Scalars['Int']>;
  totalActiveFeatures?: Maybe<Scalars['Int']>;
  requireMfa?: Maybe<Scalars['Boolean']>;
  allowMfaRememberBrowser?: Maybe<Scalars['Boolean']>;
  mqlServerUrl?: Maybe<Scalars['String']>;
  allowedEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  tierTooltips?: Maybe<Scalars['GenericScalar']>;
  activeFeatures?: Maybe<Array<Maybe<Feature>>>;
};


export type OrganizationUsersArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationMqlServersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<OrgMqlServerStrColumns>>>;
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
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumns>>>;
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
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationRecentQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationRecentAnnotationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumns>>>;
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
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type OrganizationTotalMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  tiers?: Maybe<Array<Maybe<MetricTier>>>;
  types?: Maybe<Array<Maybe<MetricType>>>;
};


export type OrganizationMqlServerArgs = {
  id: Scalars['ID'];
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


export type OrganizationTierTooltipsArgs = {
  tiers: Array<Maybe<Scalars['Int']>>;
};

/** An enumeration. */
export enum OrgType {
  Paid = 'PAID',
  Trial = 'TRIAL',
  Internal = 'INTERNAL',
  Test = 'TEST'
}

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
  roles?: Maybe<Array<Maybe<UserRole>>>;
  prefs?: Maybe<Array<Maybe<UserPref>>>;
  activeUserRoles?: Maybe<Array<Maybe<UserRole>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  teamMemberships?: Maybe<Array<Maybe<TeamMember>>>;
  dashboards?: Maybe<Array<Maybe<Dashboard>>>;
  primaryDashboard?: Maybe<Dashboard>;
  apiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  organization?: Maybe<Organization>;
  teamViews?: Maybe<Array<Maybe<TeamView>>>;
  metricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
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
  totalActiveFeatures?: Maybe<Scalars['Int']>;
  hasAcceptedLatestTermsOfService?: Maybe<Scalars['Boolean']>;
  viewedMetrics?: Maybe<Array<Maybe<Metric>>>;
  newMetrics?: Maybe<Array<Maybe<Metric>>>;
  activeFeatures?: Maybe<Array<Maybe<Feature>>>;
};


export type UserTeamsArgs = {
  isAdminOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserApiKeysArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<ApiKeyStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ApiKeyOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserViewedTeamsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserViewedMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserViewedMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type UserNewMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
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
  orderBy?: Maybe<TeamMemberOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type TeamSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type TeamMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type TeamMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
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
  organization?: Maybe<Organization>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
};

/** An enumeration. */
export enum TeamMemberOrderBy {
  IsTeamAdmin = 'IS_TEAM_ADMIN',
  TeamId = 'TEAM_ID',
  JoinedAt = 'JOINED_AT',
  UserId = 'USER_ID',
  TeamMemberId = 'TeamMember_ID',
  TeamMemberOrganizationId = 'TeamMember_ORGANIZATION_ID',
  UserOrganizationId = 'User_ORGANIZATION_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Auth0Id = 'AUTH0_ID',
  DeactivatedAt = 'DEACTIVATED_AT',
  UpdatedAt = 'UPDATED_AT',
  UserName = 'USER_NAME',
  AvatarUrl = 'AVATAR_URL',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID'
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
  user?: Maybe<Array<Maybe<User>>>;
  team?: Maybe<Array<Maybe<Team>>>;
};

export type DashboardSection = {
  __typename?: 'DashboardSection';
  id: Scalars['ID'];
  dashboardId: Scalars['Int'];
  dashboardSectionType: Scalars['String'];
  items?: Maybe<Array<Maybe<DashboardItem>>>;
  dashboard?: Maybe<Dashboard>;
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
  views?: Maybe<Array<Maybe<MetricCollectionView>>>;
  items?: Maybe<Array<Maybe<MetricCollectionMetric>>>;
  collectionItems?: Maybe<Array<Maybe<CollectionItem>>>;
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


export type MetricCollectionCollectionItemsArgs = {
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricCollectionMetricOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};

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

export type MetricCollectionMetric = {
  __typename?: 'MetricCollectionMetric';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  metricCollectionId: Scalars['Int'];
  metricId?: Maybe<Scalars['Int']>;
  savedQueryId?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
  emphasis: Scalars['Int'];
  metricCollection?: Maybe<MetricCollection>;
  orgMetric?: Maybe<OrgMetric>;
  savedQuery?: Maybe<SavedQuery>;
  metric?: Maybe<Metric>;
};

export type OrgMetric = {
  __typename?: 'OrgMetric';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  organizationId: Scalars['Int'];
  name: Scalars['String'];
  userOwners?: Maybe<Array<Maybe<MetricUserOwner>>>;
  teamOwners?: Maybe<Array<Maybe<MetricTeamOwner>>>;
  versions?: Maybe<Array<Maybe<Metric>>>;
  metricAnnotations?: Maybe<Array<Maybe<MetricAnnotation>>>;
  organization?: Maybe<Organization>;
};

export type MetricUserOwner = {
  __typename?: 'MetricUserOwner';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  orgMetricId: Scalars['Int'];
  userId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  isLocked: Scalars['Boolean'];
  user?: Maybe<User>;
  organization?: Maybe<Organization>;
};

export type MetricTeamOwner = {
  __typename?: 'MetricTeamOwner';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  teamId: Scalars['Int'];
  createdTs?: Maybe<Scalars['Int']>;
  orgMetricId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  team?: Maybe<Team>;
  organization?: Maybe<Organization>;
};

export type Metric = {
  __typename?: 'Metric';
  metadata_: Scalars['JSONString'];
  id?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
  metricType: Scalars['Int'];
  metricId: Scalars['Int'];
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
  metadata?: Maybe<Scalars['GenericScalar']>;
  totalQuestions?: Maybe<Scalars['Int']>;
  totalAnnotations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  valueFormat?: Maybe<Scalars['String']>;
  tierWithLock?: Maybe<LockableParameter>;
  displayNameWithLock?: Maybe<LockableParameter>;
  descriptionWithLock?: Maybe<LockableParameter>;
  valueFormatWithLock?: Maybe<LockableParameter>;
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
  tierTooltip?: Maybe<Scalars['String']>;
  isAdditive?: Maybe<Scalars['Boolean']>;
};


export type MetricQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricAnnotationsArgs = {
  dimensions?: Maybe<Array<Maybe<GMetricAnnotationDimensionInput>>>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  priorities?: Maybe<Array<Maybe<Priority>>>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricDataSourcesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<DataSourceVersionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DataSourceVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricOwnerTeamsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type MetricOwnerUsersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
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
};

export type MetricView = {
  __typename?: 'MetricView';
  organizationId: Scalars['Int'];
  userId: Scalars['ID'];
  metricId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
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
  metricId: Scalars['Int'];
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
  metricName?: Maybe<Scalars['String']>;
  userCanEdit?: Maybe<Scalars['Boolean']>;
  metric?: Maybe<Metric>;
};


export type QuestionRepliesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionReplyStrColumns>>>;
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
  organization?: Maybe<Organization>;
  author?: Maybe<User>;
  question?: Maybe<Question>;
  likedByCurrentUser?: Maybe<Scalars['Boolean']>;
  totalLikes?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum QuestionReplyStrColumns {
  Text = 'TEXT'
}

/** An enumeration. */
export enum QuestionReplyOrderBy {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  QuestionId = 'QUESTION_ID',
  AuthorId = 'AUTHOR_ID',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Text = 'TEXT'
}

/** An enumeration. */
export enum QuestionStrColumns {
  Text = 'TEXT',
  Priority = 'PRIORITY'
}

/** An enumeration. */
export enum QuestionOrderBy {
  CreatedAt = 'CREATED_AT',
  ResolvedAt = 'RESOLVED_AT',
  AuthorId = 'AUTHOR_ID',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Resolved = 'RESOLVED',
  Text = 'TEXT',
  NotifiedAt = 'NOTIFIED_AT',
  UpdatedAt = 'UPDATED_AT',
  ResolvedBy = 'RESOLVED_BY',
  Priority = 'PRIORITY',
  MetricId = 'METRIC_ID'
}

export type LockableParameter = {
  __typename?: 'LockableParameter';
  isLocked?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['GenericScalar']>;
};

export type MetricApproval = {
  __typename?: 'MetricApproval';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  approverId: Scalars['Int'];
  approvedAt?: Maybe<Scalars['DateTime']>;
  metricId: Scalars['Int'];
  approver?: Maybe<User>;
  organization?: Maybe<Organization>;
};

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
  orgMetrics?: Maybe<Array<Maybe<OrgMetric>>>;
  author?: Maybe<User>;
  organization?: Maybe<Organization>;
  metricAnnotations?: Maybe<Array<Maybe<MetricAnnotation>>>;
  userCanEdit?: Maybe<Scalars['Boolean']>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
};

export type MetricAnnotation = {
  __typename?: 'MetricAnnotation';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  annotationId: Scalars['Int'];
  metricId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  organization?: Maybe<Organization>;
  annotation?: Maybe<Annotation>;
  orgMetric?: Maybe<OrgMetric>;
  dimensions?: Maybe<Array<Maybe<MetricAnnotationDimension>>>;
  metric?: Maybe<Metric>;
};

export type MetricAnnotationDimension = {
  __typename?: 'MetricAnnotationDimension';
  id: Scalars['ID'];
  metricAnnotationId: Scalars['Int'];
  dimensionName: Scalars['String'];
  valueHashes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GMetricAnnotationDimensionInput = {
  dimensionName: Scalars['String'];
  valueHashes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** An enumeration. */
export enum Priority {
  NoPriority = 'NO_PRIORITY',
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
  Critical = 'CRITICAL'
}

/** An enumeration. */
export enum AnnotationStrColumns {
  ExpectedImpact = 'EXPECTED_IMPACT',
  Text = 'TEXT',
  Priority = 'PRIORITY',
  Title = 'TITLE'
}

/** An enumeration. */
export enum AnnotationOrderBy {
  ExpectedImpact = 'EXPECTED_IMPACT',
  CreatedAt = 'CREATED_AT',
  Title = 'TITLE',
  AuthorId = 'AUTHOR_ID',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Text = 'TEXT',
  DeletedAt = 'DELETED_AT',
  NotifiedAt = 'NOTIFIED_AT',
  DateEndedAt = 'DATE_ENDED_AT',
  UpdatedAt = 'UPDATED_AT',
  Priority = 'PRIORITY',
  DateStartedAt = 'DATE_STARTED_AT'
}

/** An enumeration. */
export enum DataSourceVersionStrColumns {
  Hash = 'HASH',
  SqlTable = 'SQL_TABLE',
  SqlQuery = 'SQL_QUERY',
  Name = 'NAME',
  Description = 'DESCRIPTION',
  Connection = 'CONNECTION'
}

/** An enumeration. */
export enum DataSourceVersionOrderBy {
  Mutability = 'MUTABILITY',
  Owners = 'OWNERS',
  Dimensions = 'DIMENSIONS',
  Id = 'ID',
  Description = 'DESCRIPTION',
  DataSourceMetadata = 'DATA_SOURCE_METADATA',
  Identifiers = 'IDENTIFIERS',
  SqlTable = 'SQL_TABLE',
  CreatedAt = 'CREATED_AT',
  Hash = 'HASH',
  Name = 'NAME',
  OrganizationId = 'ORGANIZATION_ID',
  Connection = 'CONNECTION',
  Constraint = 'CONSTRAINT',
  SqlQuery = 'SQL_QUERY',
  Measures = 'MEASURES'
}

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
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum MetricVersionStrColumns {
  Description = 'DESCRIPTION',
  Hash = 'HASH',
  DisplayName = 'DISPLAY_NAME',
  ValueFormat = 'VALUE_FORMAT'
}

/** An enumeration. */
export enum MetricVersionOrderBy {
  Views = 'VIEWS',
  Params = 'PARAMS',
  Hash = 'HASH',
  SourceDataSourceVersions = 'SOURCE_DATA_SOURCE_VERSIONS',
  Id = 'ID',
  Metadata = 'METADATA',
  Description = 'DESCRIPTION',
  OrganizationId = 'ORGANIZATION_ID',
  MetricType = 'METRIC_TYPE',
  Tier = 'TIER',
  OrgDataSourceId = 'ORG_DATA_SOURCE_ID',
  DisplayName = 'DISPLAY_NAME',
  MetricVersionCreatedAt = 'MetricVersion_CREATED_AT',
  MetricVersionMetricId = 'MetricVersion_METRIC_ID',
  MetricMetadataCreatedAt = 'MetricMetadata_CREATED_AT',
  MetricMetadataMetricId = 'MetricMetadata_METRIC_ID',
  DescriptionLock = 'DESCRIPTION_LOCK',
  CreatedBy = 'CREATED_BY',
  UpdatedBy = 'UPDATED_BY',
  ExtraFields = 'EXTRA_FIELDS',
  TierLock = 'TIER_LOCK',
  UpdatedAt = 'UPDATED_AT',
  ValueFormat = 'VALUE_FORMAT',
  ValueFormatLock = 'VALUE_FORMAT_LOCK',
  DisplayNameLock = 'DISPLAY_NAME_LOCK',
  IsNew = 'IS_NEW'
}

/** An enumeration. */
export enum SavedQueryStrColumns {
  Title = 'TITLE'
}

/** An enumeration. */
export enum SavedQueryOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  Title = 'TITLE',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  DeletedAt = 'DELETED_AT',
  OwnerTeamId = 'OWNER_TEAM_ID',
  UpdatedAt = 'UPDATED_AT',
  SerializedQuery = 'SERIALIZED_QUERY'
}

/** An enumeration. */
export enum TeamStrColumns {
  Name = 'NAME',
  Theme = 'THEME',
  Description = 'DESCRIPTION',
  Slug = 'SLUG'
}

/** An enumeration. */
export enum TeamOrderBy {
  CreatedBy = 'CREATED_BY',
  CreatedAt = 'CREATED_AT',
  Views = 'VIEWS',
  Name = 'NAME',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Description = 'DESCRIPTION',
  Slug = 'SLUG',
  DeactivatedAt = 'DEACTIVATED_AT',
  Theme = 'THEME',
  UpdatedAt = 'UPDATED_AT',
  FeaturedMetricCollectionId = 'FEATURED_METRIC_COLLECTION_ID',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID'
}

/** An enumeration. */
export enum UserStrColumns {
  Email = 'EMAIL',
  AvatarUrl = 'AVATAR_URL',
  UserName = 'USER_NAME',
  Auth0Id = 'AUTH0_ID'
}

/** An enumeration. */
export enum UserOrderBy {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Email = 'EMAIL',
  Auth0Id = 'AUTH0_ID',
  DeactivatedAt = 'DEACTIVATED_AT',
  UpdatedAt = 'UPDATED_AT',
  UserName = 'USER_NAME',
  AvatarUrl = 'AVATAR_URL',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID'
}

/** An enumeration. */
export enum MetricCollectionMetricOrderBy {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Emphasis = 'EMPHASIS',
  UpdatedAt = 'UPDATED_AT',
  Position = 'POSITION',
  MetricId = 'METRIC_ID',
  SavedQueryId = 'SAVED_QUERY_ID',
  MetricCollectionId = 'METRIC_COLLECTION_ID'
}

export type CollectionItem = {
  __typename?: 'CollectionItem';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  metricCollectionId: Scalars['Int'];
  metricId?: Maybe<Scalars['Int']>;
  savedQueryId?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
  emphasis: Scalars['Int'];
  metricCollection?: Maybe<MetricCollection>;
  orgMetric?: Maybe<OrgMetric>;
  savedQuery?: Maybe<SavedQuery>;
  inCurrentModel?: Maybe<Scalars['Boolean']>;
  metric?: Maybe<Metric>;
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
export enum MetricCollectionStrColumns {
  Description = 'DESCRIPTION',
  Slug = 'SLUG',
  Title = 'TITLE'
}

/** An enumeration. */
export enum MetricCollectionOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  Views = 'VIEWS',
  Title = 'TITLE',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Description = 'DESCRIPTION',
  DeletedAt = 'DELETED_AT',
  Slug = 'SLUG',
  OwnerTeamId = 'OWNER_TEAM_ID',
  UpdatedAt = 'UPDATED_AT',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID',
  DefaultEmphasis = 'DEFAULT_EMPHASIS'
}

export type ApiKey = {
  __typename?: 'ApiKey';
  prefix: Scalars['String'];
  organizationId: Scalars['Int'];
  userId: Scalars['Int'];
  type: Scalars['String'];
  secretHash: Scalars['String'];
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
export enum ApiKeyStrColumns {
  Prefix = 'PREFIX',
  Scope = 'SCOPE',
  Type = 'TYPE',
  SecretHash = 'SECRET_HASH'
}

/** An enumeration. */
export enum ApiKeyOrderBy {
  Prefix = 'PREFIX',
  CreatedAt = 'CREATED_AT',
  Scope = 'SCOPE',
  SecretHash = 'SECRET_HASH',
  LastUsedAt = 'LAST_USED_AT',
  OrganizationId = 'ORGANIZATION_ID',
  Type = 'TYPE',
  RevokedAt = 'REVOKED_AT',
  RevokerId = 'REVOKER_ID',
  UserId = 'USER_ID'
}

export type Feature = {
  __typename?: 'Feature';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  retiredAt?: Maybe<Scalars['DateTime']>;
  organizations?: Maybe<Array<Maybe<Organization>>>;
  users?: Maybe<Array<Maybe<User>>>;
  totalOrganizations?: Maybe<Scalars['Int']>;
  totalUsers?: Maybe<Scalars['Int']>;
};


export type FeatureOrganizationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<OrganizationStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};


export type FeatureUsersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum OrganizationStrColumns {
  MqlServerLogs = 'MQL_SERVER_LOGS',
  LogoUrl = 'LOGO_URL',
  SourceControlUrl = 'SOURCE_CONTROL_URL',
  PrimaryConfigRepo = 'PRIMARY_CONFIG_REPO',
  Name = 'NAME',
  PrimaryConfigBranch = 'PRIMARY_CONFIG_BRANCH'
}

/** An enumeration. */
export enum OrganizationOrderBy {
  MqlServerLogs = 'MQL_SERVER_LOGS',
  CreatedAt = 'CREATED_AT',
  LogoUrl = 'LOGO_URL',
  PrimaryConfigRepo = 'PRIMARY_CONFIG_REPO',
  Name = 'NAME',
  Id = 'ID',
  DeactivatedAt = 'DEACTIVATED_AT',
  IsHosted = 'IS_HOSTED',
  UpdatedAt = 'UPDATED_AT',
  Type = 'TYPE',
  SourceControlUrl = 'SOURCE_CONTROL_URL',
  PrimaryConfigBranch = 'PRIMARY_CONFIG_BRANCH'
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
};

/** An enumeration. */
export enum OrgMqlServerStrColumns {
  Url = 'URL',
  Name = 'NAME',
  ConfigSecret = 'CONFIG_SECRET',
  DwEngine = 'DW_ENGINE'
}

/** An enumeration. */
export enum OrgMqlServerOrderBy {
  CreatedAt = 'CREATED_AT',
  Url = 'URL',
  Name = 'NAME',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  ConfigSecret = 'CONFIG_SECRET',
  UpdatedAt = 'UPDATED_AT',
  IsOrgDefault = 'IS_ORG_DEFAULT',
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
  Expr = 'EXPR',
  Cumulative = 'CUMULATIVE'
}

/** An enumeration. */
export enum FeatureStrColumns {
  Name = 'NAME'
}

/** An enumeration. */
export enum FeatureOrderBy {
  RetiredAt = 'RETIRED_AT',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Name = 'NAME',
  Id = 'ID'
}

/** Wrapper to contain queries related to transform settings & configs. */
export type TransformConfig = {
  __typename?: 'TransformConfig';
  auth0IdleSessionLifetimeHours?: Maybe<Scalars['Int']>;
  latestTermsOfService?: Maybe<TermsOfServiceVersion>;
};

export type TermsOfServiceVersion = {
  __typename?: 'TermsOfServiceVersion';
  id: Scalars['ID'];
  pdfUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

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
  featuresAddOrgs?: Maybe<Feature>;
  featuresAddUsers?: Maybe<Feature>;
  featuresRemoveAccess?: Maybe<Feature>;
  questionsCreateReply?: Maybe<Question>;
  questionRepliesLike?: Maybe<QuestionReply>;
  questionsLike?: Maybe<Question>;
  questionRepliesUnlike?: Maybe<QuestionReply>;
  questionsUnlike?: Maybe<Question>;
  questionsCreate?: Maybe<Question>;
  questionsDelete?: Maybe<Question>;
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
  organizationsSetTierTooltip?: Maybe<Organization>;
  organizationsSetMfaPrefs?: Maybe<Organization>;
  organizationsSetAllowedEmailDomains?: Maybe<Organization>;
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
  metricsUpdateMetadata?: Maybe<Metric>;
  savedQueryCreate?: Maybe<SavedQuery>;
  savedQueryUpdate?: Maybe<SavedQuery>;
  savedQueryDeactivate?: Maybe<SavedQuery>;
  sendInvites?: Maybe<Organization>;
  acceptTermsOfService?: Maybe<User>;
  createTermsOfService?: Maybe<TermsOfServiceVersion>;
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
  requireMfa?: Maybe<Scalars['Boolean']>;
  allowMfaRememberBrowser?: Maybe<Scalars['Boolean']>;
  allowedEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  orgType?: Maybe<GOrgType>;
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
export type MutationFeaturesAddOrgsArgs = {
  featureId: Scalars['ID'];
  organizationIds: Array<Maybe<Scalars['ID']>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationFeaturesAddUsersArgs = {
  featureId: Scalars['ID'];
  userIds: Array<Maybe<Scalars['ID']>>;
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
export type MutationQuestionsDeleteArgs = {
  id: Scalars['ID'];
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
  savedQueries?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  orgType?: Maybe<GOrgType>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsSetTierTooltipArgs = {
  organizationId: Scalars['ID'];
  tooltip: Scalars['String'];
  tier: MetricTier;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsSetMfaPrefsArgs = {
  organizationId: Scalars['ID'];
  requireMfa?: Maybe<Scalars['Boolean']>;
  allowMfaRememberBrowser?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsSetAllowedEmailDomainsArgs = {
  organizationId: Scalars['ID'];
  allowedEmailDomains: Array<Maybe<Scalars['String']>>;
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
export type MutationMetricsUpdateMetadataArgs = {
  metricId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  valueFormat?: Maybe<Scalars['String']>;
  extraFields?: Maybe<Scalars['JSONString']>;
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


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSendInvitesArgs = {
  emails: Array<Maybe<Scalars['String']>>;
  organizationId?: Maybe<Scalars['ID']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationAcceptTermsOfServiceArgs = {
  userId: Scalars['ID'];
  versionId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateTermsOfServiceArgs = {
  pdfUrl: Scalars['String'];
};

/** An enumeration. */
export enum GOrgType {
  Paid = 'PAID',
  Trial = 'TRIAL',
  Internal = 'INTERNAL',
  Test = 'TEST'
}

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
  dimensions?: Maybe<Array<Maybe<GMetricAnnotationDimensionInput>>>;
};

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
  metricId?: Maybe<Scalars['ID']>;
  savedQueryId?: Maybe<Scalars['ID']>;
  emphasis: Scalars['Int'];
  position: Scalars['Int'];
};

export type MqlServerUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type MqlServerUrlQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'mqlServerUrl'>
);
