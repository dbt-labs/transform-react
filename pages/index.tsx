import React, { useContext } from "react";
import Head from "next/head";
import MqlServerHealth from "../queries/mql/MqlServerHealth";
import { MqlServerHealthCheckQuery } from "../queries/mql/MqlQueryTypes";
import useTimeSeriesMqlQuery from "../hooks/useTimeSeriesMqlQuery";
import styles from "../styles/Home.module.css";
import MqlContext from "../context/MqlContext/MqlContext";

// Per our notes in useTimeSeriesMqlQuery, queryInput must be stable.
const queryInput = {};

export default function MqlContextDemo() {
  // Here is a simple way to access the MQL Server URL directly,
  // as well as a useQuery hook for custom queries
  const { mqlServerUrl, useQuery } = useContext(MqlContext);

  // Here is a simple way to run a custom graphql query against the MQL Server
  const [{ data: healthCheckData }] = useQuery<MqlServerHealthCheckQuery>({
    query: MqlServerHealth,
    pause: !mqlServerUrl,
  });

  // Here is a simple example of the useTimeSeriesMqlQuery hook to fetch data to be plotted in a chart
  const query = useTimeSeriesMqlQuery({
    queryInput,
    metricName: "question_replies",
  });
  const { data, queryStatus, queryId } = query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Transform React Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>MqlContext</h1>

        <p className={styles.description}>
          MQL Server URL:
          <code className={styles.code}>{mqlServerUrl}</code>
        </p>

        <p className={styles.description}>
          MQL Server Health Check:
          <code className={styles.code}>
            {JSON.stringify((healthCheckData?.healthReport || [])[0])}
          </code>
        </p>

        <p className={styles.description}>
          MQL Query ID:
          <code className={styles.code}>{queryId}</code>
        </p>

        <p className={styles.description}>
          MQL Query Status:
          <code className={styles.code}>{queryStatus}</code>
        </p>

        <p className={styles.description}>
          MQL Query Chart:
          <code className={styles.code}>{JSON.stringify(data?.result)}</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
