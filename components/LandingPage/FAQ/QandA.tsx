import Image from "next/image";
import { useState } from "react";
import styles from "styles/components/LandingPage/faq.module.scss";

const QandA = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.questionAnswer} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.question}>
        <div
          className={!isOpen ? styles.qn : `${styles.qn} ${styles.qnActive}`}
        >
          {question}
        </div>
        <div className={styles.icon}>
          <Image
            src={isOpen ? "/assets/upArrow.svg" : "/assets/downArrow.svg"}
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

export default QandA;
