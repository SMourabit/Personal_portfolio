import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function Home() {
  return (
    <div className="flex w-full flex-col  text-green-dark z-0 h-[30rem]">
      <div className='flex flex-row w-full'>
        <div className='flex flex-col absolute top-[5.5rem] left-[0.78rem] w-1/4 gap-3 
  '>
          <MdOutlineEmail className="text-[25px]" />
          <BsLinkedin className="text-[25px]" />
          <BsGithub className="text-[25px] " />

        </div>
        <div className='w-[100%] group '>
          <div class="w-[10rem] h-[10rem] relative top-11 left-[5rem] rounded-full bg-green-light ">

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
        <button type="button" class="text-white bg-green-light ml-3   border border-gray-200 focus:ring-4 focus:outline-none
           focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center 
            ">
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
