const express=require('express');
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const DBConnection = require('./config/database');
const authRouter= require('./routes/userAuth');
const redisClient = require('./config/redisClient');
const app=express();
dotenv.config();
const PORT=process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use("/user",authRouter)

const initializeConnection=async()=>{
    try {
        await Promise.all([DBConnection(process.env.mongoDB_url),redisClient.connect()])
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("error in connection",error);
    }
}

initializeConnection()


app.get('/',(req,res)=>{
    res.send('Hello World!');
});