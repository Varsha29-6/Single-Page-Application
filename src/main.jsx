import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route  ,RouterProvider, createBrowserRouter, createRoutesFromElements,  } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Layout from './Layout'
import Home from './components/Home'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
