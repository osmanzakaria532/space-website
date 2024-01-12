import React from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-800 text-white relative z-50 px-5">
                <section className="max-w-[1200px] mx-auto text-white">
                    <div className="grid sm:grid-cols-3 py-5">
                        {/* first col */}
                        <div className="py-8 px-4">
                            <h2 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
                                Be Ready To Grow
                            </h2>
                            <p>
                                Get Exclusive{" "}
                                <span className="font-bold">Update</span>{" "}
                                straight to your inbox.
                            </p>
                            <div className="flex items-center h-10">
                                <input
                                    type="text"
                                    className="py-1 px-3 w-full h-full inline-block focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-gray-800 border-2 border-gray-200 rounded-s-md"
                                    placeholder="Email"
                                />
                                <button className="primary-botton rounded-s-none rounded-e-md">
                                    OK
                                </button>
                            </div>
                        </div>
                        {/* second col */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 mb:pl-10">
                            <div className="">
                                <div className="py-8 px-4">
                                    <h4 className="text-xl font-bold mb-3 ">
                                        Quick Links
                                    </h4>
                                    <ul className="flex flex-col gap-3 capitalize">
                                        <li>
                                            <a href="#">home</a>
                                        </li>
                                        <li>
                                            <a href="#">about</a>
                                        </li>
                                        <li>
                                            <a href="#">services</a>
                                        </li>
                                        <li>
                                            <a href="#">login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <div className="py-8 px-4">
                                    <h4 className="text-xl font-bold mb-3 ">
                                        Quick Links
                                    </h4>
                                    <ul className="flex flex-col gap-3 capitalize">
                                        <li>
                                            <a href="#">home</a>
                                        </li>
                                        <li>
                                            <a href="#">about</a>
                                        </li>
                                        <li>
                                            <a href="#">services</a>
                                        </li>
                                        <li>
                                            <a href="#">login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <div className="py-8 px-4">
                                    <h4 className="text-xl font-bold mb-3 ">
                                        Quick Links
                                    </h4>
                                    <ul className="flex flex-col gap-3 capitalize">
                                        <li>
                                            <a href="#">home</a>
                                        </li>
                                        <li>
                                            <a href="#">about</a>
                                        </li>
                                        <li>
                                            <a href="#">services</a>
                                        </li>
                                        <li>
                                            <a href="#">login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* bottom section */}
                    <div className="flex justify-between items-center py-6 border-t-2 border-t-gray-400">
                        <span className="text-sm text-gray-400">
                            copyright © 2024 by TCJ
                        </span>
                        <div className="flex justify-center items-center gap-3 pb-4">
                            <a href="#">
                                <FaInstagram className="text-4xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-4xl" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-4xl" />
                            </a>
                        </div>
                        <span className="text-sm text-gray-400">
                            <ul className="flex items-center gap-3">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </span>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Footer;
