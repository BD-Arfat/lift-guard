import React, { useEffect, useState } from 'react';
import Choose from './Choose';

const Why_us = () => {
    const [chooses, setChooses] = useState([]);
    useEffect(() => {
        fetch('choose.json')
            .then(res => res.json())
            .then(data => setChooses(data))
    }, [])
    return (
        <div className='md:w-11/12 md:mx-auto'>
            <section class=" py-20">
                <div class="container mx-auto px-4">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold mb-6">Why Choose Liftguard Solutions?</h2>
                        <p class="text-gray-600 mb-12">At Liftguard Solutions, we are committed to ensuring the highest standards of safety and reliability for your operations. Here's why we stand out:
                        </p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                        {chooses.map(choose => <Choose key={choose.id} choose={choose}></Choose>)}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Why_us;