import Head from "next/head";
import Image from "next/image";
import styles from "styles/components/common/welcome.module.scss";

interface Props {
  text: string;
  heading: string;
  chooseAction?: boolean;
}

const WelcomePage = ({ heading, text, chooseAction }: Props) => {
  const WelcomeModal = ({
    buttonText,
    paragraph,
    iconUrl
  }: {
    iconUrl: string;
    paragraph: string;
    buttonText: string;
  }) => {
    return (
      <div className={styles.modalContainer}>
        <div>
          <Image src={iconUrl} width={50.16} height={48.37} alt="emoji" />
          <p>{buttonText}</p>
        </div>
        <p>{paragraph}</p>
      </div>
    );
  };

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
        <div className={nerdFace ? styles.nerdFace : ""}>
          <Image src={iconUrl} alt="emoji" width={204} height={155} />
        </div>
      </div>
    );
  };
  return (
    <main className={styles.mainWrapper}>
      <section className={styles.textContainer}>
        <h1>{heading}</h1>
        <p>{text}</p>
      </section>

      <section>
        {chooseAction ? (
          <>
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
          </>
        ) : (
          <>
            <WelcomeModal
              iconUrl="/assets/flushedFace.svg"
              buttonText="I'm new to Crypto"
              paragraph="I'm a complete newbie, interested in crypto, but there’s a lot I don’t know"
            />
            <WelcomeModal
              iconUrl="/assets/nerdFace.svg"
              buttonText="I'm new to Arweave"
              paragraph="I know a bit about crypto and own some, but i just discovered Arweave"
            />
          </>
        )}
      </section>
    </main>
  );
};

export default WelcomePage;
