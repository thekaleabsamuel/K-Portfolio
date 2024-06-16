import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-white font-bold text-xl">
            Your Portfolio
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="flex space-x-6">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-300 hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;