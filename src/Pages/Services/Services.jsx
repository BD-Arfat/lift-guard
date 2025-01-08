import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image2 from '../../assets/our-service-1 (2).jpg'
import image1 from '../../assets/our-service-1 (1).jpg'
// import image3 from '../../assets/ca-image-1.jpeg'

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
            once: true, // একবারই অ্যানিমেশন হবে
        });
    }, []);
    return (
        <>
            <h2 className="text-3xl font-bold text-yellow-400 text-center pt-24 ">OUR SERVICE</h2>
            <hr className="border border-black h-1 bg-black w-56 mx-auto mt-1 mb-10" />
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

            <section data-aos="fade-up" className="bg-gray-50 py-16">

                <div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-800 leading-snug text-center">
                            Ensure Safety and Quality with Our NDT Services
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-10  w-11/12 mx-auto ">

                        <div className="shadow-lg rounded-md bg-white p-6 border-t-4 border-yellow-500 w-full">
                            <h2 className="font-bold text-xl text-gray-700 mb-4 uppercase">Our NDT Services</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We offer a comprehensive range of NDT services tailored to your needs:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                <li>Ultrasonic Testing (UT): Detect internal flaws and material thickness with precision.</li>
                                <li>Radiographic Testing (RT): Identify hidden defects using advanced imaging techniques.</li>
                                <li>Magnetic Particle Testing (MT): Surface and near-surface flaw detection for ferromagnetic materials.</li>
                                <li>Liquid Penetrant Testing (PT): Highlight surface defects with visible or fluorescent dyes.</li>
                            </ul>
                        </div>
                        {/* card number 2 */}
                        <div className="shadow-lg rounded-md bg-white p-6 border-t-4 border-yellow-500 w-full">
                            <h2 className="font-bold text-xl text-gray-700 mb-4 uppercase">Industries We Serve</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We proudly offer our expert NDT solutions across various industries, including Oil and Gas, Aerospace, Construction, Power Generation, Manufacturing, and Automotive.
                            </p>

                            {/* <!-- Contact Information --> */}
                            <div className="mt-6 text-gray-600">
                                <p>📞 <span className="font-bold">01321229107</span></p>
                                <p>📩 <span className="font-bold">solutionliftguard@gmail.com</span></p>
                            </div>

                            <p className="mt-6 text-yellow-600 font-semibold">
                                Partner with us for peace of mind and the assurance of quality. Your safety is our priority!
                            </p>
                        </div>



                    </div>
                </div>

                {/* Footer Section */}
                
            </section>


        </>
    );
};

export default Services;
