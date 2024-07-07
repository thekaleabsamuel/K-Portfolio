import React from 'react';
import { motion } from 'framer-motion';

// ProjectCard component
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          {project.description}
        </p>
        
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        <a>
          View Project
        </a>
      </div>
    </motion.div>
  );
};

// Projects component
const Projects = () => {
  // Array of project data
  const projects = [
    {
      name: "Lemans 5000",
      description: "This is a brief description of Project 1. It showcases my skills in React and TailwindCSS.",
      image: "https://via.placeholder.com/400x200?text=Project+1",
      link: "#"
    },
    {
      name: "L0vefrequency.com",
      description: "Project 2 is an e-commerce platform built with Next.js and GraphQL.",
      image: "https://via.placeholder.com/400x200?text=Project+2",
      link: "#"
    },
    {
      name: "TaylorToThe.Com",
      description: "A mobile app developed using React Native for both iOS and Android platforms.",
      image: "https://via.placeholder.com/400x200?text=Project+3",
      link: "#"
    },
    {
      name: "ThriveOnADime",
      description: "A mobile app developed using React Native for both iOS and Android platforms.",
      image: "https://via.placeholder.com/400x200?text=Project+3",
      link: "#"
    }
    // Add more projects as needed
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;