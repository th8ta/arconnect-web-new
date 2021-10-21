import Head from "next/head";
import WelcomePage from "components/common/Welcome";
import styles from "styles/components/chooseAction.module.scss";

const ChooseAction = () => {
  return (
    <>
      <Head>
        <title>Choose Action</title>
      </Head>

      <WelcomePage
        heading="Great!"
        text="Let’s help you get stuff done quickly,  what’s the first thing you’d like to do with Arconnect"
        chooseAction
      />
    </>
  );
};

export default ChooseAction;
