import React, { useState, useEffect, useRef } from 'react';
import { Twitter, Github, Linkedin, Mail, ArrowUpToLine, Phone, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';

function Footer() {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  useGSAP(() => {
    gsap.to('.box', { x: 360 });
  }, { '#box': container });

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nahom-z-467a27338/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Github, href: "https://github.com/nahom-zenebe", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:nahomzenebe123@gmail.com", label: "Email", color: "hover:text-red-400" }
  ];

  const services = [
    "Website Development",
    "Mobile App Development", 
    "Web App Development",
    "UI/UX Design",
    "Web Deployment",
    "AI/ML Solutions"
  ];

  return (
    <div id="footer" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-gray-300 mb-6">
                Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>nahomzenebe123@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+251954907558</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <span className="text-gray-400 font-medium">Follow me:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-blue-500/50`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center md:text-right"
            >
              <p className="text-gray-400">
                © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Nahom Zenebe</span>. All Rights Reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Built with ❤️ using React & TailwindCSS
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            <ArrowUpToLine className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Footer;