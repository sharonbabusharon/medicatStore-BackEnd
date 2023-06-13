//1 automattically load .env files into our project

require('dotenv').config()

//2 import express
const express=require('express')

//5 import cors
const cors=require('cors')

//6 import db
require('./db/connection')

//import router
const router=require('./routes/router')


//3 create a server app
const server=express()


//to store port number
const PORT=5000

//6 use in server application
server.use(cors())
server.use(express.json())
server.use(router)

//route -request to localhost
server.get('/',(req,res)=>{
	res.status(200).json('E-Commerse serveice responese')
})

//4 to run server
server.listen(5000,()=>{
	console.log("server has started on port 5000");
})




