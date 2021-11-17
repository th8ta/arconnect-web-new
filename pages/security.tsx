/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

import QandA from 'components/QandA';
import useGetBrowser from 'hooks/useGetBrowser';
import styles from 'styles/views/security.module.scss';
import SecurityCard from 'styles/styled-components/securityCard';

const Card = ({
  text,
  tagline,
  heading,
  learnMore,
  imageUrl,
  addBorder,
  altText
}: {
  text: string;
  tagline: string;
  heading: string;
  learnMore?: boolean;
  imageUrl: string;
  altText: string;
  addBorder?: boolean;
}) => {
  const safeHTML = DOMPurify.sanitize(text);
  return (
    <SecurityCard border={addBorder}>
      <div className="textContainer">
        <p className="tagline">{tagline}</p>
        <h2>{heading}</h2>
        <p className="text" dangerouslySetInnerHTML={{ __html: safeHTML }}></p>
        {learnMore ? <button>Learn More</button> : null}
      </div>

      <div className="icon">
        <img src={imageUrl} alt={altText} />
      </div>
    </SecurityCard>
  );
};

const FeatureCard = ({
  tagline,
  title,
  text
}: {
  tagline: string;
  title: string;
  text: string;
}) => (
  <div className={styles.featureCard}>
    <p className={styles.tagline}>{tagline}</p>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{text}</p>
  </div>
);

const Security = () => {
  const { browser, browserLink } = useGetBrowser();

  return (
    <>
      <Head>
        <title>Arweave - Security</title>
        <link rel="shortcut icon" href="/logo256.png" />
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.landingSection}>
          <div>
            <h1>
              Our Commitment to <span>Security</span>
            </h1>
            <p>
              <span>Security</span> and <span>User Experience</span> are at the
              foundation of everything we do. We know first hand how
              overwhelming Web 3.0 can be. What if you could go about your
              activities on Web 3.0 and never have to worry about Security.
            </p>
          </div>
        </section>

        <section className={styles.cardsContainer}>
          <Card
            learnMore
            tagline="100% Control"
            heading="Robust Permissions System"
            text="Everytime you connect your wallet, you have the ability to set
              exactly which permissions an application can utilize. ArConnect
              currently supports 8 permissions which include x y, and z. You can
              read more about permissions below"
            imageUrl="/assets/security.svg"
            altText="security icon"
          />

          <Card
            addBorder
            tagline="100% Security"
            heading="Encrypted. Everything."
            text="ArConnect uses the password you set on your first configuration to
            encrypt every keyfile you add. Your keyfiles sit securely inside
            of localstorage (your browser memory) and **<span>never</span>** leave your
            device."
            imageUrl="/assets/encrypt.svg"
            altText="encrypt icon"
          />
        </section>

        <section className={styles.featureCardsContainer}>
          <FeatureCard
            tagline="Re-aasurance"
            title="Trust Scores"
            text="Before sending tokens to any other address, ArConnect displays a
              trust score for that address sourced from the ArVerify Protocol."
          />

          <FeatureCard
            tagline="Control"
            title="Application Allowances"
            text="Instead of needing to authorize every single transaction on a
            permaweb application, you can give that application an ArConnect
            Allowance. If the app ends up attempting to spend more than the
            allowance, you'll be re-prompted to increase it."
          />
        </section>
        <section className={styles.QandA}>
          <QandA />
        </section>

        <section className={styles.browser}>
          <p>Available on your favorite browsers</p>
          <div>
            <img src="/assets/chrome.svg" alt="chrome" />
            <img src="/assets/firefox.svg" alt="firefox" />
            <img src="/assets/brave.svg" alt="brave" />
            <img src="/assets/edge.svg" alt="edge" />
          </div>
          <Link href={browserLink}>
            <a target="_blank">Add to {browser}</a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Security;
