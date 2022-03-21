import Link from 'next/link';
import Logo from '../components/Logo';
import styles from 'styles/components/footer.module.scss';
import styled from 'styled-components';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Logo />
      <div className={styles.items}>
        <ul>
          <li>
            <Link href="https://docs.th8ta.org/arconnect">Docs</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="https://blog.th8ta.org/">Blog</Link>
          </li>
          <li>
            <Link href="https://arweave.org/">Arweave</Link>
          </li>
          <li>
            <Link href="https://github.com/th8ta/ArConnect/blob/development/LICENSE">
              License
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
