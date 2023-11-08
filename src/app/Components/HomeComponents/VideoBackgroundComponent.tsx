import Link from 'next/link';
import React from 'react';

const VideoBackgroundComponent = ({videoUrl, title, content}: {videoUrl:string, title: string, content: string}) => {
  return (
    <div className="relative w-full h-80 bg-gradient-to-bl from-[#70aa44] to-[#63AD2ABA]">
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        className="w-full h-full absolute inset-0 object-cover opacity-50"
      ></video>

      <div className="container mx-auto flex flex-col justify-end items-end h-full">
        <div className="p-10 relative z-10">
          <h1 className="text-4xl md:text-5xl xl:text-7xl text-white font-bold mb-4">
            {title}
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-white text-sm md:text-xl mb-6">
             {content}
            </p>
            <Link href='/contact'>
            <button className="bg-secondary hover:bg-primary text-white rounded-full py-2 px-6 md:px-20 text-lg md:text-base">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackgroundComponent;
