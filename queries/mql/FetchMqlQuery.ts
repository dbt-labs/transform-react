import { gql } from "urql";

const query = gql`
  query FetchMqlQuery($queryId: ID!, $attemptNum: Int) {
    mqlQuery(id: $queryId, attemptNum: $attemptNum) {
      id
      modelKey {
        #organization
        #repo
        branch
        commit
      }
      availableChartTypes
      userId
      metrics
      dimensions
      status
      completedAt
      oldestSourceReadTime
      resultTableSchema
      resultTableName
      createdAt
      startedAt
      sql
      error
      errorTraceback
      chartValueMin
      chartValueMax
      result {
        value
        delta
        pctChange
      }
    }
  }
`;

export default query;
