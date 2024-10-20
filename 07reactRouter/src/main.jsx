import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Layout from './layout.jsx'
import About from './components/about/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfo } from './components/GitHub/GitHub.jsx'


const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element:<Home />,
      }
    ,{
        path:"about",
        element:<About />
    },{
      path:"contact",
      element:<Contact />
    },{
      path:"user/:userid",
      element:<User />
    },{
      path:"github",
      loader:githubInfo,
      element:<Github />
    }]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
