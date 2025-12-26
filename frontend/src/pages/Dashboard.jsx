import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
    <Navbar />
    <div className='p-[20px]'>
      <h2>Welcome {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
    </>
  )
}

export default Dashboard
