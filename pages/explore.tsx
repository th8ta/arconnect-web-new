import Head from "next/head";
import JustExplore from "components/Explore";
import StoreAR from "components/Explore/StoreAR";
import AccessDapps from "components/Explore/AccessDapps";
import ExploreFooter from "components/Explore/ExploreFooter";
import styles from "styles/views/explore.module.scss";

const Explore = () => {
  return (
    <>
      <Head>
        <title>ArConnect - Explore</title>
      </Head>
      <main className={styles.mainContainer}>
        <section className={styles.dropDown}>
          <div>
            <button>store your first AR tokens</button>
            <button>Access a Dapp</button>
            <button>I just want to Explore</button>
          </div>
        </section>

        <section className={styles.contentWrapper}>
          <StoreAR />
          {/* <AccessDapps /> */}
          {/* <JustExplore /> */}
        </section>
      </main>
      <ExploreFooter />
    </>
  );
};

export default Explore;
