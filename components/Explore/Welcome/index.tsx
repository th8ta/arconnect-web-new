/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

interface Props {
  text: string;
  heading: string;
  chooseAction?: boolean;
}

const ChooseActionModal = ({
  modalText,
  iconUrl,
  nerdFace
}: {
  iconUrl: string;
  modalText: string;
  nerdFace?: boolean;
}) => {
  return (
    <div className={styles.actionModal}>
      <p>{modalText}</p>
      <div
        className={
          !nerdFace ? styles.icons : `${styles.icons} ${styles.nerdface}`
        }
      >
        <img src={iconUrl} alt="emoji" />
      </div>
    </div>
  );
};

const WelcomeModal = ({
  buttonText,
  paragraph,
  iconUrl,
  linkTo
}: {
  iconUrl: string;
  paragraph: string;
  buttonText: string;
  linkTo: string;
}) => {
  return (
    <Link href={linkTo}>
      <a className={styles.modalContainer}>
        <div>
          <Image src={iconUrl} width={50.16} height={48.37} alt="emoji" />
          <p>{buttonText}</p>
        </div>
        <p>{paragraph}</p>
      </a>
    </Link>
  );
};

const WelcomePage = ({ heading, text, chooseAction }: Props) => {
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.textContainer}>
        <h1>{heading}</h1>
        <p className={styles.text}>{text}</p>
      </section>

      <section className={styles.modalContiainer}>
        {chooseAction ? (
          <section className={styles.cardsContainer}>
            <ChooseActionModal
              iconUrl="/assets/handLeft.svg"
              modalText="Store AR tokens"
            />
            <ChooseActionModal
              iconUrl="/assets/gateway.svg"
              modalText="Access a Dapp"
            />
            <ChooseActionModal
              nerdFace
              iconUrl="/assets/nerdFace.svg"
              modalText="Just want to explore"
            />
          </section>
        ) : (
          <section className={styles.cardsContainer}>
            <WelcomeModal
              linkTo="/onboarding/guide"
              iconUrl="/assets/flushedFace.svg"
              buttonText="I'm new to Crypto"
              paragraph="I'm a complete newbie, interested in crypto, but there’s a lot I don’t know"
            />
            <WelcomeModal
              linkTo="/onboarding/choose-action"
              iconUrl="/assets/nerdFace.svg"
              buttonText="I'm new to Arweave"
              paragraph="I know a bit about crypto and own some, but i just discovered Arweave"
            />
          </section>
        )}
      </section>
    </main>
  );
};

export default WelcomePage;
