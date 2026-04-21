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
  const [activeCategory, setActiveCategory] = useState('All');

  const menuItems: MenuItem[] = [
    { id: 1, name: 'Espresso', category: 'Coffee', description: 'Rich and bold Italian espresso with perfect crema', price: '¥480', icon: '☕' },
    { id: 2, name: 'Americano', category: 'Coffee', description: 'Smooth espresso diluted with hot water', price: '¥520', icon: '☕' },
    { id: 3, name: 'Cappuccino', category: 'Coffee', description: 'Velvety steamed milk with espresso and foam art', price: '¥580', icon: '🥛' },
    { id: 4, name: 'Latte', category: 'Coffee', description: 'Creamy milk coffee with smooth espresso base', price: '¥580', icon: '🥛' },
    { id: 5, name: 'Mocha', category: 'Coffee', description: 'Rich chocolate blended with espresso and milk', price: '¥620', icon: '🍫' },
    { id: 6, name: 'Croissant', category: 'Dessert', description: 'Buttery, flaky French croissant baked fresh daily', price: '¥420', icon: '🥐' },
    { id: 7, name: 'Chocolate Cake', category: 'Dessert', description: 'Decadent dark chocolate layered cake', price: '¥680', icon: '🍰' },
    { id: 8, name: 'Tiramisu', category: 'Dessert', description: 'Classic Italian coffee-flavored dessert', price: '¥720', icon: '🍰' },
    { id: 9, name: 'Cherry Blossom Latte', category: 'Seasonal', description: 'Spring special with sakura flavor and pink foam', price: '¥680', icon: '🌸' },
  ];

  const categories = ['All', 'Coffee', 'Dessert', 'Seasonal'];

  const filteredItems = activeCategory === 'All'
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
          <h1>Our Menu</h1>
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
