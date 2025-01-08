import React from 'react';

const Team = ({ team }) => {
    const { name, image, proposition } = team;

    return (
        <div className="bg-white rounded-lg shadow-2xl p-6 text-center">
            {/* Profile Image */}
            <img 
                src={image} 
                alt={name} 
                className="w-24 h-24 rounded-full mx-auto"
            />
            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{name}</h3>
            {/* Position */}
            <p className="text-gray-500">{proposition}</p>
            {/* Social Media Icons */}
            <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.349C0 23.407.592 24 1.325 24h11.495v-9.293H9.927V11.07h2.893V8.414c0-2.867 1.751-4.428 4.31-4.428 1.222 0 2.27.091 2.577.132v2.993h-1.768c-1.389 0-1.656.66-1.656 1.63v2.133h3.311l-.433 3.637h-2.878V24h5.637c.732 0 1.325-.593 1.325-1.325V1.326C24 .593 23.407 0 22.675 0z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.379 4.482A13.978 13.978 0 011.671 3.15a4.93 4.93 0 001.523 6.573A4.902 4.902 0 01.964 9.01v.062a4.917 4.917 0 003.946 4.827 4.997 4.997 0 01-2.212.085 4.935 4.935 0 004.604 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 002.411-2.537z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-9.22 19h-3.406v-9.222h3.406v9.222zm-1.703-10.521c-1.141 0-2.07-.929-2.07-2.07s.929-2.07 2.07-2.07 2.07.929 2.07 2.07-.929 2.07-2.07 2.07zm11.922 10.521h-3.406v-4.695c0-1.119-.02-2.56-1.562-2.56-1.562 0-1.802 1.219-1.802 2.479v4.776h-3.406v-9.222h3.272v1.257h.047c.455-.861 1.566-1.767 3.227-1.767 3.448 0 4.089 2.271 4.089 5.227v4.505z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Team;
