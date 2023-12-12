import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Resources from "./Pages/Resources";
import Layout from './components/Layout/Layout.jsx';
import Products from "./Pages/Products";
import GalleryPage from './Pages/GalleryPage';
import SolarPhotovoltaic from './Pages/SolarPhotovoltaic.jsx';
import PumpingSolutions from './Pages/PumpingSolutions.jsx';
import SolarThermotechnology from './Pages/SolarThermotechnology.jsx';
import STPETP from './Pages/STPETP.jsx';

const App = () => {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <Layout/>,
          children: [
            {
              path: "",
              element: <Home />
            },
            {
              path: "about",
              element: <AboutUs />
            },
            {
              path: "contact",
              element: <ContactUs />
            },
            {
              path: "products",
              element: <Products />,
            },
            {
              path: "resources",
              element: <Resources/>
            },
            {
              path:"gallery",
              element:<GalleryPage/>
            },
            {
              path:"solarphotovoltaic",
              element:<SolarPhotovoltaic/>
            },
            {
              path:"pumpingSolutions",
              element:<PumpingSolutions/>
            },
            {
              path:"solarthermotechnology",
              element:<SolarThermotechnology/>
            },
            {
              path:"stpetp",
              element:<STPETP/>
            }
          ]
        }
      ])
  return (
    <div><RouterProvider router={router} primary={false} /></div>
  )
}

export default App;

