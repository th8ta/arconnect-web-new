import Link from "next/link";
import Image from "next/image";
import { detect } from "detect-browser";
import { useEffect, useState } from "react";

import styles from "styles/components/nav.module.scss";

export default function Nav() {
  const [browser, setBrowser] = useState<string>();
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    const browser = detect();

    if (!browser) return;
    setBrowser(browser.name);
  }, []);

  return (
    <nav className={styles.Nav}>
      <div className={openNav ? styles.hide : styles.logo}>
        <Image
          src="/assets/logo.svg"
          alt="arconnect logo"
          width={30}
          height={30}
        />
        <p>ArConnect</p>
      </div>
      <ul
        className={
          openNav ? `${styles.navItems} ${styles.showNav}` : styles.navItems
        }
      >
        <div onClick={() => setOpenNav(false)}>
          <Image
            src="/assets/closeNavbar.svg"
            alt="arconnect logo"
            width={30}
            height={30}
          />
        </div>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Developers</Link>
        </li>
        <li className={styles.security}>
          <Link href="#">Security</Link>
        </li>
        <li>
          <Link href="#">
            {browser === "firefox" || browser === "ff"
              ? "Add to Firefox"
              : `Add to Chrome`}
          </Link>
        </li>
      </ul>

      <div
        className={openNav ? styles.hide : styles.burgerMenu}
        onClick={() => setOpenNav(true)}
      >
        <Image
          src="/assets/navBurgerMenu.svg"
          alt="arconnect logo"
          width={30}
          height={30}
        />
      </div>
    </nav>
  );
}
