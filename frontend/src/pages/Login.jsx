import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({email: '', password: ''})

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
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
