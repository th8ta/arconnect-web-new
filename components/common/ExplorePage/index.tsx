import Image from "next/image";
import styles from "./styles.module.scss";
import modalStyles from "../ExploreModal/styles.module.scss";
import DOMPurify from "isomorphic-dompurify";
import ExploreModal from "components/common/ExploreModal";

const ExplorePage = ({
  heading,
  iconUrl,
  altText,
  introParagraph,
  accessDapps
}: {
  heading: string;
  iconUrl: string;
  altText: string;
  accessDapps?: boolean;
  introParagraph: string;
}) => {
  const safeHTML = DOMPurify.sanitize(introParagraph);
  return (
    <section className={styles.pageWrapper}>
      <div>
        <h1>{heading}</h1>
        <span>
          <Image src={iconUrl} height={50} width={50} alt={altText} />
        </span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: safeHTML }}></p>
      <section>
        <ExploreModal
          iconUrl="/assets/password.svg"
          altText="password emoji"
          modalHeader="(1.) Set Password"
          paragraph="After downloading, you should see a page with a ‘Set Password’ form, please set your password of choice and click on <strong>Create</strong>"
        />
        <ExploreModal
          iconUrl="/assets/magic.svg"
          altText="magic emoji"
          modalHeader="(2.) Create New Wallet"
          paragraph="Next, Please click <strong>‘New Wallet’</strong> to generate a new wallet, depending on your network connection, this might take a few seconds to a minute"
        />
        <ExploreModal
          iconUrl="/assets/save.svg"
          altText="save emoji"
          modalHeader="(3.) Backup seed phrase and Download Keyfile"
          paragraph="Your Keyfile and seed phrase serve as your keys to accessing your wallet, please write down your seed phrase somewhere safe and Download your keyfile"
        />
        <ExploreModal
          iconUrl="/assets/folder.svg"
          altText="folder emoji"
          modalHeader="(4.) Load keyfile or Enter Seed phrase"
          paragraph="We’re almost in! Please click <strong>‘Load keyfile’</strong> and navigate to your previously downloaded keyfile or enter your Seed phrase to log in"
        />

        <section className={modalStyles.modalContainer}>
          <div className={modalStyles.modalIcon}>
            <Image
              src="/assets/mouse.svg"
              height={101}
              width={101}
              alt="emoji"
            />
          </div>
          <h3>(5.) Copy your address or Scan QR code</h3>
          <p>
            Now click on the ‘copy’ icon{" "}
            <span className={modalStyles.copy}></span> to copy your wallet
            address or click on the QR icon{" "}
            <span className={modalStyles.qrCode}></span> to scan to receive AR
            tokens straight to your wallet
          </p>
        </section>

        {accessDapps ? (
          <ExploreModal
            iconUrl="/assets/folder.svg"
            altText="folder emoji"
            modalHeader="(6.) Visit the Dapp and click on ‘Connect Wallet’"
            paragraph="It’s super easy once your wallet is set up, visit the Dapp and click on the <strong>‘Connect wallet’</strong> button, follow the prompts and you should see a popup with a Log In form, your wallet address should already appear all you need to do is enter your ArConnect password. ArConnect also let’s you set an allowance limit to manage your tokens.  Finally Click <strong>Log In</strong> and that’s it!"
          />
        ) : null}
      </section>
    </section>
  );
};

export default ExplorePage;
