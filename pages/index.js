import { useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import MqlContext from "../context/MqlContext/MqlContext";

export default function MqlContextDemo() {
  const { mqlServerUrl, environment } = useContext(MqlContext);
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
