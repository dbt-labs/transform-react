import React from "react";
import "../styles/globals.css";
import MqlContextProvider from "../context/MqlContext/MqlContextProvider";

// Note: In a production system, this might include the ability to fetch from a cookie
// or fetch remotely, re-validate, etc.
function getToken() {
  return Promise.resolve(`${process.env.NEXT_PUBLIC_TOKEN}`);
}

// @ts-ignore
export default function TransformReactDemo({ Component, pageProps }) {
  return (
    <MqlContextProvider getToken={getToken} isAuthenticated>
      <Component {...pageProps} />
    </MqlContextProvider>
  );
}
