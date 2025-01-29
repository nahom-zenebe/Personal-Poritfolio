import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import project1 from '../images/1.avif'
import project2 from '../images/2.avif'
import project3 from '../images/3.avif'
import project4 from '../images/4.avif'
import project5 from '../images/5.avif'
import project6 from '../images/6.avif'
import { Plus, Github, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Projectpage() {
  useEffect(() => {
    gsap.utils.toArray('.project-card').forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-100 flex flex-col items-center justify-center py-20">
      <h1 className="text-5xl font-extrabold text-white mb-10">My Projects</h1>

      <div className="projects-container w-full overflow-hidden">
        <div className="grid grid-cols-3 ml-16 gap-16 items-center">
          {[project1, project2, project3, project4, project5].map((project, index) => (
            <div key={index} className="project-card bg-gray-800 w-96 rounded-lg overflow-hidden shadow-2xl relative group">
              <img src={project} className="project-image w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <a href="#" className="mx-3 text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all">
                  <Github size={24} />
                </a>
                <a href="#" className="mx-3 text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all">
                  <Eye size={24} />
                </a>
              </div>
            </div>
          ))}

          <div className="bg-white flex justify-center items-center w-96 min-h-64 rounded-lg overflow-hidden shadow-2xl">
            <div className='block text-center'>
              <Plus className='text-black w-24 h-40' />
              <h1 className='text-black font-bold'>Your project</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpage;
