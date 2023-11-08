import Link from 'next/link'
import React from 'react'
import { BiHomeAlt } from 'react-icons/bi';

const TopBreadCrum = ({ title, image, navigations }: { title: string, image: string, navigations: string[] }) => {
    return (
        
        <div className='flex flex-col-reverse lg:flex-row justify-center items-start bg-[#f5faff] mt-24'>
            <div className='flex flex-col items-start flex-1 py-12 pl-12 flex-wrap'>

                <div className='text-xl flex justify-start items-center mb-10'>
                    <Link href='/'>
                        <BiHomeAlt className='' />
                    </Link> 
                    
                    
                    {navigations?.map((navigation, index) => (
                        <span key={index}>
                                <span className='mx-2 md:mx-4'>&gt;</span>
                                <span className='text-base  text-secondary hover:text-primary cursor-text'>{navigation}</span>
                        </span>
                    ))    
                    }
                </div>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-primary'>{title}</h1>
            </div>
            <div className='flex justify-end'>
                <img src={image} alt="top image" className='max-w-[90%]' />
            </div>
        </div>
    )
}

export default TopBreadCrum