import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      
      
      
      <Link to="/">Home</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/login">Login</Link>

      <Link to="/personblog">Person Blog</Link>

      <Link to="/profile">Profile</Link>
<Link to= "/Register">Register</Link>



    </>
  )
}

export default Navbar