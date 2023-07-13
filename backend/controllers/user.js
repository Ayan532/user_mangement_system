const BigPromise = require("../middleware/BigPromise");
const User = require("../models/User");

exports.createUser=BigPromise(async(req,res)=>{
  
    const {email,name,phoneNumber}=req.body

    if(!name || !email || !phoneNumber){
        return res.status(400).json({
            success:false,
            message:"Please fill all the feilds"
        })
    }

    const user=await User.create({
        email,
        name,
        phoneNumber
    })

    res.status(200).json({
        success:true,
        message:`${user.name} created Successfully`,
       
    })

})

exports.getAllUsers=BigPromise(async(req,res)=>{
  
    
    const user=await User.find({})
    res.status(200).json({
        success:true,
        users:user
    })

})

exports.getUserById=BigPromise(async(req,res)=>{
   
    const {userId}=req.params

    const user=await User.findById(userId)

    if(!user){
       return res.status(400).json({
        success:false,
        message:"User Not Found"
       })
    }
    res.status(200).json({
        success:true,
        user:user
    })

})

exports.updateUser=BigPromise(async(req,res)=>{
    
    const {userId}=req.params
    const {name,email,phoneNumber}=req.body
    const user=await User.findById(userId)

    if(!user){
        return res.status(400).json({
            success:false,
            message:"User Not Found"
           })
    }

    name&&(user.name=name);
    email&&(user.email=email)
    phoneNumber&&(user.phoneNumber=phoneNumber)
  
    await user.save()
   
    res.status(200).json({
        success:true,
        message:`User with id:${userId} has been Updated`
    })

})
exports.deleteUser=BigPromise(async(req,res)=>{
    
    const {userId}=req.params
   
    const user=await User.findById(userId)

    if(!user){
        return res.status(400).json({
            success:false,
            message:"User Not Found"
           })
    }

    await user.deleteOne();

   
    res.status(200).json({
        success:true,
        message:`User with id:${userId} has been deleted`
    })

})