import Head from 'next/head';
import WelcomePage from 'components/Explore/Welcome';

const ChooseAction = () => {
  return (
    <main style={{ marginTop: '8rem' }}>
      <Head>
        <title>Choose Action</title>
      </Head>

      <WelcomePage
        heading="Great!"
        text="Let’s help you get stuff done quickly,  what’s the first thing you’d like to do with Arconnect"
        chooseAction
      />
    </main>
  );
};

export default ChooseAction;
