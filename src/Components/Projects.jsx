import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Render project cards here */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project Thumbnail"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A brief description of the project goes here.
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;