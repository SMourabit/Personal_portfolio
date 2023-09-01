import React from 'react';
import { BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';

function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-pale text-green-dark z-0">
      <div className="flex flex-col items-center text-center">
        <p className=" leading-7 font-semibold text-xl">
          Hello, I am Soukaina, a web <b className="font-bold">Developer</b> with rich experience in website building.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <a href="#" className='flex flex-row'>
            <BsDownload className="text-2xl " />
            <p>Download CV</p> 
          </a>
          <br />
          <a href="#">
            <BsGithub className="text-2xl " />
          </a>
          <a href="#">
            <BsLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
