import Link from "next/link";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <p className={styles.title}>Jobbo</p>
          <li className={styles["link-box"]}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.link}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
