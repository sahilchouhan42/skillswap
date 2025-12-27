import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../api/authApi'

const Register = () => {
    const [formData, setFormData] = useState({name: "", email: "", password: "", role:"client"})

    const handlechange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        console.log(formData);
        try {
          const register = await registerUser(formData);
          alert("Registration Successfulll")
          console.log(register.data)
        } catch (error) {
          alert(error.response?.data?.message||"Register failed")
        }
    }
  return (
    <div className='min-h-screen bg-slate-400 flex items-center justify-center px-4'>
    <div className='bg-white w-full max-w-md rounded-2xl shadow-lg p-8'>
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Register</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input className='w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none' type="text" name='name' placeholder='Name' onChange={handlechange} required />
        <input className='w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none' type="email" name='email' placeholder='Email' onChange={handlechange} required />
        <input className='w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none' type="password" name='password' placeholder='Password' onChange={handlechange} required />
        <select className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" name="role" onChange={handlechange}>
            <option value="client">Client</option>
            <option value="freelancer">Freelancer</option>
        </select>
        <button className="w-full cursor-pointer bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold" type='submit'>Register</button>
      </form>
      <p className="text-center text-slate-600 mt-6">Already have an account ? <Link className="text-indigo-600 ml-1 hover:underline" to='/login' >Login</Link></p>
    </div>
    </div>
  )
}

export default Register
