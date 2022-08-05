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
  latestExcelDesktop?: Maybe<ServiceRelease>;
  myOrganization?: Maybe<Organization>;
  myUser?: Maybe<User>;
  allFeatures?: Maybe<Array<Maybe<Feature>>>;
  allOrganizations?: Maybe<Array<Maybe<Organization>>>;
  totalFeatures?: Maybe<Scalars['Int']>;
  totalOrganizations?: Maybe<Scalars['Int']>;
  organizationTest?: Maybe<Organization>;
  featureTest?: Maybe<Feature>;
  boom?: Maybe<Scalars['Boolean']>;
  transformConfig?: Maybe<TransformConfig>;
  emailCanSignUp?: Maybe<Scalars['Boolean']>;
  dwHealthCheck?: Maybe<Array<Maybe<MqlServerHealthItem>>>;
  flagIsEnabled?: Maybe<Scalars['Boolean']>;
  supportedAlertRules?: Maybe<Array<Maybe<AlertRuleDefinition>>>;
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
  orderBy?: Maybe<FeatureOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<FeatureOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryAllOrganizationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<OrganizationStrColumns>>>;
  orderBy?: Maybe<OrganizationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<OrganizationOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
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


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryDwHealthCheckArgs = {
  snowflakeConnectionDetails?: Maybe<SnowflakeConnectionInput>;
  redshiftConnectionDetails?: Maybe<RedshiftConnectionInput>;
  bigQueryConnectionDetails?: Maybe<BigQueryConnectionInput>;
};


/**
 * Base Query object exposed by GraphQL.
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryFlagIsEnabledArgs = {
  flag: Scalars['String'];
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
  teams?: Maybe<Array<Maybe<Team>>>;
  prefs?: Maybe<Array<Maybe<OrgPref>>>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  dashboards?: Maybe<Array<Maybe<Dashboard>>>;
  metricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
  metricViews?: Maybe<Array<Maybe<MetricView>>>;
  teamViews?: Maybe<Array<Maybe<TeamView>>>;
  integrations?: Maybe<Integrations>;
  questions?: Maybe<Array<Maybe<Question>>>;
  question?: Maybe<Question>;
  annotations?: Maybe<Array<Maybe<Annotation>>>;
  annotation?: Maybe<Annotation>;
  recentQuestions?: Maybe<Array<Maybe<Question>>>;
  recentAnnotations?: Maybe<Array<Maybe<Annotation>>>;
  totalQuestions?: Maybe<Scalars['Int']>;
  totalAnnotations?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
  totalMetrics?: Maybe<Scalars['Int']>;
  supportedMetricFilters?: Maybe<Array<Maybe<MetricFilter>>>;
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
  activeOrgAdmins?: Maybe<Array<Maybe<User>>>;
  mqlServerConfig?: Maybe<DataWarehouseConfig>;
  incompleteOnboardingTasks?: Maybe<Array<Maybe<Scalars['String']>>>;
  samlConnectionName?: Maybe<Scalars['String']>;
  preferredLogin?: Maybe<Scalars['String']>;
  sharedSlackChannelName?: Maybe<Scalars['String']>;
  primaryMqlServer?: Maybe<OrgMqlServer>;
  annotationsFeed?: Maybe<Array<Maybe<Annotation>>>;
  samlConnectionId?: Maybe<Scalars['String']>;
  samlSignatureCert?: Maybe<Scalars['String']>;
  integrationConfigurationTableau?: Maybe<IntegrationConfigurationTableau>;
  dbUtcTimezoneOffsetHours?: Maybe<Scalars['Int']>;
  dbArrearsHours?: Maybe<Scalars['Int']>;
  allIntegrations?: Maybe<Array<Maybe<Integration>>>;
  pendingInvites?: Maybe<Array<Maybe<Invite>>>;
  integration?: Maybe<Integration>;
  modelFromModelKey?: Maybe<Model>;
  boards?: Maybe<Array<Maybe<Board>>>;
  boardsV2?: Maybe<Array<Maybe<Board>>>;
  totalBoards?: Maybe<Scalars['Int']>;
  board?: Maybe<Board>;
  queryIdsInSavedQueries?: Maybe<Array<Maybe<Scalars['Int']>>>;
  metricNamesInBoards?: Maybe<Array<Maybe<Scalars['String']>>>;
  currentModel?: Maybe<Array<Maybe<Model>>>;
  activeFeatures?: Maybe<Array<Maybe<Feature>>>;
};


export type OrganizationUsersArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<UserOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationMqlServersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<OrgMqlServerStrColumns>>>;
  orderBy?: Maybe<OrgMqlServerOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<OrgMqlServerOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationModelsArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type OrganizationOrgMetricsArgs = {
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  tiers?: Maybe<Array<Maybe<MetricTier>>>;
  types?: Maybe<Array<Maybe<MetricType>>>;
  modelId?: Maybe<Scalars['Int']>;
  userIsSubscribed?: Maybe<Scalars['Boolean']>;
  ownedByTeamIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ownedByUserIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAtOrBefore?: Maybe<Scalars['DateTime']>;
  createdAtOrAfter?: Maybe<Scalars['DateTime']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<OrgMetricStrColumns>>>;
  orderBy?: Maybe<OrgMetricOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<OrgMetricOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationTeamsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationPrefsArgs = {
  prefKey?: Maybe<Scalars['String']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<OrgPrefStrColumns>>>;
  orderBy?: Maybe<OrgPrefOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<OrgPrefOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationSavedQueriesArgs = {
  onlyPublicAndMine?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<SavedQueryOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumns>>>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricCollectionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumns>>>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<QuestionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationQuestionArgs = {
  id: Scalars['ID'];
};


export type OrganizationAnnotationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumns>>>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<AnnotationOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationAnnotationArgs = {
  id: Scalars['ID'];
};


export type OrganizationRecentQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumns>>>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<QuestionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationRecentAnnotationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumns>>>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<AnnotationOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationMetricsArgs = {
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  tiers?: Maybe<Array<Maybe<MetricTier>>>;
  types?: Maybe<Array<Maybe<MetricType>>>;
  modelId?: Maybe<Scalars['Int']>;
  userIsSubscribed?: Maybe<Scalars['Boolean']>;
  ownedByTeamIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ownedByUserIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAtOrBefore?: Maybe<Scalars['DateTime']>;
  createdAtOrAfter?: Maybe<Scalars['DateTime']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricVersionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationTotalMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  tiers?: Maybe<Array<Maybe<MetricTier>>>;
  types?: Maybe<Array<Maybe<MetricType>>>;
  modelId?: Maybe<Scalars['Int']>;
  userIsSubscribed?: Maybe<Scalars['Boolean']>;
  ownedByTeamIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ownedByUserIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAtOrBefore?: Maybe<Scalars['DateTime']>;
  createdAtOrAfter?: Maybe<Scalars['DateTime']>;
};


export type OrganizationTotalUsersArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
};


export type OrganizationMqlServerArgs = {
  id: Scalars['ID'];
};


export type OrganizationMetricArgs = {
  name: Scalars['String'];
  modelId?: Maybe<Scalars['Int']>;
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


export type OrganizationTotalSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  onlyPublicAndMine?: Maybe<Scalars['Boolean']>;
};


export type OrganizationTierTooltipsArgs = {
  tiers: Array<Maybe<Scalars['Int']>>;
};


export type OrganizationActiveOrgAdminsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<UserOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationMqlServerConfigArgs = {
  id: Scalars['ID'];
};


export type OrganizationAnnotationsFeedArgs = {
  userIsSubscribed?: Maybe<Scalars['Boolean']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationAllIntegrationsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<IntegrationStrColumns>>>;
  orderBy?: Maybe<IntegrationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<IntegrationOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationPendingInvitesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<InviteStrColumns>>>;
  orderBy?: Maybe<InviteOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<InviteOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationIntegrationArgs = {
  integrationType: GIntegrationType;
};


export type OrganizationModelFromModelKeyArgs = {
  repo: Scalars['String'];
  branch: Scalars['String'];
  commit: Scalars['String'];
};


export type OrganizationBoardsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
  orderBy?: Maybe<BoardOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<BoardOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationBoardsV2Args = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
  orderBy?: Maybe<BoardOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<BoardOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrganizationTotalBoardsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
};


export type OrganizationBoardArgs = {
  id: Scalars['Int'];
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
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  apiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  organization?: Maybe<Organization>;
  metricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
  metricMetadataItems?: Maybe<Array<Maybe<MetricMetadata>>>;
  teamViews?: Maybe<Array<Maybe<TeamView>>>;
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
  totalActiveFeatures?: Maybe<Scalars['Int']>;
  hasAcceptedLatestTermsOfService?: Maybe<Scalars['Boolean']>;
  acceptedTermsOfService?: Maybe<Scalars['Int']>;
  totalFeaturedMetrics?: Maybe<Scalars['Int']>;
  totalSubscribedMetrics?: Maybe<Scalars['Int']>;
  latestInAppNotifications?: Maybe<Array<Maybe<Notification>>>;
  totalUndeliveredInAppNotifications?: Maybe<Scalars['Int']>;
  totalInAppNotifications?: Maybe<Scalars['Int']>;
  generalAlertNotificationRules?: Maybe<Array<Maybe<AlertNotificationRule>>>;
  dismissedOnboardingCards?: Maybe<Scalars['Boolean']>;
  isSubscribedToChannels?: Maybe<Scalars['GenericScalar']>;
  boards?: Maybe<Array<Maybe<Board>>>;
  boardsV2?: Maybe<Array<Maybe<Board>>>;
  favoriteBoards?: Maybe<Array<Maybe<Board>>>;
  totalBoards?: Maybe<Scalars['Int']>;
  totalBoardsV2?: Maybe<Scalars['Int']>;
  boardsWithSubscribedMetrics?: Maybe<Array<Maybe<Board>>>;
  totalBoardsWithSubscribedMetrics?: Maybe<Scalars['Int']>;
  viewedMetrics?: Maybe<Array<Maybe<Metric>>>;
  newMetrics?: Maybe<Array<Maybe<Metric>>>;
  activeFeatures?: Maybe<Array<Maybe<Feature>>>;
  featuredMetrics?: Maybe<Array<Maybe<Metric>>>;
  subscribedMetrics?: Maybe<Array<Maybe<Metric>>>;
};


export type UserTeamsArgs = {
  isAdminOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<SavedQueryOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserApiKeysArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<ApiKeyStrColumns>>>;
  orderBy?: Maybe<ApiKeyOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<ApiKeyOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumns>>>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricCollectionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserLatestInAppNotificationsArgs = {
  latestNotifShownCreatedAt?: Maybe<Scalars['DateTime']>;
  notifIdsAlreadyShown?: Maybe<Array<Maybe<Scalars['ID']>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserBoardsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
  orderBy?: Maybe<BoardOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<BoardOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserBoardsV2Args = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
  orderBy?: Maybe<BoardOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<BoardOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserFavoriteBoardsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
  orderBy?: Maybe<BoardOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<BoardOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserTotalBoardsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
};


export type UserTotalBoardsV2Args = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
};


export type UserBoardsWithSubscribedMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
  orderBy?: Maybe<BoardOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<BoardOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserTotalBoardsWithSubscribedMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
};


export type UserViewedMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricVersionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserNewMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricVersionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserFeaturedMetricsArgs = {
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type UserSubscribedMetricsArgs = {
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type UserRole = {
  __typename?: 'UserRole';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  userId: Scalars['Int'];
  role?: Maybe<Scalars['String']>;
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
  metricCollections?: Maybe<Array<Maybe<MetricCollection>>>;
  views?: Maybe<Array<Maybe<TeamView>>>;
  teamAdminIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userIsTeamAdmin?: Maybe<Scalars['Boolean']>;
  totalMetrics?: Maybe<Scalars['Int']>;
  totalSavedQueries?: Maybe<Scalars['Int']>;
  totalMetricCollections?: Maybe<Scalars['Int']>;
  totalMembers?: Maybe<Scalars['Int']>;
  totalRecentViews?: Maybe<Scalars['Int']>;
  totalRecentViewsForUser?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
  boards?: Maybe<Array<Maybe<Board>>>;
};


export type TeamMembersArgs = {
  orderBy?: Maybe<TeamMemberOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<TeamMemberOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type TeamSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<SavedQueryOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type TeamMetricCollectionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricCollectionStrColumns>>>;
  orderBy?: Maybe<MetricCollectionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricCollectionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type TeamMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricVersionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type TeamBoardsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<BoardStrColumns>>>;
  orderBy?: Maybe<BoardOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<BoardOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
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
  Email = 'EMAIL',
  Id = 'ID',
  IsTeamAdmin = 'IS_TEAM_ADMIN',
  JoinedAt = 'JOINED_AT',
  OrganizationId = 'ORGANIZATION_ID',
  TeamId = 'TEAM_ID',
  UserId = 'USER_ID',
  UserAuth0Id = 'User__AUTH0_ID',
  UserAvatarUrl = 'User__AVATAR_URL',
  UserCreatedAt = 'User__CREATED_AT',
  UserDeactivatedAt = 'User__DEACTIVATED_AT',
  UserEmail = 'User__EMAIL',
  UserOrganizationId = 'User__ORGANIZATION_ID',
  UserPrimaryDashboardId = 'User__PRIMARY_DASHBOARD_ID',
  UserUpdatedAt = 'User__UPDATED_AT',
  UserUserName = 'User__USER_NAME'
}

export type TeamMemberOrderByInput = {
  orderBy: TeamMemberOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

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
  teams?: Maybe<Array<Maybe<Team>>>;
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
  views?: Maybe<Array<Maybe<MetricCollectionView>>>;
  items?: Maybe<Array<Maybe<MetricCollectionMetric>>>;
  collectionItems?: Maybe<Array<Maybe<CollectionItem>>>;
  totalItems?: Maybe<Scalars['Int']>;
  totalRecentViews?: Maybe<Scalars['Int']>;
  totalRecentViewsForUser?: Maybe<Scalars['Int']>;
  userCanEdit?: Maybe<Scalars['Boolean']>;
};


export type MetricCollectionItemsArgs = {
  orderBy?: Maybe<MetricCollectionMetricOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricCollectionMetricOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MetricCollectionCollectionItemsArgs = {
  orderBy?: Maybe<MetricCollectionMetricOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricCollectionMetricOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
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
  name: Scalars['String'];
  userOwners?: Maybe<Array<Maybe<MetricUserOwner>>>;
  teamOwners?: Maybe<Array<Maybe<MetricTeamOwner>>>;
  metricMetadata?: Maybe<MetricMetadata>;
  organization?: Maybe<Organization>;
  allOwnerUserIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  displayName?: Maybe<Scalars['String']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  model?: Maybe<Model>;
  ownerUsers?: Maybe<Array<Maybe<User>>>;
  ownerTeams?: Maybe<Array<Maybe<Team>>>;
  protectedFields?: Maybe<ProtectedMetricFields>;
  tier?: Maybe<Scalars['Int']>;
};


export type OrgMetricOwnerUsersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<UserOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type OrgMetricOwnerTeamsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type MetricUserOwner = {
  __typename?: 'MetricUserOwner';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  orgMetricId: Scalars['Int'];
  userId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy: Scalars['Int'];
  isLocked: Scalars['Boolean'];
  ownerType: OwnerType;
  governanceType: GovernanceType;
  user?: Maybe<User>;
  organization?: Maybe<Organization>;
};

/** An enumeration. */
export enum OwnerType {
  Business = 'BUSINESS',
  Technical = 'TECHNICAL'
}

/** Enum of governance types for both teams and users that are associated with private metrics */
export enum GovernanceType {
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}

export type MetricTeamOwner = {
  __typename?: 'MetricTeamOwner';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  teamId: Scalars['Int'];
  orgMetricId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy: Scalars['Int'];
  ownerType: OwnerType;
  governanceType: GovernanceType;
  team?: Maybe<Team>;
  organization?: Maybe<Organization>;
};

export type MetricMetadata = {
  __typename?: 'MetricMetadata';
  metricId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
  valueFormat?: Maybe<Scalars['String']>;
  increaseIsGood?: Maybe<Scalars['Boolean']>;
  descriptionLock: Scalars['Boolean'];
  displayNameLock: Scalars['Boolean'];
  tierLock: Scalars['Boolean'];
  valueFormatLock: Scalars['Boolean'];
  increaseIsGoodLock: Scalars['Boolean'];
  extraFields?: Maybe<Scalars['JSONString']>;
  isNew: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy: Scalars['Int'];
  isPrivate: Scalars['Boolean'];
  orgMetric?: Maybe<OrgMetric>;
  createdByUser?: Maybe<User>;
  updatedByUser?: Maybe<User>;
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
  modelDbtDataSources?: Maybe<Array<Maybe<ModelDataSource>>>;
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
  dbtModel?: Maybe<Scalars['String']>;
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
  dbtModelMeta?: Maybe<DbtModelMeta>;
};


export type DbtModelMeta = {
  __typename?: 'DbtModelMeta';
  model: Scalars['String'];
  schema: Scalars['String'];
  database?: Maybe<Scalars['String']>;
  modelUpdatedAt: Scalars['DateTime'];
  formerModelUpdatedAt?: Maybe<Scalars['DateTime']>;
  wasFullRefresh: Scalars['Boolean'];
  gitSha?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  projectName?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['String']>;
  runId?: Maybe<Scalars['String']>;
  lastSyncedAt: Scalars['DateTime'];
  organizationId: Scalars['ID'];
  docsUrl?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
};

export type Metric = {
  __typename?: 'Metric';
  metadata_: Scalars['JSONString'];
  id?: Maybe<Scalars['Int']>;
  metricType: Scalars['Int'];
  metricTypeStr?: Maybe<Scalars['String']>;
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
  userSubscribers?: Maybe<Array<Maybe<MetricUserSubscription>>>;
  questions?: Maybe<Array<Maybe<Question>>>;
  resolvedQuestions?: Maybe<Question>;
  unresolvedQuestions?: Maybe<Question>;
  metricMetadata?: Maybe<MetricMetadata>;
  metadata?: Maybe<Scalars['GenericScalar']>;
  totalQuestions?: Maybe<Scalars['Int']>;
  totalAnnotations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  isNew?: Maybe<Scalars['Boolean']>;
  tier?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  valueFormat?: Maybe<Scalars['String']>;
  extraFields?: Maybe<Scalars['JSONString']>;
  tierWithLock?: Maybe<LockableParameter>;
  displayNameWithLock?: Maybe<LockableParameter>;
  descriptionWithLock?: Maybe<LockableParameter>;
  valueFormatWithLock?: Maybe<LockableParameter>;
  increaseIsGoodWithLock?: Maybe<LockableParameter>;
  latestApproval?: Maybe<MetricApproval>;
  annotations?: Maybe<Array<Maybe<Annotation>>>;
  currentDescription?: Maybe<Scalars['String']>;
  totalRecentViews?: Maybe<Scalars['Int']>;
  totalRecentViewsForUser?: Maybe<Scalars['Int']>;
  userIsMetricOwner?: Maybe<Scalars['Boolean']>;
  userCanEdit?: Maybe<Scalars['Boolean']>;
  userIsSubscriber?: Maybe<Scalars['Boolean']>;
  dataSources?: Maybe<Array<Maybe<DataSourceVersion>>>;
  dbtDataSources?: Maybe<Array<Maybe<DataSourceVersion>>>;
  totalDataSources?: Maybe<Scalars['Int']>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  totalSavedQueries?: Maybe<Scalars['Int']>;
  totalResolvedQuestions?: Maybe<Scalars['Int']>;
  totalUnresolvedQuestions?: Maybe<Scalars['Int']>;
  ownerTeams?: Maybe<Array<Maybe<Team>>>;
  totalOwnerTeams?: Maybe<Scalars['Int']>;
  ownerUsers?: Maybe<Array<Maybe<User>>>;
  totalOwnerUsers?: Maybe<Scalars['Int']>;
  allOwnerUserIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tierTooltip?: Maybe<Scalars['String']>;
  isAdditive?: Maybe<Scalars['Boolean']>;
  myAlertNotificationRules?: Maybe<Array<Maybe<AlertNotificationRule>>>;
  alertRules?: Maybe<Array<Maybe<AlertRule>>>;
  defaultTrim?: Maybe<Scalars['Boolean']>;
  defaultGranularity?: Maybe<TimeGranularity>;
  defaultDaysLimit?: Maybe<Scalars['Int']>;
  valueChangeAlert?: Maybe<Alert>;
  valueChangeAlerts?: Maybe<Array<Maybe<Alert>>>;
  totalValueChangeAlerts?: Maybe<Scalars['Int']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
};


export type MetricQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumns>>>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<QuestionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MetricAnnotationsArgs = {
  dimensions?: Maybe<Array<Maybe<GMetricAnnotationDimensionInput>>>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  priorities?: Maybe<Array<Maybe<Priority>>>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumns>>>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<AnnotationOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MetricDataSourcesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<DataSourceVersionStrColumns>>>;
  orderBy?: Maybe<DataSourceVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<DataSourceVersionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MetricSavedQueriesArgs = {
  onlyPublicAndMine?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<SavedQueryOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MetricTotalSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  onlyPublicAndMine?: Maybe<Scalars['Boolean']>;
};


export type MetricOwnerTeamsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MetricOwnerUsersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<UserOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type MetricValueChangeAlertArgs = {
  id: Scalars['Int'];
};


export type MetricValueChangeAlertsArgs = {
  orderBy?: Maybe<AlertOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<AlertOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type MetricView = {
  __typename?: 'MetricView';
  organizationId: Scalars['Int'];
  userId: Scalars['ID'];
  metricId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  organization?: Maybe<Organization>;
};

export type MetricUserSubscription = {
  __typename?: 'MetricUserSubscription';
  id: Scalars['ID'];
  metricId: Scalars['Int'];
  userId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
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
  orderBy?: Maybe<QuestionReplyOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<QuestionReplyOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
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
  AuthorId = 'AUTHOR_ID',
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  QuestionId = 'QUESTION_ID',
  Text = 'TEXT',
  UpdatedAt = 'UPDATED_AT'
}

export type QuestionReplyOrderByInput = {
  orderBy: QuestionReplyOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum QuestionStrColumns {
  Priority = 'PRIORITY',
  Text = 'TEXT'
}

/** An enumeration. */
export enum QuestionOrderBy {
  AuthorId = 'AUTHOR_ID',
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  MetricId = 'METRIC_ID',
  NotifiedAt = 'NOTIFIED_AT',
  OrganizationId = 'ORGANIZATION_ID',
  Priority = 'PRIORITY',
  Resolved = 'RESOLVED',
  ResolvedAt = 'RESOLVED_AT',
  ResolvedBy = 'RESOLVED_BY',
  Text = 'TEXT',
  UpdatedAt = 'UPDATED_AT'
}

export type QuestionOrderByInput = {
  orderBy: QuestionOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

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
  userCanEdit?: Maybe<Scalars['Boolean']>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
  metricAnnotations?: Maybe<Array<Maybe<MetricAnnotation>>>;
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
  Priority = 'PRIORITY',
  Text = 'TEXT',
  Title = 'TITLE'
}

/** An enumeration. */
export enum AnnotationOrderBy {
  AuthorId = 'AUTHOR_ID',
  CreatedAt = 'CREATED_AT',
  DateEndedAt = 'DATE_ENDED_AT',
  DateStartedAt = 'DATE_STARTED_AT',
  DeletedAt = 'DELETED_AT',
  ExpectedImpact = 'EXPECTED_IMPACT',
  Id = 'ID',
  NotifiedAt = 'NOTIFIED_AT',
  OrganizationId = 'ORGANIZATION_ID',
  Priority = 'PRIORITY',
  Text = 'TEXT',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT'
}

export type AnnotationOrderByInput = {
  orderBy: AnnotationOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum DataSourceVersionStrColumns {
  Connection = 'CONNECTION',
  DbtModel = 'DBT_MODEL',
  Description = 'DESCRIPTION',
  Hash = 'HASH',
  Name = 'NAME',
  SqlQuery = 'SQL_QUERY',
  SqlTable = 'SQL_TABLE'
}

/** An enumeration. */
export enum DataSourceVersionOrderBy {
  Connection = 'CONNECTION',
  Constraint = 'CONSTRAINT',
  CreatedAt = 'CREATED_AT',
  DataSourceMetadata = 'DATA_SOURCE_METADATA',
  DbtModel = 'DBT_MODEL',
  Description = 'DESCRIPTION',
  Dimensions = 'DIMENSIONS',
  Hash = 'HASH',
  Id = 'ID',
  Identifiers = 'IDENTIFIERS',
  Measures = 'MEASURES',
  Mutability = 'MUTABILITY',
  Name = 'NAME',
  OrganizationId = 'ORGANIZATION_ID',
  Owners = 'OWNERS',
  SqlQuery = 'SQL_QUERY',
  SqlTable = 'SQL_TABLE'
}

export type DataSourceVersionOrderByInput = {
  orderBy: DataSourceVersionOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
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
  queryId?: Maybe<Scalars['Int']>;
  isPrivate: Scalars['Boolean'];
  chartType?: Maybe<ChartType>;
  createdByUser?: Maybe<User>;
  organization?: Maybe<Organization>;
  ownerTeam?: Maybe<Team>;
  orgMetrics?: Maybe<Array<Maybe<OrgMetric>>>;
  dbQuery?: Maybe<MqlQuery>;
  totalMetrics?: Maybe<Scalars['Int']>;
  userCanEditContent?: Maybe<Scalars['Boolean']>;
  userCanDeactivate?: Maybe<Scalars['Boolean']>;
  userCanChangeOwner?: Maybe<Scalars['Boolean']>;
  metrics?: Maybe<Array<Maybe<Metric>>>;
  metricsNotCurrent?: Maybe<Array<Maybe<Metric>>>;
  otherUsersBoardsUsingSavedQuery?: Maybe<Array<Maybe<Board>>>;
  boardsUsingSavedQuery?: Maybe<Array<Maybe<Board>>>;
};


export type SavedQueryMetricsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<MetricVersionStrColumns>>>;
  orderBy?: Maybe<MetricVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<MetricVersionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum ChartType {
  LineChart = 'LINE_CHART',
  AreaChartStacked = 'AREA_CHART_STACKED',
  AreaChartShareOf = 'AREA_CHART_SHARE_OF',
  BarChart = 'BAR_CHART',
  BarChartStacked = 'BAR_CHART_STACKED',
  BarChartShareOf = 'BAR_CHART_SHARE_OF',
  BigNumber = 'BIG_NUMBER',
  Table = 'TABLE'
}

export type MqlQuery = {
  __typename?: 'MQLQuery';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  mfQueryParamsId: Scalars['Int'];
  ppQueryParamsId: Scalars['Int'];
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  createdBy: Scalars['Int'];
  status: MqlQueryStatus;
  cacheMode?: Maybe<CacheMode>;
  useResultCache: Scalars['Boolean'];
  allowDynamicCache: Scalars['Boolean'];
  tableId?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  errorTraceback?: Maybe<Scalars['String']>;
  userFriendlyErrorType?: Maybe<MqlQueryUserFriendlyErrorType>;
  createdAt: Scalars['DateTime'];
};

/** The status of queries submitted for execution in the query manager. */
export enum MqlQueryStatus {
  Pending = 'PENDING',
  Running = 'RUNNING',
  Successful = 'SUCCESSFUL',
  Failed = 'FAILED',
  UnhandledException = 'UNHANDLED_EXCEPTION',
  Unknown = 'UNKNOWN'
}

/**
 * Options for the SemanticLayer cache.
 *
 *     Tables in a specified schema in the same data warehouse contain measure / dimension combinations that can be used to
 *     speed up queries for different measure / dimension combinations.
 */
export enum CacheMode {
  Read = 'READ',
  Readwrite = 'READWRITE',
  Write = 'WRITE',
  Ignore = 'IGNORE'
}

/** User friendly error types to return with MqlQuery */
export enum MqlQueryUserFriendlyErrorType {
  DbError = 'DB_ERROR',
  UnableToSatisfyQueryError = 'UNABLE_TO_SATISFY_QUERY_ERROR',
  Unknown = 'UNKNOWN'
}

/** An enumeration. */
export enum MetricVersionStrColumns {
  Description = 'DESCRIPTION',
  DisplayName = 'DISPLAY_NAME',
  Hash = 'HASH',
  MetricTypeStr = 'METRIC_TYPE_STR',
  MetricMetadataDescription = 'MetricMetadata__DESCRIPTION',
  MetricMetadataDisplayName = 'MetricMetadata__DISPLAY_NAME',
  MetricMetadataValueFormat = 'MetricMetadata__VALUE_FORMAT',
  OrgMetricName = 'OrgMetric__NAME'
}

/** An enumeration. */
export enum MetricVersionOrderBy {
  CreatedAt = 'CREATED_AT',
  Description = 'DESCRIPTION',
  DisplayName = 'DISPLAY_NAME',
  Hash = 'HASH',
  Id = 'ID',
  Metadata = 'METADATA',
  MetricId = 'METRIC_ID',
  MetricType = 'METRIC_TYPE',
  MetricTypeStr = 'METRIC_TYPE_STR',
  MetricMetadataCreatedAt = 'MetricMetadata__CREATED_AT',
  MetricMetadataCreatedBy = 'MetricMetadata__CREATED_BY',
  MetricMetadataDescription = 'MetricMetadata__DESCRIPTION',
  MetricMetadataDescriptionLock = 'MetricMetadata__DESCRIPTION_LOCK',
  MetricMetadataDisplayName = 'MetricMetadata__DISPLAY_NAME',
  MetricMetadataDisplayNameLock = 'MetricMetadata__DISPLAY_NAME_LOCK',
  MetricMetadataExtraFields = 'MetricMetadata__EXTRA_FIELDS',
  MetricMetadataIncreaseIsGood = 'MetricMetadata__INCREASE_IS_GOOD',
  MetricMetadataIncreaseIsGoodLock = 'MetricMetadata__INCREASE_IS_GOOD_LOCK',
  MetricMetadataIsNew = 'MetricMetadata__IS_NEW',
  MetricMetadataIsPrivate = 'MetricMetadata__IS_PRIVATE',
  MetricMetadataMetricId = 'MetricMetadata__METRIC_ID',
  MetricMetadataTier = 'MetricMetadata__TIER',
  MetricMetadataTierLock = 'MetricMetadata__TIER_LOCK',
  MetricMetadataUpdatedAt = 'MetricMetadata__UPDATED_AT',
  MetricMetadataUpdatedBy = 'MetricMetadata__UPDATED_BY',
  MetricMetadataValueFormat = 'MetricMetadata__VALUE_FORMAT',
  MetricMetadataValueFormatLock = 'MetricMetadata__VALUE_FORMAT_LOCK',
  OrganizationId = 'ORGANIZATION_ID',
  OrgDataSourceId = 'ORG_DATA_SOURCE_ID',
  OrgMetricCreatedAt = 'OrgMetric__CREATED_AT',
  OrgMetricId = 'OrgMetric__ID',
  OrgMetricName = 'OrgMetric__NAME',
  OrgMetricOrganizationId = 'OrgMetric__ORGANIZATION_ID',
  Params = 'PARAMS',
  SourceDataSourceVersions = 'SOURCE_DATA_SOURCE_VERSIONS',
  Views = 'VIEWS'
}

export type MetricVersionOrderByInput = {
  orderBy: MetricVersionOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

export type Board = {
  __typename?: 'Board';
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<User>;
  userOwners?: Maybe<Array<Maybe<User>>>;
  teamOwners?: Maybe<Array<Maybe<Team>>>;
  userCanEditContent?: Maybe<Scalars['Boolean']>;
  userCanDeactivate?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<BoardItem>>;
  totalViews?: Maybe<Scalars['Int']>;
  totalFavorites?: Maybe<Scalars['Int']>;
  isFavoritedByUser?: Maybe<Scalars['Boolean']>;
};


export type BoardUserOwnersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<UserOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type BoardTeamOwnersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<TeamStrColumns>>>;
  orderBy?: Maybe<TeamOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<TeamOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum UserStrColumns {
  Auth0Id = 'AUTH0_ID',
  AvatarUrl = 'AVATAR_URL',
  Email = 'EMAIL',
  UserName = 'USER_NAME'
}

/** An enumeration. */
export enum UserOrderBy {
  Auth0Id = 'AUTH0_ID',
  AvatarUrl = 'AVATAR_URL',
  CreatedAt = 'CREATED_AT',
  DeactivatedAt = 'DEACTIVATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID',
  UpdatedAt = 'UPDATED_AT',
  UserName = 'USER_NAME'
}

export type UserOrderByInput = {
  orderBy: UserOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum TeamStrColumns {
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  Theme = 'THEME'
}

/** An enumeration. */
export enum TeamOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  DeactivatedAt = 'DEACTIVATED_AT',
  Description = 'DESCRIPTION',
  FeaturedMetricCollectionId = 'FEATURED_METRIC_COLLECTION_ID',
  Id = 'ID',
  Name = 'NAME',
  OrganizationId = 'ORGANIZATION_ID',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID',
  Slug = 'SLUG',
  Theme = 'THEME',
  UpdatedAt = 'UPDATED_AT',
  Views = 'VIEWS'
}

export type TeamOrderByInput = {
  orderBy: TeamOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

export type BoardItem = {
  __typename?: 'BoardItem';
  id: Scalars['ID'];
  boardId?: Maybe<Scalars['Int']>;
  parentItemId?: Maybe<Scalars['Int']>;
  type?: Maybe<BoardItemType>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  chartType?: Maybe<ChartType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  board?: Maybe<Board>;
  orgMetric?: Maybe<OrgMetric>;
  savedQuery?: Maybe<SavedQuery>;
  config?: Maybe<GroupItemConfig>;
  children?: Maybe<Array<Maybe<BoardItem>>>;
  metric?: Maybe<Metric>;
};

/**
 * Board item types.
 *
 *     Can be:
 *     - Group: has a title/description and is represents a section
 *     - Metric chart: displays data for a metric's default query
 *     - Saved query chart: displays data for a saved query
 */
export enum BoardItemType {
  Group = 'GROUP',
  MetricChart = 'METRIC_CHART',
  SavedQueryChart = 'SAVED_QUERY_CHART'
}

export type GroupItemConfig = {
  __typename?: 'GroupItemConfig';
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum SavedQueryStrColumns {
  MetricMetadataDescription = 'MetricMetadata__DESCRIPTION',
  MetricMetadataDisplayName = 'MetricMetadata__DISPLAY_NAME',
  MetricMetadataValueFormat = 'MetricMetadata__VALUE_FORMAT',
  OrgMetricName = 'OrgMetric__NAME',
  Title = 'TITLE'
}

/** An enumeration. */
export enum SavedQueryOrderBy {
  ChartType = 'CHART_TYPE',
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  DeletedAt = 'DELETED_AT',
  Id = 'ID',
  IsPrivate = 'IS_PRIVATE',
  MetricMetadataCreatedAt = 'MetricMetadata__CREATED_AT',
  MetricMetadataCreatedBy = 'MetricMetadata__CREATED_BY',
  MetricMetadataDescription = 'MetricMetadata__DESCRIPTION',
  MetricMetadataDescriptionLock = 'MetricMetadata__DESCRIPTION_LOCK',
  MetricMetadataDisplayName = 'MetricMetadata__DISPLAY_NAME',
  MetricMetadataDisplayNameLock = 'MetricMetadata__DISPLAY_NAME_LOCK',
  MetricMetadataExtraFields = 'MetricMetadata__EXTRA_FIELDS',
  MetricMetadataIncreaseIsGood = 'MetricMetadata__INCREASE_IS_GOOD',
  MetricMetadataIncreaseIsGoodLock = 'MetricMetadata__INCREASE_IS_GOOD_LOCK',
  MetricMetadataIsNew = 'MetricMetadata__IS_NEW',
  MetricMetadataIsPrivate = 'MetricMetadata__IS_PRIVATE',
  MetricMetadataMetricId = 'MetricMetadata__METRIC_ID',
  MetricMetadataTier = 'MetricMetadata__TIER',
  MetricMetadataTierLock = 'MetricMetadata__TIER_LOCK',
  MetricMetadataUpdatedAt = 'MetricMetadata__UPDATED_AT',
  MetricMetadataUpdatedBy = 'MetricMetadata__UPDATED_BY',
  MetricMetadataValueFormat = 'MetricMetadata__VALUE_FORMAT',
  MetricMetadataValueFormatLock = 'MetricMetadata__VALUE_FORMAT_LOCK',
  OrganizationId = 'ORGANIZATION_ID',
  OwnerTeamId = 'OWNER_TEAM_ID',
  OrgMetricCreatedAt = 'OrgMetric__CREATED_AT',
  OrgMetricId = 'OrgMetric__ID',
  OrgMetricName = 'OrgMetric__NAME',
  OrgMetricOrganizationId = 'OrgMetric__ORGANIZATION_ID',
  QueryId = 'QUERY_ID',
  SerializedQuery = 'SERIALIZED_QUERY',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT'
}

export type SavedQueryOrderByInput = {
  orderBy: SavedQueryOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

export type AlertNotificationRule = {
  __typename?: 'AlertNotificationRule';
  id: Scalars['ID'];
  alertRuleId?: Maybe<Scalars['Int']>;
  type: AlertNotificationRuleType;
  channel: NotificationChannel;
  cadence: NotificationCadence;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  config?: Maybe<Scalars['JSONString']>;
  alertRule?: Maybe<AlertRule>;
  isSubscribed?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum AlertNotificationRuleType {
  Individual = 'INDIVIDUAL',
  Subscriber = 'SUBSCRIBER',
  Owner = 'OWNER',
  Custom = 'CUSTOM'
}

/** An enumeration. */
export enum NotificationChannel {
  InApp = 'IN_APP',
  Email = 'EMAIL'
}

/** An enumeration. */
export enum NotificationCadence {
  Instant = 'INSTANT'
}

export type AlertRule = {
  __typename?: 'AlertRule';
  id: Scalars['ID'];
  metricId?: Maybe<Scalars['Int']>;
  type: AlertRuleType;
  config: Scalars['JSONString'];
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['Int'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['Int']>;
  metricUserSubscribers?: Maybe<Array<Maybe<MetricUserSubscription>>>;
  metricTeamOwners?: Maybe<Array<Maybe<MetricTeamOwner>>>;
  metricUserOwners?: Maybe<Array<Maybe<MetricUserOwner>>>;
  alertNotificationRules?: Maybe<Array<Maybe<AlertNotificationRule>>>;
  orgMetric?: Maybe<OrgMetric>;
  userCanEdit?: Maybe<Scalars['Boolean']>;
  metric?: Maybe<Metric>;
};

/** An enumeration. */
export enum AlertRuleType {
  MetadataNewQuestion = 'METADATA_NEW_QUESTION',
  MetadataNewAnnotation = 'METADATA_NEW_ANNOTATION',
  MetadataNewSubscribers = 'METADATA_NEW_SUBSCRIBERS',
  MetadataNewReply = 'METADATA_NEW_REPLY',
  ValueChange = 'VALUE_CHANGE',
  YouAreSubscribed = 'YOU_ARE_SUBSCRIBED'
}

/**
 * For time dimensions, the smallest possible difference between two time values.
 *
 *     Needed for calculating adjacency when merging 2 different time ranges.
 */
export enum TimeGranularity {
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Year = 'YEAR'
}

export type Alert = {
  __typename?: 'Alert';
  id: Scalars['ID'];
  alertRuleId: Scalars['Int'];
  status: AlertStatus;
  data?: Maybe<Scalars['JSONString']>;
  annotationId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  questionReplyId?: Maybe<Scalars['Int']>;
  detectedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  question?: Maybe<Question>;
  questionReply?: Maybe<QuestionReply>;
  annotation?: Maybe<Annotation>;
  alertRule?: Maybe<AlertRule>;
};

/** An enumeration. */
export enum AlertStatus {
  Created = 'CREATED',
  Acknowledged = 'ACKNOWLEDGED'
}

/** An enumeration. */
export enum AlertOrderBy {
  AlertRuleId = 'ALERT_RULE_ID',
  AnnotationId = 'ANNOTATION_ID',
  CreatedAt = 'CREATED_AT',
  Data = 'DATA',
  DetectedAt = 'DETECTED_AT',
  Id = 'ID',
  QuestionId = 'QUESTION_ID',
  QuestionReplyId = 'QUESTION_REPLY_ID',
  Status = 'STATUS'
}

export type AlertOrderByInput = {
  orderBy: AlertOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

export type ProtectedMetricFields = {
  __typename?: 'ProtectedMetricFields';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  organizationId: Scalars['Int'];
  name: Scalars['String'];
  userOwners?: Maybe<Array<Maybe<MetricUserOwner>>>;
  teamOwners?: Maybe<Array<Maybe<MetricTeamOwner>>>;
  versions?: Maybe<Array<Maybe<Metric>>>;
  metricAnnotations?: Maybe<Array<Maybe<MetricAnnotation>>>;
  metricMetadata?: Maybe<MetricMetadata>;
  organization?: Maybe<Organization>;
  metadata?: Maybe<Scalars['GenericScalar']>;
  params?: Maybe<Scalars['GenericScalar']>;
  totalQuestions?: Maybe<Scalars['Int']>;
  totalAnnotations?: Maybe<Scalars['Int']>;
  isNew?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  valueFormat?: Maybe<Scalars['String']>;
  extraFields?: Maybe<Scalars['JSONString']>;
  displayNameWithLock?: Maybe<LockableParameter>;
  descriptionWithLock?: Maybe<LockableParameter>;
  valueFormatWithLock?: Maybe<LockableParameter>;
  increaseIsGoodWithLock?: Maybe<LockableParameter>;
  tierWithLock?: Maybe<LockableParameter>;
  latestApproval?: Maybe<MetricApproval>;
  questions?: Maybe<Array<Maybe<Question>>>;
  annotations?: Maybe<Array<Maybe<Annotation>>>;
  currentDescription?: Maybe<Scalars['String']>;
  totalRecentViews?: Maybe<Scalars['Int']>;
  totalRecentViewsForUser?: Maybe<Scalars['Int']>;
  userIsMetricOwner?: Maybe<Scalars['Boolean']>;
  userCanEdit?: Maybe<Scalars['Boolean']>;
  userIsSubscriber?: Maybe<Scalars['Boolean']>;
  dataSources?: Maybe<Array<Maybe<DataSourceVersion>>>;
  dbtDataSources?: Maybe<Array<Maybe<DataSourceVersion>>>;
  totalDataSources?: Maybe<Scalars['Int']>;
  savedQueries?: Maybe<Array<Maybe<SavedQuery>>>;
  totalSavedQueries?: Maybe<Scalars['Int']>;
  totalResolvedQuestions?: Maybe<Scalars['Int']>;
  totalUnresolvedQuestions?: Maybe<Scalars['Int']>;
  isAdditive?: Maybe<Scalars['Boolean']>;
  myAlertNotificationRules?: Maybe<Array<Maybe<AlertNotificationRule>>>;
  alertRules?: Maybe<Array<Maybe<AlertRule>>>;
  defaultTrim?: Maybe<Scalars['Boolean']>;
  defaultGranularity?: Maybe<TimeGranularity>;
  defaultDaysLimit?: Maybe<Scalars['Int']>;
  valueChangeAlert?: Maybe<Alert>;
  valueChangeAlerts?: Maybe<Array<Maybe<Alert>>>;
  totalValueChangeAlerts?: Maybe<Scalars['Int']>;
};


export type ProtectedMetricFieldsQuestionsArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<QuestionStrColumns>>>;
  orderBy?: Maybe<QuestionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<QuestionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type ProtectedMetricFieldsAnnotationsArgs = {
  dimensions?: Maybe<Array<Maybe<GMetricAnnotationDimensionInput>>>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  priorities?: Maybe<Array<Maybe<Priority>>>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<AnnotationStrColumns>>>;
  orderBy?: Maybe<AnnotationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<AnnotationOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type ProtectedMetricFieldsDataSourcesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<DataSourceVersionStrColumns>>>;
  orderBy?: Maybe<DataSourceVersionOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<DataSourceVersionOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type ProtectedMetricFieldsSavedQueriesArgs = {
  onlyPublicAndMine?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  orderBy?: Maybe<SavedQueryOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<SavedQueryOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type ProtectedMetricFieldsTotalSavedQueriesArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<SavedQueryStrColumns>>>;
  onlyPublicAndMine?: Maybe<Scalars['Boolean']>;
};


export type ProtectedMetricFieldsValueChangeAlertArgs = {
  id: Scalars['Int'];
};


export type ProtectedMetricFieldsValueChangeAlertsArgs = {
  orderBy?: Maybe<AlertOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<AlertOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum MetricCollectionMetricOrderBy {
  CreatedAt = 'CREATED_AT',
  Emphasis = 'EMPHASIS',
  Id = 'ID',
  MetricCollectionId = 'METRIC_COLLECTION_ID',
  MetricId = 'METRIC_ID',
  Position = 'POSITION',
  SavedQueryId = 'SAVED_QUERY_ID',
  UpdatedAt = 'UPDATED_AT'
}

export type MetricCollectionMetricOrderByInput = {
  orderBy: MetricCollectionMetricOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

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
  DefaultEmphasis = 'DEFAULT_EMPHASIS',
  DeletedAt = 'DELETED_AT',
  Description = 'DESCRIPTION',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  OwnerTeamId = 'OWNER_TEAM_ID',
  PrimaryDashboardId = 'PRIMARY_DASHBOARD_ID',
  Slug = 'SLUG',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  Views = 'VIEWS'
}

export type MetricCollectionOrderByInput = {
  orderBy: MetricCollectionOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
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
export enum BoardStrColumns {
  Description = 'DESCRIPTION',
  Title = 'TITLE'
}

/** An enumeration. */
export enum BoardOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  DeletedAt = 'DELETED_AT',
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsPrivate = 'IS_PRIVATE',
  OrganizationId = 'ORGANIZATION_ID',
  RecentlyViewed = 'RECENTLY_VIEWED',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  Views = 'VIEWS'
}

export type BoardOrderByInput = {
  orderBy: BoardOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

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
  SecretHash = 'SECRET_HASH',
  Type = 'TYPE'
}

/** An enumeration. */
export enum ApiKeyOrderBy {
  CreatedAt = 'CREATED_AT',
  LastUsedAt = 'LAST_USED_AT',
  OrganizationId = 'ORGANIZATION_ID',
  Prefix = 'PREFIX',
  RevokedAt = 'REVOKED_AT',
  RevokerId = 'REVOKER_ID',
  Scope = 'SCOPE',
  SecretHash = 'SECRET_HASH',
  Type = 'TYPE',
  UserId = 'USER_ID'
}

export type ApiKeyOrderByInput = {
  orderBy: ApiKeyOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID'];
  alertId: Scalars['Int'];
  userId: Scalars['Int'];
  parentId?: Maybe<Scalars['Int']>;
  alertNotificationRuleId: Scalars['Int'];
  deliveredAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  alertNotificationRule?: Maybe<AlertNotificationRule>;
  alert?: Maybe<Alert>;
  children?: Maybe<Array<Maybe<Notification>>>;
  parent?: Maybe<Notification>;
  annotation?: Maybe<Annotation>;
  question?: Maybe<Question>;
  questionReply?: Maybe<QuestionReply>;
  numChildNotifications?: Maybe<Scalars['Int']>;
  subscriptionInviter?: Maybe<User>;
  subscribedToMetric?: Maybe<Metric>;
};

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
  orderBy?: Maybe<OrganizationOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<OrganizationOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type FeatureUsersArgs = {
  searchStr?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UserStrColumns>>>;
  orderBy?: Maybe<UserOrderBy>;
  desc?: Maybe<Scalars['Boolean']>;
  orderBys?: Maybe<Array<Maybe<UserOrderByInput>>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum OrganizationStrColumns {
  LogoUrl = 'LOGO_URL',
  MqlServerLogs = 'MQL_SERVER_LOGS',
  Name = 'NAME',
  PrimaryConfigBranch = 'PRIMARY_CONFIG_BRANCH',
  PrimaryConfigRepo = 'PRIMARY_CONFIG_REPO',
  SourceControlUrl = 'SOURCE_CONTROL_URL'
}

/** An enumeration. */
export enum OrganizationOrderBy {
  CreatedAt = 'CREATED_AT',
  DeactivatedAt = 'DEACTIVATED_AT',
  Id = 'ID',
  IsHosted = 'IS_HOSTED',
  LogoUrl = 'LOGO_URL',
  MqlServerLogs = 'MQL_SERVER_LOGS',
  Name = 'NAME',
  PrimaryConfigBranch = 'PRIMARY_CONFIG_BRANCH',
  PrimaryConfigRepo = 'PRIMARY_CONFIG_REPO',
  SourceControlUrl = 'SOURCE_CONTROL_URL',
  Type = 'TYPE',
  UpdatedAt = 'UPDATED_AT'
}

export type OrganizationOrderByInput = {
  orderBy: OrganizationOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

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
  dwEngine?: Maybe<DwEngine>;
  deploymentStatus?: Maybe<DeploymentStatus>;
  heartbeats?: Maybe<Array<Maybe<MqlHeartbeat>>>;
  organization?: Maybe<Organization>;
  latestHeartbeat?: Maybe<MqlHeartbeat>;
  dwConfig?: Maybe<DataWarehouseConfig>;
};

/** An enumeration. */
export enum DwEngine {
  Redshift = 'REDSHIFT',
  Postgresql = 'POSTGRESQL',
  Mysql = 'MYSQL',
  Snowflake = 'SNOWFLAKE',
  Bigquery = 'BIGQUERY'
}

/** Enums to represent the status of the mql server deployment */
export enum DeploymentStatus {
  Paused = 'PAUSED',
  Deploy = 'DEPLOY',
  Never = 'NEVER'
}

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

/** GQL object to represent configs for a given mql data warehouse. */
export type DataWarehouseConfig = {
  __typename?: 'DataWarehouseConfig';
  host?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  database?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  schema?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  dialect?: Maybe<Scalars['String']>;
  isPasswordSet?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum OrgMqlServerStrColumns {
  ConfigSecret = 'CONFIG_SECRET',
  Name = 'NAME',
  Url = 'URL'
}

/** An enumeration. */
export enum OrgMqlServerOrderBy {
  ConfigSecret = 'CONFIG_SECRET',
  CreatedAt = 'CREATED_AT',
  DeploymentStatus = 'DEPLOYMENT_STATUS',
  DwEngine = 'DW_ENGINE',
  Id = 'ID',
  IsOrgDefault = 'IS_ORG_DEFAULT',
  Name = 'NAME',
  OrganizationId = 'ORGANIZATION_ID',
  UpdatedAt = 'UPDATED_AT',
  Url = 'URL'
}

export type OrgMqlServerOrderByInput = {
  orderBy: OrgMqlServerOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

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
export enum OrgMetricStrColumns {
  Name = 'NAME'
}

/** An enumeration. */
export enum OrgMetricOrderBy {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Name = 'NAME',
  OrganizationId = 'ORGANIZATION_ID'
}

export type OrgMetricOrderByInput = {
  orderBy: OrgMetricOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

export type OrgPref = {
  __typename?: 'OrgPref';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  prefKey: Scalars['String'];
  prefValue: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  organization?: Maybe<Organization>;
};

/** An enumeration. */
export enum OrgPrefStrColumns {
  PrefKey = 'PREF_KEY',
  PrefValue = 'PREF_VALUE'
}

/** An enumeration. */
export enum OrgPrefOrderBy {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  PrefKey = 'PREF_KEY',
  PrefValue = 'PREF_VALUE',
  UpdatedAt = 'UPDATED_AT'
}

export type OrgPrefOrderByInput = {
  orderBy: OrgPrefOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

export type Integrations = {
  __typename?: 'Integrations';
  slack?: Maybe<SlackIntegration>;
};

export type SlackIntegration = {
  __typename?: 'SlackIntegration';
  conversations?: Maybe<SlackConversationConnection>;
};


export type SlackIntegrationConversationsArgs = {
  includeArchived?: Maybe<Scalars['Boolean']>;
  nameSearch?: Maybe<Scalars['String']>;
  pageSize?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
};

export type SlackConversationConnection = {
  __typename?: 'SlackConversationConnection';
  nodes?: Maybe<Array<SlackConversation>>;
  cursor?: Maybe<Scalars['String']>;
};

export type SlackConversation = {
  __typename?: 'SlackConversation';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<SlackConversationType>;
  isArchived?: Maybe<Scalars['Boolean']>;
  numMembers?: Maybe<Scalars['Int']>;
  topic?: Maybe<Scalars['String']>;
  purpose?: Maybe<Scalars['String']>;
};

export enum SlackConversationType {
  PublicChannel = 'PUBLIC_CHANNEL',
  PrivateChannel = 'PRIVATE_CHANNEL',
  Dm = 'DM',
  GroupDm = 'GROUP_DM'
}

/** Filters supported for metric search. */
export type MetricFilter = {
  __typename?: 'MetricFilter';
  filterName?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<MetricFilterValue>>>;
};

/** Values available for given metric filter option. */
export type MetricFilterValue = {
  __typename?: 'MetricFilterValue';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['GenericScalar']>;
};

export type IntegrationConfigurationTableau = {
  __typename?: 'IntegrationConfigurationTableau';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  site?: Maybe<Scalars['String']>;
  useServerVersion: Scalars['Boolean'];
  serverAddress: Scalars['String'];
  organization?: Maybe<Organization>;
};

export type Integration = {
  __typename?: 'Integration';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  type: IntegrationType;
  status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['Int'];
  deactivatedAt?: Maybe<Scalars['DateTime']>;
};

/** An enumeration. */
export enum IntegrationType {
  TableauWebDataConnector = 'TABLEAU_WEB_DATA_CONNECTOR',
  TableauMaterializations = 'TABLEAU_MATERIALIZATIONS',
  Dbt = 'DBT',
  GoogleSheets = 'GOOGLE_SHEETS',
  Excel_2013 = 'EXCEL_2013',
  Excel_365 = 'EXCEL_365',
  Mode = 'MODE',
  MysqlInterface = 'MYSQL_INTERFACE',
  Powerbi = 'POWERBI',
  Slack = 'SLACK'
}

/** An enumeration. */
export enum IntegrationStrColumns {
  Status = 'STATUS'
}

/** An enumeration. */
export enum IntegrationOrderBy {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  DeactivatedAt = 'DEACTIVATED_AT',
  Id = 'ID',
  OrganizationId = 'ORGANIZATION_ID',
  Status = 'STATUS',
  Type = 'TYPE'
}

export type IntegrationOrderByInput = {
  orderBy: IntegrationOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

export type Invite = {
  __typename?: 'Invite';
  id: Scalars['ID'];
  organizationId: Scalars['Int'];
  email: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  redeemedAt?: Maybe<Scalars['DateTime']>;
  invitedBy: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isExpired?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum InviteStrColumns {
  Email = 'EMAIL'
}

/** An enumeration. */
export enum InviteOrderBy {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  ExpiresAt = 'EXPIRES_AT',
  Id = 'ID',
  InvitedBy = 'INVITED_BY',
  OrganizationId = 'ORGANIZATION_ID',
  RedeemedAt = 'REDEEMED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type InviteOrderByInput = {
  orderBy: InviteOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum GIntegrationType {
  TableauWebDataConnector = 'TABLEAU_WEB_DATA_CONNECTOR',
  TableauMaterializations = 'TABLEAU_MATERIALIZATIONS',
  Dbt = 'DBT',
  GoogleSheets = 'GOOGLE_SHEETS',
  Excel_2013 = 'EXCEL_2013',
  Excel_365 = 'EXCEL_365',
  Mode = 'MODE',
  MysqlInterface = 'MYSQL_INTERFACE',
  Powerbi = 'POWERBI',
  Slack = 'SLACK'
}

/** An enumeration. */
export enum FeatureStrColumns {
  Name = 'NAME'
}

/** An enumeration. */
export enum FeatureOrderBy {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Name = 'NAME',
  RetiredAt = 'RETIRED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type FeatureOrderByInput = {
  orderBy: FeatureOrderBy;
  desc?: Maybe<Scalars['Boolean']>;
};

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

export type MqlServerHealthItem = {
  __typename?: 'MqlServerHealthItem';
  name: Scalars['String'];
  status: Scalars['String'];
  errorMessage?: Maybe<Scalars['String']>;
};

/** GQL Input object for Snowflake connection details. */
export type SnowflakeConnectionInput = {
  host: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  database: Scalars['String'];
  schema: Scalars['String'];
  warehouse: Scalars['String'];
  role?: Maybe<Scalars['String']>;
};

/** GQL Input object for Redshift connection details. */
export type RedshiftConnectionInput = {
  host: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  database: Scalars['String'];
  schema: Scalars['String'];
  port: Scalars['Int'];
};

/** GQL Input object for BigQuery connection details. */
export type BigQueryConnectionInput = {
  password: Scalars['String'];
  schema: Scalars['String'];
};

export type AlertRuleDefinition = {
  __typename?: 'AlertRuleDefinition';
  /** The name used internally to identify the alert rule */
  ruleType: Scalars['String'];
  /** The human-readable name of the alert rule */
  name: Scalars['String'];
  /** The further explanation of the alert rule */
  description: Scalars['String'];
  /** The supported config parameters of the alert rule */
  config: Array<Maybe<AlertRuleDefinitionParameter>>;
};

export type AlertRuleDefinitionParameter = {
  __typename?: 'AlertRuleDefinitionParameter';
  /** The name of the parameter */
  name: Scalars['String'];
  /** The human-readable description of the parameter */
  description: Scalars['String'];
  /** The type of the parameter  */
  valueType: ParameterType;
  /** The options for enum type parameters */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Supported parameter types for an alert rule config */
export enum ParameterType {
  Number = 'NUMBER',
  String = 'STRING',
  Bool = 'BOOL',
  Enum = 'ENUM'
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
  setOrgMqlServerConfigSecret?: Maybe<SetOrgMqlServerConfigSecretId>;
  setIntegrationConfigurationTableau?: Maybe<SetIntegrationConfigurationTableau>;
  removeIntegrationConfigurationTableau?: Maybe<RemoveIntegrationConfigurationTableau>;
  sendMqlHeartbeat?: Maybe<SendMqlHeartbeat>;
  createAnnotationTest?: Maybe<CreateAnnotation>;
  updateAnnotationTest?: Maybe<UpdateAnnotation>;
  removeAnnotation?: Maybe<RemoveAnnotation>;
  /** Update user's email in DB and auth0. Auth0 needs to match for user to login with new email. */
  updateUserEmail?: Maybe<UpdateUserEmail>;
  /** Create API Key for given user. If no user_id passed, create key for authenticated user. */
  createApiKeyTest?: Maybe<CreateApiKey>;
  /** Create SCIM API Key for given user. If no user_id passed, create key for authenticated user. */
  createScimApiKeyTest?: Maybe<CreateScimApiKey>;
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
  /** Stores hosted MQL Server config using AWS Secrets Manager. */
  updateMqlServerConfig?: Maybe<UpdateMqlServerConfig>;
  /** Removes hosted MQL Server config using AWS Secrets Manager. */
  revokeMqlServerConfig?: Maybe<RevokeMqlServerConfig>;
  /** Stores environment variables required to spin up the MQL server into AWS Secrets Manager. */
  setMqlServerEnvConfig?: Maybe<SetMqlServerEnvConfig>;
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
  organizationsCreateSharedSlack?: Maybe<Organization>;
  organizationsCreateSamlConnection?: Maybe<Organization>;
  organizationsDisableOkta?: Maybe<Organization>;
  organizationsSetTierTooltip?: Maybe<Organization>;
  organizationsSetMfaPrefs?: Maybe<Organization>;
  organizationsSetPref?: Maybe<Organization>;
  organizationsDeletePref?: Maybe<Organization>;
  organizationsSetAllowedEmailDomains?: Maybe<Organization>;
  organizationsDeactivate?: Maybe<Organization>;
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
  createSavedQuery?: Maybe<SavedQuery>;
  updateSavedQuery?: Maybe<SavedQuery>;
  savedQueryDeactivate?: Maybe<SavedQuery>;
  sendInvites?: Maybe<Organization>;
  acceptTermsOfService?: Maybe<User>;
  createTermsOfService?: Maybe<TermsOfServiceVersion>;
  createSubscription?: Maybe<Metric>;
  removeSubscription?: Maybe<Metric>;
  markNotificationsDelivered?: Maybe<Scalars['Boolean']>;
  addAlertRule?: Maybe<AlertRule>;
  addAlertNotificationRule?: Maybe<AlertNotificationRule>;
  updateAlertRule?: Maybe<AlertRule>;
  removeAlertRule?: Maybe<AlertRule>;
  removeAlertNotificationRule?: Maybe<AlertNotificationRule>;
  addAlertNotificationRuleForCurrentUser?: Maybe<AlertNotificationRule>;
  removeAlertNotificationRuleForCurrentUser?: Maybe<AlertNotificationRule>;
  resubscribeAlertNotificationRuleForCurrentUser?: Maybe<AlertNotificationRule>;
  slackSendMetric?: Maybe<SlackSendMetricResult>;
  slackCreateOrgInstallation?: Maybe<SlackCreateOrgInstallationResult>;
  slackDeleteOrgInstallation?: Maybe<SlackDeleteOrgInstallationResult>;
  setDbUtcTimezoneOffsetHours?: Maybe<Organization>;
  setDbArrearsHours?: Maybe<Organization>;
  createIntegration?: Maybe<Integration>;
  updateIntegration?: Maybe<Integration>;
  dismissOnboardingCards?: Maybe<Scalars['Boolean']>;
  generateOrgSignUpToken?: Maybe<Scalars['String']>;
  testNewOnboardingSlackMessage?: Maybe<Scalars['String']>;
  testCurrentOnboardingSlackMessage?: Maybe<Scalars['String']>;
  updateOnboardingSlackMessage?: Maybe<Scalars['Boolean']>;
  unsubscribeFromNotificationChannel?: Maybe<User>;
  resubscribeToNotificationChannel?: Maybe<User>;
  bulkSubscribeAlertRules?: Maybe<User>;
  bulkUnsubscribeAlertRules?: Maybe<User>;
  createTransformServiceUser?: Maybe<User>;
  boardsCreate?: Maybe<Board>;
  boardsUpdate?: Maybe<Board>;
  boardsDeactivate?: Maybe<Board>;
  boardsAddSavedQuery?: Maybe<Array<Maybe<Board>>>;
  boardsLogView?: Maybe<BoardView>;
  boardsAddUserOwners?: Maybe<Board>;
  boardsRemoveUserOwners?: Maybe<Board>;
  boardsAddTeamOwners?: Maybe<Board>;
  boardsRemoveTeamOwners?: Maybe<Board>;
  boardsFavorite?: Maybe<BoardFavorite>;
  boardsUnfavorite?: Maybe<BoardFavorite>;
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
export type MutationSetIntegrationConfigurationTableauArgs = {
  configuration?: Maybe<GIntegrationConfigurationTableauInput>;
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
export type MutationCreateScimApiKeyTestArgs = {
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
export type MutationUpdateMqlServerConfigArgs = {
  dwPassword?: Maybe<Scalars['String']>;
  modeCreds?: Maybe<Scalars['String']>;
  mqlServerId?: Maybe<Scalars['Int']>;
  tfdApiKey?: Maybe<Scalars['String']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationRevokeMqlServerConfigArgs = {
  mqlServerId?: Maybe<Scalars['Int']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSetMqlServerEnvConfigArgs = {
  bigQueryConnectionDetails?: Maybe<BigQueryConnectionInput>;
  deployServer?: Maybe<Scalars['Boolean']>;
  redshiftConnectionDetails?: Maybe<RedshiftConnectionInput>;
  snowflakeConnectionDetails?: Maybe<SnowflakeConnectionInput>;
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
  deploymentStatus?: Maybe<Scalars['String']>;
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
  deploymentStatus?: Maybe<Scalars['String']>;
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
export type MutationOrganizationsCreateSharedSlackArgs = {
  orgId: Scalars['ID'];
  emails: Array<Maybe<Scalars['String']>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsCreateSamlConnectionArgs = {
  companyName: Scalars['String'];
  signInUrl: Scalars['String'];
  signingCertificate: Scalars['String'];
  allowedEmailDomains: Array<Maybe<Scalars['String']>>;
  orgId?: Maybe<Scalars['ID']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsDisableOktaArgs = {
  orgId?: Maybe<Scalars['ID']>;
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
  mfaPref: MfaPref;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsSetPrefArgs = {
  organizationId: Scalars['ID'];
  prefKey: Scalars['String'];
  prefValue: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationOrganizationsDeletePrefArgs = {
  organizationId: Scalars['ID'];
  prefKey: Scalars['String'];
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
export type MutationOrganizationsDeactivateArgs = {
  orgId: Scalars['ID'];
  reactivate?: Maybe<Scalars['Boolean']>;
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
  ownerType?: Maybe<GOwnerType>;
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
  ownerType?: Maybe<GOwnerType>;
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
  ownerType?: Maybe<GOwnerType>;
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
  ownerType?: Maybe<GOwnerType>;
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
  increaseIsGood?: Maybe<Scalars['Boolean']>;
  defaultTrim?: Maybe<Scalars['Boolean']>;
  defaultGranularity?: Maybe<TimeGranularity>;
  defaultDaysLimit?: Maybe<Scalars['Int']>;
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
  isPrivate?: Maybe<Scalars['Boolean']>;
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
  isPrivate?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateSavedQueryArgs = {
  title: Scalars['String'];
  queryId: Scalars['Int'];
  isPrivate?: Maybe<Scalars['Boolean']>;
  chartType?: Maybe<GChartType>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationUpdateSavedQueryArgs = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  queryId?: Maybe<Scalars['Int']>;
  chartType?: Maybe<GChartType>;
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


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateSubscriptionArgs = {
  metricId: Scalars['ID'];
  userIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationRemoveSubscriptionArgs = {
  metricId: Scalars['ID'];
  userIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationMarkNotificationsDeliveredArgs = {
  notificationIds: Array<Maybe<Scalars['ID']>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationAddAlertRuleArgs = {
  metricId: Scalars['ID'];
  alertRuleType: GAlertRuleType;
  config?: Maybe<Scalars['JSONString']>;
  useDefaultNotifRules?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationAddAlertNotificationRuleArgs = {
  alertRuleId: Scalars['ID'];
  alertNotificationRuleType: GAlertNotificationRuleType;
  channel: GNotificationChannel;
  config?: Maybe<Scalars['JSONString']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationUpdateAlertRuleArgs = {
  alertRuleId: Scalars['ID'];
  metricId: Scalars['ID'];
  alertRuleType: GAlertRuleType;
  config?: Maybe<Scalars['JSONString']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationRemoveAlertRuleArgs = {
  alertRuleId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationRemoveAlertNotificationRuleArgs = {
  alertNotificationRuleId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationAddAlertNotificationRuleForCurrentUserArgs = {
  alertRuleId: Scalars['ID'];
  channel: GNotificationChannel;
  config?: Maybe<Scalars['JSONString']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationRemoveAlertNotificationRuleForCurrentUserArgs = {
  alertNotificationRuleId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationResubscribeAlertNotificationRuleForCurrentUserArgs = {
  alertNotificationRuleId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSlackSendMetricArgs = {
  destinationId: Scalars['String'];
  message: SlackMetricMessageInput;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSlackCreateOrgInstallationArgs = {
  oauthCode: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSetDbUtcTimezoneOffsetHoursArgs = {
  organizationId: Scalars['ID'];
  dbUtcTimezoneOffsetHours: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationSetDbArrearsHoursArgs = {
  organizationId: Scalars['ID'];
  dbArrearsHours: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateIntegrationArgs = {
  organizationId: Scalars['ID'];
  integrationType: GIntegrationType;
  status: GIntegrationStatus;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationUpdateIntegrationArgs = {
  integrationId: Scalars['ID'];
  status?: Maybe<GIntegrationStatus>;
  active?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationDismissOnboardingCardsArgs = {
  userId: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationGenerateOrgSignUpTokenArgs = {
  email: Scalars['String'];
  orgType: GOrgType;
  expirationHours?: Maybe<Scalars['Int']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationTestNewOnboardingSlackMessageArgs = {
  message: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationUpdateOnboardingSlackMessageArgs = {
  message: Scalars['String'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationUnsubscribeFromNotificationChannelArgs = {
  channel: GNotificationChannel;
  userId: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationResubscribeToNotificationChannelArgs = {
  channel: GNotificationChannel;
  userId: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBulkSubscribeAlertRulesArgs = {
  channels: Array<Maybe<GNotificationChannel>>;
  alertRuleTypes: Array<Maybe<GAlertRuleType>>;
  userId: Scalars['Int'];
  metricId?: Maybe<Scalars['Int']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBulkUnsubscribeAlertRulesArgs = {
  channels: Array<Maybe<GNotificationChannel>>;
  alertRuleTypes: Array<Maybe<GAlertRuleType>>;
  userId: Scalars['Int'];
  metricId?: Maybe<Scalars['Int']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationCreateTransformServiceUserArgs = {
  orgId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsCreateArgs = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsUpdateArgs = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<BoardItemInput>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsDeactivateArgs = {
  id: Scalars['Int'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsAddSavedQueryArgs = {
  savedQueryId: Scalars['Int'];
  boardIds: Array<Maybe<Scalars['Int']>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsLogViewArgs = {
  boardId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsAddUserOwnersArgs = {
  boardId: Scalars['ID'];
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsRemoveUserOwnersArgs = {
  boardId: Scalars['ID'];
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsAddTeamOwnersArgs = {
  boardId: Scalars['ID'];
  teamIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsRemoveTeamOwnersArgs = {
  boardId: Scalars['ID'];
  teamIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsFavoriteArgs = {
  boardId: Scalars['ID'];
};


/**
 * Base mutation object exposed by GraphQL.
 *
 * Mutation names will be converted from snake_case to camelCase automatically
 * (e.g., log_mql_log will show up as logMqlLog in the GQL schema).
 */
export type MutationBoardsUnfavoriteArgs = {
  boardId: Scalars['ID'];
};

/** An enumeration. */
export enum GOrgType {
  Paid = 'PAID',
  Trial = 'TRIAL',
  Internal = 'INTERNAL',
  Test = 'TEST'
}

export type SetOrgMqlServerConfigSecretId = {
  __typename?: 'SetOrgMqlServerConfigSecretId';
  mqlServer?: Maybe<OrgMqlServer>;
};

export type SetIntegrationConfigurationTableau = {
  __typename?: 'SetIntegrationConfigurationTableau';
  site?: Maybe<Scalars['String']>;
  useServerVersion?: Maybe<Scalars['Boolean']>;
  serverAddress?: Maybe<Scalars['String']>;
};

export type GIntegrationConfigurationTableauInput = {
  patName: Scalars['String'];
  patValue: Scalars['String'];
  site?: Maybe<Scalars['String']>;
  useServerVersion: Scalars['Boolean'];
  serverAddress: Scalars['String'];
};

export type RemoveIntegrationConfigurationTableau = {
  __typename?: 'RemoveIntegrationConfigurationTableau';
  success?: Maybe<Scalars['Boolean']>;
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

/** Create SCIM API Key for given user. If no user_id passed, create key for authenticated user. */
export type CreateScimApiKey = {
  __typename?: 'CreateSCIMApiKey';
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

/** Stores hosted MQL Server config using AWS Secrets Manager. */
export type UpdateMqlServerConfig = {
  __typename?: 'UpdateMqlServerConfig';
  config?: Maybe<MqlServerConfig>;
};

/** MQL Server configuration for hosted MQL Servers */
export type MqlServerConfig = {
  __typename?: 'MqlServerConfig';
  /** MQL Server ID as stored in the Backend */
  mqlServerId?: Maybe<Scalars['Int']>;
  /** Transform Data API Key. _Note:_ Stored securely using AWS Secrets Manager. */
  tfdApiKey?: Maybe<Scalars['String']>;
  /** Password used to access the Data Warehouse. _Note:_ Stored securely using AWS Secrets Manager. */
  dwPassword?: Maybe<Scalars['String']>;
  /** Mode bridge connection config. _Note:_ Stored securely using AWS Secrets Manager. */
  modeCreds?: Maybe<Scalars['String']>;
};

/** Removes hosted MQL Server config using AWS Secrets Manager. */
export type RevokeMqlServerConfig = {
  __typename?: 'RevokeMqlServerConfig';
  success?: Maybe<Scalars['Boolean']>;
};

/** Stores environment variables required to spin up the MQL server into AWS Secrets Manager. */
export type SetMqlServerEnvConfig = {
  __typename?: 'SetMqlServerEnvConfig';
  success?: Maybe<Scalars['Boolean']>;
};

/** Graphene input object for a metric collection item. Essentially a dataclass. */
export type MetricCollectionItem = {
  metricId?: Maybe<Scalars['ID']>;
  savedQueryId?: Maybe<Scalars['ID']>;
  emphasis: Scalars['Int'];
  position: Scalars['Int'];
};

export type MfaPref = {
  requireMfa: Scalars['Boolean'];
  allowMfaRememberBrowser: Scalars['Boolean'];
};

/** An enumeration. */
export enum GOwnerType {
  Business = 'business',
  Technical = 'technical'
}

/** An enumeration. */
export enum GChartType {
  LineChart = 'LINE_CHART',
  AreaChartStacked = 'AREA_CHART_STACKED',
  AreaChartShareOf = 'AREA_CHART_SHARE_OF',
  BarChart = 'BAR_CHART',
  BarChartStacked = 'BAR_CHART_STACKED',
  BarChartShareOf = 'BAR_CHART_SHARE_OF',
  BigNumber = 'BIG_NUMBER',
  Table = 'TABLE'
}

/** An enumeration. */
export enum GAlertRuleType {
  MetadataNewQuestion = 'METADATA_NEW_QUESTION',
  MetadataNewAnnotation = 'METADATA_NEW_ANNOTATION',
  MetadataNewSubscribers = 'METADATA_NEW_SUBSCRIBERS',
  MetadataNewReply = 'METADATA_NEW_REPLY',
  ValueChange = 'VALUE_CHANGE',
  YouAreSubscribed = 'YOU_ARE_SUBSCRIBED'
}

/** An enumeration. */
export enum GAlertNotificationRuleType {
  Individual = 'INDIVIDUAL',
  Subscriber = 'SUBSCRIBER',
  Owner = 'OWNER',
  Custom = 'CUSTOM'
}

/** An enumeration. */
export enum GNotificationChannel {
  InApp = 'IN_APP',
  Email = 'EMAIL'
}

export type SlackSendMetricResult = {
  __typename?: 'SlackSendMetricResult';
  ok?: Maybe<Scalars['Boolean']>;
};

export type SlackMetricMessageInput = {
  locale: Locale;
  description: Scalars['String'];
  query: MetricQueryInput;
};

export enum Locale {
  EnUs = 'en_US'
}

export type MetricQueryInput = {
  metrics: Array<Scalars['String']>;
  dimensions: Array<Scalars['String']>;
  where?: Maybe<ConstraintInput>;
  whereConstraint?: Maybe<Scalars['String']>;
  timeConstraint?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  timeGranularity?: Maybe<Scalars['String']>;
  daysLimit?: Maybe<Scalars['Int']>;
  pctChange?: Maybe<PercentChange>;
  trimIncompletePeriods?: Maybe<Scalars['Boolean']>;
  includeDateBoundaries?: Maybe<Scalars['Boolean']>;
  maxDimensionValues?: Maybe<Scalars['Int']>;
};

export type ConstraintInput = {
  And?: Maybe<Array<SingleConstraintInput>>;
  constraint?: Maybe<SingleConstraintInput>;
};

export type SingleConstraintInput = {
  constraintType?: Maybe<AtomicConstraintType>;
  dimensionName?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  start?: Maybe<Scalars['String']>;
  stop?: Maybe<Scalars['String']>;
};

export enum AtomicConstraintType {
  Set = 'SET',
  Range = 'RANGE'
}

export enum PercentChange {
  Dod = 'DOD',
  Wow = 'WOW',
  Mom = 'MOM',
  Qoq = 'QOQ',
  Yoy = 'YOY',
  DateRange = 'DATE_RANGE'
}

export type SlackCreateOrgInstallationResult = {
  __typename?: 'SlackCreateOrgInstallationResult';
  ok?: Maybe<Scalars['Boolean']>;
};

export type SlackDeleteOrgInstallationResult = {
  __typename?: 'SlackDeleteOrgInstallationResult';
  ok?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum GIntegrationStatus {
  Requested = 'REQUESTED',
  Completed = 'COMPLETED'
}

export type BoardItemInput = {
  config: BoardItemConfigInput;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

/** Input union for board items. Exactly one of the fields must be non-null */
export type BoardItemConfigInput = {
  savedQuery?: Maybe<SavedQueryItemConfigInput>;
  metric?: Maybe<MetricItemConfigInput>;
  group?: Maybe<GroupItemConfigInput>;
};

export type SavedQueryItemConfigInput = {
  savedQueryId: Scalars['Int'];
  chartType?: Maybe<GChartType>;
};

export type MetricItemConfigInput = {
  metricId: Scalars['Int'];
  chartType?: Maybe<GChartType>;
};

export type GroupItemConfigInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  children?: Maybe<Array<BoardItemInput>>;
};

export type BoardView = {
  __typename?: 'BoardView';
  organizationId: Scalars['Int'];
  userId: Scalars['ID'];
  boardId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  organization?: Maybe<Organization>;
};

export type BoardFavorite = {
  __typename?: 'BoardFavorite';
  organizationId: Scalars['Int'];
  userId: Scalars['ID'];
  boardId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  organization?: Maybe<Organization>;
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
