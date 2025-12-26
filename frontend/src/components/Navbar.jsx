import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {logout} from '../utils/auth.js'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout=()=>{
        logout()
        navigate('/login')
    }

    const user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
      <nav className='flex justify-between bg-[#222] text-[#fff] py-[15px] px-[25px] '>
        <h3>SkillSwap</h3>
        <div className='flex gap-[10px]'>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/services">Services</Link>
            {user?.role==="freelancer" &&(
              <Link to="/create-service">Create Service</Link>
            )}
            <button className='ml-[10px]' onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
