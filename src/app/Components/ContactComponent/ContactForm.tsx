"use client"
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    inquiry: "",
    message: "",
  });

  const handleInputChange = (e: { target: { id; value; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="relative mx-auto my-4 p-6 rounded-md shadow-md bg-gradient-to-bl from-[#70aa44] to-[#63AD2ABA]">
      <div className="max-w-screen-lg mx-auto my-2 p-6 z-10">
        <h1 className="text-5xl text-center text-white mb-8">Drop Us A Line</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-bold mb-2"
            >
              Enter Your Name:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-white text-sm font-bold mb-2"
            >
              Enter Your Number:
            </label>
            <input
              type="text"
              id="number"
              value={formData.number}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-bold mb-2"
            >
              Enter Your Email:
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="inquiry"
              className="block text-white text-sm font-bold mb-2"
            >
              What Are You Looking For:
            </label>
            <input
              type="text"
              id="inquiry"
              value={formData.inquiry}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white text-sm font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full h-24 border rounded-md py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        <button
          type="button"
          className="block bg-primary hover:bg-transparent text-white hover:text-primary font-bold py-2 px-6 rounded"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;



