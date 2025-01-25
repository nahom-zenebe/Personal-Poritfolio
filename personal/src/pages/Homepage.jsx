import React from 'react';
import person1 from '../images/person1.png';
import {ArrowDownToLine,UserRoundPlus} from 'lucide-react'
function Homepage() {
  return (
    <div className='flex flex-col  items-center pt-20  justify-center text-center bg-gradient-to-r h-full  from-blue-900  via-white-200 to-blue-600'>
      <img className='w-64 h-auto rounded-full border-2 border-blue-700 p-2' src={person1} alt='image of person' />
      
      <p className='mt-6 text-white mb-10 px-4  text-md w-5/6 '>
        Hi! I'm Nahom Zenebe, a passionate Software Engineering student at Addis Ababa University 🎓. I specialize in full-stack development with a focus on the MERN stack 🖥️. I love solving real-world problems using technology, especially in the areas of education and accessibility
        </p>
       
      <div className='flex'>
      <button className='mt-6 px-10 py-3 bg-black  flex text-white  mb-64 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300'>
        Let's Connect <UserRoundPlus className='ml-2'/>
      </button>
      <button className='mt-6 flex ml-10 px-10 py-3 bg-black mb-64 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300'>
        Download Cv<ArrowDownToLine className='ml-2' />
      </button>
      </div>
    </div>
  );
}

export default Homepage;
