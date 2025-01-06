import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOuts from '../LayOuts/LayOuts';
import Abouts from '../Pages/Abouts/Abouts';
import Services from '../Pages/Services/Services';

const Routers = createBrowserRouter([
    {
        path : '/',
        element : <LayOuts/>,
        children : [
            {
                path : '/Overview',
                element : <Abouts></Abouts>
            },
            {
                path : '/Services',
                element : <Services></Services>
            }
        ]
    }
])

export default Routers;