const app=require('./app')
const connectWithDb = require('./config/db')

connectWithDb()
app.listen(process.env.PORT,()=>{
    console.log(`Server Running at PORT:${process.env.PORT}`)
})