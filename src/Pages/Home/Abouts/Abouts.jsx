import React, { useEffect } from 'react';
import image from '../../../assets/abouts2.jpeg'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Abouts = () => {
     useEffect(() => {
            AOS.init({
                duration: 2000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
                once: true, // একবারই অ্যানিমেশন হবে
            });
        }, []);
    return (
        <div className='container mx-auto mb-10 md:mt-32'>
            <div className='lg:flex lg:items-center md:w-11/12 md:mx-auto gap-5'>
                <div data-aos="fade-right" className='lg:w-1/2'>
                    <h1 className='text-4xl text-blue-950 font-extrabold pb-5 text-center lg:text-left font-oswald mb-2'>About Us</h1>
                    <p className='text-justify mx-5 md:mx-0 text-xl font-oswald '>
                        Welcome to Liftguard Solutions, a proud sister concern of KR Group and a leading name in safety solutions in Bangladesh. We specialize in innovative and reliable safety technologies for lifting gear and heavy equipment, ensuring the highest standards of workplace safety and accident prevention.
                    </p>
                    {/* <p className='mt-3 text-justify mx-5 md:mx-0'>
                        Founded with a mission to revolutionize safety in industrial and construction environments, Liftguard Solutions is committed to designing and delivering cutting-edge solutions that protect personnel and assets during lifting operations. Our services include comprehensive inspection, load testing, and pressure testing for a wide range of equipment, including cranes, forklifts, compressors, and lifting gear
                    </p> */}
                    <Link to={'/Overview'}>
                    <button className="flex items-center text-blue-950 w-40 md:w-full lg:w-60 md:mx-0 mb-10 mx-auto justify-center mt-5 gap-2 px-4 py-2 border-2 border-blue-950  bg-white hover:bg-blue-950 hover:text-white rounded-md transition-all duration-200 font-bold">
                        <span className="material-icons text-lg ">arrow_forward</span>
                        <span className='text-[10px] md:text-lg'>View Monre Abouts</span>
                    </button>
                    </Link>
                </div>
                <div data-aos="fade-left" className='md:w-[490px] mx-4 md:mx-auto shadow-2xl rounded-xl'>
                    <img className=' rounded-xl' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Abouts;