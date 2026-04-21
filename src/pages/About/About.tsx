import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: '☕',
      title: '品質',
      description: '倫理的な農園から最高品質の豆のみを仕入れ、完璧なロースト処理を施しています。'
    },
    {
      icon: '❤️',
      title: '情熱',
      description: '一杯一杯が、熟練したバリスタの丁寧な仕事と献身によって作られています。'
    },
    {
      icon: '🌍',
      title: '持続可能性',
      description: '環境への責任と地域コミュニティの支援に、誠実に取り組んでいます。'
    },
    {
      icon: '🏡',
      title: 'コミュニティ',
      description: '私たちのカフェは、人々がつながり、語り合うための温かな場所です。'
    },
  ];

  return (
    <div className={styles['about-page']}>
      <motion.section
        className={styles['about-hero']}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Maison du Caféについて</h1>
          <p className={styles['about-hero-text']}>
            単なるカフェではありません。私たちは、コーヒーの芸術と儀式を愛する人々のための特別な場所です。
            私たちの物語は、情熱と品質、そしてコミュニティへの想いから始まりました。
          </p>
        </div>
      </motion.section>

      <section className={`${styles['about-section']}`}>
        <div className="container">
          <motion.div className={styles['about-content']} {...fadeInUp}>
            <div className={styles['about-image']}>
              📖
            </div>
            <div className={styles['about-text']}>
              <h2>私たちのストーリー</h2>
              <p>
                Maison du Caféは、シンプルな夢から生まれました。コーヒーが芸術として讃えられ、
                すべてのお客様が心から寛げる空間を作りたい。そんな想いから、2020年に創業しました。
                小さな街のカフェから始まり、今ではコーヒー愛好家たちに愛される場所へと成長しています。
              </p>
              <p>
                創業者たちは世界中を旅し、マスターロースターやバリスタから学びを得ました。
                持ち帰ったのは技術だけではありません。それは一つの哲学です。
                素晴らしいコーヒーは、敬意から始まる。豆への敬意、農家への敬意、職人技への敬意、そしてお客様への敬意。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`${styles['about-section']}`}>
        <div className="container">
          <motion.div className={`${styles['about-content']} ${styles.reverse}`} {...fadeInUp}>
            <div className={styles['about-image']}>
              🏠
            </div>
            <div className={styles['about-text']}>
              <h2>私たちの空間</h2>
              <p>
                Maison du Caféに足を踏み入れると、モダンな優雅さと温かなおもてなしが融合した雰囲気に包まれます。
                大きな窓から差し込む自然光が、丁寧に選ばれたインテリアを照らし、ゆっくりと過ごしたくなる空間を作り出しています。
              </p>
              <p>
                手作りの家具から厳選された音楽まで、すべての細部が、賑やかな街の喧騒から離れた安らぎの場を生み出すようデザインされています。
                クイックなエスプレッソでも、のんびりとした午後のひとときでも、あなたの理想の場所が見つかるでしょう。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`${styles['about-section']}`}>
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }} {...fadeInUp}>
            <h2 className="section-title">私たちの価値観</h2>
            <p className="section-subtitle">What Drives Us Every Day</p>
          </motion.div>

          <div className={styles['values-grid']}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles['value-card']}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={styles['value-icon']}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
