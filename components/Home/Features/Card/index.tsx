/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './styles.module.scss';

interface Props {
  title: string;
  heading: string;
  text: string;
  grayedText: string;
  wallet?: boolean;
  iconUrl?: string;
  handIcon1?: string;
  handIcon2?: string;
  special?: boolean;
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
      <div className={styles.illustrations}>
        {wallet ? (
          <div className={styles.icons}>
            <img
              src={handIcon1}
              alt="right hand icon"
              className={styles.icon1}
            />
            <img
              src={handIcon2}
              alt="left hand icon"
              className={styles.icon2}
            />
          </div>
        ) : (
          <img
            src={iconUrl}
            alt="gateway icon"
            className={styles.gatewayIcon}
          />
        )}
      </div>
    </section>
  );
};

export default FeatureCard;
