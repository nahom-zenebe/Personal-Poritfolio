import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function ProjectPage() {
  const projectRefs = useRef([]);

  useEffect(() => {
    // GSAP animations for horizontal scrolling
    const sections = gsap.utils.toArray('.project-section');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.projects-container',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + document.querySelector('.projects-container').offsetWidth,
      },
    });

    // Intersection Observer for project animations
    projectRefs.current.forEach((project, index) => {
      gsap.from(project, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: project,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-100 flex flex-col items-center justify-center py-20">
      <h1 className="text-5xl font-extrabold text-white mb-10">My Projects</h1>

      <div className="projects-container w-full overflow-hidden">
        <div className="flex w-max">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-section w-screen flex-shrink-0 px-8"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://via.placeholder.com/800x400"
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-teal-400">
                    Project Title {index + 1}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    This is a brief description of the project. It could be about a web app, a tool,
                    or something you've built using your skills. You can also provide links to the
                    project or its repository.
                  </p>
                  <a
                    href="https://github.com/your-project"
                    className="text-teal-500 hover:text-teal-400 underline"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-10 bg-teal-500 text-white py-3 px-8 rounded-md hover:bg-teal-600 transition-all">
        See More Projects
      </button>
    </div>
  );
}

export default ProjectPage;
