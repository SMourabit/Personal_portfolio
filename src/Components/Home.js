import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function Home() {
  return (
    <div className="flex w-full flex-col  text-green-dark z-0 h-[30rem] md:h-[25rem] md:mt-[1.25rem] animate-showUp  lg:h-[34rem]" id='Home'>

      <div className='flex flex-row w-full '>
        <div className='flex flex-col absolute top-[5.5rem] left-[0.78rem] w-1/4 gap-3  md:top-[8.25rem] lg:left-[16rem] lg:top-[13rem] 
  '>

          <a href="mailto:soukainamourabit@outlook.fr" target="_blank" rel="noreferrer"><MdOutlineEmail className="text-[25px] lg:text-[32.5px]" /></a>
          <a href="www.linkedin.com/in/soukaina-mourabit-253a33240" target="_blank" rel="noreferrer"> <BsLinkedin className="text-[25px] lg:text-[28px]" /></a>
          <a href="https://github.com/soukaina203" target="_blank" rel="noreferrer"> <BsGithub className="text-[25px] lg:text-[28px]" /></a>




        </div>
        <div className='w-[100%]  group  '>
          <div class=" group 
          ">
            <img src="6.jpg" className="w-[10rem] h-[10rem] relative top-11 left-[5rem] rounded-full bg-green-light md:top-[5rem]  md:left-[25rem]
          lg:w-[15rem] lg:h-[15rem] lg:left-[45rem] lg:top-[8rem] border-4 border-green-light animate-trans-right" alt="" />

          </div>

        </div>
      </div>
      <div className="flex flex-col gap-3 relative top-12 md:top-[-6.75rem] md:left-[3.5rem] lg:left-[18rem] ">
        <h1 className="text-2xl font-bold text-black leading-7 ml-3 mt-6 lg:text-[39px]">Hi, I'm Soukaina</h1>
        <p className="text-[20px]   text-gray-700 font-semibold ml-3 mt-[-7.5px] lg:text-[22px]">FullStack Developer</p>
        <p className="text-gray-600 text-[20px] ml-3 leading-6 md:w-[17.5rem] ">
          High level of knowledge in web <br />
          development, having the privilege of collaborating with diverse teams
        </p>
        <div className=''>
          <button type="button" class="text-white bg-green-light ml-3   border border-gray-200 focus:ring-4 focus:outline-none
           focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center 
           lg:px-4 lg:py-[2px]
            ">
            <a href="cv.pdf" download className='flex flex-row gap-2 '>


            </a>
            <a href="mailto:soukainamourabit@outlook.fr" className='flex flex-row gap-2 md:p-2'> Contact Me</a>
          </button>

        </div>
      </div>



    </div>
  );
}

export default Home;
