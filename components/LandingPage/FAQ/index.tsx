import QandA from "./QandA";
import FeedbackCard from "./FeedbackCard";
import styles from "styles/components/LandingPage/faq.module.scss";

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
          <button>Chat with us</button>
        </div>

        <section>
          <QandA
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
          10,000+ people <span>and counting</span> love ArConnect
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
