import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.scss';

const QandA = ({
  question,
  answer,
  special
}: {
  question: string;
  answer: string;
  special?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.questionAnswer}
      onClick={() => setIsOpen(!isOpen)}
      id={special ? styles.special : ''}
    >
      <div className={styles.question}>
        <div
          className={!isOpen ? styles.qn : `${styles.qn} ${styles.qnActive}`}
        >
          {question}
        </div>
        <div className={styles.icon}>
          <Image
            src={isOpen ? '/assets/upArrow.svg' : '/assets/downArrow.svg'}
            alt="dropdown icon"
            width={14}
            height={14}
          />
        </div>
      </div>
      <p className={isOpen ? styles.answer : styles.answerActive}>{answer}</p>
    </div>
  );
};

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
      <section className={styles.faq}>
        <div>
          <h2>Here to answer your questions</h2>
          <p>
            ArConnect is a completely decentralized network built on top of the
            blockweave. Anyone can help power the exchange. Feel freed to reach
            out to the community on Discord or Twitter!
          </p>
          <Link href="https://verto.exchange/chat">
            <a className={styles.chatBtn}>Chat with us</a>
          </Link>
        </div>

        <section>
          <QandA
            special
            question="What is Arconnect?"
            answer="ArConnect is the most user friendly crypto wallet you will ever use. If you're here, it means you're super early, please enter your email to be one of the first users."
          />
          <QandA
            question="What is a Non-custodial wallet?"
            answer="Coming Soon"
          />
          <QandA question="What is a Browser extension?" answer="Coming Soon" />
          <QandA
            question="What happens to my old Arweave wallet?"
            answer="Coming Soon"
          />
          <QandA
            question="How does ArConnect protect my assets?"
            answer="Coming Soon"
          />
        </section>
      </section>

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
