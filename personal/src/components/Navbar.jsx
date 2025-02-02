import React from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaWrench } from 'react-icons/fa'; 

function Navbar() {
  return (
    <nav className="flex bg-slate-700 justify-center items-center p-4">
   
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg flex space-x-8">

        <a
          href="#home"
          className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
        >
          <FaHome className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="text-lg font-medium">Home</span>
        </a>

    
        <a
          href="#about"
          className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
        >
          <FaInfoCircle className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="text-lg font-medium">About</span>
        </a>


        <a
          href="#projects"
          className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
        >
          <FaBriefcase className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="text-lg font-medium">Projects</span>
        </a>

       
        <a
          href="#services"
          className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
        >
          <FaWrench className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="text-lg font-medium">Services</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;