import styles from "styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <ul>
        <h4>Resources</h4>
        <li>Documentation</li>
        <li>FAQ</li>
        <li>Blog</li>
        <li>Arweave</li>
      </ul>
      <ul>
        <h4>Legal</h4>
        <li>License</li>
      </ul>
    </footer>
  );
};

export default Footer;
