import { gql } from "urql";

const query = gql`
  query FetchMqlTimeSeries($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      dbId
      status
      metrics
      dimensions
      error
      chartValueMin
      chartValueMax
      whereConstraint
      requestedGranularity
      groupBy
      maxDimensionValues
      constraint {
        constraint {
          constraintType
          dimensionName
          values
          start
          stop
        }
        And {
          constraintType
          dimensionName
          values
          start
          stop
        }
      }
      timeComparison
      timeConstraint {
        dimensionName
        timeFormat
        start
        stop
        timeGranularity
      }
      result {
        seriesValue
        data {
          y
          ... on TimeSeriesDatum {
            xDate
          }
        }
      }
    }
  }
`;

export default query;
