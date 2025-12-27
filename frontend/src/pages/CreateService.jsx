import React, { useState } from 'react'
import { createService } from '../api/serviceApi.js'
import Navbar from '../components/Navbar'

const CreateService = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: ""
  })

  if (user?.role !== "freelancer") {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Access Denied
      </div>
    )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createService(formData)
      alert("Service created successfully")
    } catch (error) {
      alert("Failed to create service")
    }
  }

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Create New Service
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Service Title
              </label>
              <input
                name="title"
                onChange={handleChange}
                required
                placeholder="e.g. React website development"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                onChange={handleChange}
                required
                placeholder="Describe your service clearly"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Category
                </label>
                <input
                  name="category"
                  onChange={handleChange}
                  required
                  placeholder="Web, Design, Marketing"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
            >
              Create Service
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default CreateService
