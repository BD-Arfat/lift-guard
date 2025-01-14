import React from 'react';

const Choose = ({ choose }) => {
    const { name, proposition, data_count, icon } = choose;
    return (
        <div>
            <div className="w-full px-4 mb-8">
                <div
                    className="rounded-md bg-white shadow-md p-8 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full"
                    style={{ minHeight: '220px' }} // ন্যূনতম উচ্চতা নিশ্চিত করা
                >
                    <div className="text-4xl mb-4">{icon}</div> {/* আইকন */}
                    <h3 className="text-2xl font-bold mb-4">{name}</h3>
                    <p className="text-gray-600 mb-4">{proposition}</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;
