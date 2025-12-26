import api from "./axios";

export const getAllServices=()=>{
    return api.get('/api/services')
}

export const createService=(data)=>{
    return api.post('/api/services', data)
}