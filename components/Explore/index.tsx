import Link from "next/link";
import Image from "next/image";
import styles from "styles/components/Explore/explore.module.scss";

const JustExplore = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h1>I just want to explore</h1>
        <div className={styles.nerdFace}>
          <Image
            src="/assets/nerdFace.svg"
            height={42}
            width={42}
            alt="ArConnect Logo"
          />
        </div>
      </div>
      <p>
        And that’s fine, ArConnect makes the Arweave experience delightful, If
        you have never used ArConnect before, we really recommend that you check
        out <Link href="#">how to store your first AR token</Link>, either way,
        you can always find learning resources on the
        <Link href="#">ArConnect 101 page</Link>
      </p>
      <div className={styles.arConnect}>
        <Image
          src="/assets/arconnect-logo.svg"
          width={174}
          height={160}
          alt="ArConnect Logo"
        />
      </div>
      <button>Add to Brave</button>
    </main>
  );
};

export default JustExplore;
