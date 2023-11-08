"use client";
import React, { useState } from 'react'
import TabView from './TabView'
import TechnologyContentBox from './TechnologyContentBox';

const ExpertiseBox = ({ expertise }) => {
  const tabs = expertise?.map((e) => {
    return e.technology;
  })
  const [currentTab, setCurrentTab] = useState(tabs ? tabs[0] : "");

  return (
    <div className='w-full flex flex-col items-center justify-center mt-20 mb-24 gap-8' id='tabs'>
      <div className='text-primary text-center font-[600] text-[42px] leading-[60px] w-[80%]'>
        <h1>Our expertise</h1>
      </div>
      <TabView tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className='w-[85%] flex flex-col justify-center'>
        <TechnologyContentBox currentTab={currentTab} expertise={expertise} />
      </div>
    </div>
  )
}

export default ExpertiseBox;
