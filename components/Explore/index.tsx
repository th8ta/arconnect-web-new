/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

import ExplorePage from './ExplorePage';
import styles from './styles.module.scss';
import useGetBrowser from 'hooks/useGetBrowser';

export const StoreAR = () => {
  return (
    <section className={styles.dappsContainer}>
      <ExplorePage
        iconUrl="/assets/moneyBag.svg"
        altText="money bag emoji"
        heading="Store you first AR tokens"
        introParagraph="Please click the <span>Install ArConnect</span> button on this page to get ArConnect for your
        browser if you haven’t already. If you have then let’s proceed!
        Complete the following actions step-by-step."
      />
      <div className={styles.arConnect}>
        <Image
          src="/assets/arconnect-logo.svg"
          width={174}
          height={160}
          alt="ArConnect Logo"
        />
      </div>
    </section>
  );
};

export const AccessDapps = () => {
  return (
    <section className={styles.dappsContainer}>
      <ExplorePage
        iconUrl="/assets/plug.svg"
        altText="plug emoji"
        accessDapps
        heading="Access a Dapp"
        introParagraph="Please click the <span>Download</span> button on this page to get ArConnect for your browser if you haven’t already, If you have then let’s proceed!
      <br></br>
      
        ArConnect is the easiest way to access Dapps on Arweave, but you’ll need to have some AR tokens to complete most transactions
        <br></br>
        
        
        Steps <strong>(1.)</strong> - <strong>(5.)</strong> walk you through setting up your wallet to receive AR, please skip if you already have AR in your wallet"
      />
      <div className={styles.arConnect}>
        <Image
          src="/assets/arconnect-logo.svg"
          width={174}
          height={160}
          alt="ArConnect Logo"
        />
      </div>
    </section>
  );
};

export const JustExplore = () => {
  const { browser, browserLink } = useGetBrowser();
  return (
    <main className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h1>I just want to explore </h1>
        <img
          src="/assets/nerdFace.svg"
          alt="NerdFace"
          className={styles.nerdFace}
        />
      </div>
      <p>
        And that’s fine, ArConnect makes the Arweave experience delightful, If
        you have never used ArConnect before, we really recommend that you check
        out <Link href="#">how to store your first AR token</Link>, either way,
        you can always find learning resources on the
        <Link href="#"> ArConnect 101 page</Link>
      </p>
      <div className={styles.arConnect}>
        <Image
          src="/assets/arconnect-logo.svg"
          width={200}
          height={195}
          alt="ArConnect Logo"
        />
      </div>

      <Link href={browserLink}>
        <a className={styles.browserBtn}>{`Add to ${browser}`}</a>
      </Link>
    </main>
  );
};
