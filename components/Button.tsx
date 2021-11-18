import Link from 'next/link';
import styles from 'styles/components/button.module.scss';

const Button = ({
  href,
  dark,
  text,
  newTab
}: {
  href: string;
  dark?: boolean;
  text: string;
  newTab?: boolean;
}) => {
  return (
    <Link href={href}>
      <a
        target={newTab ? '_blank' : '_self'}
        className={
          dark ? `${styles.introBtn} ${styles.darkIntroBtn}` : styles.introBtn
        }
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
