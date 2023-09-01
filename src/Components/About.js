import React from 'react';
import { BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';
import Services from './Services';

function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-pale text-green-dark z-0">


      <div className="flex flex-col items-center text-center">

        <p className=" leading-7 font-semibold text-xl">
          Hello, I am Soukaina, a web <b className="font-bold">Developer</b> with rich experience in website building.
        </p>

        <div className="flex items-center flex-col mt-4 space-x-4 gap-5">

          <div >
            <a href="cv.pdf" download className='flex flex-row gap-2 '>
              <BsDownload className="text-2xl " />
              <p>Download CV</p>
            </a>
          </div>


          <div className='flex flex-row gap-4 mt-3'>
            <a href="https://github.com/SMourabit/">
              <BsGithub className="text-2xl " />
            </a>
            <a href="www.linkedin.com/in/soukaina-mourabit-253a33240">
              <BsLinkedin className="text-2xl" />
            </a>
          </div>

      <Services />

        </div>
      </div>
    </div>
  );
}

export default About;
