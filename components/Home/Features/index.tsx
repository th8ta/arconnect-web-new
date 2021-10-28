import Image from "next/image";
import Link from "next/link";

import FeatureCard from "./Card";
import styles from "./styles.module.scss";

const Features = () => {
  return (
    <>
      <section className={styles.featureCards}>
        <FeatureCard
          title="Wallet"
          heading="Store & Transfer"
          grayedText="Arweave assets"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets and see your latest transactions. The extension allows you to add all your wallets and switch between them easily"
          handIcon1="/assets/handLeft.svg"
          handIcon2="/assets/handRight.svg"
          wallet
        />

        <FeatureCard
          title="Gateway"
          heading="Access Dapps"
          grayedText="on the permaweb"
          text="ArConnect is your go to forum to access Dapps and learn about the permaweb ecosystem."
          iconUrl="/assets/gateway.svg"
        />
      </section>

      <section className={styles.features}>
        <section className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <p className={styles.buidl}>Buidl</p>
            <h3>
              Develop <span>on ArConnect</span>
            </h3>
            <p className={styles.text}>
              Built by Developers for Developers, ArConnect allows you use
              developer friendly tools to integrate and build on ArConnect
              across blockchains seamlessly. Explore our Developer documentation
              to get started.
            </p>
            <Link href="/security">
              <a className={styles.getStartedBtn}>Get Started</a>
            </Link>
          </div>

          <pre className={styles.codeSnippet}>
            <code>
              <span className={styles.const}>const</span> tx ={" "}
              <span className={styles.const}>await</span>
              <br></br>
              arweave.createTransaction({`{`}
              <span className={styles.config}>{`/* config */`}</span>
              {`}`});
              <br></br>
              <br></br>
              <span className={styles.const}>await </span>
              arweave.transactions.sign(tx);
              <br></br>
              <span className={styles.const}>await </span>
              arweave.transactions.post(tx);
            </code>
          </pre>
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
            <Link href="/docs">
              <a className={styles.docsBtn}>Learn more</a>
            </Link>
          </div>
          <div className={styles.shieldIcon}>
            <Image
              src="/assets/shields.svg"
              alt="shield icon"
              width={200}
              height={200}
            />
          </div>
        </section>
      </section>

      <section className={styles.browserContainers}>
        <p>Available on your favorite browsers</p>
        <div>
          <div>
            <img src="/assets/chrome.svg" alt="chrome" />
          </div>
          <img src="/assets/firefox.svg" alt="firefox" />
          <img src="/assets/brave.svg" alt="brave" />
          <img src="/assets/edge.svg" alt="edge" />
        </div>
      </section>
    </>
  );
};

export default Features;
