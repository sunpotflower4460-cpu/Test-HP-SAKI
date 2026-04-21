import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.css';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  icon: string;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('すべて');

  const menuItems: MenuItem[] = [
    { id: 1, name: 'エスプレッソ', category: 'コーヒー', description: '深いコクと芳醇な香りが特徴の本格イタリアンエスプレッソ', price: '¥480', icon: '☕' },
    { id: 2, name: 'アメリカーノ', category: 'コーヒー', description: 'エスプレッソにお湯を加えた、すっきりとした味わい', price: '¥520', icon: '☕' },
    { id: 3, name: 'カプチーノ', category: 'コーヒー', description: 'なめらかなスチームミルクとエスプレッソのハーモニー', price: '¥580', icon: '🥛' },
    { id: 4, name: 'カフェラテ', category: 'コーヒー', description: 'クリーミーなミルクとエスプレッソの優しい味わい', price: '¥580', icon: '🥛' },
    { id: 5, name: 'カフェモカ', category: 'コーヒー', description: '濃厚なチョコレートとエスプレッソの贅沢な組み合わせ', price: '¥620', icon: '🍫' },
    { id: 6, name: 'クロワッサン', category: 'デザート', description: 'バターの風味豊かな、毎朝焼き上げる自家製クロワッサン', price: '¥420', icon: '🥐' },
    { id: 7, name: 'チョコレートケーキ', category: 'デザート', description: '濃厚なダークチョコレートの層が織りなす贅沢なケーキ', price: '¥680', icon: '🍰' },
    { id: 8, name: 'ティラミス', category: 'デザート', description: 'イタリアの伝統的なコーヒー風味のデザート', price: '¥720', icon: '🍰' },
    { id: 9, name: '桜ラテ', category: '季節限定', description: '春の訪れを感じる、桜フレーバーとピンクのフォームが美しい特別な一杯', price: '¥680', icon: '🌸' },
  ];

  const categories = ['すべて', 'コーヒー', 'デザート', '季節限定'];

  const filteredItems = activeCategory === 'すべて'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: 0.4 }
  };

  return (
    <div className={styles['menu-page']}>
      <div className="container">
        <motion.div
          className={styles['menu-header']}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>メニュー</h1>
          <p className="section-subtitle">Crafted with Passion, Served with Love</p>
        </motion.div>

        <motion.div
          className={styles['category-filters']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles['filter-btn']} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={styles['menu-grid']}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className={styles['menu-item']}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                layout
              >
                <div className={styles['menu-item-image']}>
                  {item.icon}
                </div>
                <div className={styles['menu-item-content']}>
                  <p className={styles['menu-item-category']}>{item.category}</p>
                  <h3 className={styles['menu-item-name']}>{item.name}</h3>
                  <p className={styles['menu-item-description']}>{item.description}</p>
                  <div className={styles['menu-item-footer']}>
                    <span className={styles['menu-item-price']}>{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;
