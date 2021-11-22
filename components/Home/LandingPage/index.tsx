/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button';
import styles from './styles.module.scss';
import useGetBrowser from 'hooks/useGetBrowser';

const Showcase = ({
  logoUrl,
  altText
}: {
  logoUrl: string;
  altText: string;
  special?: boolean;
}) => (
  <div>
    <img className={styles.showcaseLogo} src={logoUrl} alt={altText} />
  </div>
);

const LandingPage = () => {
  const { browserLink } = useGetBrowser();

  return (
    <section className={styles.pageWrapper}>
      <section className={styles.landingIntro}>
        <h1>A better way to experience Arweave</h1>
        <p>
          ArConnect is the <span className={styles.mark}>simplest</span> and
          most <span className={styles.mark}>secure</span> way to{' '}
          <span className={styles.highlight}>Store, Transfer, Swap</span> and{' '}
          <span className={styles.highlight}>Access Dapps</span> on Arweave. To
          help you ease into the permaweb, please select which of these best
          describes you.
        </p>
        <div className={styles.introButtons}>
          <Button href={browserLink} text="I own AR tokens" newTab />
          <Button href="/onboarding" text="I don't own any AR tokens" dark />
        </div>
      </section>

      <p className={styles.supportText}>Supported by Web 3.0 Trailblazers</p>

      <section className={styles.showcase}>
        <Showcase logoUrl="/assets/verto.svg" altText="Verto" />
        <Showcase logoUrl="/assets/pianity.svg" altText="Pianity" />
        <Showcase logoUrl="/assets/arweave.svg" altText="Arweave" />
        <Showcase logoUrl="/assets/arverify.svg" altText="Arverify" />
        <Showcase logoUrl="/assets/community.svg" altText="Community" />
        <Showcase logoUrl="/assets/ardrive.svg" altText="ArDrive" />
      </section>
    </section>
  );
};

export default LandingPage;
