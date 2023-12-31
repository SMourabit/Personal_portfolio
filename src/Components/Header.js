
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
function Header() {

  const [isClicked, setClicked] = useState({ menuIcon: true, exitIcon: false });

  let Toggle  = () => {
    isClicked.menuIcon ? setClicked({ menuIcon: false, exitIcon: true }) : setClicked({ menuIcon: true, exitIcon: false });

  };
  return (
      <div className="fixed bottom-0 w-full border-t-[2px]  h-[2.5rem] z-20  md:fixed md:top-0 md:w-[100%] bg-white">
        <h1 className="font-bold p-5 mt-[-0.8rem]">SM</h1>
        <button className="text-2xl absolute bottom-[0.5rem] right-2  z-40" onClick={() => { Toggle(); }}>
          {isClicked.menuIcon ? (<GiHamburgerMenu className="lg:hidden" />) : (<MdOutlineClose className="lg:hidden " />)}
        </button>

        {isClicked.menuIcon}
        {isClicked.menuIcon ? " "
          :
          <div className={`flex justify-center h-10 z-20 	fixed bottom-[2.5rem] p-8 w-full animate-showUp bg-white  md:top-7 `}>      
                <ul className="flex gap-7 md:mt-[-1rem]">
              <li>
                <a href="#Home" className='icon-link  hover:text-bg-darkRed duration-500' title="Home">
                  <BiSolidHome className="text-[26px]" />
                </a>
              </li>
              <li>
                <a href="#About" className='icon-link hover:text-bg-darkRed duration-500' title="Profile">
                  <BsFillPersonFill className="text-[26px]" />
                </a>
              </li>
              <li>
                <a href="#Skills" className='icon-link hover:text-bg-darkRed duration-500' title="Settings">
                  <FiSettings className="text-[26px]"/>
                </a>
              </li>
              <li>
                <a href="#Portfolio" className='icon-link hover:text-bg-darkRed duration-500' title="Projects">
                  <GrProjects className="text-[26px]"/>
                </a>
              </li>
              <li>
                <a href="#Contact" className='icon-link hover:text-bg-darkRed duration-500' title="Projects">
                  <BsFillTelephoneFill className="text-[26px]"/>
                </a>
              </li>
            </ul>
          </div>



        }
        {/* For Large Screens */}
        <div className="hidden md:hidden  lg:flex relative hrefp-[-5rem] justify-center w-[100%] h-28  lg:mr-[18rem]
         items-center font-semibold lg:ml-[9rem] lg:text-[17px]">
          <ul className="flex flex-row gap-11  mt-[-3rem]  lg:mt-[-10rem] lg:text-[19px]">

          <a href="#Home" className='underlineHover'>Home </a>
          <a href="#About" className='underlineHover'>About</a>
          <a href="#Skills" className='underlineHover'>Skills</a>
          <a href="#Portfolio" className='underlineHover'>Projects</a>
          <a href="#Contact" className='underlineHover'>Contact</a>

          </ul>


        </div>

      </div>
  );
}

export default Header;