import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './components/menu/menu.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

    },
    {
      path: '/menu',
      element: <Menu />
    }

  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

