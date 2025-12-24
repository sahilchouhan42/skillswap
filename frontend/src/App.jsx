import { useEffect } from 'react'
import api from './api/axios'
import './App.css'
import Login from './pages/Login'
import AppRoutes from './routes/AppRoutes'

function App() {
   useEffect(()=>{
    api.get('/')
    .then(res=>console.log("Backend Connected:", res.data))
    .catch(err=>console.log(err))
   }, [])

  return (
    <>
      <h1>Skill Swap Frontend Started</h1>
      <AppRoutes />
    </>
  )
}

export default App
