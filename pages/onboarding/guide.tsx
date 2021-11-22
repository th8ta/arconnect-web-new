/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Button from 'components/Button';
import useGetBrowser from 'hooks/useGetBrowser';
import styles from 'styles/views/onboarding/guide.module.scss';

const Guide = () => {
  const { browserLink } = useGetBrowser();
  return (
    <>
      <Head>
        <title>ArConnect - Guide</title>
      </Head>

      <section className={styles.mainContainer}>
        <div className={styles.iconContainer}>
          <img src="/assets/guide.svg" alt="guide dog icon" />
        </div>
        <h1>
          No worries, <span>We&apos;ll guide you</span>
        </h1>
        <p>
          We have curated a set of quick primers to bring you up to speed on
          crypto, but we understand that you may need ArConnect for something
          immediately...
        </p>

        <div className={styles.buttons}>
          <Button
            href="/onboarding/explore"
            text="I want to learn about Crypto"
          />

          <Button href={browserLink} text="I need ArConnect now" dark newTab />
        </div>
      </section>
    </>
  );
};

export default Guide;
