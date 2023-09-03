import React from 'react'
import { BsLinkedin, BsTelephone } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineEmail } from 'react-icons/md'

function Contact() {
    let cordonnees=[
        {name:'Call Me ',dec:'0689737196',icon: <BsTelephone className='relative left-4 top-2 text-[26px] text-green-light'/> },
        {name:'Email ',dec:'soukainamourabit@outlook.fr',icon: <MdOutlineEmail className='relative left-4 top-2 text-[26px] text-green-light'/> },
        {name:'Linkdn ',dec:'www.linkedin.com/in/soukaina-mourabit-253a33240',icon: <BsLinkedin className='relative left-4 top-2 text-[26px] text-green-light'/> },
        {name:'Location ',dec:'Temara Maroc',icon: <GrLocation className='relative left-4 top-2 text-[26px]  text-green-light'/> },


]
  return (
    <div className='h-[30rem] md:h-[40rem]  mt-[-1rem] md:mt-0 '>
<h1 className='text-center text-[25px] font-bold mb-6 bg-gradient-to-r from-green-medium from-10% to-green-light to-60% text-transparent bg-clip-text'>Contact Me</h1>
        <div className=' '>
        {cordonnees.map((e)=>{
            return <div className='flex flex-row gap-2 ml-3 mt-4 md:ml-7  '>
            {e.icon}
            <div className='flex flex-col ml-5 '>
                <h1 className='font-semibold'>{e.name}</h1>
                <p className='text-[15px] md:text-base lg:text-lg text-gray-500 font-semibold md:font-medium'>{e.dec}</p>
            </div>
            </div>
        })}
        </div>

    </div>
  )
}

export default Contact
