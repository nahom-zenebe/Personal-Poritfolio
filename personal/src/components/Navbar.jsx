import React, { useState } from 'react';
import Homepage from "../pages/Homepage";
import Projectpage from "../pages/Projectpage"
import Aboutpage from "../pages/Projectpage"
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const handleLinkClick = (section, index) => {
    setActiveLink(section);
    setIndicatorPosition(index);
  
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID ${section} not found.`);
    }
  };

  return (
    <div className="flex justify-center py-10 bg-gradient-to-r from-blue-900 via-white-200 to-blue-600">
      <div className="relative px-10 h-16 bg-gray-800 rounded-full shadow-lg">
        <ul className="flex items-center justify-between w-full h-full px-4">
          <li
            onClick={() => handleLinkClick('home', 0)}
            className={`relative cursor-pointer ml-5 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-700 ${activeLink === 'home' ? 'text-blue-500' : ''}`}
          >
          <Link to='/'> Home</Link>
          </li>
          <li
            onClick={() => handleLinkClick('project', 1)}
            className={`relative cursor-pointer text-white ml-5 font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-700 ${activeLink === 'project' ? 'text-blue-500' : ''}`}
          >
    <Link to='/About'> About</Link>
          </li>
          <li
            onClick={() => handleLinkClick('service', 2)}
            className={`relative cursor-pointer text-white ml-5 font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-700 ${activeLink === 'service' ? 'text-blue-500' : ''}`}
          >
     <Link to='/Project'> Project</Link>
          </li>
          <li
            onClick={() => handleLinkClick('about', 3)}
            className={`relative cursor-pointer text-white ml-5 font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-700 ${activeLink === 'about' ? 'text-blue-500' : ''}`}
          >
         <Link to='/service'> Service</Link>
          </li>
        </ul>

        <div
          className="absolute bottom-2 left-0 border-2 border-blue-500 w-32 h-12 rounded-full transition-all ml-12 duration-500"
          style={{
            transform: `translateX(${indicatorPosition * 120}px)`, 
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
