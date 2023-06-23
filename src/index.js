import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import TemplatePage from "./pages/TemplatePage";
//import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


//
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/templatepage",
        element: <TemplatePage/>,
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

//reportWebVitals();