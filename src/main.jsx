import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Experince from './pages/Experince.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/Experince',
        element:<Experince/>,
      },
      {
        path:'/Skills',
        element:<Skills/>,
      },
      {
        path:'/Projects',
        element:<Projects/>,
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
