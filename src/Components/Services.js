import React from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { BsFillDatabaseFill, BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { GrCode } from 'react-icons/gr';

function Services() {
  return (
    <div className='h-[30rem] animate-showUp' id='Skills'>
      <h2 className='text-center text-[25px] font-bold mb-6 bg-gradient-to-r from-green-medium from-10% to-green-light to-60% text-transparent bg-clip-text '>Skills</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 place-items-left ml-2  mt-[-2.75rem] '>

        <div className='rounded-lg w-full h-[8rem] '>
          <BiCodeCurly className='text-[1.8rem] relative  top-7 left-3 ' />
          <h1 className='text-center  font-bold text-[22px]'>
            FrontEnd Dev  </h1>


          <p className='text-sm md:text-base lg:text-lg=font-semibold ml-3 mr-4 '>
            Developing modern and responsive interfaces using those technologies
            HTML CSS JavaScript TailwindCSS ReactJs
          </p>
        </div>

        <div className='rounded-lg w-full h-[8rem]  '>
          <GrCode className='text-[1.8rem] relative  top-7 left-3' />
          <h1 className='text-center  font-bold text-[22px]'>  BackEnd Dev  </h1>

          <p className='text-sm md:text-base lg:text-lg text-gray-500 font-semibold ml-3 mr-4'>
            Handling data storage, processing requests, and ensuring the smooth functioning of the application's core
            functionality using
            PHP Laravel
          </p>
        </div>

        <div className='rounded-lg w-full h-[8rem]  '>
          <BsFillDatabaseFill className='text-[1.9rem] relative top-7 left-3' />
          <h1 className='text-center  font-bold text-[22px]'>  Database </h1>


          <p className='text-sm md:text-base lg:text-lg text-gray-500 font-semibold ml-3 mr-4'>
            manipulation of data to support the functionality and performance of applications and systems using
            SQL NoSql
          </p>
        </div>

        <div className='rounded-lg w-full h-[8rem] '>
        <BiCodeCurly className='text-[1.8rem] relative  top-7 left-3 ' />
          <h1 className='text-center  font-bold text-[22px]'>  Other </h1>


          <p className='text-sm md:text-base lg:text-lg text-gray-500 font-semibold ml-3 mr-4'>
            Vs Code Git GitHub MySQL Figma MongoDb Scrum
          </p>
        </div>
      </div>



    </div>
  );
}

export default Services;
