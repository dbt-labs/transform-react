import { AcceptedHeaders } from "context/MqlContext/MqlContextProvider";
import { createClient, dedupExchange, fetchExchange } from "urql";
import buildAuthExchange from "./buildAuthExchange";

function cleanUrl(url: string) {
  if (url.endsWith("/graphql")) return url;
  if (url.endsWith("/")) return `${url}graphql`;
  return `${url}/graphql`;
}

export default function buildMqlUrqlClient({
  clientVersion,
  mqlUrl,
  token,
  headers,
}: {
  clientVersion: string,
  mqlUrl: string,
  token?: string,
  headers?: AcceptedHeaders,
}) {
  return createClient({
    url: cleanUrl(mqlUrl),
    fetchOptions: {
      headers: {...headers},
    },
    exchanges: [dedupExchange, buildAuthExchange(clientVersion, token), fetchExchange],
  });
}
