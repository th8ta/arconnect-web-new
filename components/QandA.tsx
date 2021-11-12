import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from 'styles/components/QandA.module.scss';

const QACard = ({
  question,
  answer,
  special
}: {
  question: string;
  answer: string;
  special?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div
      className={
        router.pathname === '/security'
          ? `${styles.questionAnswer} ${styles.qaDark}`
          : styles.questionAnswer
      }
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

const QandA = () => {
  const router = useRouter();

  return (
    <section className={styles.faq}>
      <div>
        <h2>Here to answer your questions</h2>
        <p>
          ArConnect is a completely decentralized network built on top of the
          blockweave. Anyone can help power the exchange. Feel freed to reach
          out to the community on Discord or Twitter!
        </p>
        <Link href="https://verto.exchange/chat">
          <a
            className={
              router.pathname === '/security'
                ? `${styles.chatBtn} ${styles.chatBtnDark}`
                : styles.chatBtn
            }
          >
            Chat with us
          </a>
        </Link>
      </div>

      <section>
        <QACard
          special
          question="What is Arconnect?"
          answer="ArConnect is the most user friendly crypto wallet you will ever use. If you're here, it means you're super early, please enter your email to be one of the first users."
        />
        <QACard
          question="What is a Non-custodial wallet?"
          answer="Coming Soon"
        />
        <QACard question="What is a Browser extension?" answer="Coming Soon" />
        <QACard
          question="What happens to my old Arweave wallet?"
          answer="Coming Soon"
        />
        <QACard
          question="How does ArConnect protect my assets?"
          answer="Coming Soon"
        />
      </section>
    </section>
  );
};

export default QandA;
