import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaWrench } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'services', 'footer'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { // Adjust offset as needed
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '#home', icon: FaHome, label: 'Home', id: 'home' },
    { path: '#about', icon: FaInfoCircle, label: 'About', id: 'about' },
    { path: '#projects', icon: FaBriefcase, label: 'Projects', id: 'projects' },
    { path: '#services', icon: FaWrench, label: 'Services', id: 'services' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg flex space-x-8">
            {navItems.map(({ path, icon: Icon, label, id }) => (
              <a
                key={path}
                href={path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className={`flex items-center text-gray-300 hover:text-white transition-all duration-300 group relative ${
                  activeSection === id ? 'text-white' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-lg font-medium">{label}</span>
                {activeSection === id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;