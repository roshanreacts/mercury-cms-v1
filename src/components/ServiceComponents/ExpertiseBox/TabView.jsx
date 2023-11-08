import React from "react";

const TabView = ({ tabs, currentTab, setCurrentTab }) => {
  return (
    <div className="flex flex-col justify-start items-start  md:flex-row gap-2 md:gap-5 bg-[#f2f2f2] font-[600] text-[18px] capitalize text-[#444444] md:items-center md:justify-between cursor-pointer leading-[1.6] w-[85%]">
      {tabs?.map((tab) => {
        return (
          <div
            className={`pt-[20px] pb-[20px] pr-[20px] pl-[20px] lg:pr-[40px] lg:pl-[40px] ${
              currentTab === tab ? "bg-secondary text-[#fff]" : "text-black"
            } w-full lg:w-fit`}
            onClick={() => setCurrentTab(tab)}
            key={tab} // Ensure each tab has a unique key
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default TabView;
