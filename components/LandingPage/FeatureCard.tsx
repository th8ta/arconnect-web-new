import styles from "styles/components/LandingPage/featureCard.module.scss";

interface Props {
  title: string;
  heading: string;
  text: string;
  grayedText: string;
  wallet?: boolean;
  iconUrl?: string;
  handIcon1?: string;
  handIcon2?: string;
}
const FeatureCard = ({
  title,
  heading,
  text,
  grayedText,
  iconUrl,
  handIcon1,
  handIcon2,
  wallet
}: Props) => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>{title}</p>
      <h2>
        {heading}
        <span>{grayedText}</span>
      </h2>
      <p className={styles.text}>{text}</p>
      {wallet ? (
        <div>
          <img src={handIcon1} alt="left hand icon" />
          <img src={handIcon2} alt="right hand icon" />
        </div>
      ) : (
        <img src={iconUrl} alt="gateway icon" />
      )}
    </section>
  );
};

export default FeatureCard;
