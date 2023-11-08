import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';



const AboutVisionBox = ({image, content, visionPoints}) => {
  return (
    <div className="bg-blue-50 p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-32" id='vision'>
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center">
        <div className="xl:w-1/2 flex-shrink-0 relative flex xl:justify-end justify-center">
          <img
            src={image}
            alt="Vision Image"
            className="h-auto w-3/4 object-cover"
          />
        </div>
        <div className="xl:w-1/2 p-4 md:p-10 bg-white">
          <div className="text-primary font-semibold text-lg mb-5">Our Vision</div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6">
            {content}
          </h1>
          <ul className="list-outside list-none">
            {visionPoints.map((vision, index) => (
              <li key={index} className="mb-4 flex items-start">
                <BiSolidRightArrow className="mr-3 w-10 h-10 font-bold text-primary" />
                {vision}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutVisionBox;
