import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <button className={styles.button}>Home</button>
          </li>
          <li>
            <button className={styles.button}>About</button>
          </li>
          <li>
            <button className={styles.button}>Services</button>
          </li>
          <li>
            <button className={styles.button}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
