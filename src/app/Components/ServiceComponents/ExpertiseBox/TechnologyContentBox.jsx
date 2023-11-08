import React from 'react';
import { ImCheckmark } from 'react-icons/im';

const TechnologyContentBox = ({ currentTab, expertise }) => {
  const currentTechData = expertise?.filter((exp) => exp.technology === currentTab)[0]?.data;
  return (
    <div className='flex flex-col md:flex-row gap-[70px]'>
      <div className='w-full md:w-1/2'>
        <img src={currentTechData?.image} alt={currentTechData?.title} className='md:p-[40px] border-[1px] border-[#707070]' />
      </div>
      <div className='md:w-full'>
        <h2 className='text-secondary font-[700] mb-[20px] text-[32px]'>{currentTechData?.title}</h2>
        {currentTechData?.description?.map((desc, index) => {
          return (
            <p className='leading-[1.6] text-[18px] text-[#595a5b] font-[600] mt-6' key={index}>
              {desc}
            </p>
          );
        })}
        {currentTechData?.workList && (
          <div>
            <h3 className='text-primary font-[700] mt-5'>{currentTechData.workList.title}</h3>
            <ul>
              {currentTechData.workList.list?.map((l, index) => {
                return (
                  <div className='pl-5' key={index}>
                    <ImCheckmark className='text-secondary absolute mt-1' />
                    <li className='text-primary font-[700] ml-6 m-3'>{l}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyContentBox;
