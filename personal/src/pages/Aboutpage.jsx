import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TimelineItem = ({ title, description, date, icon: Icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex items-center ${
        index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
      } mb-12`}
    >
      <div className="flex-1 md:text-right md:pr-8">
        <div className={`p-6 rounded-lg shadow-xl ${
          index % 2 === 0 ? 'bg-blue-600/10' : 'bg-gray-800/50'
        } backdrop-blur-sm border border-gray-700/50`}>
          <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
          <span className="inline-block mt-2 text-sm text-gray-400">{date}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 border-2 border-blue-500/50 z-10">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

function AboutPage() {
  const timelineData = [
    {
      title: "Software Engineering Student",
      description: "Currently pursuing a degree in Software Engineering at Addis Ababa University.",
      date: "2023 - Present",
      icon: ({ className }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Open source contributor",
      description: "contributing in different reposiotry like forem, zerotomastery ",
      date: "2024 - Present",
      icon: ({ className }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Full Stack Developer at Nile Technology",
      description: "Developing a full stack school managment system with mern stack",
      date: "2025 - present",
      icon: ({ className }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Academic project",
      description: "Developing a Research sharing app with flutter,inventory managment system with mern stack",
      date: "2025 - Present",
      icon: ({ className }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A passionate developer focused on creating impactful solutions through technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-400/50 to-blue-500/50" />

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technical <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "JavaScript", "TypeScript", "React", "Node.js",
              "MongoDB", "Express", "Python", "C",
              "Git", "Next js", "Flutter", "TailwindCSS","Kotlin","Github","Figma"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 192, 255, 0.6), 0 0 50px rgba(0, 192, 255, 0.4)" }}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-600/50 text-center cursor-pointer relative overflow-hidden group"
              >
                <span className="text-gray-300 relative z-10">{skill}</span>
                <div className="absolute inset-0 bg-accent-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 via-accent-blue/10 to-accent-blue/0 rounded-lg filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
