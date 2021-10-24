import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import JustExplore from "components/Explore";
import StoreAR from "components/Explore/StoreAR";
import AccessDapps from "components/Explore/AccessDapps";
import styles from "styles/views/onboarding/explore.module.scss";

const Explore = () => {
  const [selected, setSelected] = useState({
    storeTokens: true,
    accessDapp: false,
    explore: false
  });

  const [openDropdown, setOpenDropdown] = useState(false);

  const Dropdown = () => {
    const dropDownText = selected.storeTokens
      ? "Store your first AR tokens"
      : selected.accessDapp
      ? "Access a Dapp"
      : "I just want to explore";

    return (
      <section className={styles.dropDown}>
        <div
          className={
            openDropdown ? `${styles.menu} ${styles.flickIcon}` : styles.menu
          }
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <p>{dropDownText}</p>
          <Image
            src="/assets/dropDown.svg"
            width={15}
            height={15}
            alt="dropdown icon"
          />
        </div>
        <div
          className={openDropdown ? styles.dropDownList : styles.closeDropdown}
        >
          <button
            onClick={() => {
              setSelected({
                ...selected,
                storeTokens: true,
                accessDapp: false,
                explore: false
              });
              setOpenDropdown(false);
            }}
            className={selected.storeTokens ? styles.active : ""}
          >
            Store your first AR tokens
          </button>
          <button
            onClick={() => {
              setSelected({
                ...selected,
                storeTokens: false,
                accessDapp: true,
                explore: false
              });
              setOpenDropdown(false);
            }}
            className={selected.accessDapp ? styles.active : ""}
          >
            Access a Dapp
          </button>
          <button
            onClick={() => {
              setSelected({
                ...selected,
                storeTokens: false,
                accessDapp: false,
                explore: true
              });
              setOpenDropdown(false);
            }}
            className={selected.explore ? styles.active : ""}
          >
            I just want to Explore
          </button>
        </div>
      </section>
    );
  };

  if (selected.accessDapp)
    return (
      <section className={styles.contentWrapper}>
        <Dropdown />
        <AccessDapps />
      </section>
    );
  if (selected.explore)
    return (
      <section className={styles.contentWrapper}>
        <Dropdown />
        <JustExplore />
      </section>
    );

  return (
    <>
      <Head>
        <title>ArConnect - Explore</title>
      </Head>
      <section className={styles.contentWrapper}>
        <Dropdown />
        <StoreAR />
      </section>
    </>
  );
};

export default Explore;
