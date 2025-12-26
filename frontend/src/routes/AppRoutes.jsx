import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../pages/Dashboard'
import Services from '../pages/Services'
import CreateService from '../pages/CreateService'
import ServiceDetail from '../pages/ServiceDetail'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/services' element={<ProtectedRoute><Services /></ProtectedRoute>} /> 
        <Route path='/create-service' element={<ProtectedRoute><CreateService /></ProtectedRoute>} />
        <Route path='/services/:id' element={<ProtectedRoute><ServiceDetail /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
