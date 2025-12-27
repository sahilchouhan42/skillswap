import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import { useParams } from 'react-router-dom'
import { placeOrder } from '../api/orderApi'
import Navbar from '../components/Navbar'

const ServiceDetail = () => {
  const { id } = useParams()
  const user = JSON.parse(localStorage.getItem("user"))
  const [service, setService] = useState(null)

  useEffect(() => {
    fetchService()
  }, [])

  const fetchService = async () => {
    try {
      const res = await api.get(`/api/services/${id}`)
      setService(res.data.service)
    } catch (error) {
      alert('Service not found')
    }
  }

  const handleOrder = async () => {
    try {
      await placeOrder(service._id)
      alert('Order placed successfully')
    } catch (error) {
      alert(error.response?.data?.message || 'Order failed')
    }
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading service...</p>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen p-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">
              {service.title}
            </h1>

            <p className="text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="border-t pt-4">
              <p className="text-slate-500 text-sm">
                Category: <span className="font-medium">{service.category}</span>
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <p className="text-slate-500 text-sm">Service Price</p>

            <h2 className="text-3xl font-bold text-indigo-600 mb-4">
              ₹ {service.price}
            </h2>

            <div className="border-t pt-4 mb-4">
              <p className="text-slate-500 text-sm">Freelancer</p>
              <p className="font-semibold text-slate-800">
                {service.freelancer?.name}
              </p>
            </div>

            {user?.role === "client" && (
              <button
                onClick={handleOrder}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
              >
                Place Order
              </button>
            )}

            {user?.role !== "client" && (
              <p className="text-center text-slate-400 text-sm mt-4">
                Only clients can place orders
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetail
