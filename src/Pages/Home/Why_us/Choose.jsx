import { icon } from "leaflet";

const Choose = ({ choose, alignment, ...props }) => {
    const { name, proposition, icon, id } = choose;
    return (
        <div
            {...props}
            className={`mb-8 flex justify-between items-center w-full ${alignment === 'left' ? 'flex-row-reverse' : ''}`}
        >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{id}</h1>
            </div>
            <div className="order-1 font-oswald bg-blue-950 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h1 className="text-2xl">{icon}</h1>
                <h3 className="mb-3 font-bold mt-3 text-gray-300 text-xl">{name}</h3>
                <p className="text-gray-300 leading-tight">{proposition}</p>
            </div>
        </div>
    );
};

export default Choose;
