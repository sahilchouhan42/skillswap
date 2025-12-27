import api from './axios'

export const placeOrder = (serviceId)=>{
    return api.post(`/api/orders/${serviceId}`)
}

export const getClientOrders = ()=>{
    return api.get('/api/orders/client/my-orders')
}

export const getFreelanceOrders = ()=>{
    return api.get('/api/orders/freelancer/my-orders')
}

export const updateOrderStatus = (orderId, status)=>{
    return api.put(`api/orders/${orderId}/status`, {status})
}