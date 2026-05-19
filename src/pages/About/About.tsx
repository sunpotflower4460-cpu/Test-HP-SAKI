import MemberCard from '../../components/MemberCard';
import styles from './About.module.css';
import { aboutPageSections, members } from '../../data/siteData';

const About = () => {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.hero}>
        <p className={styles.label}>About us</p>
      </section>

      <section className={styles.block}>
        <p className={styles.blockLabel}>理念</p>
        <p>{aboutPageSections.philosophy}</p>
      </section>

      <section className={styles.block}>
        <p className={styles.blockLabel}>活動内容</p>
        <p>{aboutPageSections.activities}</p>
      </section>

      <section className={styles.membersSection}>
        <div className={styles.membersHeader}>
          <p className={styles.blockLabel}>メンバー</p>
        </div>
        <div className={styles.memberGrid}>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
