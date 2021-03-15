import { createClient, dedupExchange, fetchExchange } from "urql";
import buildAuthExchange from "./buildAuthExchange";

// TODO: Make this configurable when needed
const url = "https://transform-staging.hasura.app/v1/graphql";

export default function buildMqlUrqlClient(getToken: () => Promise<string>) {
  return createClient({
    url,
    exchanges: [dedupExchange, buildAuthExchange(getToken), fetchExchange],
  });
}
