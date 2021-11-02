import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/views/onboarding/guide.module.scss";

import guidIcon from "@/public/assets/guide.svg";

const Guide = () => {
  return (
    <>
      <Head>
        <title>ArConnect - Guide</title>
      </Head>

      <section className={styles.mainContainer}>
        <div className={styles.iconContainer}>
          <Image src={guidIcon} alt="guide dog icon" />
        </div>
        <h1>
          No worries, <span>We&apos;ll guide you</span>
        </h1>
        <p>
          We have curated a set of quick primers to bring you up to speed on
          crypto, But we understand that you probably need ArConnect for
          something immediately
        </p>

        <div className={styles.buttons}>
          <Link href="/onboarding/explore">
            <a className={styles.buttonStyles}>I want to learn about Crypto</a>
          </Link>

          <Link href="">
            <a className={styles.dark}>I need ArConnect now</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Guide;
