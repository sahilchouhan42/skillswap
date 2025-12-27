import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../utils/auth.js'

const Navbar = () => {
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))
  const token = localStorage.getItem("token") // 🔥 key line

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <h1
        className="text-2xl font-bold text-indigo-600 cursor-pointer"
        onClick={() => navigate('/')}
      >
        SkillSwap
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-6 text-slate-700 font-medium">

        {/* 👇 SHOW ONLY IF LOGGED IN */}
        {token && (
          <>
            <Link to="/dashboard" className="hover:text-indigo-600">
              Dashboard
            </Link>
            <Link to="/services" className="hover:text-indigo-600">
              Services
            </Link>
            <Link to="/my-orders" className="hover:text-indigo-600">
              My Orders
            </Link>

            {user?.role === "freelancer" && (
              <Link
                to="/create-service"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Create Service
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          </>
        )}

        {/* 👇 SHOW ONLY IF NOT LOGGED IN */}
        {!token && (
          <>
            <Link
              to="/login"
              className="text-indigo-600 hover:underline"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
