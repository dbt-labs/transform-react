import { Client } from "urql";
import { createContext } from "react";

export type MqlContextType = {
  /*
    The MQL Server URL can be overridden by a user in order to access a development
    server or a test server as needed. This value represents the currently selected 
    URL for the user and is not optional.
  */
  mqlServerUrl?: string | null;

  /*
    This function is used to set the MQL Server URL override to a value available for
    the user's organization.
  */
  setMqlServerUrl?: (newServerId: number) => Promise<any>;

  /*
    This boolean indicates if the MQL Server URL is currently being set. 
    It can be used in the UI to provide the user feedback during the mutation. 
  */
  mqlServerOverrideLoading?: boolean;

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
  setModelKey?: (newModelId: number) => Promise<any>;

  /*
    This boolean indicates if the Model Key is currently being set. 
    It can be used in the UI to provide the user feedback during the mutation. 
  */
  modalKeyOverrideLoading?: boolean;

  mqlClient?: Client | null;
  getToken?: () => Promise<string>;
};

export const MqlContextInitialState = {
  mqlServerUrl: null,
  modelKey: null,
  mqlClient: null,
  setMqlServerUrl: () => Promise.resolve(),
  mqlServerOverrideLoading: false,
};

export default createContext<MqlContextType>(MqlContextInitialState);
