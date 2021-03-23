import { makeOperation, Operation } from "urql";
import { authExchange } from "@urql/exchange-auth";

type AuthState = {
  token: string;
} | null;

function buildGetAuth(getToken: () => Promise<string>) {
  const getAuth = async ({ authState }: { authState: AuthState }) => {
    // TODO: We could start parsing and evaluating this token to avoid having to fetch it each time
    const token = await getToken();

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

export default function buildAuthExchange(getToken: () => Promise<string>) {
  return authExchange({
    getAuth: buildGetAuth(getToken),
    addAuthToOperation,
  });
}
