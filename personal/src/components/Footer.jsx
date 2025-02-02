import React from 'react';
import { MoveRight, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Footer() {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(() => {
    gsap.to('.box', { x: 360 });
  }, { '#box': container });

  return (
    <div className="bg-gray-700 text-white py-10 px-5">
      <div className='flex flex-col sm:flex-row md:flex-row'>
        <div className="text-center mb-8 sm:mb-0 sm:mr-5 mt-10">
          <h1 className="text-2xl font-bold">Stay connected with me</h1>
          <form className="mt-4 flex justify-center">
            <input
              className="bg-gray-700 border-b-2 border-white w-full sm:w-96 focus:outline-none py-2"
              type="email"
              placeholder="Enter your email"
            />
            <button type="submit" className="px-4 py-2 rounded-r-lg hover:text-blue-500">
              <MoveRight className="text-2xl" />
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row justify-around w-full">
          <div className="sm:ml-2 text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li className='hover:text-blue-200 hover:underline'>Website Development</li>
              <li className='hover:text-blue-200 hover:underline'>Mobile App Development</li>
              <li className='hover:text-blue-200 hover:underline'>Web App Development</li>
              <li className='hover:text-blue-200 hover:underline'>UI/UX Design</li>
              <li className='hover:text-blue-200 hover:underline'>Web Deployment</li>
            </ul>
          </div>

          <div className="sm:ml-12 text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
            <ul className="space-y-2">
              <li className='hover:text-blue-200 hover:underline'>Email: nahomzenebe123@gmail.com</li>
              <li className='hover:text-blue-200 hover:underline'>Phone: +251954907558</li>
              <li className='hover:text-blue-200 hover:underline'>Address: Addis Ababa, Ethiopia</li>
            </ul>
          </div>

          <div className="sm:ml-12 text-center">
  <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
  <ul className="flex justify-center sm:justify-start space-x-4">
    <li>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <Linkedin className='hover:text-blue-400 w-6 h-6' />
      </a>
    </li>
    <li>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <Github className='hover:text-blue-400 w-6 h-6' />
      </a>
    </li>
    <li>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Twitter className='hover:text-blue-400 w-6 h-6' />
      </a>
    </li>
    <li>
      <a href="mailto:nahomzenebe123@gmail.com" target="_blank" rel="noreferrer">
        <Mail className='hover:text-blue-400 w-6 h-6' />
      </a>
    </li>
  </ul>
</div>

        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white">
        <hr className='mb-4 text-gray-200'></hr>
        <h1 className='text-lg mt-8'>© {new Date().getFullYear()} Nahom Zenebe. All Rights Reserved.</h1>
      </div>
    </div>
  );
}

export default Footer;