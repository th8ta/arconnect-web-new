import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { detect } from "detect-browser";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

import styles from "styles/components/nav.module.scss";

export default function Nav() {
  const router = useRouter();
  const [browser, setBrowser] = useState<string>();
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    const browser = detect();

    if (!browser) return;
    if (window.navigator.brave !== undefined) return setBrowser("brave");
    setBrowser(browser.name);
  }, []);

  const linkToStore = (browser: string | undefined): string => {
    switch (browser) {
      case "firefox":
        return "https://addons.mozilla.org/en-US/firefox/addon/arconnect/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search";
        break;
      case "brave":
        return "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap";
        break;
      default:
        return "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap";
    }
  };

  const NavItems = () => (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/docs">Docs</Link>
      </li>
      <li className={styles.security}>
        <Link href="/security">Security</Link>
      </li>
    </>
  );

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
          <NavItems />
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

        <div
          className={
            router.pathname === "/" ? styles.addToBrowsers : styles.install
          }
          onClick={() => linkToStore(browser)}
        >
          {router.pathname === "/" ? (
            <Link href={linkToStore(browser)}>
              <a target="_blank">{`Add to ${browser}`}</a>
            </Link>
          ) : (
            <Link href={linkToStore(browser)}>
              <a target="_blank">Install ArConnect</a>
            </Link>
          )}
        </div>
      </nav>

      <div className={styles.mobileNav}>
        <ul className={openNav ? styles.showNav : styles.closeNav}>
          <NavItems />
        </ul>
      </div>
    </>
  );
}
