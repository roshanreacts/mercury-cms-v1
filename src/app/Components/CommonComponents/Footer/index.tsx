import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import FooterDataSection from './FooterDataSection';

const fastLinks= footerData;

const Footer = ({ logo, content, readMoreUrl, facebookLink, linkedinLink, fastLinks}:{logo:string, content:string, readMoreUrl:string, facebookLink:string, linkedinLink:string, fastLinks:any[]}) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="max-w-[90%]">
                <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2">
                    <div className='w-[90%] sm:col-span-2 leading-[24px] font-[400] text-[13px] ml-8 '>
                        <img
                            className="w-28 h-auto mb-2 md:mb-4"
                            src={logo}
                            alt="Vithi Logo"
                        />

                        <h6 className='text-justify'>
                            {content}
                        </h6>
                        <a href={readMoreUrl} className='border-b-2 border-b-gray-600 text-gray-700 font-[600] uppercase'>Read More</a>
                        <div className="mt-4 md:mt-2 flex items-center gap-4">
                            <h2 className="text-primary text-sm font-[700] mt-1">Get Social With Us</h2>
                            <ul className="flex items-center mt-2 text-center mb-4">
                                <li>
                                    <a href={facebookLink}>
                                        <BsFacebook size={30} className='hover:text-secondary text-primary' />
                                    </a>
                                </li>
                                <li>
                                    <a href={linkedinLink}>
                                        <TiSocialLinkedinCircular size={43} className='hover:text-secondary text-primary' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {fastLinks?.map((section, index) => (
                        <FooterDataSection key={index} sectionData={section} />
                    ))}
                </div>
            </div>

            <div className='bg-gradient-to-r from-secondary to-primary text-white rounded-tr-[40px] rounded-tl-[40px] pl-5 w-3/4 p-2 sm:text-xs text-[8px]'>
                <p>COPYRIGHT © 2023, VITHI IT SOLUTIONS. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;