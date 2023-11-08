import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const ContentBox = ({ header, para, link }) => {
  return (
    <div className="h-fit font-serif flex flex-col p-4 gap-y-5 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ">
      <h1 className="text-[30px] font-[700] text-[#1e85bd] leading-[42px]">{header}</h1>
      <div className='text-xl '>
        <p>{para}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-4">
        {link?.map((item, index) => (
          <a href="#" key={index} className="text-green-400 text-lg flex items-center font-semibold hover:text-green-600">
            {item}
            <BsArrowUpRight size={15} className="ml-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContentBox;