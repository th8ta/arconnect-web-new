import Head from "next/head";
import Image from "next/image";
import styles from "styles/views/guide.module.scss";

const Guide = () => {
  return (
    <>
      <Head>
        <title>ArConnect - Guide</title>
      </Head>

      <section className={styles.mainContainer}>
        <div className={styles.iconContainer}>
          {/* <img src="/assets/eclipse.svg" alt="" /> */}
          <Image
            src="/assets/guide.svg"
            alt="guide dog icon"
            height={50}
            width={50}
          />
        </div>
        <h1>No worries, We&apos;ll guide you</h1>
        <p>
          We have curated a set of quick primers to bring you up to speed on
          crypto, But we understand that you probably need ArConnect for
          something immediately
        </p>

        <div>
          <button className={styles.buttonStyles}>
            I want to learn about Crypto
          </button>
          <button className={styles.light}>I need ArConnect now</button>
        </div>
      </section>
    </>
  );
};

export default Guide;
