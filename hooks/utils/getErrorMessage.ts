import { CombinedError } from "urql";

const getErrorMessage = (e: CombinedError) => {
  if (e.message) return e.message;
  if (e.networkError) return e.networkError.message;
  if (e.graphQLErrors) return e.graphQLErrors[0].message;
  return "Invalid MQL Query error message";
}

export default getErrorMessage;
