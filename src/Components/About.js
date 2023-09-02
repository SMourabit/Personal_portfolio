import React from 'react';
import { BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';
import Services from './Services';

function About() {
  return (
    <div className=' border-t-4 border-indigo-500  '>

      <div className="flex items-center justify-center h-screen   text-green-dark z-0">

        <div className="flex flex-col items-center text-center relative top-[-7rem]">
          <div class="">
            <h2 className='text-center text-[25px] font-bold mb-6 '>About Me</h2>
            <p class="text-sm md:text-base lg:text-lg text-gray-500 font-semibold">
              I am a Full Stack Web Developer with a passion for building beautiful and user-friendly websites. I have a strong understanding
              of both front-end and back-end development, and I am excited to put my skills to use in a professional setting.
              I am a quick learner and I am confident that I will be a valuable asset to any web development team.
            </p>
          </div>


          <div className="flex items-center flex-col mt-4 space-x-4 gap-2">


            <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none
           focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600
            dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
              <a href="cv.pdf" download className='flex flex-row gap-2 '>
                <BsDownload className="text-2xl " />
                Download CV

              </a>
            </button>

         


          </div>
        </div>
      </div>
    </div>

  );
}

export default About;
