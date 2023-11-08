import React from 'react';
import CareersBoxBenefit from './CareersBoxBenefit';

const CareerBox = ({bgimage, careersData}) => {
  return (
    <div className='bg-gradient-to-bl from-secondary to-primary p-4 md:p-14 relative'>
      <img
        src={bgimage}
        alt="background image"
        className='w-full h-full absolute inset-0 object-cover opacity-10'
      />
      <div className=''>
        <h1 className='text-[24px] md:text-[36px] leading-[36px] text-center mb-[15px] md:mb-[30px] text-white capitalize font-[700]'>
          A Career With Real Benefits
        </h1>
      </div>
      <div className='grid gap-7 sm:grid-cols-12'>
        {careersData?.map((e, index) => {
          return (
            <div className='col-span-4 md:col-span-4' key={index}>
              <CareersBoxBenefit image={e.image} title={e.title} content={e.content} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerBox;