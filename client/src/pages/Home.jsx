import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="mt-5">
            <Outlet/>
        </div>
    </div>
  )
}

export default Home