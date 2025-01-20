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
            <div
                class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <img src={image} class="w-full mb-3" />
                <div class="p-4 pt-2">
                    <div class="mb-8">

                        <a href="#" class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">{name}</a>
                        <p class="text-gray-700 text-sm">{proposition}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceProducts;
