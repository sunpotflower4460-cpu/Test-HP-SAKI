import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MemberCard from '../../components/MemberCard';
import styles from './About.module.css';
import { aboutPageSections, members, siteInfo } from '../../data/siteData';

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
};

const About = () => {
  return (
    <div className={`container ${styles.page}`}>
      <Link to="/" className="backLink">◀ 戻る</Link>

      <motion.section
        className={styles.hero}
        initial={sectionMotion.initial}
        animate={sectionMotion.whileInView}
        transition={{ duration: 0.45 }}
      >
        <p className={styles.label}>About us</p>
        <h1>{siteInfo.name}</h1>
        <p className={styles.description}>{siteInfo.description}</p>
      </motion.section>

      <motion.section className={styles.block} {...sectionMotion}>
        <p className={styles.blockLabel}>理念</p>
        <h2>{aboutPageSections.philosophyTitle}</h2>
        <p>{aboutPageSections.philosophy}</p>
      </motion.section>

      <motion.section className={styles.block} {...sectionMotion}>
        <p className={styles.blockLabel}>活動内容</p>
        <h2>{aboutPageSections.activitiesTitle}</h2>
        <p>{aboutPageSections.activities}</p>
      </motion.section>

      <motion.section className={styles.membersSection} {...sectionMotion}>
        <div className={styles.membersHeader}>
          <p className={styles.blockLabel}>メンバー</p>
          <h2>制作を支える4人</h2>
        </div>
        <div className={styles.memberGrid}>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
