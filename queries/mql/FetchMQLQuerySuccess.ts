import { gql } from "urql";

const query = gql`
  query MqlQuerySuccessRates {
    oneHourSuccessRate
    oneDaySuccessRate
    oneWeekSuccessRate
  }
`;

export default query;
