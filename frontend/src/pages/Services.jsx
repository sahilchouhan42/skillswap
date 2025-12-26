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
      <div className='p-[20px]'>
        <h2>Available Services</h2>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(250px, 1fr))] gap-[15px]'>
            {services.map((service)=>(
                <div className='border border-[#ddd] p-[15px] border rounded-[6px]' key={service._id} onClick={()=>navigate(`/services/${service._id}`)}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <p>Rs: {service.price}</p>
                    <small>By {service.freelancer?.name}</small>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Services
