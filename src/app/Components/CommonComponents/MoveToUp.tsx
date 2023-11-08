"use client"
import React from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';

const MoveToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4">
      <button onClick={scrollToTop} className='text-3xl font-extrabold z-50 hover:bg-gray-100 text-secondary rounded-full p-2 cursor-pointer '>
        <BsArrow90DegUp />
        {/* <img
          src="https://www.vithiitsolutions.com/images/icon_top.png"
          alt="Move to Top"
          className="w-12 h-12 hover:bg-gray-100 text-white rounded-full p-2 cursor-pointer "
        /> */}
      </button>
    </div>
  );
};

export default MoveToTop;
