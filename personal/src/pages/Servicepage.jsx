import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Code, Palette, Smartphone, Globe, Monitor, Terminal } from 'lucide-react'; // Added relevant icons

function ServicePage() {
  const topListRef = useRef(null); // Reference for the top <ul> element
  const bottomListRef = useRef(null); // Reference for the bottom <ul> element
  const [selectedService, setSelectedService] = useState(null); // Track the selected service

  useEffect(() => {
    const topList = topListRef.current;
    const bottomList = bottomListRef.current;
    const topListWidth = topList.scrollWidth;
    const bottomListWidth = bottomList.scrollWidth;

    const topClone = topList.innerHTML;
    const bottomClone = bottomList.innerHTML;
    topList.innerHTML += topClone;
    bottomList.innerHTML += bottomClone;

    gsap.to(topList, {
      x: -topListWidth,
      duration: 40,
      ease: 'linear',
      repeat: -1,
      onRepeat: () => {
        gsap.set(topList, { x: 0 });
      },
    });

    gsap.to(bottomList, {
      x: -bottomListWidth,
      duration: 45, // Make the second row duration slightly longer to create a lag
      ease: 'linear',
      repeat: -1,
      onRepeat: () => {
        gsap.set(bottomList, { x: 0 });
      },
    });
  }, []);

  // Handle service click
  const handleServiceClick = (index) => {
    if (selectedService === index) {
      // If the same service is clicked again, reset the state
      setSelectedService(null);
    } else {
      // Otherwise, set the clicked service as selected
      setSelectedService(index);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 min-h-screen text-gray-100 flex flex-col items-center justify-center py-20">
      <h1 className="text-5xl font-extrabold text-white mb-16">Our Services</h1>

      <div className="mb-3 overflow-hidden">
        <ul
          ref={topListRef}
          className="flex gap-12 w-max whitespace-nowrap"
        >
          <li className="bg-[#f7df1e] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-black">JavaScript</li>
          <li className="bg-[#3178c6] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">TypeScript</li>
          <li className="bg-[#e0234e] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Nest.js</li>
          <li className="bg-[#61dafb] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-black">React.js</li>
          <li className="bg-[#339933] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Node.js</li>
          <li className="bg-[#e34c26] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">HTML</li>
          <li className="bg-[#1572b6] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">CSS</li>
          <li className="bg-[#181717] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">GitHub</li>
          <li className="bg-[#f24e1e] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Figma</li>
          <li className="bg-[#ffca28] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-black">Firebase</li>
          <li className="bg-[#3776ab] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Python</li>
          <li className="bg-[#563d7c] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">PHP</li>
          <li className="bg-[#00599c] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">C++</li>
          <li className="bg-[#007acc] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">C#</li>
          <li className="bg-[#cc6699] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Sass</li>
        </ul>
      </div>

      <div className="mb-20 overflow-hidden">
        <ul
          ref={bottomListRef}
          className="flex gap-5  w-max whitespace-nowrap"
        >
          <li className="bg-[#f7df1e] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-black">JavaScript</li>
          <li className="bg-[#3178c6] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">TypeScript</li>
          <li className="bg-[#e0234e] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Nest.js</li>
          <li className="bg-[#61dafb] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-black">React.js</li>
          <li className="bg-[#339933] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Node.js</li>
          <li className="bg-[#e34c26] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">HTML</li>
          <li className="bg-[#1572b6] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">CSS</li>
          <li className="bg-[#181717] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">GitHub</li>
          <li className="bg-[#f24e1e] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Figma</li>
          <li className="bg-[#ffca28] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-black">Firebase</li>
          <li className="bg-[#3776ab] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Python</li>
          <li className="bg-[#563d7c] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">PHP</li>
          <li className="bg-[#00599c] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">C++</li>
          <li className="bg-[#007acc] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">C#</li>
          <li className="bg-[#cc6699] rounded-full w-36 h-12 text-center pt-3 text-lg font-semibold text-white">Sass</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full max-w-7xl px-4">
        {/* Web Development Service */}
        <div
          className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
            selectedService === 0
              ? 'transform scale-110 z-10'
              : selectedService !== null
              ? 'opacity-50 grayscale transform scale-90'
              : ''
          }`}
          onClick={() => handleServiceClick(0)}
        >
          <div className="flex flex-col items-center justify-center">
            <Code size={50} className="text-yellow-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Development</h3>
            <p className="text-gray-600 text-center">
              Build dynamic, interactive, and scalable websites using the latest technologies like JavaScript and React.
            </p>
          </div>
        </div>

        {/* Web Design Service */}
        <div
          className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
            selectedService === 1
              ? 'transform scale-110 z-10'
              : selectedService !== null
              ? 'opacity-50 grayscale transform scale-90'
              : ''
          }`}
          onClick={() => handleServiceClick(1)}
        >
          <div className="flex flex-col items-center justify-center">
            <Palette size={50} className="text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Design</h3>
            <p className="text-gray-600 text-center">
              Create visually stunning and user-friendly website layouts, designs, and interfaces with a focus on usability.
            </p>
          </div>
        </div>

        {/* App Development Service */}
        <div
          className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
            selectedService === 2
              ? 'transform scale-110 z-10'
              : selectedService !== null
              ? 'opacity-50 grayscale transform scale-90'
              : ''
          }`}
          onClick={() => handleServiceClick(2)}
        >
          <div className="flex flex-col items-center justify-center">
            <Smartphone size={50} className="text-green-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">App Development</h3>
            <p className="text-gray-600 text-center">
              Create mobile applications for Android and iOS, providing seamless experiences across devices and platforms.
            </p>
          </div>
        </div>

        {/* Web Deployment Service */}
        <div
          className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
            selectedService === 3
              ? 'transform scale-110 z-10'
              : selectedService !== null
              ? 'opacity-50 grayscale transform scale-90'
              : ''
          }`}
          onClick={() => handleServiceClick(3)}
        >
          <div className="flex flex-col items-center justify-center">
            <Globe size={50} className="text-red-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Deployment</h3>
            <p className="text-gray-600 text-center">
              Deploy websites and web applications to production with optimal configurations and scalability.
            </p>
          </div>
        </div>

        {/* Web Monitoring Service */}
        <div
          className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
            selectedService === 4
              ? 'transform scale-110 z-10'
              : selectedService !== null
              ? 'opacity-50 grayscale transform scale-90'
              : ''
          }`}
          onClick={() => handleServiceClick(4)}
        >
          <div className="flex flex-col items-center justify-center">
            <Monitor size={50} className="text-purple-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Monitoring</h3>
            <p className="text-gray-600 text-center">
              Monitor the performance, uptime, and health of your website or application to ensure smooth operations.
            </p>
          </div>
        </div>

        {/* Terminal Service */}
        <div
          className={`transition-all duration-500 ease-in-out bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
            selectedService === 5
              ? 'transform scale-110 z-10'
              : selectedService !== null
              ? 'opacity-50 grayscale transform scale-90'
              : ''
          }`}
          onClick={() => handleServiceClick(5)}
        >
          <div className="flex flex-col items-center justify-center">
            <Terminal size={50} className="text-black mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Backend Development</h3>
            <p className="text-gray-600 text-center">
              Develop robust backend systems, APIs, and services using the latest server-side technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;