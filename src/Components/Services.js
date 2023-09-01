import React from 'react';
import { BsFillDatabaseFill } from 'react-icons/bs';

function Services() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {/* Three equal-sized divs */}
      <div className='bg-white border border-gray-300 rounded w-[12rem] h-[10rem]'>
      {/* <SiJavascript /> */}
      </div>
      <div className='bg-white border border-gray-300 rounded p-4'>
      </div>
      <div className='bg-white border border-gray-300 rounded p-4'>
        <BsFillDatabaseFill />
      </div>
    </div>
  );
}

export default Services;
