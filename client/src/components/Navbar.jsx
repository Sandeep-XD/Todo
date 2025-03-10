import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className="container justify-between">
            <div className="home">
                <NavLink className="navbar-brand" to="/">Todo</NavLink>
            </div>
            <div className="flex gap-5">
                <NavLink className="navbar-brand" to="/">About</NavLink>
                <NavLink className="navbar-brand" to="/">Credits</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar