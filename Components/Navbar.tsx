import styles from '../styles/modules/Navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
  console.log(styles)
  return (
    <div className={styles.nav}>
      <div className={styles.home}>
        <Link href="/">
          <h1 className={styles.link}>Prime Dental</h1>
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.item}>
          <Link href="/technology">
            <h2 className={styles.link}>Technology</h2>
          </Link>
        </div>

        <div className={styles.item}>
          <Link href="/turnaround">
            <h2 className={styles.link}>Turnaround Times</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
