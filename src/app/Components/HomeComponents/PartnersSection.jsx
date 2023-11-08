"use client"


import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PartnersSection = ({ partners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(partners.length - 1);
    }
  };

  const slideRight = () => {
    if (currentSlide < partners.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(slideRight, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <div className="py-10 flex justify-center mt-10 " style={{backgroundColor: "rgb(246 246 246)"}}>
      <div className="container mx-auto w-[90%] md:w-[60%]">
        <h1 className="text-center text-3xl font-bold mb-8 text-primary ">Our Partners</h1>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${partners.length * 100}%`,
              transform: `translateX(-${currentSlide * (100 / (partners.length))}%)`,
            }}
          >
            {
              partners.map((partner, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[60%] sm:w-1/2 md:w-1/4 lg:w-1/6 p-4 flex items-center`}
                    style={{ flex: `0 0 ${(100 / partners.length).toFixed(2)}%` }}
                  >

                    <img
                      src={partner}
                      alt={`Partner ${index + 1}`}
                      className="h-auto w-[55%] xl:w-[35%] rounded-xl xl:p-4 md:p-3 p-2 mx-auto"
                    />


                  </div>
                )
              }
              )}
          </div>
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 hover:text-gray-700 p-2 rounded-full"
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 hover:text-gray-700 p-2 rounded-full"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
