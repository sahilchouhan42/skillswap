import React, { useEffect, useState } from 'react'
import {
  getClientOrders,
  getFreelanceOrders,
  updateOrderStatus
} from '../api/orderApi'
import Navbar from '../components/Navbar'

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-700',
  accepted: 'bg-blue-100 text-blue-700',
  completed: 'bg-emerald-100 text-emerald-700'
}

const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      let res
      if (user.role === "client") {
        res = await getClientOrders()
      } else {
        res = await getFreelanceOrders()
      }
      setOrders(res.data.orders || [])
    } catch (error) {
      alert("Failed to load orders")
    }
  }

  const handleStatusChange = async (orderId, status) => {
    try {
      await updateOrderStatus(orderId, status)
      fetchOrders()
    } catch (error) {
      alert("Status update failed")
    }
  }

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            My Orders
          </h2>

          {orders.length === 0 ? (
            <p className="text-slate-500 text-center">
              No orders found
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left text-slate-500 border-b">
                    <th className="py-3">Service</th>
                    <th>Price</th>
                    <th>Status</th>
                    {user.role === "freelancer" && <th>Action</th>}
                  </tr>
                </thead>

                <tbody>
                  {orders.map(order => (
                    <tr
                      key={order._id}
                      className="border-b hover:bg-slate-50 transition"
                    >
                      <td className="py-4 font-medium text-slate-800">
                        {order.service?.title}
                      </td>

                      <td className="text-slate-600">
                        ₹ {order.service?.price}
                      </td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold capitalize
                          ${statusStyles[order.status]}`}
                        >
                          {order.status}
                        </span>
                      </td>

                      {user.role === "freelancer" && (
                        <td>
                          <select
                            value={order.status}
                            onChange={(e) =>
                              handleStatusChange(order._id, e.target.value)
                            }
                            className="border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="pending">Pending</option>
                            <option value="accepted">Accepted</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default MyOrders
