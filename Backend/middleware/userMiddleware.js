const jwt=require("jsonwebtoken");
const User = require("../models/user");
const redisClient = require("../config/redisClient");
const userMiddleware=async(req,res,next)=>{
    
    try {
        const {token}=req.cookies;
        if(!token){
            throw new Error("Token is invalid");
        }
        const payload=jwt.verify(token,process.env.jwt_secret)
        const {_id}=payload;
        console.log("token,",payload)
        if(!_id){
            throw new Error("Token is invalid")
        }
        const result=await User.findById(_id);
        if(!result){
            throw new Error("User doesnt exist");
        }
        // check redis block list
        const isBlocked=await redisClient.exists(`token:${token}`)
        if(isBlocked){
            throw new Error("Invalid token");
        }
        req.result=result
        next();
    } catch (error) {
        console.log ('error', error);
    return res.status (500).json ({
      success: false,
      message: 'something went wrong while login',
    });
    }
}

module.exports=userMiddleware