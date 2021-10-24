import Head from "next/head";
import WelcomePage from "components/common/Welcome";
import styles from "styles/views/onboarding/welcome.module.scss";

const Welcome = () => (
  <>
    <Head>
      <title>Welcome to ArConnect</title>
    </Head>
    <WelcomePage
      heading="Welcome!"
      text="ArConnect was tailor made for you regardless of your background,
      skill or experience, it’s unbreakable, yet malleable. Please select
      what best describes you"
    />
  </>
);

export default Welcome;
