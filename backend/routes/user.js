const express=require('express')
const userController=require('../controllers/user')
const router=express.Router()

router.route("/").post(userController.createUser)
router.route("/").get(userController.getAllUsers)
router.route("/:userId").get(userController.getUserById)
router.route("/:userId").put(userController.updateUser)
router.route("/:userId").delete(userController.deleteUser)



module.exports=router