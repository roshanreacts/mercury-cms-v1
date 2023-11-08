import React from 'react';
import CoreValues from './CoreValues';

const CoreValuesList = ({valuesList}) => {
  return (
    <div className='p-12 bg-[#f3f6ff]' id="core">
      <div className='text-center text-3xl font-bold mb-8'>
      <h1>CORE VALUES</h1>
      </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {valuesList.map((data, index) => (
        <CoreValues
          key={index}
          imgUrl={data.imgUrl}
          title={data.title}
          paraGraph={data.paraGraph}
        />
      ))}
    </div>
    </div>
  );
}

export default CoreValuesList;
