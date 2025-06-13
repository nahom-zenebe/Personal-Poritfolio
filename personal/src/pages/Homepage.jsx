import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownToLine, UserRoundPlus, Mail, Github, Linkedin } from 'lucide-react';
import person1 from '../images/person1.png';

function Homepage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div id="home" ref={containerRef} className="relative min-h-screen overflow-hidden bg-gray-900 flex items-center justify-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-blue/50 to-blue-900/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
          animate={{ x: [0, 100, 0], y: [0, -100, 0], rotate: [0, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], rotate: [0, -180, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-green-500/50 to-yellow-500/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
          animate={{ x: [0, 50, 0], y: [0, 50, 0], rotate: [0, 360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Parallax effect on scroll - existing */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center bg-black/20 backdrop-blur-xl rounded-xl shadow-2xl p-8 md:p-12 border border-white/10 mx-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="relative"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-accent-blue/20 blur-3xl rounded-full" />
          <motion.img
            src={person1}
            alt="Nahom Zenebe"
            className="relative w-64 h-auto rounded-full border-4 border-accent-blue/50 p-2 shadow-2xl hover:border-accent-blue transition-all duration-500 z-10"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </motion.div>

        <motion.h1
          className="mt-8 text-4xl md:text-6xl font-bold text-white"
          variants={fadeInUp}
        >
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-accent-blue to-blue-400 bg-clip-text text-transparent">
            Nahom Zenebe
          </span>{" "}
          🚀
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl"
          variants={fadeInUp}
        >
          Full Stack Developer | Software Engineering Student | AI & Machine Learning Enthusiast
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-8 justify-center"
          variants={fadeInUp}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 20px rgba(0, 192, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Let's Connect <UserRoundPlus className="w-5 h-5" />
          </motion.button>

          <motion.a
            href="./public/Resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 20px rgba(100, 100, 100, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Download CV <ArrowDownToLine className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex gap-6 mt-8"
          variants={fadeInUp}
        >
          {[
            { icon: Mail, href: "mailto:nahomzenebe123@gmail.com", label: "Email" },
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownToLine className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Homepage;
