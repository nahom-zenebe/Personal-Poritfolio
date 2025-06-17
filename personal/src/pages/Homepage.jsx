import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowDownToLine, UserRoundPlus, Mail, Github, Linkedin, Code, Database, Cloud, Smartphone, Globe, Zap } from 'lucide-react';

// Separate Particle component
const Particle = ({ mousePosition, particle }) => {
  const springX = useSpring(mousePosition.x + (particle.x - 50) * 2, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y + (particle.y - 50) * 2, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      className="absolute w-1 h-1 bg-accent-blue/40 rounded-full"
      style={{
        x: springX,
        y: springY,
        width: particle.size,
        height: particle.size
      }}
    />
  );
};

// Typing animation component
const TypingAnimation = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-accent-blue ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
};

// Floating skill card component
const FloatingSkillCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      className="absolute bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 shadow-lg"
      style={{ width: '200px' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 192, 255, 0.3)"
      }}
    >
      <Icon className="w-8 h-8 text-accent-blue mb-3" />
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
};

// Loading animation component
const LoadingAnimation = ({ onComplete }) => {
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullName(true);
      setTimeout(onComplete, 1000);
    }, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative text-center">
        <motion.div className="text-6xl md:text-8xl font-bold">
          <motion.span
            className="inline-block text-accent-blue"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            N
          </motion.span>
          <motion.span
            className="inline-block text-accent-blue"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Z
          </motion.span>

          <motion.div
            className="absolute top-1/2 left-1/2 w-0 h-1 bg-accent-blue"
            initial={{ width: 0, x: "-50%", y: "-50%" }}
            animate={showFullName ? { width: "100px", x: "-50%", y: "-50%" } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          />

          <AnimatePresence>
            {showFullName && (
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl md:text-3xl text-white">
                  <span className="text-accent-blue">N</span>ahom{" "}
                  <span className="text-accent-blue">Z</span>enebe
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Homepage = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [orbs, setOrbs] = useState([]);
  const [trails, setTrails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showTyping, setShowTyping] = useState(false);

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

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }));
    setParticles(newParticles);
  }, []);

  // Generate orbs
  useEffect(() => {
    const newOrbs = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 20 + 30
    }));
    setOrbs(newOrbs);
  }, []);

  // Show typing animation after loading
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setShowTyping(true), 1000);
    }
  }, [isLoading]);

  // Handle orb click
  const handleOrbClick = (orbId) => {
    setOrbs(prevOrbs => 
      prevOrbs.map(orb => 
        orb.id === orbId 
          ? { ...orb, clicked: true }
          : orb
      )
    );
    setTimeout(() => {
      setOrbs(prevOrbs =>
        prevOrbs.map(orb =>
          orb.id === orbId
            ? { ...orb, clicked: false }
            : orb
        )
      );
    }, 1000);
  };

  // Handle drag
  const handleDrag = (e, info) => {
    setTrails(prev => [...prev, {
      id: Date.now(),
      x: info.point.x,
      y: info.point.y,
      size: Math.random() * 10 + 5
    }].slice(-20)); // Keep last 20 trails
  };

  const skillCards = [
    { icon: Code, title: "Frontend", description: "React, TypeScript, TailwindCSS", position: "top-20 left-10" },
    { icon: Database, title: "Backend", description: "Node.js, MongoDB, PostgreSQL", position: "top-20 right-10" },
    { icon: Cloud, title: "Cloud", description: "AWS, Docker, Kubernetes", position: "bottom-20 left-10" },
    { icon: Smartphone, title: "Mobile", description: "React Native, Flutter", position: "bottom-20 right-10" },
    { icon: Globe, title: "Web", description: "Full Stack Development", position: "top-1/2 left-5" },
    { icon: Zap, title: "AI/ML", description: "TensorFlow, Python, Data Science", position: "top-1/2 right-5" }
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <motion.div 
        id="home" 
        ref={containerRef} 
        className={`relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-blue-950 flex items-center justify-center transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
      >
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

        {/* Interactive Background Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Mouse-following particles */}
          {particles.map((particle) => (
            <Particle
              key={particle.id}
              mousePosition={mousePosition}
              particle={particle}
            />
          ))}

          {/* Clickable orbs */}
          {orbs.map((orb) => (
            <motion.div
              key={orb.id}
              className="absolute cursor-pointer"
              style={{
                left: `${orb.x}%`,
                top: `${orb.y}%`,
                width: orb.size,
                height: orb.size
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleOrbClick(orb.id)}
            >
              <motion.div
                className="w-full h-full rounded-full bg-accent-blue/20"
                animate={orb.clicked ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2]
                } : {}}
                transition={{ duration: 1 }}
              />
            </motion.div>
          ))}

          {/* Draggable element */}
          <motion.div
            className="absolute w-12 h-12 bg-accent-blue/30 rounded-full cursor-grab active:cursor-grabbing"
            style={{ left: '20%', top: '30%' }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            onDrag={handleDrag}
          >
            <div className="w-full h-full rounded-full bg-accent-blue/20 animate-pulse" />
          </motion.div>

          {/* Trail effects */}
          {trails.map((trail) => (
            <motion.div
              key={trail.id}
              className="absolute bg-accent-blue/20 rounded-full"
              style={{
                left: trail.x,
                top: trail.y,
                width: trail.size,
                height: trail.size
              }}
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 2 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => {
                setTrails(prev => prev.filter(t => t.id !== trail.id));
              }}
            />
          ))}
        </div>

        {/* Floating Skill Cards */}
        <div className="absolute inset-0 z-15 pointer-events-none">
          {skillCards.map((card, index) => (
            <div key={index} className={`absolute ${card.position}`}>
              <FloatingSkillCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={index * 0.2}
              />
            </div>
          ))}
        </div>

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

          <motion.div className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl h-8" variants={fadeInUp}>
            {showTyping ? (
              <TypingAnimation text="Full Stack Developer | Software Engineering Student at AAIT | AI & Machine Learning Enthusiast" />
            ) : (
              <span>Full Stack Developer | Software Engineering Student at AAIT | AI & Machine Learning Enthusiast</span>
            )}
          </motion.div>

          <motion.div className="flex  flex-wrap gap-4 mt-12 justify-center" variants={fadeInUp}>
            <motion.a
              href="https://www.linkedin.com/in/nahom-z-467a27338/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 20px rgba(0, 192, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              Let's Connect <UserRoundPlus className="w-5 h-5" />
            </motion.a>

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
                whileHover={{ y: -5, scale: 1.1 }}
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
      </motion.div>
    </>
  );
}

export default Homepage;