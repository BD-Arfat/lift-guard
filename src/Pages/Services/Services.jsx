import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image2 from '../../assets/our-service-1 (2).jpg'
import image1 from '../../assets/our-service-1 (1).jpg'

const Services = () => {
    useEffect(() => {
            AOS.init({
                duration: 1000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
                once: true, // একবারই অ্যানিমেশন হবে
            });
        }, []);
    return (
        <>
        <h2 className="text-3xl font-bold text-yellow-400 text-center pt-24 ">OUR SERVICE</h2>
        <hr className="border border-black h-1 bg-black w-56 mx-auto mt-1 mb-10"/>
        <section className="bg-white container mx-auto px-4 md:px-16 md:mb-20 md:flex flex-col md:flex-row items-center justify-center">
        
            <div className="lg:flex md:items-center justify-center md:w-11/12 md:mx-auto gap-10">
                {/* Left: Service List */}
                <div data-aos="fade-right" className="lg:w-1/2">
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <h1 className="font-extrabold text-black text-2xl">Scope Of Inspection & Load Test</h1>
                        <li>Passengers & cargo lift inspection & load test.</li>
                        <li>Man lift inspection & load test.</li>
                        <li>Forklift inspection & load test.</li>
                        <li>Tower crane inspection & load test.</li>
                        <li>Overhead crane inspection & load test.</li>
                        <li>Excavator & wheel loader inspection.</li>
                        <li>Mobile crane inspection & load test.</li>
                        <li>Electric or diesel winch machine inspection & load test.</li>
                        <li>Truck crane inspection & load test.</li>
                        <li>
                            All types of lifting equipment & lifting gear inspection & load
                            test (webbing sling, round sling, chain sling automotive hoist,
                            manual chain block, lever hoist, chain block, lifting pulley, all
                            types of clamps, lifting boom, hydraulic trolley, eye bolt,
                            shackles, etc.)
                        </li>
                    </ul>
                </div>

                {/* Right: Images */}
                <div className=" lg:w-1/2 mt-8 md:mt-0 flex items-center justify-center mb-20">
                    <div data-aos="fade-left" className="relative">
                        <img
                            src={image2} // Replace with your image
                            alt="Service 2"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>


        </section>

        {/* more abouts */}

        <section data-aos="fade-up" className="bg-white container mx-auto px-4 md:px-16 md:mb-20 md:flex flex-col md:flex-row items-center justify-center">
        
            <div className="lg:flex md:items-center justify-center md:w-11/12 md:mx-auto gap-10">
            {/* Right: Images */}
            <div className=" lg:w-1/2 mt-8 md:mt-0 flex items-center justify-center mb-10">
                    <div className="relative">
                        <img
                            src={image1} // Replace with your image
                            alt="Service 2"
                            className="rounded-lg"
                        />
                    </div>
                </div>
                {/* Left: Service List */}
                <div className="lg:w-1/2">
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <h1 className="font-extrabold text-black text-2xl">Scope Of Inspection & Load Test</h1>
                        <li>Passengers & cargo lift inspection & load test.</li>
                        <li>Man lift inspection & load test.</li>
                        <li>Forklift inspection & load test.</li>
                        <li>Tower crane inspection & load test.</li>
                        <li>Overhead crane inspection & load test.</li>
                        <li>Excavator & wheel loader inspection.</li>
                        <li>Mobile crane inspection & load test.</li>
                        <li>Electric or diesel winch machine inspection & load test.</li>
                        <li>Truck crane inspection & load test.</li>
                        <li>
                            All types of lifting equipment & lifting gear inspection & load
                            test (webbing sling, round sling, chain sling automotive hoist,
                            manual chain block, lever hoist, chain block, lifting pulley, all
                            types of clamps, lifting boom, hydraulic trolley, eye bolt,
                            shackles, etc.)
                        </li>
                    </ul>
                </div>

                
            </div>


        </section>

        </>
    );
};

export default Services;
