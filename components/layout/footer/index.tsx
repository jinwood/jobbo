import styles from "./Footer.module.scss"; // Import the CSS Modules styles

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Your Website Name</p>
    </footer>
  );
}
