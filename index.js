import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import CallbackPage from './Pages/CallbackPage';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from './reducres';
const store=createStore(rootReducer);
const router=createBrowserRouter([
  {
    path:"/",
    element:<Provider store={store}><App/></Provider>,
  },
  {
    path:"callback",
    element:<Provider store={store}><CallbackPage/></Provider>
  },
  {
    path:"products",
    element:<Provider store={store}><ProductPage/></Provider>
  },
  {
    path:"about",
    element:<Provider store={store}><AboutPage/></Provider>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);

reportWebVitals();