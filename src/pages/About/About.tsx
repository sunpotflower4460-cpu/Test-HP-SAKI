import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MemberCard from '../../components/MemberCard';
import styles from './About.module.css';
import { aboutPageSections, members } from '../../data/siteData';

const About = () => {
  return (
    <div className={`container ${styles.page}`}>
      <Link to="/" className={styles.backLink}>← Homeへ戻る</Link>

      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className={styles.label}>About us</p>
        <h1>世界観を編み、余韻を残す制作サークル。</h1>
      </motion.section>

      <motion.section
        className={styles.block}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className={styles.blockLabel}>理念</p>
        <p>{aboutPageSections.philosophy}</p>
      </motion.section>

      <motion.section
        className={styles.block}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className={styles.blockLabel}>活動内容</p>
        <p>{aboutPageSections.activities}</p>
      </motion.section>

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
