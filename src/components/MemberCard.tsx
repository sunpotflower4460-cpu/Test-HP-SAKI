import type { CSSProperties } from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './MemberCard.module.css';
import { MemberItem } from '../data/siteData';

interface MemberCardProps {
  member: MemberItem;
}

const MemberCard = ({ member }: MemberCardProps) => {
  const initials = member.name.slice(0, 1);
  const [imgSrc, setImgSrc] = useState(member.image);

  useEffect(() => {
    setImgSrc(member.image);
  }, [member.image]);

  const handleImgError = () => {
    if (imgSrc !== member.fallback) {
      setImgSrc(member.fallback);
    }
  };

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      style={{ '--member-accent': member.accent } as CSSProperties}
    >
      <div
        className={styles.avatar}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 12, 21, 0.22), rgba(8, 12, 21, 0.74)), url(${imgSrc})`,
        }}
      >
        <img
          src={imgSrc}
          alt=""
          aria-hidden={true}
          style={{ display: 'none' }}
          onError={handleImgError}
        />
        <span>{initials}</span>
      </div>
      <div className={styles.body}>
        <h3>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.favorite}>{member.favorite}</p>
      </div>
    </motion.article>
  );
};

export default MemberCard;
