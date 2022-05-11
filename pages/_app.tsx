import React from "react";
import "../styles/globals.css";
import MqlContextProvider from "../context/MqlContext/MqlContextProvider";

// @ts-ignore
export default function TransformReactDemo({ Component, pageProps }) {
  return (
    <MqlContextProvider token={process.env.NEXT_PUBLIC_TOKEN} isAuthenticated clientVersion={"transform-react-example"}>
      <Component {...pageProps} />
    </MqlContextProvider>
  );
}
