import { makeOperation, Operation } from "urql";
import { authExchange } from "@urql/exchange-auth";

type AuthState = {
  token: string;
} | null;

function buildGetAuth(token?: string) {
  const getAuth = async ({ authState }: { authState: AuthState }) => {

    if (!authState) {
      if (token) {
        return { token: `Bearer ${token}` };
      }
      return null;
    }
    return null;
  };
  return getAuth;
}

function addAuthToOperation({
  authState,
  operation,
}: {
  authState: AuthState;
  operation: Operation;
}) {
  if (!authState || !authState.token) {
    return operation;
  }

  const fetchOptions =
    typeof operation.context.fetchOptions === "function"
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {};

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: authState.token,
      },
    },
  });
}

export default function buildAuthExchange(token?: string) {
  return authExchange({
    getAuth: buildGetAuth(token),
    addAuthToOperation,
  });
}
