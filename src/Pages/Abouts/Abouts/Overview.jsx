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
        <>
            <section className="bg-white container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-center">
                <div className="md:flex mt-28 md:justify-start md:items-center">
                    {/* Text Content */}
                    <div className="md:w-1/2" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-yellow-400 mb-4">ABOUTS</h2>
                        <p className="text-justify">
                            Welcome to Liftguard Solutions, a proud sister concern of KR Group and a leading name in safety solutions in Bangladesh. We specialize in innovative and reliable safety technologies for lifting gear and heavy equipment, ensuring the highest standards of workplace safety and accident prevention.
                        </p>
                        <p className="text-justify">
                            Founded with a mission to revolutionize safety in industrial and construction environments, Liftguard Solutions is committed to designing and delivering cutting-edge solutions that protect personnel and assets during lifting operations. Our services include comprehensive inspection, load testing, and pressure testing for a wide range of equipment, including cranes, forklifts, compressors, and lifting gear.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 mt-8 md:ms-10 md:mt-0 flex items-center justify-center">
                        <div data-aos="fade-left" className="relative w-full max-w-sm md:max-w-md">
                            <img
                                src={aboutsImage}
                                alt="Liftguard Solutions"
                                className="rounded-lg shadow-lg"
                            />
                            {/* Logo Overlay */}
                            <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 bg-white rounded-full p-2 shadow-md">
                                <img
                                    src="https://via.placeholder.com/50" // Replace this with your logo path or link
                                    alt="Logo"
                                    className="w-12 h-12"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div data-aos="fade-up" className="md:w-11/12 md:mx-auto px-8 text-justify md:px-24 mt-10 mb-20">
                <p>
                    With a team of dedicated engineers, technicians, and safety professionals, we combine expertise and innovation to meet international safety standards. Our state-of-the-art equipment, including high-capacity load cells and tensile testing machines, ensures precision and reliability in every project.
                </p>
                <p>
                    Choose Liftguard Solutions for a safer, more efficient workplace. Together, let’s build a future where safety is paramount.
                </p>
            </div>
        </>
    );
};

export default Overview;
