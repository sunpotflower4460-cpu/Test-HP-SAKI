import { motion } from 'framer-motion';
import styles from './News.module.css';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  icon: string;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: '2024.04.15',
      title: 'Spring Seasonal Menu Now Available',
      excerpt: 'Discover our new cherry blossom inspired drinks and desserts. Experience the delicate flavors of spring with our limited-time offerings, crafted to celebrate the season.',
      icon: '🌸'
    },
    {
      id: 2,
      date: '2024.04.08',
      title: 'Extended Hours on Weekends',
      excerpt: 'We are now open until 21:00 on Saturdays and Sundays to serve you better. Enjoy your favorite coffee and treats late into the evening.',
      icon: '⏰'
    },
    {
      id: 3,
      date: '2024.04.01',
      title: 'New Coffee Bean Collection',
      excerpt: 'Introducing single-origin beans from Ethiopia and Colombia. Each coffee tells a unique story of its terroir and the farmers who cultivate it with care.',
      icon: '☕'
    },
    {
      id: 4,
      date: '2024.03.25',
      title: 'Barista Workshop This Weekend',
      excerpt: 'Learn the art of coffee making from our expert baristas. Join us for a hands-on workshop covering espresso extraction, milk steaming, and latte art.',
      icon: '👨‍🍳'
    },
    {
      id: 5,
      date: '2024.03.18',
      title: 'Sustainability Initiative Launch',
      excerpt: 'We are proud to announce our new eco-friendly packaging and commitment to reducing waste. Together, we can make a difference for our planet.',
      icon: '🌱'
    },
    {
      id: 6,
      date: '2024.03.10',
      title: 'Music Evening Series Begins',
      excerpt: 'Join us every Friday evening for live acoustic performances. Enjoy great music with your favorite coffee in our cozy atmosphere.',
      icon: '🎵'
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className={styles['news-page']}>
      <div className="container">
        <motion.div
          className={styles['news-header']}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>News & Updates</h1>
          <p className="section-subtitle">Stay Connected with Our Latest Stories</p>
        </motion.div>

        <div className={styles['news-list']}>
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              className={styles['news-article']}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className={styles['news-article-image']}>
                {item.icon}
              </div>
              <div className={styles['news-article-content']}>
                <p className={styles['news-article-date']}>{item.date}</p>
                <h2 className={styles['news-article-title']}>{item.title}</h2>
                <p className={styles['news-article-excerpt']}>{item.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
