import "./App.css";
import {useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';



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
])

function App() {
  const {theme} = useContext(ThemeContext);

  return (
  <div className={`${theme}`}>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
