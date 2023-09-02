import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function Home() {
  return (
    <div className="flex w-full flex-col  text-green-dark z-0 h-[33rem]">
      <div className='flex flex-row w-full'>
        <div className='flex flex-col absolute top-14 left-2 w-1/4 gap-3 
  '>
          <MdOutlineEmail className="text-[36px]" />
          <BsLinkedin className="text-[34px]" />
          <BsGithub className="text-[36px] " />

        </div>
        <div className='w-[100%] group '>
          <div class="w-[10rem] h-[10rem] relative top-11 left-24 rounded-full bg-blue-500 ">

          </div>

        </div>
      </div>
      <div className="flex flex-col gap-3 relative top-12 ">
        <h1 className="text-2xl font-bold text-black leading-7 ml-3 mt-6">Hi, I'm Soukaina</h1>
        <p className="text-[20px] ml-3  text-gray-700 font-semibold mt-[-7.5px]">FullStack Developer</p>
        <p className="text-gray-600 text-[20px] ml-3 leading-6">
          High level of knowledge in web <br />
          development, having the privilege of collaborating with diverse teams
        </p>
        <div className=''>
        <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none
           focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600
            dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 ml-3">
              <a href="cv.pdf" download className='flex flex-row gap-2 '>
                Contact Me

              </a>
            </button>

        </div>
      </div>



    </div>
  );
}

export default Home;
