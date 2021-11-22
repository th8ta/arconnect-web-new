import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
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
        <div className={styles.chevron}>
          {isOpen ? (
            <FaChevronUp
              color={router.pathname === '/security' ? 'white' : 'black'}
            />
          ) : (
            <FaChevronDown
              color={router.pathname === '/security' ? 'white' : 'black'}
            />
          )}
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
          Our community of Arweavers is quickly growing. If you have any
          questions, ideas, or feedback, please let us know!
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
          answer="ArConnect is a crypto wallet that allows you to store, send, receive, and (soon) swap tokens on the blockweave."
        />
        <QACard
          question="What is a Non-custodial wallet?"
          answer="A non-custodial wallet stores the crypto you own and you alone have access to it."
        />
        <QACard
          question="What is a Browser extension?"
          answer="A browser extension is piece of software that adds additional features and functions to your browser. Crypto wallets are often installed as browser extensions."
        />
        <QACard
          question="What happens to my old Arweave wallet?"
          answer="You can use any existing Arweave wallets inside of ArConnect!"
        />
      </section>
    </section>
  );
};

export default QandA;
