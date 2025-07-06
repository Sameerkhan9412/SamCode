const express=require("express")
const { login, logout, register } =require("../controllers/userAuth");
const authRouter=express.Router()

//Register
authRouter.post("/register",register);
// Login
authRouter.post("/login",login)
// Logout
authRouter.post("/logout",logout)
// Get Profile
// authRouter.get("/getProfile",getProfile)

module.exports=authRouter;
