import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/user.route.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/users',userRoutes)

app.get('/',(req,res)=>{
  res.send("Welcome to the Server")
})
export default app
