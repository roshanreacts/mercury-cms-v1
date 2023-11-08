import React from 'react'

const AboutContentBox = ({ title, heading, content }) => {
    return (
        <div className='w-full bg-primary'>
            <div className='flex flex-col items-start justify-center gap-8 md:px-6 p-4 md:p-8 lg:p-16 xl:p-28'>
                <h1 className='text-secondary font-bold text-lg md:text-3xl'>
                    {title}
                </h1>
                <p className=' text-xl md:text-2xl font-bold text-white'>
                    {heading}
                </p>
                <p className='text-sm md:text-xl lg:text-2xl text-white'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default AboutContentBox
