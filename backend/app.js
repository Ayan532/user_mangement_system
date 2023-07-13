const express=require('express')
const cors=require('cors')
require('dotenv').config({path:'./config/config.env'})
const userRoute=require('./routes/user')
const app=express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:['GET', 'POST','PUT','DELETE']
}))

app.use('/users',userRoute);

module.exports=app