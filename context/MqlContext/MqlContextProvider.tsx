import React, { useEffect, useState, ReactNode, useCallback } from "react";
import { useQuery, useMutation, CombinedError, Provider } from "urql";

import buildMqlUrqlClient from "../../utils/builMqlUrqlClient";
import MqlServerUrlQuery from "../../queries/core/MqlServerUrlQuery";
import { MqlServerUrlQuery as MqlServerUrlQueryType } from "../../queries/core/CoreApiQueryTypes";
import SetMqlServerMutation from "../../mutations/core/SetMqlServer";
import {
  SetMqlServerMutation as SetMqlServerMutationType,
  SetMqlServerMutationVariables,
} from "../../mutations/core/CoreApiMutationTypes";
import MqlContext, { HandleCombinedErrorContext, MqlContextType, CORE_API_URL } from "./MqlContext";
import getUserIdFromAuthToken from "./utils/getUserIdFromAuthToken";

type Props = {
  isAuthenticated: boolean;
  captureException?: (e: CombinedError, context: HandleCombinedErrorContext) => void;
  children: ReactNode;
  coreApiUrl?: string;
  externalConfig?: {
    mqlServerUrl?: string;
    refetchMqlServerUrl?: () => void;
  };
  mqlServerUrlOverride?: string;
  token?: string;
};

/*
  This thin wrapper allows us to use an urql Provider to provide access to our Core API
  for the sake of interacting with MQL Server and Model Key selection
*/
function MqlContextProvider({
  token,
  children,
  isAuthenticated,
  captureException,
  coreApiUrl,
  externalConfig,
  mqlServerUrlOverride
}: Props) {
  const coreApiClient = buildMqlUrqlClient(coreApiUrl || CORE_API_URL, token);
  return (
    <Provider value={coreApiClient}>
      <MqlContextProviderInternal
        isAuthenticated={isAuthenticated}
        token={token}
        captureException={captureException}
        coreApiUrl={coreApiUrl || CORE_API_URL}
        externalConfig={externalConfig}
        mqlServerUrlOverride={mqlServerUrlOverride}
      >
        {children}
      </MqlContextProviderInternal>
    </Provider>
  );
}

function MqlContextProviderInternal({
  token,
  isAuthenticated,
  children,
  captureException,
  coreApiUrl,
  externalConfig,
  mqlServerUrlOverride
}: Props) {
  // We do this because we want to allow the parent to provide a bespoke error handling function.
  const handleCombinedError = useCallback(
    (e: CombinedError, context?: HandleCombinedErrorContext) => {
      const errFunction = captureException || console.error;
      if (e.message) {
        errFunction(e.message, context);
      }
      if (e.networkError) {
        errFunction(e.networkError, context);
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
    optional. In its absence, it uses the current model.

    In the future, our UI will allow users to select a specific Model Key for querying,
    and at that point, we will update this code with a setModelKey mutation as we have
    for MqlServerUrl.
  */
  const [
    { data: mqlServerUrlData, error: mqlServerUrlError },
    refetchMqlServerUrl,
  ] = useQuery<MqlServerUrlQueryType>({
    query: MqlServerUrlQuery,
    pause: Boolean(externalConfig) || !isAuthenticated || !token,
  });
  if (mqlServerUrlError) handleCombinedError(mqlServerUrlError);

  const [{ fetching }, setMqlServer] = useMutation<
    SetMqlServerMutationType,
    SetMqlServerMutationVariables
  >(SetMqlServerMutation);

  const setMqlServerThenRefetch = useCallback(
    async (newServerId: number) => {
      // Note: newServerid is cast as a string because it is stored on the backend
      // as a User Preference, whose values are all strings.
      const userId = getUserIdFromAuthToken(token);
      const refetch = externalConfig
        ? externalConfig?.refetchMqlServerUrl
        : refetchMqlServerUrl;
      if (userId) {
        return setMqlServer({
          newServerIdAsString: `${newServerId}`,
          userId,
        }).then(refetch);
      }
    },

    [externalConfig, setMqlServer, refetchMqlServerUrl]
  );

  /*
    Note: Before the mqlServerUrl is available, an urql client will be constructed with the url set to the CORE_API_URL.
    This is because it throws an error to build an urql client without a URL.
    Naturally, this is invalid, so we must check with the mqlServerUrl is present before initiating MQL Queries.
  */
  const mqlClient = buildMqlUrqlClient(
    externalConfig?.mqlServerUrl || mqlServerUrlData?.myUser?.mqlServerUrl || coreApiUrl || CORE_API_URL,
    token,
  );

  const [mqlContext, setMqlContext] = useState<MqlContextType>({
    coreApiUrl: coreApiUrl || CORE_API_URL,
    mqlServerUrl: externalConfig?.mqlServerUrl || mqlServerUrlData?.myUser?.mqlServerUrl,
    setMqlServer: setMqlServerThenRefetch,
    mqlServerOverrideLoading: fetching,
    modelKey: null,
    setModelKey: () => Promise.resolve(),
    modalKeyOverrideLoading: false,
    mqlClient,
    token,
    useQuery,
    useMutation,
    handleCombinedError,
  });

  useEffect(() => {
    const stateToUpdate: Partial<MqlContextType> = {};
    const useOverride = Boolean(mqlServerUrlOverride);
    if (useOverride && isAuthenticated) {
      if (mqlServerUrlOverride !== mqlContext.mqlServerUrl) {
        stateToUpdate.mqlServerUrl = mqlServerUrlOverride;
      }
      if (
        mqlServerUrlOverride &&
        mqlServerUrlOverride !== mqlContext.mqlServerUrl
      ) {
        stateToUpdate.mqlClient = buildMqlUrqlClient(
          mqlServerUrlOverride,
          token,
        );
      }
    } else if (externalConfig) {
      if (externalConfig?.mqlServerUrl !== mqlContext.mqlServerUrl) {
        stateToUpdate.mqlServerUrl = externalConfig?.mqlServerUrl;
      }
      if (externalConfig?.mqlServerUrl && externalConfig?.mqlServerUrl !== mqlContext.mqlServerUrl) {
        stateToUpdate.mqlClient = buildMqlUrqlClient(
          externalConfig?.mqlServerUrl,
          token
        );
      }
    } else {
      if (mqlServerUrlData?.myUser?.mqlServerUrl !== mqlContext.mqlServerUrl) {
        stateToUpdate.mqlServerUrl = mqlServerUrlData?.myUser?.mqlServerUrl;
      }
      if (
        mqlServerUrlData?.myUser?.mqlServerUrl &&
        mqlServerUrlData?.myUser?.mqlServerUrl !== mqlContext.mqlServerUrl
      ) {
        stateToUpdate.mqlClient = buildMqlUrqlClient(
          mqlServerUrlData?.myUser?.mqlServerUrl,
          token
        );
      }
    }


    /*
      FUTURE: Add check for Model Key.
    */

    if (Object.keys(stateToUpdate).length > 0) {
      setMqlContext({
        ...mqlContext,
        ...stateToUpdate,
      });
    }
  }, [externalConfig, mqlServerUrlData, token, mqlContext, mqlServerUrlOverride]);

  return (
    <Provider value={mqlContext.mqlClient}>
      <MqlContext.Provider value={mqlContext}>{children}</MqlContext.Provider>
    </Provider>
  );
}

export default MqlContextProvider;
