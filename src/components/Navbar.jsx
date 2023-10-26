"use client"
import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div >

      <div className="flex flex-wrap place-items-center w-full">
        <section className="relative mx-auto w-full">
          <nav className="flex justify-between bg-gray-900 text-white w-full">
            <div className="px-5 xl:px-12 py-5 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                Logo Here.
              </a>
              <ul className="flex px-4 mx-auto font-semibold font-heading space-x-12 text-white">
                <li>
                  <a
                    className={`hover:text-gray-200 flex items-center relative text-sm md:text-lg`}
                    href="#"
                    onClick={toggleVisibility}
                  >
                    Websites
                    <span className={`ml-1 text-sm transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                      <AiFillCaretDown />
                    </span>
                  </a>

                  {isExpanded && (
                    <div className='absolute bg-white text-black rounded p-2 cursor-pointer mt-2 px-5'>
                      {/* Websites should populate here */}
                      <p className='border-b-2 border-b-gray-900 p-1'>Vithi It Solutions</p>
                      <p className='border-b-2 border-b-gray-900 p-1'>Vithi It Solutions</p>
                      <p className='border-b-2 border-b-gray-900 p-1'>Vithi It Solutions</p>
                    </div>
                  )}
                </li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5 ">
                <a className="flex items-center hover:text-gray-200" href="#">
                  <BiUserCircle className='text-3xl' />
                </a>
                <div className='border-2 border-gray-200 p-1 rounded-md px-3 hover:text-gray-200'>
                  <button>{1 == 1 ? "Logout" : "Login"}</button>
                </div>

              </div>
            </div>
            <a className="flex items-center mr-6  hover:text-gray-200  xl:hidden" href="#">
              <BiUserCircle className='text-3xl' />
            </a>
            <div className='border-2 flex mr-6 items-center self-center border-gray-200 p-1 rounded-md hover:text-gray-200  xl:hidden h-fit'>
              {1==1 && <FiLogOut/>}
              {/* Later codition should be added */}
            </div>
            {/* <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a> */}
          </nav>

        </section>
      </div>

    </div>
  )
}

export default Navbar
