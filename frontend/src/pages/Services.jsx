import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllServices } from '../api/serviceApi.js'
import Navbar from '../components/Navbar.jsx'

const Services = () => {
  const navigate = useNavigate()
    const [services, setServices]=useState([])

    useEffect(()=>{
        fetchServices()
    }, [])

    const fetchServices = async ()=>{
        try {
            const res = await getAllServices();
            setServices(res.data.services||[])
        } catch (error) {
            alert('Failed to load services')
        }
    }
  return (
    <>
      <Navbar />
      <div className='bg-slate-300 min-h-screen p-6'>
        <h2 className='text-3xl font-bold text-slate-800 mb-6'>Available Services</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {services.map((service)=>(
                <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer p-6 flex flex-col justify-between' key={service._id} onClick={()=>navigate(`/services/${service._id}`)}>
                    <h3 className='text-xl font-semibold text-slate-800 mb-2'>{service.title}</h3>
                    <p className='text-slate-500 text-sm'>{service.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                    <p className="text-indigo-600 font-bold text-lg">Rs: {service.price}</p>
                    <small className="text-slate-400 text-sm">By {service.freelancer?.name}</small>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Services
