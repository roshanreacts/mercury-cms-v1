import React from "react";
import ContactForm from "./ContactForm";

const FullContactForm = ({ image1,image2 }: { image1: string,image2: string }) => {
  return (
    <div className="grid md:grid-cols-12 items-center bg-primary mb-10">
      <div className="relative md:col-span-4">
      <div className="">
        <img
          src={image1}
          alt="Image 2"
          className="w-[75%] h-auto hidden md:block absolute object-cover z-10 top-16 right-0"
        />
      </div>
      <div className="">
        <img
          src={image2}
          alt="Image 2"
          className="w-[85%] h-auto hidden md:block"
        />
      </div>
      </div>
      <div className="md:col-span-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default FullContactForm;


