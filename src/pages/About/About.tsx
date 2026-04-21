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
      title: 'Quality',
      description: 'We source only the finest beans from ethical farms and roast them to perfection.'
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'Every cup is crafted with care and dedication by our skilled baristas.'
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'We are committed to environmental responsibility and supporting local communities.'
    },
    {
      icon: '🏡',
      title: 'Community',
      description: 'Our café is a warm gathering place for connection and conversation.'
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
          <h1>About Maison du Café</h1>
          <p className={styles['about-hero-text']}>
            More than just a café, we are a destination for those who appreciate
            the art and ritual of exceptional coffee. Our story is one of passion,
            quality, and community.
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
              <h2>Our Story</h2>
              <p>
                Maison du Café was born from a simple dream: to create a space where
                coffee is celebrated as an art form and every guest feels at home.
                Founded in 2020, we have grown from a small neighborhood café into
                a beloved destination for coffee enthusiasts.
              </p>
              <p>
                Our founders traveled extensively, learning from master roasters and
                baristas across the globe. They brought back not just techniques,
                but a philosophy—that great coffee starts with respect: respect for
                the bean, the farmer, the craft, and the customer.
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
              <h2>Our Space</h2>
              <p>
                Step into Maison du Café and you'll find an atmosphere that blends
                modern elegance with warm hospitality. Natural light floods through
                large windows, illuminating carefully curated interiors that invite
                you to linger.
              </p>
              <p>
                Every detail, from the handcrafted furniture to the carefully selected
                music, is designed to create a sanctuary from the bustling city outside.
                Whether you're here for a quick espresso or a leisurely afternoon,
                you'll find your perfect spot.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`${styles['about-section']}`}>
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }} {...fadeInUp}>
            <h2 className="section-title">Our Values</h2>
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
