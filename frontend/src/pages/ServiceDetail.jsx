import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import { useParams } from 'react-router-dom'
import { placeOrder } from '../api/orderApi'
import Navbar from '../components/Navbar'

const ServiceDetail = () => {
    const {id} = useParams()
    const user = JSON.parse(localStorage.getItem("user"))

    const [service, setService] = useState(null)

    useEffect(()=>{
        fetchService()
    }, [])

    const fetchService = async ()=>{
        try {
            const res =  await api.get(`/api/services/${id}`)
            setService(res.data.service)
        } catch (error) {
            console.log(error.message)
            alert(`Service not found`)
        }
    }

    const handleOrder = async ()=>{
        try {
            await placeOrder(service._id)

            alert('Order Placed successfully')
        } catch (error) {
            console.log(error.message)
            alert("Order failed")
        }
    }


    if(!service) return <h3>Loading...</h3>
  return (
    <>
      <Navbar />
      <div className='p-[20px]'>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <h3>Rs: {service.price}</h3>
        <p>Freelancer: {service.freelancer?.name}</p>
        {user?.role==="client" &&(
            <button onClick={handleOrder}>Place Order</button>
        )}
      </div>
    </>
  )
}

export default ServiceDetail
