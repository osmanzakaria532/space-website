import React from "react";
import Logo from "../../assets/image/logo.png";

const Navbar = () => {
    return (
        <>
            <div
                data-aos="fade-down"
                className="fixed top-0 right-0 w-full z-[9999] bg-black/10 backdrop-blur-sm py-4 sm:py-0">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div>
                            <a
                                href="#"
                                className="flex items-center gap-4 text-white text-2xl font-bold">
                                <img src={Logo} alt="logo" className="w-10" />
                                <span>TCJ-SPACE</span>
                            </a>
                        </div>
                        <div className="text-white hidden md:block">
                            <ul className="flex items-center gap-6 text-xl py-4 capitalize">
                                <li>
                                    <a href="#">about</a>
                                </li>
                                <li>
                                    <a href="#">technology</a>
                                </li>
                                <li>
                                    <a href="#">galaxy</a>
                                </li>
                                <li>
                                    <a href="#">satellite</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="text-white border-2 border-white px-3 py-1 rounded-md">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
