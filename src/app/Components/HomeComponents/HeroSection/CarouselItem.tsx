import Link from 'next/link';
import React from 'react';

const CarouselItem = ({ title1, title2, description, imageUrl, discussButton }: { title1: string; title2: string; description: string; imageUrl: string, discussButton }) => {
  return (
    <div className="mb-16 animate-fade animate-once animate-duration-500 animate-delay-0 animate-ease-in-out">
      <div className="flex relative flex-col-reverse md:flex-row justify-between md:h-[70vh] h-[80vh] xl:h-[90vh] items-center ">

        <div className="min-h- px-4 md:px-5 lg:px-8 xl:px-16 2xl:px-24  max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-[90%] md:w-full animate-fade-up animate-once animate-delay-100 animate-ease-in-out">

          <div className="flex flex-col justify-center p-4 items-center md:items-start z-10">
            <h1 className="text-2xl sm:text-3xl md:text-3xl xl:text-5xl font-bold leading-10 text-primary ">{title1} {title2}</h1>
            <p className="mt-5 text-lg text-light leading-7 text-justify">{description}</p>

            <Link href={discussButton.link}>
              <button className="mt-5 bg-secondary rounded-full px-6 py-2 text-white hover:text-secondary hover:bg-transparent hover:border-solid hover:border-2 hover:border-secondary items-start">
                {discussButton.title}
              </button>
            </Link>
          </div>

          <div className='absolute -z-10 -bottom-24 lg:-bottom-60 '>
            <video src="http://www.vithiitsolutions.com/images/particles.mp4" autoPlay loop muted
              className='opacity-25 xl:w-[52rem] md:w-[40rem] w-35rem'></video>
          </div>
        </div>
        <div className="z-10 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
          <img src={imageUrl} alt={title1} className="w-[90%] h-auto object-cover animate-fade animate-once animate-duration-[1000ms] animate-delay-[100ms] animate-ease-in" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
