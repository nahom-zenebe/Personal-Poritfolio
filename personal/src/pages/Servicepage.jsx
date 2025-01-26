import React from 'react';
import { Cpu, Server, Settings, User } from 'lucide-react';

function ServerPage() {
  return (
    <div className="bg-gray-300 h-screen text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6 text-center">Server Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        
        {/* Server Card 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
          <div className="text-blue-500 text-4xl mb-4">
            <Cpu />
          </div>
          <h2 className="text-xl font-semibold mb-2">CPU Usage</h2>
          <p className="text-gray-400">Monitor your server's CPU performance.</p>
        </div>
        
        {/* Server Card 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
          <div className="text-green-500 text-4xl mb-4">
            <Server />
          </div>
          <h2 className="text-xl font-semibold mb-2">Server Status</h2>
          <p className="text-gray-400">Check the health and status of your server.</p>
        </div>

        {/* Server Card 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
          <div className="text-yellow-500 text-4xl mb-4">
            <Settings />
          </div>
          <h2 className="text-xl font-semibold mb-2">Configurations</h2>
          <p className="text-gray-400">Manage and update server settings.</p>
        </div>

        {/* Server Card 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
          <div className="text-red-500 text-4xl mb-4">
            <User />
          </div>
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-400">Add or remove users and manage permissions.</p>
        </div>

      </div>
      
      {/* Action Button */}
      <button className="bg-blue-500 text-white py-3 px-10 rounded-md hover:bg-blue-600 transition-all mt-8">
        Manage Server
      </button>
    </div>
  );
}

export default ServerPage;
