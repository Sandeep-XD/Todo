import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="container justify-between">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <NavLink className="navbar-brand" to="/">About</NavLink>
                <NavLink className="navbar-brand" to="/">Credits</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar