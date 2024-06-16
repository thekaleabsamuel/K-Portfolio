import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-white">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-white transition-colors duration-300" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-white transition-colors duration-300" size={24} />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-white transition-colors duration-300" size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;