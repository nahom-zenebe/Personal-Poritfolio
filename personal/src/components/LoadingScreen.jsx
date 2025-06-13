import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const dotVariants = {
    animate: {
      y: ["0%", "-100%", "0%"],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const totalDuration = 3500; // 3.5 seconds for animation
    const interval = 50; // Update every 50ms
    let currentProgress = 0;

    const loadingInterval = setInterval(() => {
      currentProgress += (interval / totalDuration) * 100;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(loadingInterval);
        setTimeout(() => {
          setLoading(false); // Fade out loading screen after animation
        }, 500); // Small delay before fading out
      }
      setProgress(currentProgress);
    }, interval);

    return () => clearInterval(loadingInterval);
  }, [setLoading]);

  const name = "Nahom Zenebe".split("");

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 bg-accent-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow" />
        <div className="w-60 h-60 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow animation-delay-2000" />
      </div>

      {/* Name Animation */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-8 relative z-10 font-sans tracking-wide"
        variants={containerVariants}
      >
        {name.map((char, index) => (
          <motion.span key={index} variants={itemVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Pulsating Dots Loader */}
      <motion.div className="flex space-x-2 mb-12 relative z-10">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="block w-3 h-3 bg-accent-blue rounded-full"
            variants={dotVariants}
            animate="animate"
            style={{ transitionDelay: `${i * 0.2}s` }}
          />
        ))}
      </motion.div>

      {/* Gradient Loading Bar */}
      <div className="w-full max-w-md h-2 bg-gray-800 rounded-full overflow-hidden relative z-10">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-blue to-blue-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 