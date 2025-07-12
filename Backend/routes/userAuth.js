const express=require("express")
const { login, logout, register, adminRegister } =require("../controllers/userAuth");
const { auth } = require("../middleware/userMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const userMiddleware = require("../middleware/userMiddleware");
const authRouter=express.Router()

//Register
authRouter.post("/register",register);
// Login
authRouter.post("/login",login)
// Logout
authRouter.post("/logout",userMiddleware, logout)
// Admin register
authRouter.post("/admin/register",adminMiddleware,adminRegister)
// Get Profile
// authRouter.get("/getProfile",getProfile)

module.exports=authRouter;
