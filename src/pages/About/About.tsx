import { Link } from 'react-router-dom';
import MemberCard from '../../components/MemberCard';
import styles from './About.module.css';
import { aboutPageSections, members } from '../../data/siteData';

const About = () => {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.hero}>
        <Link to="/" className="backLink">
          ◀ 戻る
        </Link>
        <h1 className={styles.pageTitle}>About us</h1>
      </section>

      <section className={styles.block}>
        <h2 className={styles.sectionTitle}>理念</h2>
        <p>{aboutPageSections.philosophy}</p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.sectionTitle}>活動内容</h2>
        <p>{aboutPageSections.activities}</p>
      </section>

      <section className={styles.membersSection}>
        <div className={styles.membersHeader}>
          <h2 className={styles.sectionTitle}>メンバー</h2>
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
