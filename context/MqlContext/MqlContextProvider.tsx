import { useEffect, useState, ReactNode, useCallback } from "react";
import { useQuery, useMutation, gql, CombinedError, Provider } from "urql";

import buildMqlUrqlClient from "../../utils/builMqlUrqlClient";
import buildApiUrqlClient from "utils/buildApiUrqlClient";
import MqlContext, { MqlContextType, CORE_API_URL } from "./MqlContext";
import { MqlServerUrlQuery } from "./__generated__/MqlServerUrlQuery";
import {
  SetMqlServerUrl,
  SetMqlServerUrlVariables,
} from "./__generated__/SetMqlServerUrl";

type Props = {
  getToken: () => Promise<string>;
  isAuthenticated: boolean;
  captureException?: (e: CombinedError) => void;
  children: ReactNode;
};

/*
  This thin wrapper allows us to use an urql Provider to provide access to our Core API
  for the sake of interacting with MQL Server and Model Key selection
*/
function MqlContextProvider({
  getToken,
  children,
  isAuthenticated,
  captureException,
}: Props) {
  const coreApiClient = buildApiUrqlClient(getToken, CORE_API_URL);
  return (
    <Provider value={coreApiClient}>
      <MqlContextProviderInternal
        isAuthenticated={isAuthenticated}
        getToken={getToken}
        captureException={captureException}
      >
        {children}
      </MqlContextProviderInternal>
    </Provider>
  );
}

function MqlContextProviderInternal({
  getToken,
  isAuthenticated,
  children,
  captureException,
}: Props) {
  // We do this because we want to allow the parent to provide a bespoke error handling function.
  const throwCarefully = useCallback(
    (e: CombinedError) => {
      const errFunction = captureException || console.error;
      if (e.message) {
        errFunction(e.message);
      }
      if (e.networkError) {
        errFunction(e.networkError);
      }
    },
    [captureException]
  );

  /*
    Until recently, making a request to the MQL Server would require:
      1. The MQL Server URL
      2. A specific Model Key representing the model content used to execute the query

    Because we cannot yet specify the desired model in the UI, we would always retrieve 
    and then supply the current model key. But now the MQL Server considers the Model Key 
    optional. In its absense, it uses the current model.

    In the future, our UI will allow users to select a specific Model Key for querying, 
    and at that point, we will update this code with a setModelKey mutation as we have 
    for MqlServerUrl.
  */
  const [
    { data: mqlServerUrlData, error: mqlServerUrlError },
    refetchMqlServerUrl,
  ] = useQuery<MqlServerUrlQuery>({
    query: gql`
      query MqlServerUrlQuery {
        mqlServerUrl
      }
    `,
    pause: !isAuthenticated,
    context: {
      url: CORE_API_URL,
    },
  });
  if (mqlServerUrlError) throwCarefully(mqlServerUrlError);

  const [{ fetching }, setMqlServerUrl] = useMutation<
    SetMqlServerUrl,
    SetMqlServerUrlVariables
  >(
    gql`
      mutation SetMqlServerUrl($newServerIdAsString: String!) {
        createUserPreference(
          object: {
            prefKey: "mql_server_override_id"
            prefValue: $newServerIdAsString
          }
          on_conflict: {
            constraint: user_prefs_user_id_pref_key_key
            update_columns: prefValue
          }
        ) {
          id
          prefKey
          prefValue
          userId
          createdAt
        }
      }
    `
  );

  const setMqlServerUrlThenRefetch = useCallback(
    (newServerId: number) =>
      // Note: newServerid is cast as a string because it is stored on the backend
      // as a User Preference, whose values are all strings.
      setMqlServerUrl({ newServerIdAsString: `${newServerId}` }).then(
        refetchMqlServerUrl
      ),
    [setMqlServerUrl, refetchMqlServerUrl]
  );

  // Note: Before the mqlServerUrl is available, an urql client will be constructed with the url set to an empty string.
  // Naturally, this is invalid, so we must check with the mqlServerUrl is present before initiating MQL Queries.
  const mqlClient = buildMqlUrqlClient(
    getToken,
    mqlServerUrlData?.mqlServerUrl || ""
  );

  const [mqlContext, setMqlContext] = useState<MqlContextType>({
    coreApiUrl: CORE_API_URL,
    mqlServerUrl: mqlServerUrlData?.mqlServerUrl,
    setMqlServerUrl: setMqlServerUrlThenRefetch,
    mqlServerOverrideLoading: fetching,
    modelKey: null,
    setModelKey: () => Promise.resolve(),
    modalKeyOverrideLoading: false,
    mqlClient,
    getToken,
    useQuery,
    useMutation,
  });

  useEffect(() => {
    const stateToUpdate: any = {};
    if (mqlServerUrlData?.mqlServerUrl !== mqlContext.mqlServerUrl) {
      stateToUpdate.mqlServerUrl = mqlServerUrlData?.mqlServerUrl;
    }
    if (
      mqlServerUrlData?.mqlServerUrl &&
      (mqlServerUrlData?.mqlServerUrl !== mqlContext.mqlServerUrl ||
        getToken !== mqlContext.getToken)
    ) {
      stateToUpdate.mqlClient = buildMqlUrqlClient(
        getToken,
        mqlServerUrlData?.mqlServerUrl
      );
    }
    if (Object.keys(stateToUpdate).length > 0) {
      setMqlContext({
        ...mqlContext,
        ...stateToUpdate,
      });
    }
  }, [mqlServerUrlData, getToken, mqlContext]);

  return (
    <Provider value={mqlContext.mqlClient}>
      <MqlContext.Provider value={mqlContext}>{children}</MqlContext.Provider>
    </Provider>
  );
}

export default MqlContextProvider;
