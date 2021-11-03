import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

import useGetBrowser from "hooks/useGetBrowser";
import styles from "styles/components/nav.module.scss";

const NavItems = () => (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="https://docs.th8ta.org/">Docs</Link>
    </li>
    <li className={styles.security}>
      <Link href="/security">Security</Link>
    </li>
  </>
);

export default function Nav() {
  const router = useRouter();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const { browser, browserLink: storeLink } = useGetBrowser();

  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <Image
            src="/assets/arconnect-logo.svg"
            alt="arconnect logo"
            width={30}
            height={30}
          />
          <p>ArConnect</p>
        </div>

        <ul className={styles.navItems}>
          <NavItems />
        </ul>

        {openNav ? (
          <div onClick={() => setOpenNav(false)} className={styles.closeMenu}>
            <GrClose size="1.5rem" />
          </div>
        ) : (
          <div className={styles.burgerMenu} onClick={() => setOpenNav(true)}>
            <Image
              src="/assets/navBurgerMenu.svg"
              alt="arconnect logo"
              width={24.1}
              height={16}
            />
          </div>
        )}

        {router.pathname === "/" ? (
          <Link href={storeLink}>
            <a
              className={styles.addToBrowsers}
              target="_blank"
            >{`Add to ${browser}`}</a>
          </Link>
        ) : (
          <Link href={storeLink}>
            <a className={styles.install} target="_blank">
              Install ArConnect
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
