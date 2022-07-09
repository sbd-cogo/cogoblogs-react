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
            <Link to='/createBlog' className='fw link-hover'>+BLOG</Link>
            <Link to='/' className='fw link-hover'>HOME</Link>
            <Link to='/signup' className='fw link-hover'>SIGNUP</Link>
            <Link to='/login' className='fw link-hover' >LOGIN</Link>
            <Link to='/about' className='fw link-hover'>ABOUT</Link>
        </div>
      </div>
    </nav>
  )
}
