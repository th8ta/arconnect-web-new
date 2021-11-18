import Head from 'next/head';

import Metas from 'components/Metas';
import Footer from 'components/Footer';
import FAQ from 'components/Home/FAQ';
import Features from 'components/Home/Features';
import Community from 'components/Home/Community';
import LandingPage from 'components/Home/LandingPage';

const Home = () => {
  return (
    <>
      <Head>
        <title>ArConnect - Secure wallet management for Arweave</title>
        <link rel="shortcut icon" href="/logo256.png" />
      </Head>
      <Metas
        title="ArConnect"
        description="Secure wallet management for Arweave"
        image="/logo256.png"
      />
      <main>
        <LandingPage />
        <Features />
        <FAQ />
        <Community />
        <Footer />
      </main>
    </>
  );
};

export default Home;
