const validate = require("../utils/validator")
const User=require('../models/user')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


/*-----------------------------------------------------
        Register Users
----------------------------------------------------*/
const register=async(req,res)=>{
    // validate the data
    try {
        validate(req.body)
        const {firstName,emailId,password}=req.body;
        // existing user check krne ki need nhi h bcz of uniqueness
        // const existingUser=await User.find({emailId});
        // if(existingUser){
        //     return res.status(200).json({
        //         success:true,
        //         msg:"user is already registered",
        //     })
        // }
        const hashedPassword=await bcrypt.hash(password,10);
        req.body.password=hashedPassword
        const user=await User.create(req.body)
        const userId=user._id;
        const token=jwt.sign({id:user._id,emailId:emailId},process.env.jwt_secret,{expireIn:60*60})
        res.cookie('token',token,{maxAge:60*60*1000})
        res.status(201).json({
            success:true,
            message:"User Registered Successfully"
        })

    } catch (error) {
        console.log("error",error)
        return res.status(500).json({
            success:false,
            message:"something went wrong while registering"
        })
    }
}

/*-----------------------------------------------------------
        Login User
------------------------------------------------------*/
const login=async(req,res)=>{
    try {
        const {emailId,password}=req.body;
        if(!emailId || !password){
            throw new error("All fields are required")
        }
        const user=await User.findOne({emailId});
        if(!user){
            return res.status(200).json({
                success:true,
                message:"please register first"
            })
        }
        const matched=bcrypt.compare(password,user.password)
        if(!matched){
            throw new error("Invalid Credentials")
        }
         res.cookie('token',token,{maxAge:60*60*1000})
        res.status(200).json({
            success:true,
            message:"User Login Successfully"
        })
    } catch (error) {
         console.log("error",error)
        return res.status(500).json({
            success:false,
            message:"something went wrong while login"
        })
    }
}

/*------------------------------------------------------
        User Logout
---------------------------------------------------*/
const logout=async(req,res)=>{
    try {
        req.cookie('token',null);
    } catch (error) {
         console.log("error",error)
        return res.status(500).json({
            success:false,
            message:"something went wrong while logout"
        })
    }
}


module.exports={register,login}