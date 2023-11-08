import React from 'react';

const CoreValue = ({ imgUrl, title, paraGraph }) => {
  return (
    <div className='max-w-7xl'>
      <div className='bg-white rounded-md p-5 md:p-12 2xl:p-16 flex flex-col items-center h-full hover:transform hover:-translate-y-2 transition-transform duration-300'>
        <div className='p-6 2xl:p-8 bg-gradient-to-t from-[#e9e9e9] rounded-full '>
          <img className='w-20  md:w-16' src={imgUrl} alt="image1" />
        </div>
        <h1 className='text-base font-extrabold mt-4 text-primary'>{title}</h1>
        <p className='text-sm mt-4 text-light'>{paraGraph}</p>
      </div>
    </div>
  );
}

export default CoreValue;

