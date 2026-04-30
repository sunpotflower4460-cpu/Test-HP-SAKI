import { motion } from 'framer-motion';
import styles from './NewsList.module.css';
import { NewsItem } from '../data/siteData';

interface NewsListProps {
  items: NewsItem[];
}

const NewsList = ({ items }: NewsListProps) => {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
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
            {item.isNew ? <span className={styles.badge}>NEW</span> : null}
          </div>
          <p className={styles.title}>{item.title}</p>
        </motion.article>
      ))}
    </div>
  );
};

export default NewsList;
