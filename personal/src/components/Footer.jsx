import React from 'react';
import { MoveRight,Twitter,Github,Linkedin } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Footer() {


 

gsap.registerPlugin(useGSAP); 

const container = useRef();

useGSAP(() => {

    gsap.to('.box', { x: 360 }); 
},{ '#box': container }); 


  return (
    <div className="bg-gray-700 text-white py-10 px-5">
 
      <div className="text-center mb-8">
        <h1 className="text-2xl mr-5 font-bold">Stay connected with me</h1>
        <form className="mt-4 flex justify-center">
        <input
  className=" bg-gray-700 border-b-2 border-white w-96 focus:outline-none  py-2  "
  type="email"
  placeholder="Enter your email"
/>
          <button type="submit" className=" px-4 py-2 rounded-r-lg hover:text-blue-500">
            <MoveRight className="text-2xl" />
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 ml-56 sm:grid-cols-3 gap-6 text-center sm:text-left">
       
        <div >
          <h2 className="text-lg  font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Web App Development</li>
            <li>UI/UX Design</li>
            <li>Web Deployment</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
          <ul className="space-y-2">
            <li>Email: yourname@example.com</li>
            <li>Phone: +251954907558</li>
            <li>Address: Addis Ababa, Ethiopia</li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
          <ul className="space-y-2 ml-6">
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin  id='box' className='hover:text-blue-400'/>
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github id='box'  className='hover:text-blue-400'/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter id='box' className='hover:text-blue-400'/>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="mt-10 text-center text-sm text-white">
      <hr className='mb-4 text-gray-200'></hr>
        © {new Date().getFullYear()} Nahom Zenebe. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
