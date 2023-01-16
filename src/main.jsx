import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CampusFM from './pages/CampusFM';
import Collater from './pages/Collater';
import Blog from './pages/Blog';
import WebFont from 'webfontloader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cfm",
    element: <CampusFM />
  },
  {
    path: "/collater",
    element: <Collater />
  },
  {
    path: "/blog",
    element: <Blog />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
