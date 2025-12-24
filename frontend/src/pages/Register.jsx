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
    <div className='max-w-[400px] m-[100px] m-auto text-center'>
      <h2>Register</h2>
      <form className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' onChange={handlechange} required />
        <input type="email" name='email' placeholder='Email' onChange={handlechange} required />
        <input type="password" name='password' placeholder='Password' onChange={handlechange} required />
        <select name="role" onChange={handlechange}>
            <option value="client">Client</option>
            <option value="freelancer">Freelancer</option>
        </select>
        <button type='submit'>Register</button>
      </form>
      <p>Already have an account ? <Link to='/login' >Login</Link></p>
    </div>
  )
}

export default Register
