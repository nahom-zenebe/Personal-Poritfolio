import React from 'react';
import { FaGithub, FaCloud, FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaAws } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiCloudinary } from 'react-icons/si';
import service1 from '../images/service1.webp';
import project1 from '../images/project-1.png';
import project2 from '../images/project-2.png';

function Portfolio() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-2xl mb-8">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <ProjectCard
          title="Prison Management System"
          description="Prison Management system for Akaki Federal police prison"
          image={project1}
          technologies={[
            { icon: <FaReact size={24} />, name: 'React' },
            { icon: <FaNodeJs size={24} />, name: 'Node.js' },
            { icon: <BiLogoMongodb size={24} />, name: 'MongoDB' },
            { icon: <SiCloudinary size={24} />, name: 'Cloudinary' },
          ]}
          github="https://github.com/username/elearning-platform"
          live="https://live-demo-link.com"
        />

        {/* Project 2 */}
        <ProjectCard
          title="Inventory Management System"
          description="Inventory Management System to help you manage your products"
          image={project2}
          technologies={[
            { icon: <FaReact size={24} />, name: 'React' },
            { icon: <FaNodeJs size={24} />, name: 'Node.js' },
            { icon: <BiLogoMongodb size={24} />, name: 'MongoDB' },
            { icon: <SiCloudinary size={24} />, name: 'Cloudinary' },
          ]}
          github="https://github.com/username/task-manager"
          live="https://task-manager-demo.com"
        />

        {/* Project 3 */}
        <ProjectCard
          title="Portfolio Website"
          description="A personal website to showcase projects and skills."
          image={service1}
          technologies={[
            { icon: <FaReact size={24} />, name: 'React' },
            { icon: <FaCss3Alt size={24} />, name: 'Tailwind CSS' },
            { icon: <FaHtml5 size={24} />, name: 'HTML5' },
          ]}
          github="https://github.com/username/portfolio"
          live="https://portfolio-link.com"
        />

        {/* Project 4 */}
        <ProjectCard
          title="Weather App"
          description="A weather forecasting app using real-time data."
          image={service1}
          technologies={[
            { icon: <FaReact size={24} />, name: 'React' },
            { icon: <FaAws size={24} />, name: 'OpenWeather API' },
          ]}
          github="https://github.com/username/weather-app"
          live="https://weather-app-demo.com"
        />
      </div>
    </div>
  );
}

const ProjectCard = ({ title, description, image, technologies, github, live }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-700">
    <header className="text-center mb-4">
      <h2 className="text-2xl font-bold text-blue-400 mb-2">{title}</h2>
      <p className="text-lg text-gray-300">{description}</p>
    </header>

    <div className="relative mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x200';
        }}
      />
    </div>

    <div className="flex justify-center gap-4 mb-4 flex-wrap">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-20 p-3 bg-gray-700 rounded-full hover:scale-110 transition-transform duration-300"
        >
          {tech.icon}
          <span className="text-xs mt-1">{tech.name}</span>
        </div>
      ))}
    </div>

    <div className="flex justify-between items-center mb-2">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-500 hover:text-blue-400 text-sm font-medium"
      >
        <FaGithub className="mr-2" />
        GitHub
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-500 hover:text-blue-400 text-sm font-medium"
      >
        Live Demo
      </a>
    </div>
  </div>
);

export default Portfolio;
