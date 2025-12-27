import express from 'express';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import testRoutes from './routes/testRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "https://skillswap1111.netlify.app/"
]

app.use(cors({
  origin:function(origin, callback){
    if(!origin||allowedOrigins.includes(origin)){
      callback(null, true)
    } else{
      callback(new Error("Not allowed by cors"))
    }
  },
  credentials: true
}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Skillswap is running')
})

app.use('/api/users', userRoutes)
app.use('/api/test', testRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/orders',orderRoutes )
app.use('/api/reviews', reviewRoutes)
export default app