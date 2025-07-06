const mongoose =require('mongoose');
const userSchema = new mongoose.Schema (
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    lastName: {
      type: String,
      minLength: 3,
      maxLength: 30,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 6,
      max: 70,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    problemSolved: {
      type: [String],
    },
    password:{
      type:String,
      required:true
    }
  },
  {timestamps: true}
);

const User=mongoose.model("user",userSchema)
module.exports=User;