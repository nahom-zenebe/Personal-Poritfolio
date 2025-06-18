import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiCloudinary, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaNodeJs, FaAws, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import service1 from '../images/service1.webp';
import project1 from '../images/project-1.png';
import project2 from '../images/project-2.png';
import project3 from '../images/Project-3.png';
import project4 from '../images/project-4.jpg';

// ProjectModal and ProjectCard components remain unchanged

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Projects data remains the same (for reference and modal)
  const projects = [
    {
      title: "Prison Management System",
      description: "A comprehensive prison management system for Akaki Federal police prison, featuring inmate tracking, visitor management, and reporting capabilities.",
      image: project1,
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: BiLogoMongodb, name: "MongoDB" },
        { icon: SiCloudinary, name: "Cloudinary" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind CSS" }
      ],
      github: "https://github.com/username/prison-management",
      live: "https://prison-managment-system.vercel.app"
    },
    {
      title: "Inventory Management System",
      description: "An efficient inventory management system with real-time tracking, automated alerts, and comprehensive reporting features.",
      image: project2,
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: BiLogoMongodb, name: "MongoDB" },
        { icon: SiCloudinary, name: "Cloudinary" },
        { icon: FaAws, name: "AWS" }
      ],
      github: "https://github.com/username/inventory-system",
      live: "https://advanced-inventory-management-system.vercel.app/"
    },
    {
      title: "Intellireview research paper",
      description: "Flutter based app that allow user to search,boomark,saved and share research paper",
      image: project3,
      technologies: [
        { icon: FaReact, name: "Flutter" },
        { icon: SiTailwindcss, name: "Dart" },
        { icon: FaCss3Alt, name: "Node" },
        { icon: FaHtml5, name: "Express" }
      ],
      github: "https://github.com/abelfx/IntelliReview_Research_Paper",

    },
    {
      title: "Retail-Sales-Forecasting",
      description: "This project implements an advanced sales forecasting solution for retail stores using a combination of traditional time series methods and modern machine learning approaches",
      image: project4,
      technologies: [
        { icon: FaReact, name: "Python" },
        { icon: FaAws, name: "ML model" },
        { icon: SiTailwindcss, name: "Stream lit" },
        { icon: SiTypescript, name: "LightGBM" }
      ],
      github: "https://github.com/nahom-zenebe/Retail-Sales-Forecasting",
     
    }
  ];

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Hardcoded ProjectCards without .map */}

          <ProjectCard
            project={projects[0]}
            index={0}
            onOpen={setSelectedProject}
          />
          <ProjectCard
            project={projects[1]}
            index={1}
            onOpen={setSelectedProject}
          />
          <ProjectCard
            project={projects[2]}
            index={2}
            onOpen={setSelectedProject}
          />
          <ProjectCard
            project={projects[3]}
            index={3}
            onOpen={setSelectedProject}
          />

        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
// ProjectCard component
const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onOpen(project)}
          className="w-full py-2 bg-blue-600/10 text-blue-400 rounded-lg hover:bg-blue-600/20 transition-colors"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-red-400 hover:bg-gray-800 transition-all duration-300 border border-gray-700/50"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105"
            >
              <FaGithub className="w-5 h-5" />
              View Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
