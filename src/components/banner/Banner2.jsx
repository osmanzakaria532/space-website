import React from "react";

import SatelliteImg_1 from "../../assets/image/satelite2.jpg";

const Banner2 = () => {
    return (
        <>
            <div className="bg-black text-white py-12 relative z-50">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-b-sky-800 border-l-sky-800">
                            <p
                                data-aos="fade-up"
                                className="text-sky-800 uppercase">
                                OUR MISSION
                            </p>
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="uppercase text-5xl">
                                RAPIDCAST
                            </h1>
                            <p data-aos="fade-up" data-aos-delay="500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eos molestiae reprehenderit
                                expedita corporis, non doloremque. Consequatur
                                consectetur quisquam qui sunt. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Eos
                                molestiae reprehenderit expedita corporis, non
                                doloremque. Consequatur consectetur quisquam qui
                                sunt.
                            </p>
                            <button
                                data-aos="fade-up"
                                data-aos-delay="700"
                                className="primary-botton">
                                learn more
                            </button>
                        </div>
                        <div data-aos="fade-up">
                            <img
                                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
                                src={SatelliteImg_1}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner2;
