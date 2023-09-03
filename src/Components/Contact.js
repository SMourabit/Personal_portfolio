import React from 'react';
import { BsLinkedin, BsTelephone } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';

function Contact() {
  let cordonnees = [
    { name: 'Call Me ', dec: '0689737196', icon: <BsTelephone className='relative left-0 top-6 text-[26px] text-green-light lg:top-5' /> },
    { name: 'Email ', dec: 'soukainamourabit@outlook.fr', icon: <MdOutlineEmail className='relative  left-0 top-6  text-[26px] text-green-light lg:top-5' /> },
    { name: 'Linkdn ', dec: 'www.linkedin.com/in/soukaina-mourabit-253a33240', icon: <BsLinkedin className='relative left-0 top-6  text-[26px] text-green-light lg:top-5' /> },
    { name: 'Location ', dec: 'Temara Maroc', icon: <GrLocation className='relative left-0 top-6  text-[26px]  text-green-light lg:top-5' /> },
  ];

  return (
    <div className='h-[33rem] md:h-[40rem] mt-[-1rem] md:mt-0 lg:h-[19rem]' id='Contact'>
      <h1 className='text-center text-[25px] font-bold mb-6 bg-gradient-to-r from-green-medium from-10% to-green-light to-60% text-transparent bg-clip-text'>Contact Me</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 ml-3 mt-4 md:ml-7 lg:ml-[10rem]	 '>
        {/* i want those 4 divs to be centered in the big div above  */}
        {cordonnees.map((e, index) => (
          <div key={index} className='mb-4 '>
            {e.icon}
            <div className='flex flex-col ml-7  '>
              <h1 className='font-semibold lg:ml-7'>{e.name}</h1>
              <p className='text-[15px] md:text-base lg:text-lg
               text-gray-500 font-semibold md:font-medium'>{e.dec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
