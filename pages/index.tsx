import Metas from 'components/Metas';
import FAQ from 'components/Home/FAQ';
import Footer from 'components/Footer';
import Features from 'components/Home/Features';
import Community from 'components/Home/Community';
import LandingPage from 'components/Home/LandingPage';

const Home = () => {
  return (
    <>
      <Metas
        title="ArConnect - The easiest web wallet for Arweave"
        description="The easiest web wallet for Arweave. ArConnect enables you to manage your Arweave-based funds and securely log-in to permaweb apps through a sleek web extension."
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
