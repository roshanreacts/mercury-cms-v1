"use client"
import React, { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { BsFilterLeft, BsPostcard } from 'react-icons/bs'
import { RiPagesLine } from 'react-icons/ri'
import { MdOutlinePermMedia } from 'react-icons/md'
import { AiOutlineDown, AiOutlineFileAdd } from 'react-icons/ai';
import { TiArrowUnsorted } from 'react-icons/ti'
import Link from 'next/link'

const websites = ['Vithi It Solutions', 'ABC', 'XYZ'];

const SideBar = () => {
    const [sidebarActive, setSidebarActive] = useState(true);
    const [pageDropdown, setPageDropdown] = useState(false);
    const [websiteDropdown, setWebsiteDropdown] = useState(false);
    const [currentWebsite, setCurrentWebsite] = useState(0);
    return (
        <div className='bg-gray-900 h-full relative'>
            {
                !sidebarActive ?
                    <span
                        className="absolute text-white text-5xl top-[2%] cursor-pointer"
                        onClick={() => setSidebarActive(true)}
                    >
                        <BsFilterLeft className='px-2 bg-gray-900 rounded-br-md rounded-tr-md' />
                    </span>
                    :
                    <div
                        className="sidebar h-full lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
                    >
                        <div className="text-gray-100 text-xl">
                            <div className="p-2.5 mt-1 flex items-center justify-between gap-3 cursor-pointer">
                                <div className='w-full relative'>
                                    <h1 className="font-bold text-gray-200 text-[13px] border-2 rounded-md p-1.5 flex items-center justify-between"
                                        onClick={() => setWebsiteDropdown(!websiteDropdown)}
                                    >
                                        {websites.length > 0 ? websites[currentWebsite] : "Click To Create First Website"}
                                        <span>
                                            <TiArrowUnsorted />
                                        </span>

                                    </h1>
                                    {
                                        websiteDropdown &&
                                        <div className='absolute bg-white text-black w-full overflow-y-scroll z-10 items-center justify-center text-base rounded-md mt-1 p-2'>
                                            {
                                                websites?.map((item, index) =>
                                                    <Link href={`/admin/${item}`}>
                                                        <p key={index} className='p-1 hover:bg-blue-100 rounded-md' onClick={() => {
                                                            setCurrentWebsite(index)
                                                            setWebsiteDropdown(false)
                                                        }}>
                                                            {item}
                                                        </p>
                                                    </Link>

                                                )
                                            }
                                            <Link href='/admin/addwebsite' onClick={() => setWebsiteDropdown(false)} className='m-1 p-1 px-6 border-2 border-blue-700 w-full text-blue-600 rounded-md text-sm'>
                                                + Create Website
                                            </Link>

                                        </div>
                                    }

                                </div>

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
                                <span className={`text-sm ${pageDropdown ? "rotate-180" : ""}`} id="arrow">
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

                        <Link href='/admin/websiteId/page/create'>
                            <div
                                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                            >
                                <AiOutlineFileAdd />
                                <span className="text-[15px] ml-4 text-gray-200 font-bold">Add Page</span>
                            </div>
                        </Link>

                    </div>
            }
        </div>
    )
}

export default SideBar
