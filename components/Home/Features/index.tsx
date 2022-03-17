/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

import FeatureCard from './Card';
import styles from './styles.module.scss';
import shieldIcon from 'public/assets/shield.png';

const Features = () => {
  return (
    <>
      <section className={styles.featureCards}>
        <FeatureCard
          title="Wallet"
          heading="Store & Transfer"
          grayedText="Arweave assets"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets, and see your latest transactions. The extension allows you to add all your wallets and switch between them easily."
          handIcon1="/assets/handLeft.svg"
          handIcon2="/assets/handRight.svg"
          wallet
        />

        <FeatureCard
          title="Gateway"
          heading="Access Dapps"
          grayedText="on the permaweb"
          text="ArConnect is your go-to solution to access Dapps while learning about the permaweb ecosystem."
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
              For Developers, ArConnect allows you to use developer-friendly
              tools to integrate and build on ArConnect seamlessly. Explore our
              developer documentation to get started.
            </p>
            <Link href="https://docs.th8ta.org/arconnect/functions">
              <a className={styles.getStartedBtn}>Get Started</a>
            </Link>
          </div>

          <pre className={styles.codeSnippet}>
            <code>
              <span className={styles.const}>const</span> tx ={' '}
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
            <h3>Top-notch Security</h3>
            <p>
              ArConnect features a robust permissions system, application
              allowances, and the ability to easily track all ArConnected
              activity through Dapps.
            </p>
            <Link href="/security">
              <a className={styles.docsBtn}>Learn more</a>
            </Link>
          </div>
          <div className={styles.shieldIcon}>
            <Image
              src={shieldIcon}
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
          <img src="assets/chrome.svg" alt="chrome browser" />
          <img src="assets/firefox.svg" alt="firefox browser" />
          <img src="assets/edge.svg" alt="brave browser" />
          <img src="assets/brave.svg" alt="edge browser" />
        </div>
      </section>
    </>
  );
};

export default Features;
