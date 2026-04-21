import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const featuredItems = [
    { id: 1, name: 'Espresso', description: 'Rich and bold Italian espresso with a perfect crema', price: '¥480', icon: '☕' },
    { id: 2, name: 'Cappuccino', description: 'Velvety steamed milk with espresso and foam art', price: '¥580', icon: '🥛' },
    { id: 3, name: 'Croissant', description: 'Buttery, flaky French croissant baked fresh daily', price: '¥420', icon: '🥐' },
  ];

  const newsItems = [
    { id: 1, date: '2024.04.15', title: 'Spring Seasonal Menu Now Available', excerpt: 'Discover our new cherry blossom inspired drinks and desserts.', icon: '📰' },
    { id: 2, date: '2024.04.08', title: 'Extended Hours on Weekends', excerpt: 'We are now open until 21:00 on Saturdays and Sundays.', icon: '📰' },
    { id: 3, date: '2024.04.01', title: 'New Coffee Bean Collection', excerpt: 'Introducing single-origin beans from Ethiopia and Colombia.', icon: '📰' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial="initial"
        animate="whileInView"
        variants={staggerContainer}
      >
        <div className={`${styles['hero-bg-circle']} ${styles['circle-1']}`}></div>
        <div className={`${styles['hero-bg-circle']} ${styles['circle-2']}`}></div>

        <div className={styles['hero-content']}>
          <motion.p
            className={styles['hero-subtitle']}
            variants={fadeInUp}
          >
            Premium Coffee Experience
          </motion.p>
          <motion.h1
            className={styles['hero-title']}
            variants={fadeInUp}
          >
            Maison du Café
          </motion.h1>
          <motion.p
            className={styles['hero-description']}
            variants={fadeInUp}
          >
            Where every cup tells a story of passion, craftsmanship, and the finest beans from around the world.
          </motion.p>
          <motion.div
            className={styles['hero-buttons']}
            variants={fadeInUp}
          >
            <Link to="/menu" className="btn btn-primary">
              Explore Menu
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Visit Us
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Concept Section */}
      <section className={`${styles.concept} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">Our Concept</h2>
            <p className="section-subtitle">The Art of Coffee</p>
          </motion.div>
          <motion.div className={styles['concept-content']} {...fadeInUp}>
            <p className={styles['concept-text']}>
              At Maison du Café, we believe that coffee is more than just a beverage—it's an experience.
              Each cup is carefully crafted by our skilled baristas using premium beans sourced from the world's finest estates.
              We combine traditional techniques with modern innovation to create moments of pure enjoyment.
            </p>
            <p className={styles['concept-text']}>
              Our commitment to quality extends beyond the cup. From the ambiance of our space to the warmth of our service,
              every detail is designed to provide you with a memorable coffee experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className={`${styles['featured-menu']} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">Featured Menu</h2>
            <p className="section-subtitle">Our Most Loved Selections</p>
          </motion.div>
          <motion.div
            className={styles['menu-grid']}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {featuredItems.map((item) => (
              <motion.div
                key={item.id}
                className={styles['menu-card']}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles['menu-card-image']}>
                  {item.icon}
                </div>
                <div className={styles['menu-card-content']}>
                  <h3 className={styles['menu-card-title']}>{item.name}</h3>
                  <p className={styles['menu-card-description']}>{item.description}</p>
                  <p className={styles['menu-card-price']}>{item.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div style={{ textAlign: 'center', marginTop: '3rem' }} {...fadeInUp}>
            <Link to="/menu" className="btn btn-primary">
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* News Preview Section */}
      <section className={`${styles['news-preview']} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">Latest News</h2>
            <p className="section-subtitle">Stay Updated with Our Stories</p>
          </motion.div>
          <motion.div
            className={styles['news-grid']}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {newsItems.map((item) => (
              <motion.div
                key={item.id}
                className={styles['news-card']}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles['news-card-image']}>
                  {item.icon}
                </div>
                <div className={styles['news-card-content']}>
                  <p className={styles['news-card-date']}>{item.date}</p>
                  <h3 className={styles['news-card-title']}>{item.title}</h3>
                  <p className={styles['news-card-excerpt']}>{item.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div style={{ textAlign: 'center', marginTop: '3rem' }} {...fadeInUp}>
            <Link to="/news" className="btn btn-outline">
              View All News
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={`${styles['about-preview']} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">Crafted with Passion</p>
          </motion.div>
          <motion.div
            className={styles['about-content']}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles['about-image']} variants={fadeInUp}>
              🏠
            </motion.div>
            <motion.div className={styles['about-text']} variants={fadeInUp}>
              <h3>A Place Where Stories Brew</h3>
              <p>
                Founded with a vision to create more than just a café, Maison du Café is a sanctuary
                for coffee lovers and those seeking a moment of tranquility in their busy lives.
              </p>
              <p>
                Our space reflects our philosophy: elegant yet welcoming, sophisticated yet comfortable.
                Every corner is designed to inspire conversation, creativity, and connection.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Access Preview Section */}
      <section className={`${styles['access-preview']} section`}>
        <div className="container">
          <motion.div {...fadeInUp}>
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">Find Your Way to Great Coffee</p>
          </motion.div>
          <motion.div
            className={styles['access-content']}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles['access-info']} variants={fadeInUp}>
              <h3>Location</h3>
              <p>123 Coffee Street, Shibuya-ku</p>
              <p>Tokyo, Japan 150-0001</p>
              <br />
              <h3>Hours</h3>
              <p>Monday - Friday: 8:00 - 20:00</p>
              <p>Saturday - Sunday: 9:00 - 21:00</p>
              <p>Holidays: 10:00 - 18:00</p>
              <br />
              <h3>Contact</h3>
              <p>Tel: 03-1234-5678</p>
              <p>Email: info@maisoncafe.com</p>
            </motion.div>
            <motion.div className={styles['access-map']} variants={fadeInUp}>
              🗺️
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className={styles['cta-section']} {...fadeInUp}>
        <div className="container">
          <h2>Ready to Experience Excellence?</h2>
          <p>Visit us today and discover your new favorite coffee spot.</p>
          <Link to="/contact" className="btn btn-white">
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
