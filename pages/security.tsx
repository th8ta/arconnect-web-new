/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import useGetBrowser from 'hooks/useGetBrowser';
import styles from 'styles/views/security.module.scss';
import QandA from '@/components/QandA';

const Card = ({
  text,
  tagline,
  heading,
  learnMore,
  imageUrl,
  altText
}: {
  text: string;
  tagline: string;
  heading: string;
  learnMore?: boolean;
  imageUrl: string;
  altText: string;
}) => {
  return (
    <section className={styles.card}>
      <div className={styles.textContainer}>
        <p className={styles.tagline}>{tagline}</p>
        <h2>{heading}</h2>
        <p className={styles.text}>{text}</p>
        {learnMore ? <button>Learn More</button> : null}
      </div>

      <div className={styles.icon}>
        <img src={imageUrl} alt={altText} />
      </div>
    </section>
  );
};

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
          <h1>
            Our Commitment to <span>Security</span>
          </h1>
          <p>
            <span>Security</span> and <span>User Experience</span> are at the
            foundation of everything we do. We know first hand how overwhelming
            Web 3.0 can be. What if you could go about your activities on Web
            3.0 and never have to worry about Security.
          </p>
        </section>

        <section className={styles.cardsContainer}>
          <Card
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
            tagline="100% Security"
            heading="Encrypted. Everything."
            text="ArConnect uses the password you set on your first configuration to
            encrypt every keyfile you add. Your keyfiles sit securely inside
            of localstorage (your browser memory) and **never** leave your
            device."
            imageUrl="/assets/encrypt.svg"
            altText="encrypt icon"
          />
        </section>

        <section>
          {/* <div>
            <p>Re-aasurance</p>
            <h2>Trust Scores</h2>
            <p>
              Before sending tokens to any other address, ArConnect displays a
              trust score for that address sourced from the ArVerify Protocol.
            </p>
          </div>

          <div>
            <p>Control</p>
            <h2>Application Allowances</h2>
            <p>
              Instead of needing to authorize every single transaction on a
              permaweb application, you can give that application an ArConnect
              Allowance. If the app ends up attempting to spend more than the
              allowance, you&apos;ll be re-prompted to increase it.
            </p>
          </div> */}
        </section>
        <section className={styles.QandA}>
          <QandA />
        </section>

        <section className={styles.browser}>
          <p>Available on your favorite browsers</p>
          <div>
            <img src="/assets/chrome.svg" alt="" />
            <img src="/assets/firefox.svg" alt="" />
            <img src="/assets/brave.svg" alt="" />
            <img src="/assets/edge.svg" alt="" />
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
