import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I am a passionate web developer with a deep love for creating beautiful and functional websites. With a strong background in React, TailwindCSS, and other modern web technologies, I strive to deliver high-quality solutions that meet the needs of my clients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My goal is to continuously learn and grow, staying up-to-date with the latest trends and best practices in web development. I value collaboration, communication, and a user-centric approach to design and development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;