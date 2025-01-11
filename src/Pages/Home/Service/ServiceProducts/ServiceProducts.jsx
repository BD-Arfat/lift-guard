import React from 'react';

const ServiceProducts = ({service}) => {
    const {image, name,proposition} = service;
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt="Service 1"
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        {proposition}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceProducts;