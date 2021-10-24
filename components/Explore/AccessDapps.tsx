import ExplorePage from "components/common/ExplorePage";

const AccessDapps = () => {
  return (
    <ExplorePage
      iconUrl="/assets/plug.svg"
      altText="plug emoji"
      accessDapps
      heading="Access a Dapp"
      introParagraph="Please click the <span>Download</span> button on this page to get ArConnect for your browser if you haven’t already, If you have then let’s proceed!
        <br></br>

        ArConnect is the easiest way to access Dapps on Arweave, but you’ll need to have some AR tokens to complete most transactions
        <br></br>
        
        
        Steps <strong>(1.)</strong> - <strong>(5.)</strong> walk you through setting up your wallet to receive AR, please skip if you already have AR in your wallet"
    />
  );
};

export default AccessDapps;
