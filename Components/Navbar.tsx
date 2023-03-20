import styles from './Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <h1 className={styles.link}>Prime Dental</h1>
      </Link>
      <Link href="/technology">
        <h2 className={styles.link}>Technology</h2>
      </Link>
      <Link href="/turnaround">
        <h2 className={styles.link}>Turnaround Times</h2>
      </Link>
    </div>
  );
}
