import Link from "next/link";
import { detect } from "detect-browser";
import { useEffect, useState } from "react";

import styles from "styles/components/nav.module.scss";

export default function Nav() {
  const [browser, setBrowser] = useState<string>();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const browser = detect();

    if (!browser) return;
    setBrowser(browser.name);
  }, []);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScrolled);

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <nav className={styles.Nav}>
      <div className={styles.logo}>
        <img src='/assets/logo.svg' alt="arconnect logo" />
        <p>ArConnect</p>
      </div>
      <ul className={styles.navItems}>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Developers</Link>
        </li>
        <li>
          <Link href="#">Security</Link>
        </li>
        <li>
          <Link href="#">
            {browser === "firefox" || browser === "ff"
              ? "Coming soon to Firefox Add-Ons"
              : `Add to Chrome`}
          </Link>
        </li>
      </ul>

      <div className={styles.burgerMenu}>
        <div className={styles.item1}></div>
        <div className={styles.item2}></div>
        <div className={styles.item3}></div>
      </div>
    </nav>
  );
}
