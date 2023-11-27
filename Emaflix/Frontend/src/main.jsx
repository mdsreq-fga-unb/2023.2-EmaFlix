import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//Páginas

import Home from "./routes/pages/Home.jsx"
import Filter from './routes/pages/Filter.jsx'
import Profile from './routes/pages/Profile.jsx'
import Notification from './routes/pages/Notification.jsx'


import './index.css'
import Player from './routes/pages/Player.jsx'
import Login from './routes/pages/Login.jsx'

const router = createBrowserRouter([
  {
    element: <Login/>,
    path:"/login"
  },
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/filter",
        element: <Filter/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/notification",
        element: <Notification/>
      },
      {
        path: "/player",
        element: <Player/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
