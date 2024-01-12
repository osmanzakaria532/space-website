import React, { useEffect } from "react";
import bgVideo from "./assets/image/earth-bg.mp4";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import Footer from "./components/footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: "1200",
            easing: "ease-in-out",
        });
    }, []);
    return (
        <>
            <div className="h-[700px] relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]">
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <Navbar />
                <Hero />
            </div>

            {/* Services Card Section */}
            <Services />
            <Banner />
            <Banner2 />
            <Footer />
        </>
    );
};

export default App;
