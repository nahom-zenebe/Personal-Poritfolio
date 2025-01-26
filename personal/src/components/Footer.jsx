import React from 'react'
import { MoveRight } from 'lucide-react'

function Footer() {
  return (
    <div className="bg-blue-900 h-64 flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl mb-4">Stay connected with me</h1>
      <form className="flex items-center">
        <input
          className="bg-blue-800 text-white p-2 rounded-l-lg focus:outline-none"
          type="text"
          placeholder="Enter your email"
        />
        <button type="submit" className="bg-blue-700 text-white p-2 rounded-r-lg hover:bg-blue-600">
          <MoveRight className="text-2xl" />
        </button>
      </form>
    </div>
  )
}

export default Footer
