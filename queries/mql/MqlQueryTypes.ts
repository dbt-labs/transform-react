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
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /** Wrapper around Graphene DateTime that is capable of handling string dates */
  DateTime: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * Limit is a GraphQL Scalar that can take in inf or positive integers.
   *
   * This class helps us normalize a API limit input into the Optional[int] type expected by library code
   */
  LimitInput: any;
};

/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type Query = {
  __typename?: 'Query';
  version?: Maybe<Scalars['String']>;
  boom?: Maybe<Scalars['Boolean']>;
  mqlQuery?: Maybe<MqlQuery>;
  sourceQuery?: Maybe<Scalars['String']>;
  materializations?: Maybe<Array<Materialization>>;
  metrics?: Maybe<Array<Metric>>;
  metricByName?: Maybe<Metric>;
  measures?: Maybe<Array<Measure>>;
  measureByName?: Maybe<Measure>;
  dimensionNamesForMetrics?: Maybe<Array<Maybe<Scalars['String']>>>;
  dimensionsForMetrics?: Maybe<Dimensions>;
  /** @deprecated Use `dimensionNamesForMetrics`. */
  dimensionNamesForMetricsMultihop?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated Use `dimensionsForMetrics`. */
  dimensionsForMetricsMultihop?: Maybe<Dimensions>;
  dimensions?: Maybe<Array<Dimension>>;
  primaryTimeDimension?: Maybe<Dimension>;
  maxGranularityForMetrics?: Maybe<TimeGranularity>;
  queryableGranularitiesForMetrics?: Maybe<Array<Maybe<TimeGranularity>>>;
  queries?: Maybe<Array<Maybe<MqlQuery>>>;
  healthReport?: Maybe<Array<Maybe<MqlServerHealthItem>>>;
  validations?: Maybe<Validations>;
  flagIsEnabled?: Maybe<Scalars['Boolean']>;
  dbtModelMeta?: Maybe<Array<Maybe<DbtModelMeta>>>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryBoomArgs = {
  raise_?: Maybe<Scalars['Boolean']>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryMqlQueryArgs = {
  id: Scalars['ID'];
  attemptNum?: Maybe<Scalars['Int']>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QuerySourceQueryArgs = {
  id: Scalars['ID'];
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryMaterializationsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryMetricsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryMetricByNameArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  name: Scalars['String'];
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryMeasuresArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryMeasureByNameArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  name: Scalars['String'];
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryDimensionNamesForMetricsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  metricNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  excludeProperties?: Maybe<Array<Maybe<DimensionProperty>>>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryDimensionsForMetricsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  metricNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  excludeProperties?: Maybe<Array<Maybe<DimensionProperty>>>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryDimensionNamesForMetricsMultihopArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  metricNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryDimensionsForMetricsMultihopArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  metricNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryDimensionsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryPrimaryTimeDimensionArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryMaxGranularityForMetricsArgs = {
  metricNames: Array<Maybe<Scalars['String']>>;
  modelKey?: Maybe<ModelKeyInput>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryQueryableGranularitiesForMetricsArgs = {
  metricNames: Array<Maybe<Scalars['String']>>;
  modelKey?: Maybe<ModelKeyInput>;
  pctChange?: Maybe<PercentChange>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryQueriesArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  status?: Maybe<MqlQueryStatus>;
  metricNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateRangeStart?: Maybe<Scalars['Date']>;
  dateRangeEnd?: Maybe<Scalars['Date']>;
  minExecutionSeconds?: Maybe<Scalars['Float']>;
  maxExecutionSeconds?: Maybe<Scalars['Float']>;
  userIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryValidationsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryFlagIsEnabledArgs = {
  flag: Scalars['String'];
};


/**
 * Base Query object exposed by GraphQL for the MQL Server
 *
 * Each field defined below is accessible by the API, by calling the equivalent resolver.
 */
export type QueryDbtModelMetaArgs = {
  dataSourceNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * The MQL Query class is used to access the output of an MQL Query.
 *
 * Since queries are processed asynchronously, the status field indicates whether results are available.
 * Once complete, the results are available either in a strongly typed format, `result`, or
 * a generic, tabular format suitable for constructing a Pandas DataFrame.
 */
export type MqlQuery = {
  __typename?: 'MqlQuery';
  /** Query IDs are disposable, as query results expire in a short period of time. It is expected that queries are created, and then results are retrieved immediately upon query completion. */
  id?: Maybe<Scalars['ID']>;
  /** The model key used when creating the query */
  modelKey?: Maybe<ModelKey>;
  /** ID of the user who executed the query */
  userId?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Array<Scalars['String']>>;
  dimensions?: Maybe<Array<Scalars['String']>>;
  /** The status of the requested query */
  status?: Maybe<MqlQueryStatus>;
  result?: Maybe<Array<MqlQueryResultSeries>>;
  /** The Tabular Results are Base 64-encoded JSON of a subset of rows from the query results Data Frame. */
  resultTabular?: Maybe<MqlQueryTabularResult>;
  totalResultRows?: Maybe<Scalars['Int']>;
  /** The completion time for the query result. If using the MQL result cache, helps check when the latest cache fill occurred. */
  completedAt?: Maybe<Scalars['DateTime']>;
  resultTableSchema?: Maybe<Scalars['String']>;
  resultTableName?: Maybe<Scalars['String']>;
  resultSource?: Maybe<QueryResultSource>;
  resultPrimaryTimeGranularity?: Maybe<TimeGranularity>;
  /** Time this query was submitted to the MQL server */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Time the MQL Server start query execution */
  startedAt?: Maybe<Scalars['DateTime']>;
  sql?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  errorTraceback?: Maybe<Scalars['String']>;
  userFriendlyErrorType?: Maybe<MqlQueryUserFriendlyErrorType>;
  logs?: Maybe<Scalars['String']>;
  logsByLine?: Maybe<Scalars['String']>;
  chartValueMin?: Maybe<Scalars['Float']>;
  chartValueMax?: Maybe<Scalars['Float']>;
  latestResultValues?: Maybe<Array<Maybe<QueryResultValue>>>;
  whereConstraint?: Maybe<Scalars['String']>;
  requestedGranularity?: Maybe<TimeGranularity>;
  groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  maxDimensionValues?: Maybe<Scalars['Int']>;
  constraint?: Maybe<Constraint>;
  timeComparison?: Maybe<PercentChange>;
  timeConstraint?: Maybe<TimeConstraint>;
  numPostprocessedResults?: Maybe<Scalars['Int']>;
  dbId?: Maybe<Scalars['Int']>;
  warnings?: Maybe<Array<Maybe<Scalars['String']>>>;
  availableChartTypes?: Maybe<Array<Maybe<ChartType>>>;
};


/**
 * The MQL Query class is used to access the output of an MQL Query.
 *
 * Since queries are processed asynchronously, the status field indicates whether results are available.
 * Once complete, the results are available either in a strongly typed format, `result`, or
 * a generic, tabular format suitable for constructing a Pandas DataFrame.
 */
export type MqlQueryResultTabularArgs = {
  cursor?: Maybe<Scalars['Int']>;
  orient?: Maybe<PandasJsonOrient>;
  paginate?: Maybe<Scalars['Boolean']>;
};


/**
 * The MQL Query class is used to access the output of an MQL Query.
 *
 * Since queries are processed asynchronously, the status field indicates whether results are available.
 * Once complete, the results are available either in a strongly typed format, `result`, or
 * a generic, tabular format suitable for constructing a Pandas DataFrame.
 */
export type MqlQueryLogsByLineArgs = {
  fromLine?: Maybe<Scalars['Int']>;
  maxLines?: Maybe<Scalars['Int']>;
};

/** API Output definition for a Model Key */
export type ModelKey = {
  __typename?: 'ModelKey';
  organization: Scalars['String'];
  repo: Scalars['String'];
  branch: Scalars['String'];
  commit: Scalars['String'];
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

/** This is the canonical shape for chart-ready data. */
export type MqlQueryResultSeries = {
  __typename?: 'MqlQueryResultSeries';
  /** For queries without dimensional cuts, series_value will be `ALL`. For queries with dimensional cuts, one of these Result will be returned per dimension */
  seriesValue?: Maybe<Scalars['String']>;
  data?: Maybe<Array<ResultDatum>>;
  isOtherCol?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['Float']>;
  delta?: Maybe<Scalars['Float']>;
  pctChange?: Maybe<Scalars['GenericScalar']>;
  xDate?: Maybe<Scalars['DateTime']>;
};

/** This interface is used to describe any type of MQL Query result data */
export type ResultDatum = {
  y?: Maybe<Scalars['GenericScalar']>;
};



/** Object type for Tabular data used to populate Pandas DataFrames */
export type MqlQueryTabularResult = {
  __typename?: 'MqlQueryTabularResult';
  /** Base-64 encoded Pandas DataFrame dumped to JSON using the specified orient. */
  data?: Maybe<Scalars['String']>;
  /** If present, the cursor indicates the value to pass for the next batch of records. If null, all results have been transferred. */
  nextCursor?: Maybe<Scalars['String']>;
};

/**
 * Determines the format of the JSON output for the DataFrame
 *
 *     See https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_json.html
 */
export enum PandasJsonOrient {
  Split = 'SPLIT',
  Records = 'RECORDS',
  Index = 'INDEX',
  Columns = 'COLUMNS',
  Values = 'VALUES',
  Table = 'TABLE'
}

/** Different ways that a query result could have been computed or retrieved. */
export enum QueryResultSource {
  DynamicCache = 'DYNAMIC_CACHE',
  DwMaterialization = 'DW_MATERIALIZATION',
  FastCache = 'FAST_CACHE',
  Metricflow = 'METRICFLOW',
  NotApplicable = 'NOT_APPLICABLE',
  NotSpecified = 'NOT_SPECIFIED'
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

/** User friendly error types to return with MqlQuery */
export enum MqlQueryUserFriendlyErrorType {
  DbError = 'DB_ERROR',
  UnableToSatisfyQueryError = 'UNABLE_TO_SATISFY_QUERY_ERROR',
  Unknown = 'UNKNOWN'
}

/** Represents a row of query results for one pivot value. */
export type QueryResultValue = {
  __typename?: 'QueryResultValue';
  date?: Maybe<Scalars['DateTime']>;
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

/** Represents a where constraint used in a query. */
export type Constraint = {
  __typename?: 'Constraint';
  constraint?: Maybe<SingleConstraint>;
  And?: Maybe<Array<SingleConstraint>>;
};

/** Actual `where` clauses to be applied */
export type SingleConstraint = {
  __typename?: 'SingleConstraint';
  constraintType?: Maybe<AtomicConstraintType>;
  dimensionName?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  start?: Maybe<Scalars['String']>;
  stop?: Maybe<Scalars['String']>;
};

/** Current possible values for constraints */
export enum AtomicConstraintType {
  Set = 'SET',
  Range = 'RANGE'
}

/** An enumeration. */
export enum PercentChange {
  Dod = 'DOD',
  Wow = 'WOW',
  Mom = 'MOM',
  Qoq = 'QOQ',
  Yoy = 'YOY',
  DateRange = 'DATE_RANGE'
}

/** Represents a time range with inclusive start / stop endpoints. */
export type TimeConstraint = {
  __typename?: 'TimeConstraint';
  dimensionName?: Maybe<Scalars['String']>;
  timeFormat?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  stop?: Maybe<Scalars['String']>;
  timeGranularity?: Maybe<TimeGranularity>;
};

/** An enumeration. */
export enum ChartType {
  LineChart = 'LINE_CHART',
  AreaChart = 'AREA_CHART',
  AreaChartShareOf = 'AREA_CHART_SHARE_OF',
  BarChartStacked = 'BAR_CHART_STACKED',
  BarChartGrouped = 'BAR_CHART_GROUPED',
  BarChartStackedShareOf = 'BAR_CHART_STACKED_SHARE_OF',
  BigNumber = 'BIG_NUMBER',
  Table = 'TABLE'
}

export type Materialization = {
  __typename?: 'Materialization';
  name: Scalars['String'];
  metrics?: Maybe<Array<Scalars['String']>>;
  dimensions?: Maybe<Array<Scalars['String']>>;
  destinationTable?: Maybe<Scalars['String']>;
};

/** API Input definition for a Model Key */
export type ModelKeyInput = {
  organization: Scalars['String'];
  repo: Scalars['String'];
  branch: Scalars['String'];
  commit: Scalars['String'];
};

export type Metric = {
  __typename?: 'Metric';
  name: Scalars['String'];
  measures?: Maybe<Array<Scalars['String']>>;
  typeParams: MetricTypeParams;
  type: Scalars['String'];
  constraint?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Array<Scalars['String']>>;
  dimensionObjects?: Maybe<Array<Dimension>>;
  dimensionValues?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalDimensionValues?: Maybe<Scalars['Int']>;
  maxGranularity?: Maybe<TimeGranularity>;
  newDataIsAvailable?: Maybe<Scalars['Boolean']>;
  canLimitDimensionValues?: Maybe<Scalars['Boolean']>;
};


export type MetricDimensionObjectsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};


export type MetricDimensionValuesArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  dimensionName: Scalars['String'];
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  allowDynamicCache?: Maybe<Scalars['Boolean']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  searchStr?: Maybe<Scalars['String']>;
};


export type MetricTotalDimensionValuesArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  dimensionName: Scalars['String'];
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  allowDynamicCache?: Maybe<Scalars['Boolean']>;
  searchStr?: Maybe<Scalars['String']>;
};


export type MetricMaxGranularityArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};


export type MetricNewDataIsAvailableArgs = {
  afterDatetime: Scalars['DateTime'];
  modelKey?: Maybe<ModelKeyInput>;
};


export type MetricCanLimitDimensionValuesArgs = {
  modelKey?: Maybe<ModelKeyInput>;
};

/** Metric Type Params. For measures references in type_params config, see the Metric object. */
export type MetricTypeParams = {
  __typename?: 'MetricTypeParams';
  numerator?: Maybe<Scalars['String']>;
  denominator?: Maybe<Scalars['String']>;
  expr?: Maybe<Scalars['String']>;
  window?: Maybe<Scalars['String']>;
};

export type Dimension = {
  __typename?: 'Dimension';
  name: Scalars['String'];
  elementName: Scalars['String'];
  identifierName?: Maybe<Scalars['String']>;
  identifierNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<DimensionTypeForDescription>;
  isPrimaryTime?: Maybe<Scalars['Boolean']>;
  timeGranularity?: Maybe<TimeGranularity>;
  values?: Maybe<Array<Scalars['String']>>;
  cardinality?: Maybe<Scalars['Int']>;
};

/** Describes the type of dimension in QueryableDimensionDescription. */
export enum DimensionTypeForDescription {
  Categorical = 'CATEGORICAL',
  Time = 'TIME'
}

export type Measure = {
  __typename?: 'Measure';
  name: Scalars['String'];
  dataSources?: Maybe<Array<Scalars['String']>>;
};

/** An enumeration. */
export enum DimensionProperty {
  Local = 'LOCAL',
  LocalLinked = 'LOCAL_LINKED',
  Joined = 'JOINED',
  MultiHop = 'MULTI_HOP',
  DerivedTimeGranularity = 'DERIVED_TIME_GRANULARITY',
  Intersected = 'INTERSECTED'
}

export type Dimensions = {
  __typename?: 'Dimensions';
  localDimensions?: Maybe<Array<Maybe<Dimension>>>;
  nonLocalDimensions?: Maybe<Array<Maybe<Dimension>>>;
};


export type DimensionsLocalDimensionsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  metricNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DimensionsNonLocalDimensionsArgs = {
  modelKey?: Maybe<ModelKeyInput>;
  metricNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MqlServerHealthItem = {
  __typename?: 'MqlServerHealthItem';
  name: Scalars['String'];
  status: Scalars['String'];
  errorMessage?: Maybe<Scalars['String']>;
};

export type Validations = {
  __typename?: 'Validations';
  modelKey?: Maybe<ModelKey>;
  allIssues?: Maybe<Array<Scalars['String']>>;
  dataSourceIssues?: Maybe<Array<Scalars['String']>>;
  metricIssues?: Maybe<Array<Scalars['String']>>;
  dimensionIssues?: Maybe<Array<Scalars['String']>>;
};

/** The meta information we track of dbt models */
export type DbtModelMeta = {
  __typename?: 'DbtModelMeta';
  timestamp?: Maybe<Scalars['DateTime']>;
  schema: Scalars['String'];
  model: Scalars['String'];
  user?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  isFullRefresh?: Maybe<Scalars['Boolean']>;
  gitSha?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  projectName?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['String']>;
  runId?: Maybe<Scalars['String']>;
};

/** Base mutation object exposed by GraphQL. */
export type Mutation = {
  __typename?: 'Mutation';
  createMqlMaterializationNew?: Maybe<CreateMqlMaterializationNewPayload>;
  createMqlDropMaterialization?: Maybe<CreateMqlDropMaterializationPayload>;
  /**
   * This mutation is used to initiate an MQL Query.
   *
   * The primary return value is a queryId that can be used to fetch the query status, errors, and results.
   * The full query object is also returned in case we have a result available synchronously (stored the result cache)
   */
  createMqlQuery?: Maybe<CreateMqlQueryPayload>;
  /** Initiate an MQL Query based on just the DB id. We'll build out the parameters from the DB record. */
  createMqlQueryFromDbId?: Maybe<CreateMqlQueryFromDbIdPayload>;
  /** @deprecated Moving to async implementation (CreateMqlMaterializationNew) */
  materialize?: Maybe<Materialize>;
  /** Drop the MQL dynamic cache. Please avoid doing this unless there's a cache corruption issue. */
  dropCache?: Maybe<DropCache>;
  /** Rewrites SQL containing an MQL(...) function invocation by expanding into generated SQL */
  rewriteMqlSql?: Maybe<RewriteMqlSql>;
  /** For metric, get latest value, percent change from the previous granularity period, and delta between the two. */
  queryLatestMetricChange?: Maybe<QueryLatestMetricChangePayload>;
  /** For time period, get latest value, percent change from the previous granularity period, and delta between the two. */
  queryMetricChange?: Maybe<QueryMetricChangePayload>;
  /** Get percent change for given metric from start to end of date range (assuming daily granularity). */
  pctChangeOverRange?: Maybe<PctChangeOverRangePayload>;
  /** Invalidate cache for a given metric. */
  invalidateCacheForMetric?: Maybe<InvalidateCacheForMetric>;
};


/** Base mutation object exposed by GraphQL. */
export type MutationCreateMqlMaterializationNewArgs = {
  input: CreateMqlMaterializationNewInput;
};


/** Base mutation object exposed by GraphQL. */
export type MutationCreateMqlDropMaterializationArgs = {
  input: CreateMqlDropMaterializationInput;
};


/** Base mutation object exposed by GraphQL. */
export type MutationCreateMqlQueryArgs = {
  input: CreateMqlQueryInput;
};


/** Base mutation object exposed by GraphQL. */
export type MutationCreateMqlQueryFromDbIdArgs = {
  input: CreateMqlQueryFromDbIdInput;
};


/** Base mutation object exposed by GraphQL. */
export type MutationMaterializeArgs = {
  asTable?: Maybe<Scalars['String']>;
  cacheMode?: Maybe<CacheMode>;
  groupBy?: Maybe<Array<Scalars['String']>>;
  metrics?: Maybe<Array<Scalars['String']>>;
  modelKey?: Maybe<ModelKeyInput>;
  where?: Maybe<Scalars['String']>;
};


/** Base mutation object exposed by GraphQL. */
export type MutationDropCacheArgs = {
  confirm?: Maybe<Scalars['String']>;
};


/** Base mutation object exposed by GraphQL. */
export type MutationRewriteMqlSqlArgs = {
  sql: Scalars['String'];
};


/** Base mutation object exposed by GraphQL. */
export type MutationQueryLatestMetricChangeArgs = {
  input: QueryLatestMetricChangeInput;
};


/** Base mutation object exposed by GraphQL. */
export type MutationQueryMetricChangeArgs = {
  input: QueryMetricChangeInput;
};


/** Base mutation object exposed by GraphQL. */
export type MutationPctChangeOverRangeArgs = {
  input: PctChangeOverRangeInput;
};


/** Base mutation object exposed by GraphQL. */
export type MutationInvalidateCacheForMetricArgs = {
  metricName: Scalars['String'];
  modelKey?: Maybe<ModelKeyInput>;
};

export type CreateMqlMaterializationNewPayload = {
  __typename?: 'CreateMqlMaterializationNewPayload';
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMqlMaterializationNewInput = {
  modelKey?: Maybe<ModelKeyInput>;
  materializationName?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  outputTable?: Maybe<Scalars['String']>;
  force?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMqlDropMaterializationPayload = {
  __typename?: 'CreateMqlDropMaterializationPayload';
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMqlDropMaterializationInput = {
  modelKey?: Maybe<ModelKeyInput>;
  materializationName?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/**
 * This mutation is used to initiate an MQL Query.
 *
 * The primary return value is a queryId that can be used to fetch the query status, errors, and results.
 * The full query object is also returned in case we have a result available synchronously (stored the result cache)
 */
export type CreateMqlQueryPayload = {
  __typename?: 'CreateMqlQueryPayload';
  id: Scalars['ID'];
  query?: Maybe<MqlQuery>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMqlQueryInput = {
  modelKey?: Maybe<ModelKeyInput>;
  metrics?: Maybe<Array<Scalars['String']>>;
  groupBy?: Maybe<Array<Scalars['String']>>;
  where?: Maybe<ConstraintInput>;
  whereConstraint?: Maybe<Scalars['String']>;
  timeConstraint?: Maybe<Scalars['String']>;
  /** Optionally, provide a granularity for the primary time dimension in the returned results. */
  timeGranularity?: Maybe<TimeGranularity>;
  order?: Maybe<Array<Scalars['String']>>;
  /** Integer, '-1', or 'inf' to represent the number of rows of a query to return input field */
  limit?: Maybe<Scalars['LimitInput']>;
  /** Set to True if you want to automatically add a default Time Series dimension to the query. This is useful for plotting the metric in time series without needing to know the time dimension up front. */
  addTimeSeries?: Maybe<Scalars['Boolean']>;
  /** Optionally, provide a cache mode to instruct the query engine how/whether to check the cache for data. */
  cacheMode?: Maybe<CacheMode>;
  useResultCache?: Maybe<Scalars['Boolean']>;
  resultFormat?: Maybe<ResultFormat>;
  asTable?: Maybe<Scalars['String']>;
  /** Calculate percentage changed from current time period to previous time period. Must also select granularity. */
  pctChange?: Maybe<PercentChange>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  /** If granularity is applied, trim start/end periods with incomplete date ranges or data. */
  trimIncompletePeriods?: Maybe<Scalars['Boolean']>;
  /** Limit time dimension to a specific number of days, whether or not those days have data. */
  daysLimit?: Maybe<Scalars['Int']>;
  /** Indicates if query can utilize Transform dynamic cache. May be set to False for expensive queries that should only be run if pre-materialized */
  allowDynamicCache?: Maybe<Scalars['Boolean']>;
  /** Limit queries to a maximum number of dimension values. Primarily make charts readable. */
  maxDimensionValues?: Maybe<Scalars['Int']>;
  /** Include date boundaries in postprocessed results, even if there is no result data for those dates. */
  includeDateBoundaries?: Maybe<Scalars['Boolean']>;
  /** Used for marking retries, optionally pass param to track attempt number. */
  attemptNum?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Container class for inputs to allow for and/or wrappers on the `where` clause */
export type ConstraintInput = {
  And?: Maybe<Array<SingleConstraintInput>>;
  constraint?: Maybe<SingleConstraintInput>;
};

/** Actual `where` clauses to be applied */
export type SingleConstraintInput = {
  constraintType?: Maybe<AtomicConstraintType>;
  dimensionName?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  start?: Maybe<Scalars['String']>;
  stop?: Maybe<Scalars['String']>;
};


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

/** An enumeration. */
export enum ResultFormat {
  Tfd = 'TFD'
}

/** Initiate an MQL Query based on just the DB id. We'll build out the parameters from the DB record. */
export type CreateMqlQueryFromDbIdPayload = {
  __typename?: 'CreateMqlQueryFromDbIdPayload';
  id: Scalars['ID'];
  query?: Maybe<MqlQuery>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMqlQueryFromDbIdInput = {
  /** ID for query logged to DB. */
  dbId: Scalars['Int'];
  /** Used for marking retries, optionally pass param to track attempt number. */
  attemptNum?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Materialize = {
  __typename?: 'Materialize';
  schema?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
};

/** Drop the MQL dynamic cache. Please avoid doing this unless there's a cache corruption issue. */
export type DropCache = {
  __typename?: 'DropCache';
  success?: Maybe<Scalars['Boolean']>;
};

/** Rewrites SQL containing an MQL(...) function invocation by expanding into generated SQL */
export type RewriteMqlSql = {
  __typename?: 'RewriteMqlSql';
  resultSql?: Maybe<Scalars['String']>;
};

/** For metric, get latest value, percent change from the previous granularity period, and delta between the two. */
export type QueryLatestMetricChangePayload = {
  __typename?: 'QueryLatestMetricChangePayload';
  id: Scalars['ID'];
  query?: Maybe<MqlQuery>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type QueryLatestMetricChangeInput = {
  metricName: Scalars['String'];
  /** Calculate percentage changed from the latest time period to previous time period. */
  pctChange?: Maybe<PercentChange>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** For time period, get latest value, percent change from the previous granularity period, and delta between the two. */
export type QueryMetricChangePayload = {
  __typename?: 'QueryMetricChangePayload';
  id: Scalars['ID'];
  query?: Maybe<MqlQuery>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type QueryMetricChangeInput = {
  metricName: Scalars['String'];
  timeConstraint?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Get percent change for given metric from start to end of date range (assuming daily granularity). */
export type PctChangeOverRangePayload = {
  __typename?: 'PctChangeOverRangePayload';
  id: Scalars['ID'];
  query?: Maybe<MqlQuery>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type PctChangeOverRangeInput = {
  metricName: Scalars['String'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Invalidate cache for a given metric. */
export type InvalidateCacheForMetric = {
  __typename?: 'InvalidateCacheForMetric';
  success?: Maybe<Scalars['String']>;
};

/** MQL Query Result Data are expected to be plotted on a time series so this is the most common result type */
export type TimeSeriesDatum = ResultDatum & {
  __typename?: 'TimeSeriesDatum';
  y?: Maybe<Scalars['GenericScalar']>;
  xDate: Scalars['DateTime'];
};

export type FetchDimensionNamesQueryVariables = Exact<{
  metricNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type FetchDimensionNamesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'dimensionNamesForMetrics'>
);

export type FetchDimensionNamesMultihopQueryVariables = Exact<{
  metricNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type FetchDimensionNamesMultihopQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'dimensionNamesForMetricsMultihop'>
);

export type FetchDimensionValuesQueryVariables = Exact<{
  metricName: Scalars['String'];
  dimensionName: Scalars['String'];
  searchStr?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}>;


export type FetchDimensionValuesQuery = (
  { __typename?: 'Query' }
  & { metricByName?: Maybe<(
    { __typename?: 'Metric' }
    & Pick<Metric, 'dimensionValues' | 'totalDimensionValues'>
  )> }
);

export type FetchDimensionsQueryVariables = Exact<{
  metricNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type FetchDimensionsQuery = (
  { __typename?: 'Query' }
  & { dimensionsForMetrics?: Maybe<(
    { __typename?: 'Dimensions' }
    & { localDimensions?: Maybe<Array<Maybe<(
      { __typename?: 'Dimension' }
      & Pick<Dimension, 'name' | 'identifierName' | 'type' | 'isPrimaryTime' | 'values' | 'cardinality'>
    )>>>, nonLocalDimensions?: Maybe<Array<Maybe<(
      { __typename?: 'Dimension' }
      & Pick<Dimension, 'name' | 'identifierName' | 'type' | 'isPrimaryTime' | 'values' | 'cardinality'>
    )>>> }
  )> }
);

export type FetchDimensionsMultihopQueryVariables = Exact<{
  metricNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type FetchDimensionsMultihopQuery = (
  { __typename?: 'Query' }
  & { dimensionsForMetricsMultihop?: Maybe<(
    { __typename?: 'Dimensions' }
    & { localDimensions?: Maybe<Array<Maybe<(
      { __typename?: 'Dimension' }
      & Pick<Dimension, 'name' | 'identifierName' | 'type' | 'isPrimaryTime' | 'values' | 'cardinality'>
    )>>>, nonLocalDimensions?: Maybe<Array<Maybe<(
      { __typename?: 'Dimension' }
      & Pick<Dimension, 'name' | 'identifierName' | 'type' | 'isPrimaryTime' | 'values' | 'cardinality'>
    )>>> }
  )> }
);

export type FetchLatestChangeQueryVariables = Exact<{
  queryId: Scalars['ID'];
}>;


export type FetchLatestChangeQuery = (
  { __typename?: 'Query' }
  & { mqlQuery?: Maybe<(
    { __typename?: 'MqlQuery' }
    & Pick<MqlQuery, 'id' | 'status' | 'error'>
    & { result?: Maybe<Array<(
      { __typename?: 'MqlQueryResultSeries' }
      & Pick<MqlQueryResultSeries, 'xDate' | 'value' | 'delta' | 'pctChange'>
    )>> }
  )> }
);

export type FetchMqlQueryLogQueryVariables = Exact<{
  queryId: Scalars['ID'];
}>;


export type FetchMqlQueryLogQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'sourceQuery'>
  & { mqlQuery?: Maybe<(
    { __typename?: 'MqlQuery' }
    & Pick<MqlQuery, 'id' | 'status' | 'metrics' | 'dimensions' | 'logs' | 'error' | 'errorTraceback' | 'sql'>
  )> }
);

export type FetchMqlQueryLogsQueryVariables = Exact<{
  activeOnly: Scalars['Boolean'];
  metricNames?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  status?: Maybe<MqlQueryStatus>;
  minExecutionSeconds?: Maybe<Scalars['Float']>;
  maxExecutionSeconds?: Maybe<Scalars['Float']>;
}>;


export type FetchMqlQueryLogsQuery = (
  { __typename?: 'Query' }
  & { queries?: Maybe<Array<Maybe<(
    { __typename?: 'MqlQuery' }
    & Pick<MqlQuery, 'id' | 'status' | 'completedAt' | 'startedAt' | 'metrics'>
  )>>> }
);

export type FetchMetricCanLimitDimensionsQueryVariables = Exact<{
  metricName: Scalars['String'];
}>;


export type FetchMetricCanLimitDimensionsQuery = (
  { __typename?: 'Query' }
  & { metricByName?: Maybe<(
    { __typename?: 'Metric' }
    & Pick<Metric, 'canLimitDimensionValues'>
  )> }
);

export type FetchMetricMaxGranularityQueryVariables = Exact<{
  metricName: Scalars['String'];
}>;


export type FetchMetricMaxGranularityQuery = (
  { __typename?: 'Query' }
  & { metricByName?: Maybe<(
    { __typename?: 'Metric' }
    & Pick<Metric, 'maxGranularity'>
  )> }
);

export type FetchMqlQueryQueryVariables = Exact<{
  queryId: Scalars['ID'];
  attemptNum?: Maybe<Scalars['Int']>;
}>;


export type FetchMqlQueryQuery = (
  { __typename?: 'Query' }
  & { mqlQuery?: Maybe<(
    { __typename?: 'MqlQuery' }
    & Pick<MqlQuery, 'id' | 'userId' | 'metrics' | 'dimensions' | 'status' | 'completedAt' | 'resultTableSchema' | 'resultTableName' | 'createdAt' | 'startedAt' | 'sql' | 'error' | 'errorTraceback' | 'chartValueMin' | 'chartValueMax'>
    & { modelKey?: Maybe<(
      { __typename?: 'ModelKey' }
      & Pick<ModelKey, 'branch' | 'commit'>
    )>, result?: Maybe<Array<(
      { __typename?: 'MqlQueryResultSeries' }
      & Pick<MqlQueryResultSeries, 'value' | 'delta' | 'pctChange'>
    )>> }
  )> }
);

export type FetchMqlTimeSeriesQueryVariables = Exact<{
  queryId: Scalars['ID'];
}>;


export type FetchMqlTimeSeriesQuery = (
  { __typename?: 'Query' }
  & { mqlQuery?: Maybe<(
    { __typename?: 'MqlQuery' }
    & Pick<MqlQuery, 'id' | 'dbId' | 'status' | 'metrics' | 'dimensions' | 'error' | 'chartValueMin' | 'chartValueMax' | 'whereConstraint' | 'requestedGranularity' | 'groupBy' | 'maxDimensionValues' | 'timeComparison'>
    & { constraint?: Maybe<(
      { __typename?: 'Constraint' }
      & { constraint?: Maybe<(
        { __typename?: 'SingleConstraint' }
        & Pick<SingleConstraint, 'constraintType' | 'dimensionName' | 'values' | 'start' | 'stop'>
      )>, And?: Maybe<Array<(
        { __typename?: 'SingleConstraint' }
        & Pick<SingleConstraint, 'constraintType' | 'dimensionName' | 'values' | 'start' | 'stop'>
      )>> }
    )>, timeConstraint?: Maybe<(
      { __typename?: 'TimeConstraint' }
      & Pick<TimeConstraint, 'dimensionName' | 'timeFormat' | 'start' | 'stop' | 'timeGranularity'>
    )>, result?: Maybe<Array<(
      { __typename?: 'MqlQueryResultSeries' }
      & Pick<MqlQueryResultSeries, 'seriesValue'>
      & { data?: Maybe<Array<(
        { __typename?: 'TimeSeriesDatum' }
        & Pick<TimeSeriesDatum, 'xDate' | 'y'>
      )>> }
    )>> }
  )> }
);

export type FetchPercentChangeQueryVariables = Exact<{
  queryId: Scalars['ID'];
}>;


export type FetchPercentChangeQuery = (
  { __typename?: 'Query' }
  & { mqlQuery?: Maybe<(
    { __typename?: 'MqlQuery' }
    & Pick<MqlQuery, 'id' | 'status' | 'error' | 'chartValueMax' | 'chartValueMin'>
    & { result?: Maybe<Array<(
      { __typename?: 'MqlQueryResultSeries' }
      & Pick<MqlQueryResultSeries, 'value' | 'delta' | 'pctChange'>
    )>> }
  )> }
);

export type FetchSavedQueryQueryVariables = Exact<{
  queryId: Scalars['ID'];
}>;


export type FetchSavedQueryQuery = (
  { __typename?: 'Query' }
  & { mqlQuery?: Maybe<(
    { __typename?: 'MqlQuery' }
    & Pick<MqlQuery, 'id' | 'whereConstraint' | 'requestedGranularity' | 'groupBy' | 'maxDimensionValues' | 'timeComparison'>
    & { constraint?: Maybe<(
      { __typename?: 'Constraint' }
      & { constraint?: Maybe<(
        { __typename?: 'SingleConstraint' }
        & Pick<SingleConstraint, 'constraintType' | 'dimensionName' | 'values' | 'start' | 'stop'>
      )>, And?: Maybe<Array<(
        { __typename?: 'SingleConstraint' }
        & Pick<SingleConstraint, 'constraintType' | 'dimensionName' | 'values' | 'start' | 'stop'>
      )>> }
    )>, timeConstraint?: Maybe<(
      { __typename?: 'TimeConstraint' }
      & Pick<TimeConstraint, 'dimensionName' | 'timeFormat' | 'start' | 'stop' | 'timeGranularity'>
    )> }
  )> }
);

export type MqlServerHealthCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type MqlServerHealthCheckQuery = (
  { __typename?: 'Query' }
  & { healthReport?: Maybe<Array<Maybe<(
    { __typename?: 'MqlServerHealthItem' }
    & Pick<MqlServerHealthItem, 'name' | 'status' | 'errorMessage'>
  )>>> }
);
