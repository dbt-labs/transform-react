import { createClient, dedupExchange, fetchExchange } from "urql";
import buildAuthExchange from "./buildAuthExchange";

export default function buildMqlUrqlClient(
  getToken: () => Promise<string>,
  url: string = ""
) {
  return createClient({
    url,
    exchanges: [dedupExchange, buildAuthExchange(getToken), fetchExchange],
  });
}
