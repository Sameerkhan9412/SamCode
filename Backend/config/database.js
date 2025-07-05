const mongoose = require('mongoose');
const DBConnection=async(url)=>{
    try {
        await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (error) {
       console.log("error in connection",error); 
    }
    
}
module.exports=DBConnection;