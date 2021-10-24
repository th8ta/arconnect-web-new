import Head from "next/head";
import { detect } from "detect-browser";
import { useEffect, useState } from "react";

import Metas from "components/Metas";
import Footer from "components/Footer";
import FAQ from "components/LandingPage/FAQ";
import LandingPage from "components/LandingPage";
import Features from "components/LandingPage/Features";
import Community from "components/LandingPage/Community";
import styles from "styles/views/home.module.scss";

const Home = () => {
  const [browser, setBrowser] = useState<string>();

  useEffect(() => {
    const browser = detect();

    if (!browser) return;
    // @ts-ignore
    if (window.navigator.brave !== undefined) return setBrowser("Brave");
    setBrowser(browser.name);
  }, []);

  return (
    <>
      <Head>
        <title>ArConnect - Secure wallet management for Arweave</title>
        <link rel="shortcut icon" href="/logo256.png" />
      </Head>
      <Metas
        title="ArConnect"
        description="Secure wallet management for Arweave"
        image="/logo256.png"
      />
      <main className={styles.container}>
        <LandingPage />
        <Features />
        <FAQ />
        <Community />
        <Footer />
      </main>
    </>
  );
};

export default Home;
