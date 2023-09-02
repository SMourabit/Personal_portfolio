import React from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { BsFillDatabaseFill, BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { GrCode } from 'react-icons/gr';

function Services() {
  return (
    <div className='h-content  '>
      <h2 className='text-center text-[25px] font-bold mb-6 '>Skills</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-4'>

        <div className='rounded-lg w-[13rem] h-[12rem]  bg-gray-600'>
        <BiCodeCurly  className='text-[1.8rem] relative  top-7 left-3'/>
          <h1 className='text-center  font-bold text-[22px]'>
            FrontEnd Dev  </h1>
          

          <p className='text-sm md:text-base lg:text-lg text-gray-500 font-semibold ml-3'>
            developing modern and responsive interfaces using those technologies
            HTML - CSS - JavaScript - TailwindCSS - ReactJs
          </p>
        </div>

        <div className='rounded-lg w-[13rem] h-[12rem]  bg-gray-600'>
        <GrCode className='text-[1.8rem] relative  top-7 left-3'/> 
          <h1 className='text-center  font-bold text-[22px]'>  BackEnd Dev  </h1>

          <p className='text-sm md:text-base lg:text-lg text-gray-500 font-semibold ml-3'>
          Handling data storage, processing requests, and ensuring the smooth functioning of the application's core 
          functionality using 
            PHP - Laravel 
          </p>
        </div>

        <div className='rounded-lg w-[13rem] h-[12rem]  bg-gray-600'>
          <BsFillDatabaseFill className='text-[1.9rem] relative  top-7 left-8'/>
          <h1 className='text-center  font-bold text-[22px]'>  Database </h1>


          <p className='text-sm md:text-base lg:text-lg text-gray-500 font-semibold ml-3'>
          manipulation of data to support the functionality and performance of applications and systems using
            SQL - NoSql  
          </p>
        </div>

        <div className='rounded-lg w-[13rem] h-[12rem] bg-gray-600'>
          <BsFillFileEarmarkCodeFill  className='text-[1.9rem] relative  top-7 left-8'/>
          <h1 className='text-center  font-bold text-[22px]'>  Other </h1>


          <p className='text-sm md:text-base lg:text-lg text-gray-500 font-semibold ml-3'>
  Vs Code -Git - GitHub -MySQL-MongoDb - Figma - Scrum 
          </p>
        </div>
      </div>



    </div>
  );
}

export default Services;
