import React from 'react';
import { BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';
import Services from './Services';

function About() {
  return (
    <div className=' h-[26rem]  animate-showUp md:mt-[-1rem]  lg:h-[35rem]' id='About'>

      <div className="flex items-center justify-center text-green-dark z-0 md:mt-1 ">

        <div className="flex flex-col items-center text-center relative ">
          <div class="">
            <h2 className='text-center text-[25px] font-bold  mb-6 bg-gradient-to-r from-green-medium from-10%
             to-green-light to-60% text-transparent bg-clip-text md:relative md:top-[52px]'>About Me</h2>

            <div className='md:flex md:flex-row md:gap-0'>

              <div className='w-full text-center mt-2 flex justify-center '>
                <img src="3.jpg" alt="" className='rounded-sm w-[12rem] h-[7rem]
                 md:w-[13rem] md:h-[8rem] md:relative md:top-[2.25rem] md:left-[-0.75rem] 
                 lg:w-[21rem] lg:h-[16rem]
                 ' />
              </div>

              <p class="text-[15px] md:text-base lg:text-lg text-gray-500  font-semibold ml-2 mr-2 mt-[2rem]
            md:w-[35.25rem] md:text-[18px] md:font-normal md:ml-[-2rem] md:text-left
            lg:mt-16
            
            ">
                I am a Full Stack Web Developer with a passion for building beautiful and user-friendly websites. I have a strong understanding
                of both front-end and back-end development.
              </p>
            </div>

          </div>


          <div className="flex items-center flex-col mt-4 space-x-4 gap-2">


            <button type="button" class="text-white bg-green-light ml-3 mt-0  border border-gray-200 focus:ring-4 focus:outline-none
           focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center
           md:relative md:right-[-8.5rem] md:p-3
           lg:mt-[-66px]
           ">
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
