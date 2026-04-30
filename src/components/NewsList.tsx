import { motion } from 'framer-motion';
import styles from './NewsList.module.css';
import { NewsItem } from '../data/siteData';

interface NewsListProps {
  items: NewsItem[];
  limit?: number;
}

const NewsList = ({ items, limit }: NewsListProps) => {
  const sortedItems = [...items].sort((a, b) => b.date.localeCompare(a.date));
  const visibleItems = typeof limit === 'number' ? sortedItems.slice(0, limit) : sortedItems;

  return (
    <div className={styles.list}>
      {visibleItems.map((item, index) => (
        <motion.article
          key={item.id}
          className={styles.item}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
        >
          <div className={styles.meta}>
            <time>{item.date}</time>
            {item.label ? <span className={styles.badge}>{item.label}</span> : null}
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{item.title}</p>
            {item.body ? <p className={styles.body}>{item.body}</p> : null}
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default NewsList;
