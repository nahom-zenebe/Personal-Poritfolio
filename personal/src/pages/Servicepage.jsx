import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Code, Palette, Smartphone, Monitor, Terminal } from 'lucide-react';
import { SiJavascript, SiTypescript, SiNodedotjs, SiNestjs, SiNextdotjs } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaGithub, FaFigma } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import service1 from '../images/service_img1.avif';
import service2 from '../images/service_img2.avif';
import service3 from '../images/service_img3.avif';
import service4 from '../images/service_img4.webp';

const ServiceCard = ({ title, description, image, icon: Icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0, 192, 255, 0.2)", rotateX: 2, rotateY: -2 }}
      className="group relative bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-accent-blue transition-all duration-300 transform perspective-1000"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-accent-blue/10 rounded-lg group-hover:bg-accent-blue/20 transition-colors">
            <Icon className="w-6 h-6 text-accent-blue" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-gray-300">{description}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 via-accent-blue/0 to-accent-blue/0 group-hover:from-accent-blue/5 group-hover:via-accent-blue/10 group-hover:to-accent-blue/5 transition-all duration-500" />
    </motion.div>
  );
};

const TechMarquee = ({ items, direction = "left" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.scrollWidth;
    const clone = container.innerHTML;
    container.innerHTML += clone;

    gsap.to(container, {
      x: direction === "left" ? -containerWidth : containerWidth,
      duration: 40,
      ease: "linear",
      repeat: -1,
      onRepeat: () => {
        gsap.set(container, { x: 0 });
      }
    });
  }, [direction]);

  return (
    <div className="overflow-hidden py-4">
      <div
        ref={containerRef}
        className="flex gap-12 w-max whitespace-nowrap"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

function ServicePage() {
  const services = [
    {
      title: "Web Development",
      description: "Build dynamic, interactive, and scalable websites using the latest technologies. From simple landing pages to complex web applications, I create solutions that meet your needs.",
      image: service1,
      icon: Code
    },
    {
      title: "Web Design",
      description: "Create visually stunning and user-friendly website layouts with a focus on usability and modern design principles. I ensure your website not only looks great but also provides an excellent user experience.",
      image: service2,
      icon: Palette
    },
    {
      title: "App Development",
      description: "Develop cross-platform mobile applications that provide seamless experiences across devices. Using modern frameworks and best practices to create performant and maintainable apps.",
      image: service3,
      icon: Smartphone
    },
    {
      title: "Frontend Development",
      description: "Create responsive and interactive user interfaces using modern frameworks and libraries. Focus on performance, accessibility, and user experience.",
      image: service4,
      icon: Monitor
    },
    {
      title: "Backend Development",
      description: "Build robust and scalable server-side solutions using Node.js and related technologies. Implement secure APIs, database management, and server infrastructure.",
      image: service4,
      icon: Terminal
    }
  ];

  const techItems = [
    { icon: <SiJavascript className="text-yellow-500" size={24} />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-500" size={24} />, name: "TypeScript" },
    { icon: <SiNestjs className="text-red-500" size={24} />, name: "Nest.js" },
    { icon: <FaReact className="text-blue-400" size={24} />, name: "React.js" },
    { icon: <SiNodedotjs className="text-green-500" size={24} />, name: "Node.js" },
    { icon: <FaHtml5 className="text-orange-500" size={24} />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" size={24} />, name: "CSS" },
    { icon: <FaGithub className="text-gray-800" size={24} />, name: "GitHub" },
    { icon: <FaFigma className="text-purple-500" size={24} />, name: "Figma" },
    { icon: <IoLogoFirebase className="text-yellow-500" size={24} />, name: "Firebase" },
    { icon: <FaPython className="text-blue-500" size={24} />, name: "Python" },
    { icon: <SiNextdotjs className="text-black" size={24} />, name: "Next.js" }
  ];

  return (
    <div id="services" className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive web development and design solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <div className="mt-20 space-y-4">
          <TechMarquee items={techItems} direction="left" />
          <TechMarquee items={techItems} direction="right" />
        </div>
      </div>
    </div>
  );
}

export default ServicePage;