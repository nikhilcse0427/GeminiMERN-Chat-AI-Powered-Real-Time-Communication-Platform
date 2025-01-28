import dotenv from 'dotenv'
dotenv.config()

import http from 'http'
import app from './app.js'
import connectDb from './db/db.js'

const port = process.env.PORT || 8000

const server = http.createServer(app)

connectDb()

server.listen(port,()=>{
  console.log(`server is running on port number ${port}`)
})

