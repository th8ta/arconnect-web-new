import Image from 'next/image';
import QandA from 'components/QandA';
import styles from './styles.module.scss';

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
      <div className={styles.userDP}>
        <Image src={picUrl} alt="rating icon" width={44} height={44} />
      </div>
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

const FAQ = () => {
  return (
    <section className={styles.container}>
      <QandA />
      <section className={styles.feedbackContainer}>
        <h2>
          15,000+ people <span>and counting</span> love ArConnect
        </h2>

        <section>
          <FeedbackCard
            picUrl="/assets/criptoAlfa.svg"
            name="Cripto Alfa"
            feedback="This extension works, congratulations! Please keep updating this fantastic tool"
          />

          <FeedbackCard
            picUrl="/assets/marcin.svg"
            name="Marcin Kaźmierczak"
            feedback="Great tool with no issues - Tate & ArConnect team good job developing!"
          />

          <FeedbackCard
            picUrl="/assets/kevin.svg"
            name="Kevin Primicerio"
            feedback="Love this extension. Implementing it on Pianity right now :)
            Congrats!"
          />
        </section>
      </section>
    </section>
  );
};

export default FAQ;
