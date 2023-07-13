const mongoose=require('mongoose')
const validator=require('validator')
const userSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:[true,'Please enter a name'],
        trim:true

    },
    email:{
        type:String,
        required:[true,'Please enter a Email'],
        unique:true,
        validate:validator.isEmail,
        trim:true

    },
    phoneNumber:{
        type:Number,
        required:[true,'Please enter a Phone Number'],
        minLength:[10,'Phone Number must be at least 10 digit long'],

    },

    createdAt:{
        type:Date,
        default:Date.now()
    }
})


module.exports=mongoose.model('User', userSchema)
