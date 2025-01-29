import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function ServicePage() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 min-h-screen text-gray-100 flex flex-col items-center justify-center py-20">
      <h1 className="text-5xl font-extrabold text-white mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {[
          { icon: <Code size={40} className="text-blue-500" />, title: "Web Development", description: "Building modern and scalable web applications." },
          { icon: <Palette size={40} className="text-green-500" />, title: "Web Design", description: "Crafting stunning and user-friendly interfaces." },
          { icon: <Smartphone size={40} className="text-yellow-500" />, title: "App Development", description: "Creating high-performance mobile applications." },
          { icon: <Globe size={40} className="text-red-500" />, title: "Web Apps", description: "Developing innovative and responsive web applications." },
        ].map((service, index) => (
          <div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="service-card bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;