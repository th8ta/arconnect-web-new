/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './styles.module.scss';

const Community = () => {
  const Card = ({
    platform,
    platformIcon,
    text,
    linkTo
  }: {
    platform: string;
    platformIcon: string;
    text: string;
    linkTo: string;
  }) => (
    <Link href={linkTo}>
      <a target="_blank" className={styles.cardWrapper}>
        <div>
          <img src={platformIcon} alt={platform} />
          <p className={styles.platform}>{platform}</p>
        </div>
        <p>{text}</p>
      </a>
    </Link>
  );

  return (
    <section className={styles.container}>
      <div className={styles.introSection}>
        <h2>Community Driven</h2>
        <p>
          Join ArConnect&apos;s decentralized community and interact with the
          world on Discord or Twitter.
        </p>

        <Link href="https://verto.exchange/chat">
          <a className={styles.chatBtn}>Come join us</a>
        </Link>
      </div>

      <section>
        <Card
          linkTo="https://www.verto.exchange/chat"
          platform="Discord"
          platformIcon="/assets/discord.svg"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets and see your latest "
        />
        <Card
          linkTo="https://twitter.com/vertoexchange"
          platform="Twitter"
          platformIcon="/assets/twitter.svg"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets and see your latest "
        />
        <Card
          linkTo="https://github.com/th8ta/arconnect"
          platform="Github"
          platformIcon="/assets/github.svg"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets and see your latest "
        />
      </section>
    </section>
  );
};

export default Community;
