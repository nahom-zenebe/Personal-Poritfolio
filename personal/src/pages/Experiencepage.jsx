import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCode, FaDatabase, FaCloud, FaDesktop, FaTools } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experiencepage = () => {
  const containerRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "AAIT",
      position: " Full Stack Developer",
      duration: "2023 - Present",
      location: "Onsite",
      tasks: [
        "build prison managemnt system and inventory management system",
        "build mobile application like intellireview",
        "build and implementing ml models",
          "led and managing of team of 5"
       
      ],
      tools: ["React", "Node.js", "AWS", "MongoDB", "Docker", "Kubernetes", "TypeScript", "GraphQL","Flutter","Kotlin","Ml model","C","Javascript"]
    },
    {
      id: 2,
      company: "Self employee",
      position: "Open source contributor",
      duration: "2025 nov- present",
      location: "Remote",
      tasks: [
        "contirbute in make documnetation in forem,zeromateryproject",
        "fixing bugs and improve the code",
        "following the contibution rule delivers high quality code",
       
      ],
      tools: ["React", "TypeScript", "TailwindCSS", "node","express"]
    },
    {
      id: 3,
      company: "Nile Technology",
      position: "Full stack developer",
      duration: "2025 march -2025 june",
      location: "Remote",
      tasks: [
        "Developed School management system",
        "led a team of 5 to build project",
        "Learn alot of tools and framework",
        "working a using srcum method"
      ],
      tools: ["node", "React", "express","mongodb", "Git", "scrum", "Figma", "Postman"]
    },
   
  ];

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.experience-card');
    
    cards?.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Work
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the tools I've used to deliver results
          </p>
        </motion.div>

        {/* Experience List */}
        <div ref={containerRef} className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="experience-card bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
                  <p className="text-xl text-blue-400 font-semibold">{experience.company}</p>
                </div>
                <div className="flex items-center space-x-6 mt-4 md:mt-0 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaCalendar className="text-blue-400" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Tasks Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FaBriefcase className="mr-2 text-blue-400" />
                  Key Tasks & Responsibilities
                </h4>
                <ul className="space-y-3">
                  {experience.tasks.map((task, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{task}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tools Section */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FaTools className="mr-2 text-blue-400" />
                  Tools & Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {experience.tools.map((tool, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: "2+", label: "Years Experience", icon: FaBriefcase },
            { number: "10+", label: "Projects Completed", icon: FaCode },
            { number: "15+", label: "Technologies", icon: FaTools },
            { number: "90%", label: "Client Satisfaction", icon: FaDesktop }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiencepage; 