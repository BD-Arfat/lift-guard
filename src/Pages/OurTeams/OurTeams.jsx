import React, { useEffect, useState } from 'react';
import Team from './Team';

const OurTeams = () => {
    const [ourTeams, setOurTeam] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setOurTeam(data))
    }, [])
    return (
        <div className='container mx-auto pt-20 px-4 md:px-16'>
            <div>
                <h2 className="text-center text-3xl font-bold text-yellow-500 mt-2">
                    Our Team
                </h2>
                <hr className="border border-black h-1 bg-black w-48 mx-auto mt-1 mb-10" />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20'>
                {
                    ourTeams.map(team => <Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default OurTeams;