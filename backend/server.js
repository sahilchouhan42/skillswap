import 'dotenv/config'
import connectDB from './src/config/db.js'
import app from './src/app.js'
const port  = process.env.PORT||6500

connectDB()

app.listen(port, ()=>console.log(`Server in running on ${port}`))
