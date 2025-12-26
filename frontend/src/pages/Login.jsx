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
    <div className='max-w-[400px] m-[100px] m-auto text-center'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-[10px]'>
        <input type="email" name='email' placeholder='Email' onChange={handleChange} required />
        <input type="password" name="password" placeholder='Password' onChange={handleChange} required />
        <button type='submit'>Login</button>
      </form>
      <p>
        New user? <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default Login
