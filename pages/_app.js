import "../styles/globals.css";
import MqlContextProvider from "../context/MqlContext/MqlContextProvider";

// Note: In a production system, this might include the ability to fetch from a cookie
// or fetch remotely, re-validate, etc.
function getToken() {
  return Promise.resolve(`${process.env.NEXT_PUBLIC_TOKEN}`);
}

export default function TransformReactDemo({ Component, pageProps }) {
  return (
    <MqlContextProvider
      mqlServerUrl={process.env.NEXT_PUBLIC_MQL_SERVER_URL}
      getToken={getToken}
    >
      <Component {...pageProps} />
    </MqlContextProvider>
  );
}
