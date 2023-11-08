import React from 'react';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import { BsFillCaretRightFill } from 'react-icons/bs';

const JobPostData = ({ postData }) => {
    return (
        <div className='flex justify-center'>
            <div className="mt-4 w-full md:w-[93%]">
                <div className='flex flex-col md:flex-row md:justify-start gap-5 text-[16px] md:mb-5'>
                    <div className='flex items-center'>
                        <FaBriefcase className='mr-3 text-secondary  text-xl' /> {postData.experience}
                    </div>

                    <div className='flex items-center '>
                        <FaLaptopCode className='mr-3 text-secondary text-xl' /> {postData.employmentType}
                    </div>
                </div>
                <div className='py-2 text-light bg-[#f9f9f9] pr-2 md:leading-[36px] text-[16px] md:text-[18px] md:mb-7 pl-1'>
                    {postData.jobDescription}
                </div>
                <div >
                    <h1 className='text-secondary text-[24px] md:text-[28px] font-[500]'>Responsibilities:</h1>
                    <ul className='mb-5 text-[16px] md:text-[18px] md:leading-9'>
                        {
                            postData.responsibilities?.map((respson: string, index: number) =>
                                <li className='text-primary flex justify-start items-center ml-3' key={index}>
                                    <BsFillCaretRightFill className='mr-3 text-secondary ' />
                                    {respson}
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div >
                    <h1 className='text-secondary text-[24px] md:text-[28px] font-[500]'>Requirements:</h1>
                    <ul className='mb-5 text-[16px] md:text-[18px] md:leading-9'>
                        {
                            postData.requirements?.map((respson: string, index: number) =>
                                <li className='text-primary flex justify-start items-center ml-3' key={index}>
                                    <BsFillCaretRightFill className='mr-3 text-secondary ' />
                                    {respson}
                                </li>
                            )
                        }
                    </ul>
                </div>
                {postData.additionalInformation &&
                    <div className='py-2 text-[#697c86] bg-[#f9f9f9] pr-2 md:leading-[36px] text-[16px] md:text-[18px] md:mb-7 pl-1'>
                       { postData.additionalInformation}
                    </div>
                }
                <button className='bg-secondary rounded-full py-3 px-8 text-white font-bold text-[14px] hover:bg-transparent hover:text-secondary hover:border-secondary hover:border-2 mb-5'>APPLY NOW</button>
            </div>
        </div>
    );
};

export default JobPostData;
