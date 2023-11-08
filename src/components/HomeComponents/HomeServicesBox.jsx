import React from 'react';



const HomeServicesBox = ({ servicesData, image, title1, title2, description }) => {
    return (
        <div className="min-h-full mt-16 mb-28 flex items-center justify-center ">
            <div className="w-11/12 md:w-10/12 lg:w-7/5 bg-gradient-to-bl from-secondary to-primary pt-7 pr-7 pb-7 pl-7 xl:pb-0 xl:pl-0 rounded-lg shadow-xl ">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
                        <h1 className="text-white text-4xl font-bold mb-4 leading-10">
                            {title1}
                            <br />
                            {title2}
                        </h1>
                        <img
                            src={image}
                            alt="Left Image"
                            className="w-full"
                        />
                    </div>

                    {/* Right box with content and services */}
                    <div className="w-full md:w-2/3 flex flex-col justify-start">
                        <div className="text-white text-2xl font-semibold mb-4">
                            <h2 className="mb-5">{description.title}</h2>
                            <p className="text-base">
                                {description.content}
                                <br />
                                <a
                                    className="text-green-600 border-b-2 border-b-green-600 hover:text-green-400"
                                    href={description.knowMoreUrl}
                                >
                                    know More
                                </a>
                            </p>
                        </div>
                        {/* Services */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            {servicesData.map((service, index) => (
                                <div
                                    key={index}
                                    className="border-l-4 border-l-green-500 p-4 bg-white rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <h3 className="text-black text-lg font-semibold">{service}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServicesBox;
