import styles from '../styles/modules/Home.module.scss';
import Image from 'next/image';
import officePicture from '../public/office.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.smallCard}>
          <div className={styles.largeText}>
            OVER 30 YEARS OF SUBSTANTIAL EXPERIENCE.
          </div>
        </div>
        <Image
          className={`${styles.largeCard} ${styles.image}`}
          src={officePicture}
          alt="office"
          
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.largeCard}></div>
        <div className={styles.smallCard}>
          <div className={styles.largeText}>
            Partnered with NYU CDE Implantology program.
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.smallCard}>
          <div className={styles.smallText}>
            “Prime Dental Implant Tech. continues to impress me and my patients.
            Their work is exceptional. Thank you for making my life easier!”
            <br />
            <br />
            <p style={{ fontStyle: 'italic' }}>-Dr. Guy Minoli</p>
          </div>
        </div>
        <div className={styles.largeCard}></div>
      </div>
    </div>
  );
}
