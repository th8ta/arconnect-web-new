import styles from "styles/components/LandingPage/faq.module.scss";

const FAQ = () => {
  return (
    <>
      <section>
        <section>
          <div>
            <h2>Here to answer your questions</h2>
            <p>
              ArConnect is a completely decentralized network built on top of
              the blockweave. Anyone can help power the exchange. Feel freed to
              reach out to the community on Discord or Twitter!
            </p>
            <button>Chat with us</button>
          </div>

          <div>
            <div>
              <div>
                <p>What is ArConnect</p>
                <img src="#" alt="#" />
              </div>
              <p>
                ArConnect is the most user friendly crypto wallet you will ever
                use. If you&apos;re here, it means you&apos;re super early,
                please enter your email to be one of the first users.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>
            10,000+ people <span>and counting</span> love ArConnect
          </h2>

          <div>
            <img src="#" alt="#" />
            <p>Marcin Kaźmierczak</p>
            {/* Rating */}
            <p>
              This extension works great, congratulations! Please keep updating
              this fantastic tool
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default FAQ;
