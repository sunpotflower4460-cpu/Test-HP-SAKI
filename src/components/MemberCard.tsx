import { useState, useEffect } from 'react';
import styles from './MemberCard.module.css';
import { MemberItem } from '../data/siteData';

interface MemberCardProps {
  member: MemberItem;
}

const MemberCard = ({ member }: MemberCardProps) => {
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
    <article className={styles.card}>
      <div
        className={styles.avatar}
        role="img"
        aria-label={`${member.name} のプロフィール画像`}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 12, 21, 0.22), rgba(8, 12, 21, 0.74)), url(${imgSrc})`,
          backgroundPosition: member.imagePosition ?? 'center',
        }}
      >
        <img
          src={imgSrc}
          alt=""
          aria-hidden={true}
          style={{ display: 'none' }}
          onError={handleImgError}
        />
      </div>
      <div className={styles.body}>
        <h3>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.favorite}>{member.favorite}</p>
      </div>
    </article>
  );
};

export default MemberCard;
