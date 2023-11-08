"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({
  active,
  logo,
  navItems,
  callButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState({
    state: false,
    item: "",
  });
  const [activeItem, setActiveItem] = useState(active);
  const [animateNavbar, setAnimateNavbar] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateNavbar(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = (itemName) => {
    const obj = { state: true, item: itemName };
    setServicesDropdownOpen(obj);
  };

  const closeServicesDropdown = (itemName) => {
    const obj = { state: false, item: itemName };
    setServicesDropdownOpen(obj);
  };

  return (
    <nav
      className={`fixed top-0 z-50 bg-white w-full ${
        animateNavbar
          ? "transform -translate-y-full transition-transform duration-500 ease-in"
          : "transition-transform duration-300 ease-in-out translate-y-0"
      }`}
    >
      <div className="max-w-screen-2xl mx-6 p-4">
        <div className="flex items-end justify-between">
          <div className="flex-shrink-0 xl:ml-14">
            <img
              src={logo}
              alt="Vithi Logo"
              className="w-16 sm:20 md:w-24 3xl:w-32"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-white hover:text-primary focus:outline-none focus:text-primary"
            >
              {isOpen ? (
                <FaTimes className="text-primary" />
              ) : (
                <FaBars className="text-primary" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } mt-4 md:flex md:items-center md:space-x-6 hidden`}
          >
            <ul className="md:flex 2xl:space-x-8 md:space-x-4 text-base text-primary font-[500] capitalize items-center cursor-pointer z-10">
              {navItems.map((item, index) =>
                item?.serviceTypes ? (
                  <Link href={item.link}>
                  <li key={index}
                    className={`relative text-light ${
                      activeItem === item.activeName
                        ? "text-secondary border-b-2 border-b-secondary"
                        : "text-black"
                    } hover:border-b-2 hover:border-b-secondary`}
                    onMouseEnter={() => toggleServicesDropdown(item.activeName)}
                    onMouseLeave={() => closeServicesDropdown(item.activeName)}
                    onClick={() => setActiveItem(item.activeName)}
                  >
                    <button
                      className={`text-gray-600 dark:text-white hover:text-primary focus:outline-none focus:text-primary ${
                        servicesDropdownOpen ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </button>
                    {servicesDropdownOpen.state &&
                      servicesDropdownOpen.item === item.activeName && (
                        <ul
                          className="absolute bg-white border z-20 border-gray-300 rounded-lg shadow-lg w-72 p-2 text-secondary leading-[22px] font-[400]"
                          onMouseEnter={() =>
                            toggleServicesDropdown(item.activeName)
                          }
                          onMouseLeave={() =>
                            closeServicesDropdown(item.activeName)
                          }
                        >
                          {item.serviceTypes.map((ser, index) => (
                            <Link href={ser.link} key={index}>
                              <li className="px-3 py-2 hover:bg-light hover:text-white text-primary">
                                <a href="#">{ser.name}</a>
                              </li>
                              <hr />
                            </Link>
                          ))}
                        </ul>
                      )}
                  </li>
                  </Link>
                ) : (
                  <Link href={item.link}>
                    <li
                      onClick={() => setActiveItem(item.activeName)}
                      className={`${
                        activeItem === item.activeName
                          ? "text-secondary border-b-2 border-b-secondary"
                          : "text-black"
                      } hover:border-b-2 hover:border-b-secondary`}
                    >
                      {item.name}
                    </li>
                  </Link>
                )
              )}
              {/* 
              <button className="bg-secondary rounded-full px-6 py-2 text-white items-start hover:text-secondary hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary">
                {callButton.title}
              </button> */}
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 p-4">
          <ul className="flex flex-col space-y-4 text-lg   text-primary">
            {navItems.map((item, index) =>
              item?.serviceTypes ? (
                <>
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => toggleServicesDropdown(item.activeName)}
                    onMouseLeave={() => closeServicesDropdown(item.activeName)}
                  >
                    <button
                      className={` dark:text-white hover:text-primary text-light focus:outline-none focus:text-primary ${
                        servicesDropdownOpen ? "text-primary" : ""
                      }` }
                    >
                      {item.name}
                    </button>
                    {servicesDropdownOpen.state &&
                      servicesDropdownOpen.item === item.activeName && (
                      <ul
                        className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg w-64 text-gray-600 p-2"
                        onMouseEnter={() =>
                          toggleServicesDropdown(item.activeName)
                        }
                        onMouseLeave={() =>
                          closeServicesDropdown(item.activeName)
                        }
                      >
                        {item.serviceTypes.map((ser, index) => (
                          <Link href={ser.link} key={index}>
                            <li className="px-3 py-2 hover:bg-gray-100 w-60">
                              <a>{ser.name}</a>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </li>
                  <hr />
                </>
              ) : (
                <Link href={item.link}>
                  <li>{item.name}</li>
                  <hr />
                </Link>
              )
            )}
            {/* 
        <button className="bg-secondary rounded-full p-2 sm:px-6 sm:py-2 text-white items-start hover:text-secondary hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary">
          {callButton.title}
        </button> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
