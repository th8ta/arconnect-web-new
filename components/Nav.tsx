/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import { useState } from 'react';
import { useRouter } from 'next/router';
CgClose;
import { CgClose } from 'react-icons/cg';
import useGetBrowser from 'hooks/useGetBrowser';
import styles from 'styles/components/nav.module.scss';

export default function Nav() {
  const router = useRouter(),
    [openNav, setOpenNav] = useState<boolean>(false),
    { browser, browserLink: storeLink } = useGetBrowser();

  const handleNavClick = () => {
    setOpenNav(false);
  };

  const NavItems = () => (
    <>
      <li onClick={handleNavClick}>
        <Link href="/">Home</Link>
      </li>
      <li onClick={handleNavClick}>
        <Link href="https://docs.th8ta.org/arconnect">Docs</Link>
      </li>
      <li className={styles.security} onClick={handleNavClick}>
        <Link href="/security">Security</Link>
      </li>
    </>
  );

  return (
    <>
      <nav
        className={
          router.pathname === '/security'
            ? `${styles.Nav} ${styles.darkNav}`
            : styles.Nav
        }
      >
        <Logo />

        <ul className={styles.navItems}>
          <NavItems />
        </ul>

        {openNav ? (
          <div onClick={() => setOpenNav(false)} className={styles.closeMenu}>
            <CgClose
              size="1.8rem"
              color={router.pathname === '/security' ? '#fff' : '#000'}
            />
          </div>
        ) : (
          <div className={styles.burgerMenu} onClick={() => setOpenNav(true)}>
            <Image
              src={
                router.pathname === '/security'
                  ? '/assets/navBurgerMenuLight.svg'
                  : '/assets/navBurgerMenu.svg'
              }
              alt="arconnect logo"
              width={24.1}
              height={16}
            />
          </div>
        )}

        {router.pathname === '/' ? (
          <Link href={storeLink}>
            <a
              className={`${styles.addToBrowsers} ${styles.install}`}
              target="_blank"
            >
              Download ArConnect
            </a>
          </Link>
        ) : (
          <Link href={storeLink}>
            <a
              className={
                router.pathname === '/security'
                  ? `${styles.install} ${styles.installDark}`
                  : styles.install
              }
              target="_blank"
            >
              Download ArConnect
            </a>
          </Link>
        )}
      </nav>

      <div className={styles.mobileNav}>
        <ul className={openNav ? styles.showNav : styles.closeNav}>
          <NavItems />
        </ul>
      </div>
    </>
  );
}
