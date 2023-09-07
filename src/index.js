import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';
import {HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 className='errorPara'>not available</h1>,
  },
  {
    path: "/Html",
    element: <Html />,
  },
  {
    path: "/Css",
    element: <Css />,
  },
  {
    path: "/Javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
