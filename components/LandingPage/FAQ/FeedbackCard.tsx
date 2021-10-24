import Image from "next/image";
import styles from "styles/components/LandingPage/faq.module.scss";

const FeedbackCard = ({
  name,
  picUrl,
  feedback
}: {
  name: string;
  picUrl: string;
  feedback: string;
}) => {
  const Rating = () => (
    <Image src="/assets/rating.svg" alt="rating icon" width={20} height={20} />
  );
  return (
    <div className={styles.userFeedback}>
      <Image src={picUrl} alt="rating icon" width={15} height={15} />
      <div className={styles.userInfo}>
        <p>{name}</p>
        <div>
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      </div>
      <p className={styles.feedback}>{feedback}</p>
    </div>
  );
};

export default FeedbackCard;
