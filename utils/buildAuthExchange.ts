import { authExchange } from '@urql/exchange-auth';
import { makeOperation, Operation } from 'urql';

type AuthState = {
  token: string;
} | null;

function buildGetAuth(token?: string) {
  const getAuth = async ({ authState }: { authState: AuthState }) => {
    if (!authState) {
      if (token) {
        if (token.includes('X-Api-Key')) {
          return { token };
        }
        return { token: `Bearer ${token}` };
      }
      return null;
    }
    return null;
  };
  return getAuth;
}

const addAuthToOperation =
  (clientVersion: string) =>
  ({
    authState,
    operation,
  }: {
    authState: AuthState;
    operation: Operation;
  }) => {
    if (!authState || !authState.token) {
      return operation;
    }

    const fetchOptions =
      typeof operation.context.fetchOptions === 'function'
        ? operation.context.fetchOptions()
        : operation.context.fetchOptions || {};

    return makeOperation(operation.kind, operation, {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: authState.token,
          'X-Transform-Client': 'frontend',
          'X-Transform-Client-Version': clientVersion,
        },
      },
    });
  };

export default function buildAuthExchange(
  clientVersion: string,
  token?: string
) {
  return authExchange({
    getAuth: buildGetAuth(token),
    addAuthToOperation: addAuthToOperation(clientVersion),
  });
}
