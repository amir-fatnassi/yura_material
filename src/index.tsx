import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Items from './pages/items.tsx';
import Materials from './pages/materials.tsx';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/items",
    element: <Items />,
  },
  // {
  //   path: "/item/:id",
  //   element: <Items />,
  // },
  {
    path: "/materials",
    element: <Materials />,
  },  
  // {
  //   path: "/items",
  //   element: <Material/:id />,
  // },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
