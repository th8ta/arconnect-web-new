import styles from "styles/components/LandingPage/community.module.scss";

const Community = () => {
  const Card = ({
    platform,
    platformIcon,
    text
  }: {
    platform: string;
    platformIcon: string;
    text: string;
  }) => (
    <div className={styles.cardWrapper}>
      <div>
        <img src={platformIcon} alt={platform} />
        <p className={styles.platform}>{platform}</p>
      </div>
      <p>{text}</p>
    </div>
  );

  return (
    <section className={styles.container}>
      <div className={styles.introSection}>
        <h2>Community Driven</h2>
        <p>
          Join ArConnect&apos;s decentralized community and interact with the
          world on Discord or Twitter.
        </p>
        <button>Come join us</button>
      </div>

      <section>
        <Card
          platform="Discord"
          platformIcon="/assets/discord.svg"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets and see your latest "
        />
        <Card
          platform="Twitter"
          platformIcon="/assets/twitter.svg"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets and see your latest "
        />
        <Card
          platform="Github"
          platformIcon="/assets/github.svg"
          text="With ArConnect's user-friendly interface, you can manage your Arweave balance, view and transfer assets and see your latest "
        />
      </section>
    </section>
  );
};

export default Community;
