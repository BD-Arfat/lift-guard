import React from 'react';

const Choose = ({ choose }) => {
    const { name, proposition, icon } = choose;
    return (
        <div>
            <div className="w-full px-4 mb-8 font-oswald">
                <div
                    className="rounded-md bg-white shadow-md p-8 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full border-t-[#050bdf] border-t-4 border-l-[#050bdf] border-l-4"
                    style={{ minHeight: '220px' }} // ন্যূনতম উচ্চতা নিশ্চিত করা
                >
                    <div className="text-4xl mb-4">{icon}</div> {/* আইকন */}
                    <h3 className="text-xl font-bold mb-4">{name}</h3>
                    <p className="text-gray-600 mb-4 text-xs">{proposition}</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;
