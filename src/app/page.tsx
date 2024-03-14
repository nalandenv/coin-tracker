import styles from "./page.module.scss"
import Navbar from "./navbar";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  );
}
