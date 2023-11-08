import React from 'react';



const CareerAboutBox = ({ title, content, contact }: { title: string, content: string, contact: string }) => {
  return (
    // <div className='flex justify-center md:p-10 bg-primary'>
    // <div className='mt-4 flex items-start flex-col '>
    //   <div className='md:text-[40px] leading-[36px] text-secondary text-center font-bold mb-[30px] capitalize mt-0 text-[40px] sm:leading-10'>
    //     <h1>{title}</h1>
    //   </div>
    //   <div className='text-white lg:text-[16px] leading-[32px] md:leading-7 font-[400] p-4'>

    //       <p >{content}</p><br />
    //       <p >{contact}</p>
    //   </div>
    // </div>
    // </div>

    <div className='flex justify-center items-center flex-col bg-primary p-4 md:p-14'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-secondary font-bold text-2xl md:text-3xl md:m-6'>
          {title}
        </h1>
        <p className='text-xl md:text-xl font-bold text-white mb-10 md:m-6'>
          {content}
        </p>
        <p className='text-lg md:text-lg text-white mb-10 md:m-6'>
          {contact}
        </p>
      </div>
    </div>
  );
};

export default CareerAboutBox;