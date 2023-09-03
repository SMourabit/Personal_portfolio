import React from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { BsFillDatabaseFill, BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { GrCode } from 'react-icons/gr';

function Services() {
  return (
    <div className='h-[30rem] animate-showUp md:w-full md:h-[28rem] md:mt-[-5.25rem] ' id='Skills'>
      <h2 className='text-center text-[25px] font-bold mb-6 bg-gradient-to-r from-green-medium from-10% to-green-light to-60% text-transparent bg-clip-text '>Skills</h2>
      <div className=' lg:visible lg:w-full lg:flex lg:justify-center lg:gap-[2.75rem]'>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 place-items-center lg:grid-cols-4 ml-2  lg:w-[59rem]  mt-[-2.75rem]  md:mt-0 '>

          <div className='rounded-lg w-full h-[8rem]
         md:border-4 md:border-green-light md:h-full '>
            <BiCodeCurly className='text-[1.8rem] relative  top-7 left-3 ' />
            <h1 className='text-center  text-[20px]   text-gray-700 font-bold'>
              FrontEnd Dev  </h1>


            <p className='text-sm md:text-base lg:text-lg font-semibold ml-3 mr-4 '>
              Developing modern and responsive interfaces using those technologies
              HTML CSS JavaScript TailwindCSS ReactJs
            </p>
          </div>

          <div className='rounded-lg w-full h-[8rem]   md:border-4 md:border-green-light  md:h-full '>
            <GrCode className='text-[1.8rem] relative  top-7 left-3' />
            <h1 className='text-center text-[20px]   text-gray-700 font-bold'>  BackEnd Dev  </h1>

            <p className='text-sm md:text-base lg:text-lg  font-semibold ml-3 mr-4'>
              Handling data storage, processing requests, and ensuring the smooth functioning of the application's core
              functionality using
              PHP Laravel
            </p>
          </div>

          <div className='rounded-lg w-full h-[8rem]    md:border-4 md:border-green-light  md:h-full '>
            <BsFillDatabaseFill className='text-[1.9rem] relative top-7 left-3' />
            <h1 className='text-center text-[20px]   text-gray-700 font-bold'>  Database </h1>


            <p className='text-sm md:text-base lg:text-lg font-semibold  ml-3 mr-4   '>
              manipulation of data to support the functionality and performance of applications and systems using
              SQL NoSql
            </p>
          </div>

          <div className='rounded-lg w-full h-[8rem]   md:border-4 md:border-green-light  md:h-full '>
            <BiCodeCurly className='text-[1.8rem] relative  top-7 left-3 ' />
            <h1 className='text-center  text-[20px]   text-gray-700 font-bold'>  Other </h1>


            <p className='text-sm md:text-base lg:text-lg font-semibold ml-3 mr-4'>
              Vs Code Git GitHub MySQL Figma MongoDb Scrum
            </p>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Services;
