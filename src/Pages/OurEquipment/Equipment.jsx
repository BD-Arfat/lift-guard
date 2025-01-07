import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Equipment = ({ item }) => {
    const { title } = item;
    useEffect(() => {
        AOS.init({
            duration: 1000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
            once: true, // একবারই অ্যানিমেশন হবে
        });
    }, []);
    return (
        <div data-aos="fade-up" className="flex justify-center py-1 mx-4">
            <div className="bg-white border-4 border-blue-800 rounded-lg shadow-lg p-8 max-w-lg w-full h-52 flex flex-col justify-center items-center hover:shadow-xl transition-all duration-300">
                <h1 className="text-center text-2xl font-extrabold text-gray-800 mb-4">
                    {title}
                </h1>
                <p className="text-center text-sm text-gray-600">
                    {/* You can add more details or description about the equipment here */}
                </p>
            </div>
        </div>
    );
};

export default Equipment;
