import React from 'react';

function AboutPage() {
  return (
    <div className="bg-black h-lvh text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Hello, I'm Nahom Zenebe, a Software Engineering student at Addis Ababa University.
        I specialize in full-stack development with a focus on MERN stack. I'm passionate about solving real-world problems, particularly in the fields of education and accessibility.
        I actively participate in hackathons and enjoy mentoring peers. In my spare time, I enjoy playing chess, watching movies, and hanging out with friends.
      </p>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-all">
        Contact Me
      </button>
    </div>
  );
}

export default AboutPage;
