import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/authApi'

const Login = () => {
    const [formData, setFormData] = useState({email: '', password: ''})

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(formData);

        try {
          const res = await loginUser(formData)
          //save token
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user))

          alert("Login Successfull")
          navigate('/dashboard')
        } catch (error) {
         alert(error.response?.data?.message|| "Login Failed") 
        }
    }
  return (
    <div className='min-h-screen bg-slate-400 flex items-center justify-center px-4'>
    <div className='bg-white w-full max-w-md rounded-2xl shadow-lg p-8'>
      <h2 className='text-3xl font-bold text-center text-indigo-600 mb-6'>Login</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input className='w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="email" name='email' placeholder='Email' onChange={handleChange} required />
        <input className='w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="password" name="password" placeholder='Password' onChange={handleChange} required />
        <button className='w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold cursor-pointer' type='submit'>Login</button>
      </form>
      <p className='text-center text-slate-600 mt-6'>
        New user? <Link className='text-indigo-600 ml-1 hover:underline' to='/register'>Register</Link>
      </p>
    </div>
    </div>
  )
}

export default Login
