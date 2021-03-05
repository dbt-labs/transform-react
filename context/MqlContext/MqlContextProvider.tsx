import { useEffect, useState, ReactNode, useCallback } from "react";
import { useQuery, useMutation, gql, CombinedError, Provider } from "urql";

import buildMqlUrqlClient from "../../utils/builMqlUrqlClient";
import buildApiUrqlClient from "utils/buildApiUrqlClient";
import MqlContext, { MqlContextType } from "./MqlContext";
import { MqlServerUrlQuery } from "./__generated__/MqlServerUrlQuery";
import {
  SetMqlServerUrl,
  SetMqlServerUrlVariables,
} from "./__generated__/SetMqlServerUrl";

type Props = {
  getToken: () => Promise<string>;
  captureException?: (e: CombinedError) => void;
  children: ReactNode;
};

/*
  This thin wrapper allows us to use an urql Provider to provide access to our API
  for the sake of interacting with MQL Server and Model Key selection
*/
function MqlContextProvider({ getToken, children, captureException }: Props) {
  return (
    <Provider value={buildApiUrqlClient(getToken)}>
      <MqlContextProviderInternal
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
  children,
  captureException,
}: Props) {
  // We do this because we want to allow the parent to provide a bespoke error handling function.
  const throwCarefully = useCallback(
    (e: CombinedError) => {
      if (captureException) {
        captureException(e);
      } else {
        console.error(e.message);
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
    {
      data: mqlServerUrlData,
      error: mqlServerUrlError,
      fetching: mqlServerUrlfetching,
    },
    refetchMqlServerUrl,
  ] = useQuery<MqlServerUrlQuery>({
    query: gql`
      query MqlServerUrlQuery {
        mqlServerUrl
      }
    `,
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

  const mqlClient =
    getToken && mqlServerUrlData?.mqlServerUrl
      ? buildMqlUrqlClient(getToken, mqlServerUrlData.mqlServerUrl)
      : null;
  [];

  const [mqlContext, setMqlContext] = useState<MqlContextType>({
    setMqlServerUrl: (newServerId: number) =>
      // Note: newServerid is cast as a string because it is stored on the backend
      // as a User Preference, whose values are all strings.
      setMqlServerUrl({ newServerIdAsString: `${newServerId}` }).then(
        refetchMqlServerUrl
      ),
    mqlServerOverrideLoading: fetching,
    mqlClient,
    mqlServerUrl: mqlServerUrlData?.mqlServerUrl,
    getToken,
  });

  useEffect(() => {
    const stateToUpdate: MqlContextType = {};
    if (mqlServerUrlData?.mqlServerUrl !== mqlContext.mqlServerUrl) {
      stateToUpdate.mqlServerUrl = mqlServerUrlData?.mqlServerUrl;
    }
    if (
      (mqlServerUrlData?.mqlServerUrl &&
        mqlServerUrlData?.mqlServerUrl !== mqlContext.mqlServerUrl) ||
      getToken !== mqlContext.getToken
    ) {
      stateToUpdate.mqlClient = buildMqlUrqlClient(
        getToken,
        mqlServerUrlData.mqlServerUrl
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
    <MqlContext.Provider value={mqlContext}>{children}</MqlContext.Provider>
  );
}

export default MqlContextProvider;
