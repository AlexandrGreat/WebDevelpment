import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import CallbackPage from './Pages/CallbackPage';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"callback",
    element:<CallbackPage/>
  },
  {
    path:"products",
    element:<ProductPage/>
  },
  {
    path:"about",
    element:<AboutPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);

reportWebVitals();