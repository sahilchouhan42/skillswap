import api from './axios'

export const placeOrder = (data)=>{
    return api.post(`/api/orders/${serviceId}`, data)
}