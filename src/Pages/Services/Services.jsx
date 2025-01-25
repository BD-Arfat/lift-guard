import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ndt from '../../assets/ser-1.webp'
import LoadTest from "./LoadTest/LoadTest";
import PressureTest from "./PressureTest/PressureTest";
import AboutNdt from "./AboutNdt/AboutNdt";
import Ndt from "./Ndt/Ndt";
import { FaArrowUp } from "react-icons/fa";
// import image3 from '../../assets/ca-image-1.jpeg'

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
            once: true, // একবারই অ্যানিমেশন হবে
        });
    }, []);

    const scrollToTop = () => {
        const loadTestElement = document.getElementById('loda-test');
        if (loadTestElement) {
            loadTestElement.scrollIntoView({ behavior: 'smooth' })
        }

    }

    return (
        <> <div id="loda-test ">
            <h2 className="text-3xl font-bold text-blue-950 text-center pt-24 font-oswald">OUR SERVICE</h2>

        </div>
            <hr className="border border-black h-1 bg-blue-950 w-56 mx-auto mt-1 mb-10" />
            <LoadTest data-aos="fade-up"></LoadTest>

            {/* more abouts */}

            <PressureTest data-aos="fade-up"></PressureTest>

            <AboutNdt></AboutNdt>

            {/*  */}

            <Ndt data-aos="fade-up"></Ndt>

            {/* Button to scroll to the Banner section */}
            <div className="fixed bottom-5 right-5">
                <button
                    onClick={scrollToTop}
                    className="bg-blue-950 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center"
                >
                    <FaArrowUp size={20} />
                </button>
            </div>
        </>
    );
};

export default Services;
