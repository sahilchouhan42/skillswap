import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
      <Navbar />

      <div className="bg-slate-300 min-h-screen p-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-2xl shadow-md p-8 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Welcome, {user?.name}
              </h2>

              <p className="text-slate-500 mt-1">
                {user?.email}
              </p>
            </div>

            <span className={`mt-4 sm:mt-0 inline-block px-4 py-2 rounded-full text-sm font-semibold
              ${user?.role === 'freelancer'
                ? 'bg-indigo-100 text-indigo-600'
                : 'bg-emerald-100 text-emerald-600'}
            `}>
              {user?.role}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-slate-500 text-sm mb-2">
                Account Type
              </h4>
              <p className="text-xl font-bold text-slate-800 capitalize">
                {user?.role}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-slate-500 text-sm mb-2">
                Member Since
              </h4>
              <p className="text-xl font-bold text-slate-800">
                Recently Joined
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard
