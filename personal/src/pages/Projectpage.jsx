import React from 'react';

function ProjectPage() {
  return (
    <div className="bg-gray-600 h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="max-w-4xl w-full mb-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://via.placeholder.com/800x400" 
            alt="Project Preview"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
            <p className="text-lg">
              This is a brief description of the project. It could be about a web app, a tool, or something you've built using your skills.
              You can also provide links to the project or its repository.
            </p>
            <a href="https://github.com/your-project" className="text-blue-400 hover:text-blue-500">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-all">
        See More Projects
      </button>
    </div>
  );
}

export default ProjectPage;
