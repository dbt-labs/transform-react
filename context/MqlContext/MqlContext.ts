import { Client, useQuery, useMutation, CombinedError } from "urql";
import { createContext } from "react";
import buildMqlUrqlClient from "../../utils/builMqlUrqlClient";

// TODO: Make this configurable when needed
export const CORE_API_URL = "https://api.transformdata.io/graphql";

export type HandleCombinedErrorContext = {
  queryId?: string,
  queryStatus?: string,
  json?: string
}

export type MqlContextType = {
  /*
    The Core API URL is used to query Transform's universal backend system, as opposed
    to the MQL Server deployed on your infrastructure.
  */
  coreApiUrl: string;

  /*
    The MQL Server URL can be overridden by a user in order to access a development
    server or a test server as needed. This value represents the currently selected
    URL for the user and is not optional.
  */
  mqlServerUrl?: string | null;
  mqlServerUrlLoading: boolean;

  /*
    This function is used to set the MQL Server URL override to a value available for
    the user's organization.
  */
  setMqlServer: (newServerId: number) => Promise<any>;

  /*
    This boolean indicates if the MQL Server URL is currently being set.
    It can be used in the UI to provide the user feedback during the mutation.
  */
  mqlServerOverrideLoading: boolean;

  /*
    The current Model Key will soon be selectable by a user in order to query a
    different model. The value is optional, as the MQL Server will default to the
    current model.
  */
  modelKey?: {
    readonly organizationId: string | null;
    readonly repository: string | null;
    readonly branch: string | null;
    readonly commit: string | null;
  } | null;

  /*
    FUTURE: This function will be used to set the Model Key override to a model
    available in the user's organization.
  */
  setModelKey: (newModelId: number) => Promise<any>;

  /*
    This boolean indicates if the Model Key is currently being set.
    It can be used in the UI to provide the user feedback during the mutation.
  */
  modalKeyOverrideLoading: boolean;

  mqlClient: Client;
  token?: string;
  useQuery: typeof useQuery;
  useMutation: typeof useMutation;
  handleCombinedError: (e: CombinedError, context?: HandleCombinedErrorContext) => void;
};

export const MqlContextInitialState = {
  coreApiUrl: CORE_API_URL,
  mqlServerUrl: null,
  mqlServerUrlLoading: true,
  setMqlServer: () => Promise.resolve(),
  mqlServerOverrideLoading: false,
  modelKey: null,
  setModelKey: () => Promise.resolve(),
  modalKeyOverrideLoading: false,
  mqlClient: buildMqlUrqlClient({clientVersion: "", mqlUrl: CORE_API_URL}),
  token: undefined,
  useQuery,
  useMutation,
  handleCombinedError: (e: CombinedError, context?: HandleCombinedErrorContext) => {
    throw new Error(context ? `Query Id: ${context.queryId} - Query Status: ${context.queryStatus} - Result: ${context.json} - ${e.message}` : e.message);
  },
};

export default createContext<MqlContextType>(MqlContextInitialState);
