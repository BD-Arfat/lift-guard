import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutsImage from '../../../assets/abouts.jpg';

const Overview = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
            once: true, // একবারই অ্যানিমেশন হবে
        });
    }, []);

    return (
        <section className="bg-gray-100 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black font-oswald uppercase pt-7">
                    About Us
                </h2>
                <hr className="border-t-4 border-black w-24 mx-auto mt-2" />
            </div>

            {/* Content Section */}
            <div data-aos="fade-up" className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 gap-8">
                {/* Text Content */}
                <div  className="md:w-1/2 space-y-6">
                    <p className="text-lg leading-relaxed text-justify font-oswald text-gray-700">
                        Welcome to Liftguard Solutions, a proud sister concern of KR Group and a leading name in safety solutions in Bangladesh. We specialize in innovative and reliable safety technologies for lifting gear and heavy equipment, ensuring the highest standards of workplace safety and accident prevention.
                    </p>
                    <p className="text-lg leading-relaxed text-justify font-oswald text-gray-700">
                        Founded with a mission to revolutionize safety in industrial and construction environments, Liftguard Solutions is committed to designing and delivering cutting-edge solutions that protect personnel and assets during lifting operations. Our services include comprehensive inspection, load testing, and pressure testing for a wide range of equipment, including cranes, forklifts, compressors, and lifting gear.
                    </p>
                </div>

                {/* Image Content */}
                <div  className="md:w-1/2 flex justify-center">
                    <img
                        src={aboutsImage}
                        alt="About Liftguard Solutions"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Additional Info Section */}
            <div data-aos="fade-up" className="mt-16 mx-5  max-w-6xl md:mx-auto">
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed font-oswald text-gray-700">
                        With a team of dedicated engineers, technicians, and safety professionals, we combine expertise and innovation to meet international safety standards. Our state-of-the-art equipment, including high-capacity load cells and tensile testing machines, ensures precision and reliability in every project.
                    </p>
                    <p className="text-lg leading-relaxed font-oswald text-gray-700">
                        Choose Liftguard Solutions for a safer, more efficient workplace. Together, let’s build a future where safety is paramount.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
