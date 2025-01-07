import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOuts from '../LayOuts/LayOuts';
import Abouts from '../Pages/Abouts/Abouts';
import Services from '../Pages/Services/Services';
import Contact from '../Pages/Contact/Contact';
import OurEquipment from '../Pages/OurEquipment/OurEquipment';
import NotFound from '../NotFound/NotFound';

const Routers = createBrowserRouter([
    {
        path : '/',
        errorElement : <NotFound></NotFound>,
        element : <LayOuts/>,
        children : [
            {
                path : '/Overview',
                element : <Abouts></Abouts>
            },
            {
                path : '/Services',
                element : <Services></Services>
            },
            {
                path : '/OurEquipment',
                element : <OurEquipment></OurEquipment>
            },
            {
                path : '/contact',
                element : <Contact></Contact>
            }
        ]
    }
])

export default Routers;