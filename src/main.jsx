import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login.jsx'


import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Personblog from './pages/Personblog.jsx'
import Profile from './pages/Profile.jsx'
import Navbar from './components/navbar.jsx'
import Register from './pages/Register.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='login' element={<Login/>} />
<Route path='Dashboard' element={<Dashboard/>} />
<Route path = 'Personblog' element={<Personblog/>} />
<Route path = 'Profile' element={<Profile/>} />
<Route path = 'Register' element={<Register/>} />

    </Routes>
  </BrowserRouter>,
)
