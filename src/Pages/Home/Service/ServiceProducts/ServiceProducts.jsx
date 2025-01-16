import React, { useState } from 'react';

const ServiceProducts = ({ service }) => {
    const { image, name, proposition } = service;
    const [showFullText, setShowFullText] = useState(false);

    // Toggle full text visibility
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div>
            <div className="bg-white shadow-md rounded-lg sm:h-[420px] md:h-[340px]  overflow-hidden">
                <img
                    src={image}
                    alt="Service"
                    className="w-96 mx-auto h-52 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                        {name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        {showFullText ? proposition : proposition.slice(0, 50) + '...'}
                        <button
                            onClick={toggleText}
                            className="text-blue-600 hover:underline ml-2"
                        >
                            {showFullText ? 'Show Less' : 'See More'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceProducts;
