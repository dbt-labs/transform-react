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
  token
}: {
  clientVersion: string,
  mqlUrl: string,
  token?: string,
}) {
  return createClient({
    url: cleanUrl(mqlUrl),
    exchanges: [dedupExchange, buildAuthExchange(clientVersion, token), fetchExchange],
  });
}
