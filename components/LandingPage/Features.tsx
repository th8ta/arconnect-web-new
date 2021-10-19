import FeatureCard from "./FeatureCard";
import styles from "styles/components/LandingPage/features.module.scss";

const Features = () => {
  const CallToAction = ({
    text,
    lightBackground
  }: {
    text: string;
    lightBackground?: boolean;
  }) => (
    <button
      className={
        lightBackground
          ? `${styles.ctaButton} ${styles.lightCtaBtn}`
          : styles.ctaButton
      }
    >
      {text}
    </button>
  );

  return (
    <>
      <section className={styles.featureCards}>
        <FeatureCard
          title="Wallet"
          heading="Store & Transfer"
          grayedText="Arweave assets"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets and see your latest transactions. The extension allows you to add all your wallets and switch between them easily"
          // handIcon1="/assets/handLeft.svg"
          // handIcon2="/assets/handRight.svg"
          wallet
        />

        <FeatureCard
          title="Gateway"
          heading="Access Dapps"
          grayedText="on the permaweb"
          text="ArConnect is your go to forum to access Dapps and learn about the permaweb ecosystem."
          // iconUrl="/assets/gateway.svg"
        />
      </section>

      <section className={styles.features}>
        <section className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <p>Buidl</p>
            <h3>
              Develop <span>on ArConnect</span>
            </h3>
            <p>
              Built by Developers for Developers, ArConnect allows you use
              developer friendly tools to integrate and build on ArConnect
              across blockchains seamlessly. Explore our Developer documentation
              to get started
            </p>
            <button>Get Started</button>
          </div>

          <div className={styles.codeSnippet}>
            <code>
              <span>const</span>
              {
                " tx = await \n arweave.createTransaction ({ \n   /* config */ \n }) \n "
              }
            </code>
            <span className={styles.await}>
              {" \n await arweave.transactions.sign(tx);"}
            </span>
            <span className={styles.await}>
              {" \n await arweave.transactions.post(tx);"}
            </span>
          </div>
        </section>

        <section className={styles.securityContainer}>
          <div className={styles.securityInfo}>
            <p className={styles.safu}>SAFU</p>
            <h3>Permanent Security</h3>
            <p>
              With ArConnect&apos;s user-friendly interface, you can manage your
              Arweave balance, view and transfer assets and see your latest
              transactions. The extension allows you to add all your wallets and
              switch between them easily. We are also planning to support PST
              swapping through The Verto Protocol.
            </p>
            <CallToAction text="Learn more" lightBackground />
          </div>
          <img
            src="/assets/shield.svg"
            alt="Shield"
            className={styles.shieldIcon}
          />
        </section>
      </section>

      <section className={styles.browserContainers}>
        <p>Available on your favorite browsers</p>
        <div>
          <img src="/assets/chrome.svg" alt="Chrome" />
          <img src="/assets/firefox.svg" alt="Firefox" />
          <img src="/assets/brave.svg" alt="Brave" />
          <img src="/assets/edge.svg" alt="Edge" />
        </div>
      </section>
    </>
  );
};

export default Features;
