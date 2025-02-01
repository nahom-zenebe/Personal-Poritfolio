import React from 'react';
import { FaGithub, FaCloud } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaAws } from 'react-icons/fa';
import service1 from '../images/service1.webp'; // Custom image import
import service2 from '../images/service2.webp'; // Custom image import
import service3 from '../images/service3.webp'; // Custom image import

function Portfolio() {
  const projects = [
    {
      title: 'E-Learning Platform',
      description: 'A platform designed to make education accessible to underserved communities.',
      imageSrc: service1,
      technologies: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Node.js', icon: <FaNodeJs size={24} /> },
        { name: 'MongoDB', icon: <FaDatabase size={24} /> },
      ],
      githubLink: 'https://github.com/username/elearning-platform',
      liveDemoLink: 'https://live-demo-link.com',
    },
    {
      title: 'Task Manager',
      description: 'A simple app to manage tasks and improve productivity.',
      imageSrc: service2,
      technologies: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Firebase', icon: <FaCloud size={24} /> },
      ],
      githubLink: 'https://github.com/username/task-manager',
      liveDemoLink: 'https://task-manager-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal website to showcase projects and skills.',
      imageSrc: service3,
      technologies: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Tailwind CSS', icon: <FaCss3Alt size={24} /> },
        { name: 'HTML5', icon: <FaHtml5 size={24} /> },
      ],
      githubLink: 'https://github.com/username/portfolio',
      liveDemoLink: 'https://portfolio-link.com',
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app using real-time data.',
      imageSrc: service1,
      technologies: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'OpenWeatherMap API', icon: <FaAws size={24} /> },
      ],
      githubLink: 'https://github.com/username/weather-app',
      liveDemoLink: 'https://weather-app-demo.com',
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-2xl mb-8">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            {/* Header Section */}
            <header className="text-center mb-4">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h2>
              <p className="text-lg text-gray-300">{project.description}</p>
            </header>

            {/* Image Section */}
            <div className="relative mb-4">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200'; // Fallback image
                }}
              />
            </div>

            {/* Technology Icons */}
            <div className="flex justify-center gap-4 mb-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex justify-center items-center bg-gray-700 p-3 rounded-full transition-transform duration-300 transform hover:scale-110"
                  aria-label={tech.name}
                >
                  {tech.icon}
                </div>
              ))}
            </div>

            {/* Links Section */}
            <div className="flex justify-between items-center mb-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-all duration-300 text-sm font-medium"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-all duration-300 text-sm font-medium"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
