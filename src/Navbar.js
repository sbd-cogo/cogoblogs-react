import React from 'react'
import { Link } from 'react-router-dom'
import logo from './image1.jpeg'
import './css/index.css'
//import SearchForm from './SearchForm'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/' className='left-nav'>
          <img src={logo} alt="logo" className='logo-img' />
          <p className='fw'>BLOGS</p>
        </Link>
        <div className='right-nav'>
            <Link to='/createBlog' className='fw'>+BLOG</Link>
            <Link to='/' className='fw'>HOME</Link>
            <Link to='/signup' >Signup</Link>
            <Link to='/login' >Login</Link>
            <Link to='/about' className='fw'>ABOUT</Link>
        </div>
      </div>
    </nav>
  )
}
