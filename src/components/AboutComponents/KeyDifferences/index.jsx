import React from 'react';


const About = ({bgImage, content, differences}) => {
  return (
    <div className='relative bg-[#0b163b] h-fit flex justify-center pt-10 'id="key">
        <img src={bgImage} alt="" className='w-full h-full absolute inset-0 object-cover opacity-10' />
      <div className='w-[90%] flex flex-col gap-7'>
        <div className='text-white text-center'>
            <h1 className='font-semibold text-3xl mb-5 '>Key Differentiators</h1> 
            <p className='font-semibold px-10'>{content}</p>
        </div>
        <div className='text-white  '>
            <ul className=' border-spacing-5 grid grid-rows-3 grid-cols-1 md:grid-cols-2 gap-6 p-8'>
                {
                    differences.map((userData)=>{
                        return (
                            <div key={userData.id} className='z-10  bg-opacity-100 bg-white rounded-3xl py-8 px-6 grid grid-cols-4 items-center'>
                                <div className='col-span-1'>
                                    <img src={userData.img} alt={userData.heading} className='w-[70%]' />
                                </div> 
                                <div className='flex flex-col flex-shrink col-span-3'>
                                    <h1 className='text-black font-medium mb-5 capitalize text-xl '>{userData.heading}</h1>
                                    <p className=' text-[#697c86] leading-6 font-normal text-lg'>{userData.content}</p>
                                </div>
                            </div>   
                        )
                    })
                }
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default About;
