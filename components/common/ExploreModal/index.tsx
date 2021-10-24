import Image from "next/image";
import styles from "./styles.module.scss";
import DOMPurify from "isomorphic-dompurify";

const ExploreModal = ({
  modalHeader,
  iconUrl,
  altText,
  paragraph
}: {
  modalHeader: string;
  altText: string;
  iconUrl: string;
  paragraph: string;
}) => {
  const safeHTML = DOMPurify.sanitize(paragraph);
  return (
    <section className={styles.modalContainer}>
      <div className={styles.modalIcon}>
        <Image src={iconUrl} height={30} width={30} alt={altText} />
      </div>
      <h3>{modalHeader}</h3>
      <p dangerouslySetInnerHTML={{ __html: safeHTML }}></p>
    </section>
  );
};

export default ExploreModal;
