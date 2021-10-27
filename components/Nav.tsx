import Link from "next/link";
import Image from "next/image";
import { detect } from "detect-browser";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
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
    <>
      <nav className={styles.Nav}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo.svg"
            alt="arconnect logo"
            width={30}
            height={30}
          />
          <p>ArConnect</p>
        </div>

        <ul className={styles.navItems}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Developers</Link>
          </li>
          <li className={styles.security}>
            <Link href="#">Security</Link>
          </li>
        </ul>

        {openNav ? (
          <div onClick={() => setOpenNav(false)} className={styles.closeMenu}>
            <GrClose size="1.8rem" />
          </div>
        ) : (
          <div className={styles.burgerMenu} onClick={() => setOpenNav(true)}>
            <Image
              src="/assets/navBurgerMenu.svg"
              alt="arconnect logo"
              width={30}
              height={30}
            />
          </div>
        )}

        <div className={styles.addToBrowsers}>
          <Link href="#">
            {browser === "firefox" || browser === "ff"
              ? "Add to Firefox"
              : `Add to Chrome`}
          </Link>
        </div>
      </nav>

      <div className={styles.mobileNav}>
        <ul className={openNav ? styles.showNav : styles.closeNav}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Developers</Link>
          </li>
          <li className={styles.security}>
            <Link href="#">Security</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
