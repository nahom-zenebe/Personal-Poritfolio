import React from 'react';
import person1 from '../images/person1.png';
import { ArrowDownToLine, UserRoundPlus, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function Homepage() {
  return (
    <div className='relative flex flex-col items-center pt-20 justify-center text-center bg-gradient-to-r h-full from-black via-blue-800 to-blue-900 overflow-hidden'>

      


      <motion.img
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='w-64 h-auto rounded-full border-4 border-blue-500 p-2 shadow-2xl hover:border-blue-300 transition-all duration-500 z-10'
        src={person1}
        alt='image of person'
      />
      
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='mt-6 text-white mb-10 px-4 text-xl text-md  max-w-2xl z-10'
      >
        Hi! I'm Nahom Zenebe, a passionate Software Engineering student at Addis Ababa University 🎓. I specialize in full-stack development with a focus on the MERN stack 🖥️. I love solving real-world problems using technology, especially in the areas of education and accessibility.
      </motion.p>
       
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='flex flex-wrap justify-center gap-4 mb-64 z-10'
      >
        <button className='mt-6 px-10 py-3 bg-black flex items-center text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105'>
          Let's Connect <UserRoundPlus className='ml-2' />
        </button>
        <button className='mt-6 flex items-center px-10 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105'>
          Download CV <ArrowDownToLine className='ml-2' />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='flex gap-6 mb-10 z-10'
      >
        <a href="mailto:your.email@example.com" className='text-white hover:text-blue-300 transition-all duration-300'>
          <Mail size={24} />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-300 transition-all duration-300'>
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-300 transition-all duration-300'>
          <Linkedin size={24} />
        </a>
      </motion.div>
    </div>
  );
}

export default Homepage;