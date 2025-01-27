import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routers from './Routers/Routers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routers} />
    <div className="floating-name">
      LIFTGUARD SOLUTION
    </div>
  </StrictMode>
);
