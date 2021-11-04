import Link from 'next/link';
import styles from 'styles/components/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <ul>
          <h4>Resources</h4>
          <li>
            <Link href="https://docs.th8ta.org/">Docs</Link>
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
        </ul>
        <ul>
          <h4>Legal</h4>
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
