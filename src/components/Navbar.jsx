"use client";
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { checkTokenExpiry } from "~/utilis/cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(!checkTokenExpiry()); 
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  useEffect(()=>{
    if(!loggedIn){
      router.push('/login');
    }
  }, [loggedIn])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-wrap place-items-center w-full">
      <section className="mx-auto w-full">
        <nav className="flex justify-between bg-gray-900 text-white w-full">
          <div className="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
            <Image
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/mercury-logo.png"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className="hidden xl:flex items-center space-x-5 ">
              

              <div
                className="flex items-center hover:text-gray-200"
                onClick={toggleDropdown}
              >
                <BiUserCircle className="text-3xl" />
              </div>
              {showDropdown && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none top-10 right-40">
                  <div className="py-1" role="none">
                    <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                      User Profile
                    </p>
                    <Link href="/profile"className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        View Profile
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Settings

                    </Link>
                  </div>
                </div>
              )}
              <div className="border-2 border-gray-200 p-1 rounded-md px-3 hover:text-gray-200 hidden xl:flex">
                <button>{1 == 1 ? "Logout" : "Login"}</button>
              </div>
            
          </div>
          {
            loggedIn &&
            <a
              className="flex items-center mr-6  hover:text-gray-200  xl:hidden"
              href="#"
            >
              <BiUserCircle className="text-3xl" />
            </a>
          }
          {
            loggedIn &&
            <div className="border-2 flex mr-6 items-center self-center border-gray-200 p-1 rounded-md hover:text-gray-200  xl:hidden h-fit">
              {1 == 1 && <FiLogOut />}
              {/* Later codition should be added */}
            </div>
}
          </div>
          <div
            className="flex items-center mr-6  hover:text-gray-200  xl:hidden"
            onClick={toggleDropdown}
          >
            <BiUserCircle className="text-3xl" />
          </div>
          {/* {showDropdown && (
            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="none">
                <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                  User Profile
                </p>
                <Link href="/profile"className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    View Profile
                </Link>
                <Link href="/settings"className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Settings
                </Link>
              </div>
            </div>
          )} */}
          <div className="border-2 flex mr-6 items-center self-center border-gray-200 p-1 rounded-md hover:text-gray-200  xl:hidden h-fit">
            {1 == 1 && <FiLogOut />}
            {/* Later condition should be added */}
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;


