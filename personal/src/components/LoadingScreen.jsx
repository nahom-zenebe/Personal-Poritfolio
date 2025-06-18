import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Nahom Zenebe
      </motion.h1>
    </div>
  );
};

export default LoadingScreen;