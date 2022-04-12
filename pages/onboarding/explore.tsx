import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from 'styles/views/onboarding/explore.module.scss';
import { StoreAR, AccessDapps, JustExplore } from 'components/Explore/';

const Explore = () => {
  const stateObject = {
    storeTokens: true,
    accessDapp: false,
    explore: false
  };

  let initialState;
  try {
    initialState = JSON.parse(
      localStorage.getItem('exploreSelected') || `${stateObject}`
    );
  } catch (error) {
    initialState = stateObject;
  }

  const [selected, setSelected] = useState(initialState);
  const [openDropdown, setOpenDropdown] = useState(false);

  const Dropdown = () => {
    const dropDownText = selected.storeTokens
      ? 'Store your first AR token'
      : selected.accessDapp
      ? 'Access a Dapp'
      : 'I just want to explore';

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
            className={selected.storeTokens ? styles.active : ''}
          >
            Store your first AR token
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
            className={selected.accessDapp ? styles.active : ''}
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
            className={selected.explore ? styles.active : ''}
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
