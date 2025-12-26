import React, { useState } from 'react'
import { createService } from '../api/serviceApi.js'
import Navbar from '../components/Navbar'

const CreateService = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [formData, setFromData] = useState({title:"",description:"", price:"", category:""})

    if(user?.role!=="freelancer"){
        return  <h3 className='text-center'>Access Denied</h3>
    }

    const handleChange = (e)=>{
        setFromData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            await createService(formData);
            alert('Service created')
        } catch (error) {
            console.log(error.response?.data)
            alert("Failed to create service")
        }
    }
  return (
    <>
      <Navbar />
      <div className='p-[20px]'>
        <h2>Create Service</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-[10px] max-w-[400px]' >
            <input  name="title" placeholder='Service title' onChange={handleChange} required />
            <textarea name='description'  placeholder='Description' onChange={handleChange} required/>
            <input type="number" name="price" placeholder='Price' onChange={handleChange} required />
            <input name="category" placeholder='Category' onChange={handleChange}  required  />
            <button>Create</button>
        </form>
      </div>
    </>
  )
}

export default CreateService
