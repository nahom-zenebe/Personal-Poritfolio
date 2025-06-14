import React, { useRef } from 'react';
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

  // Pulse animation for background elements
  const pulseAnimation = {
    initial: { opacity: 0.1, scale:1 },
    animate: { 
      opacity: [0.1, 0.15, 0.1],
      scale: [1, 1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id="home" ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-blue-950 flex items-center justify-center">

      {/* === Dynamic Grid Lines and Glow === */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y, opacity }}>
        {/* Pulsing background circles in grid pattern */}
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className="relative flex items-center justify-center"
              variants={pulseAnimation}
              initial="initial"
              animate="animate"
              transition={{ delay: (i % 5) * 0.2 + Math.floor(i / 5) * 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-accent-blue/20" />
            </motion.div>
          ))}
        </div>

        {/* Horizontal Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-white/20"
            style={{
              top: `${10 + i * 15}%`,
              filter: "blur(0.8px)"
            }}
            animate={{ x: ["-50%", "50%"] }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="h-full w-3 bg-accent-blue/80 rounded-full shadow-md"
              animate={{ x: ["-5%", "105%"] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6
              }}
            />
          </motion.div>
        ))}

        {/* Vertical Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-white/20"
            style={{
              left: `${10 + i * 18}%`,
              filter: "blur(0.8px)"
            }}
            animate={{ y: ["-50%", "50%"] }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="w-full h-3 bg-accent-blue/80 rounded-full shadow-md"
              animate={{ y: ["-5%", "105%"] }}
              transition={{
                duration: 4.5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          </motion.div>
        ))}

        {/* Glow between sections */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            className="w-[1000px] h-[400px] bg-accent-blue/10 rounded-full blur-[150px] opacity-60 mix-blend-screen"
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center bg-black/20 backdrop-blur-xl rounded-xl shadow-2xl p-8 md:p-12 border border-white/10 mx-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="mt-8 text-4xl md:text-6xl font-bold text-white" variants={fadeInUp}>
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-accent-blue to-blue-900 bg-clip-text text-transparent">
            Nahom Zenebe
          </span>{" "}
        </motion.h1>

        <motion.p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl" variants={fadeInUp}>
          Full Stack Developer | Software Engineering Student at AAIT | AI & Machine Learning Enthusiast
        </motion.p>

        <motion.div className="flex flex-wrap gap-4 mt-8 justify-center" variants={fadeInUp}>
          <motion.button
          href="https://www.linkedin.com/in/nahom-z-467a27338/"
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 20px rgba(0, 192, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Let's Connect <UserRoundPlus className="w-5 h-5" />
          </motion.button>

          <motion.a
            href="../public/Resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 20px rgba(100, 100, 100, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Download CV <ArrowDownToLine className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div className="flex gap-6 mt-8" variants={fadeInUp}>
          {[
            { icon: Mail, href: "mailto:nahomzenebe123@gmail.com", label: "Email" },
            { icon: Github, href: "https://github.com/nahom-zenebe", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/nahom-z-467a27338/", label: "LinkedIn" }
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