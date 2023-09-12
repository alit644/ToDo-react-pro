import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "./context/ThemeContext";
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';
import {HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


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
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();


reportWebVitals();
