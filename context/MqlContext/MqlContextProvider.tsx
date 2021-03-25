import { useEffect, useState, ReactNode, useCallback } from "react";
import { useQuery, useMutation, CombinedError, Provider } from "urql";

import buildMqlUrqlClient from "utils/builMqlUrqlClient";
import MqlServerUrlQuery from "queries/core/MqlServerUrlQuery";
import { MqlServerUrlQuery as MqlServerUrlQueryType } from "queries/core/CoreApiQueryTypes";
import SetMqlServerMutation from "mutations/core/SetMqlServer";
import {
  SetMqlServerMutation as SetMqlServerMutationType,
  SetMqlServerMutationVariables,
} from "mutations/core/CoreApiMutationTypes";
import MqlContext, { MqlContextType, CORE_API_URL } from "./MqlContext";

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
  const coreApiClient = buildMqlUrqlClient(getToken, CORE_API_URL);
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
  const handleCombinedError = useCallback(
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
  ] = useQuery<MqlServerUrlQueryType>({
    query: MqlServerUrlQuery,
    pause: !isAuthenticated,
  });
  if (mqlServerUrlError) handleCombinedError(mqlServerUrlError);

  const [{ fetching }, setMqlServer] = useMutation<
    SetMqlServerMutationType,
    SetMqlServerMutationVariables
  >(SetMqlServerMutation);

  const setMqlServerThenRefetch = useCallback(
    (newServerId: number) =>
      // Note: newServerid is cast as a string because it is stored on the backend
      // as a User Preference, whose values are all strings.
      setMqlServer({ newServerIdAsString: `${newServerId}` }).then(
        refetchMqlServerUrl
      ),
    [setMqlServer, refetchMqlServerUrl]
  );

  /* 
    Note: Before the mqlServerUrl is available, an urql client will be constructed with the url set to the CORE_API_URL.
    This is because it throws an error to build an urql client without a URL.
    Naturally, this is invalid, so we must check with the mqlServerUrl is present before initiating MQL Queries.
  */
  const mqlClient = buildMqlUrqlClient(
    getToken,
    mqlServerUrlData?.mqlServerUrl || CORE_API_URL
  );

  const [mqlContext, setMqlContext] = useState<MqlContextType>({
    coreApiUrl: CORE_API_URL,
    mqlServerUrl: mqlServerUrlData?.mqlServerUrl,
    setMqlServer: setMqlServerThenRefetch,
    mqlServerOverrideLoading: fetching,
    modelKey: null,
    setModelKey: () => Promise.resolve(),
    modalKeyOverrideLoading: false,
    mqlClient,
    getToken,
    useQuery,
    useMutation,
    handleCombinedError,
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
