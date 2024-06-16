import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300"
        >
          Showcasing my skills and projects as a web developer.
        </motion.p>
      </div>
    </header>
  );
};

export default Header;