import React from 'react';
import person1 from '../images/person1.png';
import { ArrowDownToLine, UserRoundPlus, Mail, Github, Linkedin, Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function Homepage() {
  return (
    <div className='relative flex flex-col items-center pt-20 text-center bg-gradient-to-r h-screen from-black via-blue-800 to-blue-900 overflow-hidden'>
      
      {/* Hero Section */}
      <motion.img
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='w-64 h-auto rounded-full border-4 border-blue-500 p-2 shadow-2xl hover:border-blue-300 transition-all duration-500 z-10'
        src={person1}
        alt='Nahom Zenebe'
      />
      
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-white text-3xl font-bold mt-6 z-10'
      >
        Hey, I'm Nahom Zenebe 🚀
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='text-white mb-10 px-4 text-lg max-w-2xl z-10'
      >
        Full Stack Developer | Software Engineering Student | AI & Machine Learning Enthusiast.
      </motion.p>
      
      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='flex gap-4 z-10'
      >
        <button className='px-6 py-3 bg-black flex items-center text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105'>
          Let's Connect <UserRoundPlus className='ml-2' />
        </button>
        <button  className='flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105'>
        <a
  href="./public/Resume.pdf"
  download
  className="flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
>
  Download CV <ArrowDownToLine className="ml-2" />
</a>

        </button>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='flex gap-6 mt-6 z-10'
      >
        <a href='#' className='text-white hover:text-blue-300 transition-all duration-300'>
          <Mail size={24} />
        </a>
        <a href='#' className='text-white hover:text-blue-300 transition-all duration-300'>
          <Github size={24} />
        </a>
        <a href='#' className='text-white hover:text-blue-300 transition-all duration-300'>
          <Linkedin size={24} />
        </a>
      </motion.div>
      
      
      
      
    </div>
  );
}

export default Homepage;
