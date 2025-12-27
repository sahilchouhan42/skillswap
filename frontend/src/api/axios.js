import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const token = localStorage.getItem("token");
  if (user && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
(error)=>{
  return Promise.reject(error)
}

);


export default api