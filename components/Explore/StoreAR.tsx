import Image from "next/image";
import ExplorePage from "components/common/ExplorePage";
import ExploreModal from "components/common/ExploreModal";
import styles from "styles/components/Explore/storeAr.module.scss";

const StoreAR = () => {
  return (
    <section className={styles.mainContainer}>
      <ExplorePage
        iconUrl="/assets/moneyBag.svg"
        altText="money bag emoji"
        heading="Store you first AR tokens"
        introParagraph="Please click the <span>Download</span> button on this page to get ArConnect for your
        browser if you haven’t already, If you have then let’s proceed! You
        basically just have to complete the following actions below step by step"
      />
      <div>
        <Image
          src="/assets/arconnect-logo.svg"
          width={100}
          height={100}
          alt="arconnect logo"
        />
      </div>
    </section>
  );
};

export default StoreAR;
