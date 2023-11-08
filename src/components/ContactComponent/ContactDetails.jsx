import React from 'react';

const ContactDetails = ({ content, address, phonenumber,landline }) => {
  return (
    <div className='border-solid border-2 border-secondary m-7 bg-white md:p-8'>
      <div className='px-6 pt-6'>
        <h1 className='text-xl leading-[32px] font-[300] mb-[40px] text-primary md:font-[300] md:text-[30px]'>{content}</h1>
      </div>
      <div className='m-16 flex flex-col justify-between md:flex-row gap-5'>
        <div className='mb-3'>
          <h2 className='text-[16px] leading-[21px] uppercase text-secondary tracking-[1] font-[700] mb-1'>CALL US</h2>
          <p className='text-[#444444] font-sans font-[600] text-[16px] md:font-[600] md:text-[20px]'>{phonenumber}</p>
          <p className='text-[#444444] font-sans font-[600] text-[16px] md:font-[600] md:text-[20px]'>{landline}</p>
        </div>
        <div className='mb-3 md:w-[40%]'>
          <h1 className='text-[16px] leading-[21px] uppercase text-secondary tracking-[1] font-[700]'>ADDRESS</h1>
          <h2 className='text-light font-sans font-[600] text-[16px] mb-[2px] md:font-[600] md:text-[20px]'>Corporate Office:</h2>
          <p className='text-light font-sans font-[600] text-[16px] mb-[2px] md:font-[600] md:text-[20px]'>{address.addressWorkingLocation}</p>
        </div>
        <div>
          <h2 className='text-[16px] leading-[21px] uppercase text-secondary tracking-[1] font-[700] mb-1'>MAIL US</h2>
          <p className='text-light font-sans font-[600] text-[16px] mb-[1rem] md:font-[600] md:text-[20px]'>{address.mailus}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails

