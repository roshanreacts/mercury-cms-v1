import React from 'react'
import HeroCarousel from './HeroCarousel';
import CarouselItem from './CarouselItem';

const Hero = ({carouselData, discussButton}: {carouselData:any[], discussButton:any}) => {
    return (
        <div className='min-w-full mt-36 md:mt-[4.2rem] '>
            <HeroCarousel>
            {carouselData?.map((item, index) => (
                <CarouselItem key={index} {...item} discussButton={discussButton}/>
            ))}
            </ HeroCarousel>
        </div>
    );
}

export default Hero;