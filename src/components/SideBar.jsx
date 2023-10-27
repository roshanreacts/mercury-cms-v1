"use client"
import React, { useState } from 'react'
import { BiFilter, BiX } from 'react-icons/bi'
import { BsAppIndicator, BsFilterLeft, BsPostcard } from 'react-icons/bs'
import { RiPagesLine } from 'react-icons/ri'
import { MdOutlinePermMedia } from 'react-icons/md'
import { AiOutlineDown } from 'react-icons/ai'
import { PiSidebarSimpleFill } from 'react-icons/pi'

const SideBar = () => {
    const [sidebarActive, setSidebarActive] = useState(true);
    const [pageDropdown, setPageDropdown] = useState(false);
    return (
        <div className='bg-gray-900 h-full relative'>
            {
                !sidebarActive ?
                    <span
                        className="absolute text-white text-5xl top-[20%] cursor-pointer"
                        onClick={() => setSidebarActive(true)}
                    >

                        <BsFilterLeft className='px-2 bg-gray-900 rounded-br-md rounded-tr-md' />

                    </span>

                    :
                    <div
                        className="sidebar h-full lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
                    >
                        <div className="text-gray-100 text-xl">
                            <div className="p-2.5 mt-1 flex items-center justify-between">
                                <div className="px-2 py-1 rounded-md bg-blue-600"><BsAppIndicator /></div>
                                <h1 className="font-bold text-gray-200 text-[15px] ml-3">Admin Actions</h1>
                                <div
                                    className=" cursor-pointer text-2xl"
                                    onClick={() => setSidebarActive(false)}
                                >
                                    <BiX />
                                </div>
                            </div>
                            <div className="my-2 bg-gray-600 h-[1px]"></div>
                        </div>
                        <div
                            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                            onClick={() => setPageDropdown(!pageDropdown)}
                        >
                            <RiPagesLine />
                            <div className="flex justify-between w-full items-center">
                                <span className="text-[15px] ml-4 text-gray-200 font-bold">Pages</span>
                                <span className={`text-sm ${pageDropdown?"rotate-180":""}`} id="arrow">
                                    <AiOutlineDown />
                                </span>
                            </div>
                        </div>
                        {
                            pageDropdown &&
                            <div
                                className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
                                id="submenu"
                            >
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Home
                                </h1>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Contact Us
                                </h1>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    About Us
                                </h1>
                            </div>
                        }

                        <div
                            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        >
                            <BsPostcard />
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Posts</span>
                        </div>
                        <div
                            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        >
                            <MdOutlinePermMedia />
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Media</span>
                        </div>
                        <div className="my-4 bg-gray-600 h-[1px]"></div>


                    </div>
            }
        </div>
    )
}

export default SideBar
