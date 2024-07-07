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
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
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
      name: "The Lemans 24",
      description: "This is a brief description of Project 1. It showcases my skills in React and TailwindCSS.",
      image: "https://i.postimg.cc/jjghJhFJ/Screenshot-2024-07-07-at-1-58-18-AM.png",
      link: "https://www.thelemans24.com/"
    },
    {
      name: "L0vefrequency.com",
      description: "Project 2 is an e-commerce platform built with Next.js and GraphQL.",
      image: "https://i.postimg.cc/tJPdwGCh/Screenshot-2024-07-07-at-1-59-54-AM.png",
      link: "#"
    },
    {
      name: "TaylorToThe.Com",
      description: "A mobile app developed using React Native for both iOS and Android platforms.",
      image: "https://i.postimg.cc/bNxHRP5P/Screenshot-2024-07-07-at-2-01-07-AM.png",
      link: "#"
    },
    {
      name: "ThriveOnADime",
      description: "A mobile app developed using React Native for both iOS and Android platforms.",
      image: "https://i.postimg.cc/bvWthV5L/Screenshot-2024-07-07-at-2-06-30-AM.png",
      link: ""
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