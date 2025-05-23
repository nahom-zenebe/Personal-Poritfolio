import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Code, Palette, Smartphone, Globe, Monitor, Terminal } from 'lucide-react';
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import service1 from '../images/service1.webp'
import service2 from '../images/service2.webp'
import service3 from '../images/service3.webp'



function ServicePage() {
  const topListRef = useRef(null); 
  const bottomListRef = useRef(null); 
  const [selectedService, setSelectedService] = useState(null); 

  useEffect(() => {
    const topList = topListRef.current;
    const bottomList = bottomListRef.current;
    const topListWidth = topList.scrollWidth;
    const bottomListWidth = bottomList.scrollWidth;

    const topClone = topList.innerHTML;
    const bottomClone = bottomList.innerHTML;
    topList.innerHTML += topClone;
    bottomList.innerHTML += bottomClone;

    gsap.to(topList, {
      x: -topListWidth,
      duration: 40,
      ease: 'linear',
      repeat: -1,
      onRepeat: () => {
        gsap.set(topList, { x: 0 });
      },
    });

    gsap.to(bottomList, {
      x: -bottomListWidth,
      duration: 45, // Make the second row duration slightly longer to create a lag
      ease: 'linear',
      repeat: -1,
      onRepeat: () => {
        gsap.set(bottomList, { x: 0 });
      },
    });
  }, []);

  // Handle service click
  const handleServiceClick = (index) => {
    if (selectedService === index) {
      // If the same service is clicked again, reset the state
      setSelectedService(null);
    } else {
      // Otherwise, set the clicked service as selected
      setSelectedService(index);
    }
  };

  return (
    <div className='bg-gray-700 '>
 <div className="bg-gradient-to-b  from-gray-500 via-gray-400 to-gray-600 min-h-screen text-gray-100 flex flex-col items-center justify-center py-20 rounded-b-3xl">
  <h1 className="text-5xl  font-extrabold text-white mb-16">Our Services</h1>

  <div className="grid mb-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl px-4">
 
    <div
      className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
        selectedService === 0 ? 'transform scale-110 z-10' : selectedService !== null ? 'opacity-50 grayscale transform scale-90' : ''
      }`}
      onClick={() => handleServiceClick(0)}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-40 mb-6 overflow-hidden rounded-t-2xl">
          <img src={service1} alt="Web Development" className="object-cover w-full h-full" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Development</h3>
        <p className="text-gray-600 text-center">
          Build dynamic, interactive, and scalable websites using the latest technologies like JavaScript and React.
          Tech Stack: React.js, Next.js, Node.js, Express.js, MongoDB, SQL, Firebase, Tailwind CSS
        </p>
      </div>
    </div>


    <div
      className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
        selectedService === 1 ? 'transform scale-110 z-10' : selectedService !== null ? 'opacity-50 grayscale transform scale-90' : ''
      }`}
      onClick={() => handleServiceClick(1)}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-40 mb-6 overflow-hidden rounded-t-2xl">
          <img src={service1} alt="Web Design" className="object-cover w-full h-full" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Design</h3>
        <p className="text-gray-600 text-center">
          Create visually stunning and user-friendly website layouts, designs, and interfaces with a focus on usability.
          Tech stack: Figma
        </p>
      </div>
    </div>

 
    <div
      className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
        selectedService === 2 ? 'transform scale-110 z-10' : selectedService !== null ? 'opacity-50 grayscale transform scale-90' : ''
      }`}
      onClick={() => handleServiceClick(2)}
    >
      <div className="flex mb-10 flex-col items-center justify-center">
        <div className="w-full  mb-6 h-40  overflow-hidden rounded-t-2xl">
          <img src={service2} alt="App Development" className="object-cover w-full h-full" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">App Development</h3>
        <p className="text-gray-600 text-center">
          Create mobile applications for Android and iOS, providing seamless experiences across devices and platforms.
          Tech Stack: Flutter (Dart), Firebase, Node.js, Express.js, MongoDB, REST APIs
        </p>
      </div>
    </div>

   
    <div
      className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
        selectedService === 3 ? 'transform scale-110 z-10' : selectedService !== null ? 'opacity-50 grayscale transform scale-90' : ''
      }`}
      onClick={() => handleServiceClick(3)}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-40 mb-6 overflow-hidden rounded-t-2xl">
          <img src={service3} alt="Frontend Development" className="object-cover w-full h-full" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Frontend Development</h3>
        <p className="text-gray-600 text-center">
          Creating visually stunning, user-friendly, and high-performance interfaces that engage users and enhance their experience.
          Tech stack: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Redux, TypeScript
        </p>
      </div>
    </div>

 
    <div
      className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
        selectedService === 4 ? 'transform scale-110 z-10' : selectedService !== null ? 'opacity-50 grayscale transform scale-90' : ''
      }`}
      onClick={() => handleServiceClick(4)}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-40 mb-6 overflow-hidden rounded-t-2xl">
          <img src={service3} alt="Backend Development" className="object-cover w-full h-full" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Backend Development</h3>
        <p className="text-gray-600 text-center">
          Crafting robust, secure, and scalable server-side solutions to power modern web applications.
          Tech stack: Node.js, Express.js, Nest.js, MongoDB, SQL, Redis, Firebase
        </p>
      </div>
    </div>
  




      

        
    
      </div>




      <div className="mb-3 overflow-hidden">
        <ul
          ref={topListRef}
          className="flex gap-12 w-max whitespace-nowrap"
        >
          <li className="flex items-center gap-2">
            <SiJavascript className="text-yellow-500" style={{ fontSize: '2rem' }} /> JavaScript
          </li>
          <li className="flex items-center gap-2">
            <SiTypescript className="text-blue-500" style={{ fontSize: '2rem' }} /> TypeScript
          </li>
          <li className="flex items-center gap-2">
            <SiNestjs className="text-red-500" style={{ fontSize: '2rem' }} /> Nest.js
          </li>
          <li className="flex items-center gap-2">
            <FaReact className="text-blue-400" style={{ fontSize: '2rem' }} /> React.js
          </li>
          <li className="flex items-center gap-2">
            <SiNodedotjs className="text-green-500" style={{ fontSize: '2rem' }} /> Node.js
          </li>
          <li className="flex items-center gap-2">
            <FaHtml5 className="text-orange-500" style={{ fontSize: '2rem' }} /> HTML
          </li>
          <li className="flex items-center gap-2">
            <FaCss3Alt className="text-blue-500" style={{ fontSize: '2rem' }} /> CSS
          </li>
          <li className="flex items-center gap-2">
            <FaGithub className="text-gray-800" style={{ fontSize: '2rem' }} /> GitHub
          </li>
          <li className="flex items-center gap-2">
            <FaFigma className="text-purple-500" style={{ fontSize: '2rem' }} /> Figma
          </li>
          <li className="flex items-center gap-2">
            <IoLogoFirebase className="text-yellow-500" style={{ fontSize: '2rem' }} /> Firebase
          </li>
          <li className="flex items-center gap-2">
            <FaPython className="text-blue-500" style={{ fontSize: '2rem' }} /> Python
          </li>
          <li className="flex items-center gap-2">
            <SiNextdotjs className="text-black" style={{ fontSize: '2rem' }} /> Next.js
          </li>
        </ul>
      </div>

      <div className="mb-20 overflow-hidden">
        <ul
          ref={bottomListRef}
          className="flex gap-5 w-max whitespace-nowrap"
        >
          <li className="flex items-center gap-2">
            <SiJavascript className="text-yellow-500" style={{ fontSize: '2rem' }} /> JavaScript
          </li>
          <li className="flex items-center gap-2">
            <SiTypescript className="text-blue-500" style={{ fontSize: '2rem' }} /> TypeScript
          </li>
          <li className="flex items-center gap-2">
            <SiNestjs className="text-red-500" style={{ fontSize: '2rem' }} /> Nest.js
          </li>
          <li className="flex items-center gap-2">
            <FaReact className="text-blue-400" style={{ fontSize: '2rem' }} /> React.js
          </li>
          <li className="flex items-center gap-2">
            <SiNodedotjs className="text-green-500" style={{ fontSize: '2rem' }} /> Node.js
          </li>
          <li className="flex items-center gap-2">
            <FaHtml5 className="text-orange-500" style={{ fontSize: '2rem' }} /> HTML
          </li>
          <li className="flex items-center gap-2">
            <FaCss3Alt className="text-blue-500" style={{ fontSize: '2rem' }} /> CSS
          </li>
          <li className="flex items-center gap-2">
            <FaGithub className="text-gray-800" style={{ fontSize: '2rem' }} /> GitHub
          </li>
          <li className="flex items-center gap-2">
            <FaFigma className="text-purple-500" style={{ fontSize: '2rem' }} /> Figma
          </li>
          <li className="flex items-center gap-2">
            <IoLogoFirebase className="text-yellow-500" style={{ fontSize: '2rem' }} /> Firebase
          </li>
          <li className="flex items-center gap-2">
            <FaPython className="text-blue-500" style={{ fontSize: '2rem' }} /> Python
          </li>
          <li className="flex items-center gap-2">
            <SiNextdotjs className="text-black" style={{ fontSize: '2rem' }} /> Next.js
          </li>
        </ul>
      </div>

      

    </div>
    </div>
  );
}

export default ServicePage;