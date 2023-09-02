import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function Home() {
  return (
    <div className="flex  bg-green-medium text-green-dark z-0 h-[33rem]">
      <div className='flex flex-row '>
        <div className='flex flex-col absolute top-11 left-2 w-1/4 gap-3
  '>
          <MdOutlineEmail className="text-[36px]" />
          <BsLinkedin className="text-[34px]" />
          <BsGithub className="text-[36px] " />

        </div>
        <div className='w-3/4'>
        <div class="w-20 h-20 rounded-full bg-blue-500 animation">
          
        </div>

        </div>
      </div>
      {/* <div className="text-center ">
        <h1 className="text-4xl font-bold mb-4">Mourabit Soukaina</h1>
        <p className="text-xl">I Am A FullStack Developer</p>
      </div> */}
    </div>
  );
}

export default Home;
