import React from "react";

import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

import Wave from "../../assets/image/wave.gif";

const ServicesData = [
    {
        title: "sht",
        content: "300-1500km",
        description:
            "Used for astronomical observations, capturing stunning images of the universe.",
        icon: <FaReact className="text-5xl" />,
        aosDelay: "300",
    },
    {
        title: "iss",
        content: "300-1500km",
        description:
            "Used for astronomical observations, capturing stunning images of the universe.",
        icon: <FaShuttleSpace className="text-5xl" />,
        aosDelay: "300",
    },
    {
        title: "gps",
        content: "300-1500km",
        description:
            "Used for astronomical observations, capturing stunning images of the universe.",
        icon: <FaSpaceAwesome className="text-5xl" />,
        aosDelay: "300",
    },
];

const Services = () => {
    return (
        <>
            <div className="bg-black text-white relative z-50">
                <div className="container">
                    <div className="man-h-[400px]">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                            {ServicesData.map((data, index) => (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    className="min-h-[180px] flex flex-col justify-center items-center gap-2 bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto">
                                    {data.icon}
                                    <h2>{data.title}</h2>
                                    <p>{data.content}</p>
                                    <p className="text-sm">
                                        {data.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <img
                            src={Wave}
                            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
