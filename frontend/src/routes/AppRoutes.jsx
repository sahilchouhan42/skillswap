import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../pages/Dashboard'
import Services from '../pages/Services'
import CreateService from '../pages/CreateService'
import ServiceDetail from '../pages/ServiceDetail'
import MyOrders from '../pages/MyOrders'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/services' element={<ProtectedRoute><Services /></ProtectedRoute>} /> 
        <Route path='/create-service' element={<ProtectedRoute><CreateService /></ProtectedRoute>} />
        <Route path='/services/:id' element={<ProtectedRoute><ServiceDetail /></ProtectedRoute>} />
        <Route path='/my-orders' element={<ProtectedRoute><MyOrders /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
