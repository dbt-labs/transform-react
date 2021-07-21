import { gql } from "urql";

const query = gql`
  query FetchMqlQuery($queryId: ID!) {
    mqlQuery(id: $queryId) {
      id
      modelKey {
        #organization
        #repo
        branch
        commit
      }
      userId
      metrics
      dimensions
      status
      result {
        seriesValue
        data {
          y
        }
      }
      resultTabular {
        data
        nextCursor
      }
      completedAt
      resultTableSchema
      resultTableName
      createdAt
      startedAt
      sql
      error
      errorTraceback
      logs
      logsByLine(fromLine: 0, maxLines: 1000000)
    }
  }
`;

export default query;
