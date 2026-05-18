import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MemberCard from '../../components/MemberCard';
import styles from './About.module.css';
import { aboutPageSections, members, siteInfo } from '../../data/siteData';

const About = () => {
  return (
    <div className={`container ${styles.page}`}>
      <Link to="/" className="backLink">◀ 戻る</Link>

      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className={styles.label}>About us</p>
        <h1>{siteInfo.name}</h1>
        <p className={styles.description}>{siteInfo.description}</p>
      </motion.section>

      <section className={styles.block}>
        <p className={styles.blockLabel}>理念</p>
        <h2>{aboutPageSections.philosophyTitle}</h2>
        <p>{aboutPageSections.philosophy}</p>
      </section>

      <section className={styles.block}>
        <p className={styles.blockLabel}>活動内容</p>
        <h2>{aboutPageSections.activitiesTitle}</h2>
        <p>{aboutPageSections.activities}</p>
      </section>

      <section className={styles.membersSection}>
        <div className={styles.membersHeader}>
          <p className={styles.blockLabel}>メンバー</p>
          <h2>制作を支える4人</h2>
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
