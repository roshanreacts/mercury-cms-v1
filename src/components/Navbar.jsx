"use client";
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { checkTokenExpiry, clearTokenCookie, getLoggedInUserIdFromCookie } from "~/utilis/cookie";
import { useRouter } from "next/navigation";
import store from "~/store";
import { GET_SINGLE_USER } from "~/utilis/queries";


const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();
  
  useEffect(() => {
    let expired;
    expired = checkTokenExpiry()

    
    if (expired) {
      setLoggedIn(false)
      router.push('/login');
    }
    else {
      const idFromCookie = getLoggedInUserIdFromCookie();
      (async()=>{
        await store.getLoggedInUser(GET_SINGLE_USER, {
          where: {
            id: {
              is: idFromCookie
            }
          }
        }, {
          cache: "no-store" 
        })

      })()
      setLoggedIn(true)
    }
  })

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    clearTokenCookie();
    router.replace('/login');
  }

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

              {
                loggedIn &&
                <div className="relative">
                  <div
                    className="flex items-center hover:text-gray-200"
                    onClick={toggleDropdown}
                  >
                    <BiUserCircle className="text-3xl" />
                  </div>
                  {showDropdown && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none right-3">
                      <div className="py-1" role="none">
                        <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                        {store.loggedInUser?.name}
                        </p>
                        <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        {store.loggedInUser?.email}
                        </Link>
                        <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Settings
                        </Link> 
                        <Link href="/resetPassword" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Reset Password</Link>
                        
                      </div>
                    </div>
                  )}

                </div>

              }

              {
                loggedIn &&
                <div className="border-2 border-gray-200 p-1 rounded-md px-3 hover:text-gray-200 hidden xl:flex" onClick={handleLogout}>
                  <button>Logout</button>
                </div>
              }


            </div>
          </div>

          {
            loggedIn &&
            <div className="relative flex items-center">
              <div
                className="flex items-center mr-6  hover:text-gray-200  xl:hidden"
                onClick={toggleDropdown}
              >
                <BiUserCircle className="text-3xl" />
              </div>
              {showDropdown && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none top-12 right-8 xl:hidden">
                  <div className="py-1" role="none">
                    <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                      {store.loggedInUser?.name}
                    </p>
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      View Profile
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Settings

                    </Link>
                  </div>
                </div>
              )}
            </div>
          }

          {
            loggedIn &&
            <div className="border-2 flex mr-6 items-center self-center border-gray-200 p-1 rounded-md hover:text-gray-200  xl:hidden h-fit" onClick={handleLogout}>
              <FiLogOut />
            </div>
          }

        </nav>
      </section>
    </div>
  );
};

export default Navbar;


