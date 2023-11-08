import React from 'react'

const ServiceAboutContentBox = ({ title, heading, para }) => {
    return (
        <div className='flex justify-center items-center flex-col bg-primary p-4 md:p-20'>
            <div className='flex flex-col justify-center gap-4'>
                <h1 className='text-secondary font-bold text-2xl md:text-5xl md:m-6'>
                    {title}
                </h1>
                <p className='text-xl md:text-2xl font-bold text-white mb-10 md:m-6'>
                    {heading}
                </p>
                <p className='text-lg md:text-xl text-white mb-10 md:m-6'>
                    {para}
                </p>
            </div>
        </div>

    )
}

export default ServiceAboutContentBox;