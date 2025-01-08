import React, { useEffect, useState } from 'react';
import Equipment from './Equipment';

const OurEquipment = () => {
    const [equipments, setEquipemnts] = useState([]);
    useEffect(() => {
        fetch('OurEquipment.json')
            .then(res => res.json())
            .then(data => setEquipemnts(data));
    }, [])
    return (
        <div className='_logo'>
            <div className='mb-16'>
                <h2 className=" text-3xl font-bold text-yellow-400 text-center pt-24">OUR EQUIPMENT</h2>
                <hr className="border border-black h-1 bg-black w-72 mx-auto mt-1 mb-10"/>
                <div className='md:w-11/12 md:mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        equipments.map(item => <Equipment key={item.id} item={item}></Equipment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurEquipment;