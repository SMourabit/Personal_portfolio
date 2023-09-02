
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
function Header() {

  const [isClicked, setClicked] = useState({ menuIcon: true, exitIcon: false });

  let Toggle = () => {
    isClicked.menuIcon ? setClicked({ menuIcon: false, exitIcon: true }) : setClicked({ menuIcon: true, exitIcon: false });

  };
  return (
    <div >
      <div className="fixed bottom-[88px] w-full border-t-[2px]   bg-white h-[2.5rem] z-20">
        <h1 className="font-bold p-5 mt-[-0.8rem]">SM</h1>
        <button className="text-2xl absolute bottom-[0.5rem] right-2  z-40" onClick={() => { Toggle(); }}>
          {isClicked.menuIcon ? (<GiHamburgerMenu className="lg:hidden" />) : (<MdOutlineClose className="lg:hidden " />)}
        </button>

        {isClicked.menuIcon}
        {isClicked.menuIcon ? " "
          :
          <div className={`flex justify-center h-10 z-20 	fixed bottom-[6.5rem] p-8 w-full animate-showUp bg-white `}>
            <ul className="flex gap-7">
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
           
            </ul>
          </div>



        }
        {/* For Large Screens */}
        <div className="hidden md:hidden  lg:flex relative top-[-5rem] justify-center w-[100%] h-28
         items-center font-semibold lg:ml-[9rem] lg:text-[17px]">
          {/* <ul className="flex flex-row gap-[7rem]  mt-[-3rem] lg:mr-[18rem] ">

          <Link to="/" className='hover:text-bg-darkRed duration-500'>HOME </Link>
          <Link to="/about" className='hover:text-bg-darkRed duration-500'>ABOUT</Link>
          <Link to="/contact" className='hover:text-bg-darkRed  duration-500'>CONTACT</Link>

          </ul> */}


        </div>

      </div>
    </div>
  );
}

export default Header;