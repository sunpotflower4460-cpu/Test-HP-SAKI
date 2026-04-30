import { motion } from 'framer-motion';
import styles from './MemberCard.module.css';
import { MemberItem } from '../data/siteData';

interface MemberCardProps {
  member: MemberItem;
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.avatar}>L</div>
      <div className={styles.body}>
        <h3>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.favorite}>{member.favorite}</p>
      </div>
    </motion.article>
  );
};

export default MemberCard;
