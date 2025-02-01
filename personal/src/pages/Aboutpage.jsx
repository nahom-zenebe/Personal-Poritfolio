import React, { useEffect, useRef } from 'react';

function AboutPage() {
  const aboutCardsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', 'translate-x-10', '-translate-x-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    aboutCardsRef.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const aboutMeInfo = [
    {
      title: 'About Me',
      description: 'My name is Nahom Zenebe, a third-year Software Engineering student at Addis Ababa University. I am a passionate full-stack developer with a focus on the MERN stack (MongoDB, Express.js, React, Node.js). I aim to use my skills to solve real-world problems, particularly in the fields of education and accessibility.',
    },
    {
      title: 'Passionate About Education',
      description: 'I am deeply passionate about leveraging technology to enhance education and accessibility, particularly for underserved communities. I believe that everyone should have access to quality education, regardless of their background or location. I have worked on several projects that aim to bridge the gap in education through tech solutions.',
      bgColor: 'bg-gray-700',
    },
    {
      title: 'Full-Stack Developer',
      description: 'I specialize in full-stack development, with experience in both front-end and back-end technologies. I enjoy building dynamic, user-friendly applications and systems that are scalable and efficient. I actively participate in hackathons to challenge myself, solve real-world problems, and collaborate with others to come up with innovative solutions.',
      bgColor: 'bg-gray-800',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'I am continuously learning and mastering Data Structures and Algorithms (DSA) to enhance my problem-solving skills. Understanding DSA is crucial for developing efficient applications and excelling in coding interviews. I regularly practice problems on platforms like LeetCode, HackerRank, and Codeforces to sharpen my abilities.',
      bgColor: 'bg-gray-700',
    },
    {
      title: 'AI & Machine Learning Enthusiast',
      description: 'In addition to full-stack development, I am very interested in AI and machine learning. I spend my free time exploring machine learning algorithms, working on projects that integrate AI, and expanding my understanding of how these technologies can be applied to real-world problems, especially in fields like healthcare, education, and accessibility.',
      bgColor: 'bg-gray-800',
    },
    {
      title: 'Free Time & Hobbies',
      description: 'In my free time, I enjoy playing chess, which sharpens my problem-solving and strategic thinking skills. I also like to watch movies, explore new tech trends, and spend time with friends. I find balance through these activities and enjoy engaging in meaningful conversations about technology, innovation, and life.',
      bgColor: 'bg-gray-700',
    },
  ];
  

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center py-20">

      

 
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About My Journey</h2>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 h-full w-1 bg-blue-500 transform -translate-x-1/2 z-0"></div>

          {/* About Cards */}
          {aboutMeInfo.map((info, index) => (
            <div
              key={index}
              ref={(el) => (aboutCardsRef.current[index] = el)}
              className={`relative z-10 opacity-0 transition-all duration-500 ease-in-out ${
                index % 2 === 0
                  ? 'translate-x-10 self-start ml-4 md:ml-0 md:self-end mr-auto'
                  : '-translate-x-10 self-end mr-4 md:mr-0 md:self-start ml-auto'
              }`}
              style={{ marginBottom: '6rem', maxWidth: '45%' }}
            >
              <div className={`${info.bgColor} p-6 rounded-lg shadow-lg`}>
                <h3 className="text-2xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-400 mb-4">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
