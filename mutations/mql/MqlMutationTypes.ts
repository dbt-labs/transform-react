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
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
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
  queryJob?: Maybe<QueryJob>;
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
  queriesToPreload?: Maybe<Array<Maybe<MetricFlowQueryParameters>>>;
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
export type QueryQueryJobArgs = {
  id: Scalars['ID'];
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
  trimIncompletePeriods?: Maybe<Scalars['Boolean']>;
  timeConstraint?: Maybe<TimeConstraint>;
  numPostprocessedResults?: Maybe<Scalars['Int']>;
  dbId?: Maybe<Scalars['Int']>;
  warnings?: Maybe<Array<Maybe<Scalars['String']>>>;
  latestXDays?: Maybe<Scalars['Int']>;
  availableChartTypes?: Maybe<Array<Maybe<ChartType>>>;
  resultRowsOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
  resultColumnsOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  DimensionValuesCache = 'DIMENSION_VALUES_CACHE',
  MaterializedQueryCache = 'MATERIALIZED_QUERY_CACHE',
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
  AreaChartStacked = 'AREA_CHART_STACKED',
  AreaChartShareOf = 'AREA_CHART_SHARE_OF',
  BarChart = 'BAR_CHART',
  BarChartStacked = 'BAR_CHART_STACKED',
  BarChartShareOf = 'BAR_CHART_SHARE_OF',
  BigNumber = 'BIG_NUMBER',
  Table = 'TABLE'
}

/** GQL class for QueryJob. */
export type QueryJob = {
  __typename?: 'QueryJob';
  /** ID of this query job */
  id?: Maybe<Scalars['ID']>;
  /** The status of this query job */
  status?: Maybe<QueryStatus>;
  /** Time this query started running */
  startTime?: Maybe<Scalars['DateTime']>;
  /** Time this query finished executing */
  endTime?: Maybe<Scalars['DateTime']>;
  /** Total runtime of this query job in seconds */
  queryRuntime?: Maybe<Scalars['Float']>;
  /** Error message if query job failed */
  error?: Maybe<Scalars['String']>;
  /** Type of query this job is executing */
  queryType?: Maybe<QueryType>;
  dimensionValuesQueryResult?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Current status of the query job.
 *
 *     RUNNING: Job is currently being executed.
 *     PENDING: Job is waiting to be executed.
 *     FAILED: Job executed and failed.
 *     SUCCESSFUL: Job executed and suceeded.
 */
export enum QueryStatus {
  Running = 'RUNNING',
  Successful = 'SUCCESSFUL',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

/** Type of query. */
export enum QueryType {
  DimVal = 'DIM_VAL'
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
  /** @deprecated Use `*Results` fields */
  allIssues?: Maybe<Array<Scalars['String']>>;
  /** @deprecated Use `dataSourceResults` */
  dataSourceIssues?: Maybe<Array<Scalars['String']>>;
  /** @deprecated Use `metricResults` */
  metricIssues?: Maybe<Array<Scalars['String']>>;
  /** @deprecated Use `dimensionResults` */
  dimensionIssues?: Maybe<Array<Scalars['String']>>;
  dataSourceResults: Scalars['JSONString'];
  dimensionResults: Scalars['JSONString'];
  identifierResults: Scalars['JSONString'];
  measureResults: Scalars['JSONString'];
  metricResults: Scalars['JSONString'];
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

/** Parameters to be submitted to the semantic layer when creating a query. Might differ from the query attributes shown to the user. */
export type MetricFlowQueryParameters = {
  __typename?: 'MetricFlowQueryParameters';
  modelId?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Array<Maybe<Scalars['String']>>>;
  dimensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  constraint?: Maybe<Constraint>;
  timeConstraint?: Maybe<TimeConstraint>;
  timeGranularity?: Maybe<TimeGranularity>;
  order?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  latestXDays?: Maybe<Scalars['Int']>;
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
   * The full query object is also returned in case we have a result available synchronously (stored in the result cache).
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
  /** Submits an async dimension value query. */
  createDimensionValuesQuery?: Maybe<CreateDimensionValuesQuery>;
  /** Initiate an MQL Query based on just the metric name. Params will be based on the metric defaults. */
  createMqlQueryFromMetricDefaults?: Maybe<CreateMqlQueryFromMetricDefaultsPayload>;
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


/** Base mutation object exposed by GraphQL. */
export type MutationCreateDimensionValuesQueryArgs = {
  allowDynamicCache?: Maybe<Scalars['Boolean']>;
  dimensionName: Scalars['String'];
  endTime?: Maybe<Scalars['String']>;
  metricName: Scalars['String'];
  modelId?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['String']>;
};


/** Base mutation object exposed by GraphQL. */
export type MutationCreateMqlQueryFromMetricDefaultsArgs = {
  input: CreateMqlQueryFromMetricDefaultsInput;
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
 * The full query object is also returned in case we have a result available synchronously (stored in the result cache).
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
  /** Apply a time constraint of the latest X number of days. */
  latestXDays?: Maybe<Scalars['Int']>;
  /** List of column names to sort query result rows by (after SQL query execution). Column names must match result table. Prepend column name with '-' for descending order. */
  resultRowsOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of column names, in order desired for result table. Must include all column names as they appear in result table. */
  resultColumnsOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
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

/** Submits an async dimension value query. */
export type CreateDimensionValuesQuery = {
  __typename?: 'CreateDimensionValuesQuery';
  id: Scalars['ID'];
};

/** Initiate an MQL Query based on just the metric name. Params will be based on the metric defaults. */
export type CreateMqlQueryFromMetricDefaultsPayload = {
  __typename?: 'CreateMqlQueryFromMetricDefaultsPayload';
  id: Scalars['ID'];
  query?: Maybe<MqlQuery>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMqlQueryFromMetricDefaultsInput = {
  metricName: Scalars['String'];
  resultFormat?: Maybe<ResultFormat>;
  /** Used for marking retries, optionally pass param to track attempt number. */
  attemptNum?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** MQL Query Result Data are expected to be plotted on a time series so this is the most common result type */
export type TimeSeriesDatum = ResultDatum & {
  __typename?: 'TimeSeriesDatum';
  y?: Maybe<Scalars['GenericScalar']>;
  xDate: Scalars['DateTime'];
};

export type CreateLatestMetricChangeMutationVariables = Exact<{
  metricName: Scalars['String'];
}>;


export type CreateLatestMetricChangeMutation = (
  { __typename?: 'Mutation' }
  & { queryLatestMetricChange?: Maybe<(
    { __typename?: 'QueryLatestMetricChangePayload' }
    & Pick<QueryLatestMetricChangePayload, 'id'>
    & { query?: Maybe<(
      { __typename?: 'MqlQuery' }
      & Pick<MqlQuery, 'status'>
      & { result?: Maybe<Array<(
        { __typename?: 'MqlQueryResultSeries' }
        & Pick<MqlQueryResultSeries, 'xDate' | 'value' | 'delta' | 'pctChange'>
      )>> }
    )> }
  )> }
);

export type CreateMqlQueryMutationVariables = Exact<{
  addTimeSeries?: Maybe<Scalars['Boolean']>;
  attemptNum: Scalars['Int'];
  daysLimit?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['String']>;
  groupBy?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  includeDateBoundaries?: Maybe<Scalars['Boolean']>;
  maxDimensionValues?: Maybe<Scalars['Int']>;
  metrics?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  modelKey?: Maybe<ModelKeyInput>;
  latestXDays?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['LimitInput']>;
  order?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  pctChange?: Maybe<PercentChange>;
  startTime?: Maybe<Scalars['String']>;
  timeGranularity?: Maybe<TimeGranularity>;
  trimIncompletePeriods?: Maybe<Scalars['Boolean']>;
  where?: Maybe<ConstraintInput>;
}>;


export type CreateMqlQueryMutation = (
  { __typename?: 'Mutation' }
  & { createMqlQuery?: Maybe<(
    { __typename?: 'CreateMqlQueryPayload' }
    & Pick<CreateMqlQueryPayload, 'id'>
    & { query?: Maybe<(
      { __typename?: 'MqlQuery' }
      & Pick<MqlQuery, 'id' | 'dbId' | 'availableChartTypes' | 'createdAt' | 'status' | 'metrics' | 'dimensions' | 'error' | 'chartValueMax' | 'chartValueMin'>
      & { resultTabular?: Maybe<(
        { __typename?: 'MqlQueryTabularResult' }
        & Pick<MqlQueryTabularResult, 'data'>
      )>, result?: Maybe<Array<(
        { __typename?: 'MqlQueryResultSeries' }
        & Pick<MqlQueryResultSeries, 'seriesValue'>
        & { data?: Maybe<Array<(
          { __typename?: 'TimeSeriesDatum' }
          & Pick<TimeSeriesDatum, 'xDate' | 'y'>
        )>> }
      )>> }
    )> }
  )> }
);

export type CreateMqlQueryFromDbIdMutationVariables = Exact<{
  attemptNum: Scalars['Int'];
  dbId: Scalars['Int'];
}>;


export type CreateMqlQueryFromDbIdMutation = (
  { __typename?: 'Mutation' }
  & { createMqlQueryFromDbId?: Maybe<(
    { __typename?: 'CreateMqlQueryFromDbIdPayload' }
    & Pick<CreateMqlQueryFromDbIdPayload, 'id'>
    & { query?: Maybe<(
      { __typename?: 'MqlQuery' }
      & Pick<MqlQuery, 'id' | 'dbId' | 'availableChartTypes' | 'createdAt' | 'status' | 'metrics' | 'dimensions' | 'error' | 'chartValueMax' | 'chartValueMin' | 'whereConstraint' | 'requestedGranularity' | 'groupBy' | 'latestXDays' | 'maxDimensionValues' | 'trimIncompletePeriods' | 'timeComparison' | 'numPostprocessedResults'>
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
      )>, resultTabular?: Maybe<(
        { __typename?: 'MqlQueryTabularResult' }
        & Pick<MqlQueryTabularResult, 'data'>
      )>, result?: Maybe<Array<(
        { __typename?: 'MqlQueryResultSeries' }
        & Pick<MqlQueryResultSeries, 'seriesValue'>
        & { data?: Maybe<Array<(
          { __typename?: 'TimeSeriesDatum' }
          & Pick<TimeSeriesDatum, 'xDate' | 'y'>
        )>> }
      )>> }
    )> }
  )> }
);

export type CreatePercentChangeMutationVariables = Exact<{
  metricName: Scalars['String'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
}>;


export type CreatePercentChangeMutation = (
  { __typename?: 'Mutation' }
  & { pctChangeOverRange?: Maybe<(
    { __typename?: 'PctChangeOverRangePayload' }
    & Pick<PctChangeOverRangePayload, 'id'>
    & { query?: Maybe<(
      { __typename?: 'MqlQuery' }
      & Pick<MqlQuery, 'id' | 'status' | 'error' | 'chartValueMax' | 'chartValueMin'>
      & { result?: Maybe<Array<(
        { __typename?: 'MqlQueryResultSeries' }
        & Pick<MqlQueryResultSeries, 'value' | 'delta' | 'pctChange'>
      )>> }
    )> }
  )> }
);

export type GetMqlQueryFiltersFromDbIdMutationMutationVariables = Exact<{
  dbId: Scalars['Int'];
}>;


export type GetMqlQueryFiltersFromDbIdMutationMutation = (
  { __typename?: 'Mutation' }
  & { createMqlQueryFromDbId?: Maybe<(
    { __typename?: 'CreateMqlQueryFromDbIdPayload' }
    & Pick<CreateMqlQueryFromDbIdPayload, 'id'>
    & { query?: Maybe<(
      { __typename?: 'MqlQuery' }
      & Pick<MqlQuery, 'dbId' | 'metrics' | 'dimensions' | 'whereConstraint' | 'requestedGranularity' | 'groupBy' | 'latestXDays' | 'maxDimensionValues' | 'trimIncompletePeriods' | 'timeComparison'>
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
  )> }
);

export type InvalidateCacheForMetricMutationMutationVariables = Exact<{
  metricName: Scalars['String'];
}>;


export type InvalidateCacheForMetricMutationMutation = (
  { __typename?: 'Mutation' }
  & { invalidateCacheForMetric?: Maybe<(
    { __typename?: 'InvalidateCacheForMetric' }
    & Pick<InvalidateCacheForMetric, 'success'>
  )> }
);
