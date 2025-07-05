import { login, register } from "../controllers/userAuth";

const express=express();
const authRouter=express.Router()

//Register
authRouter.post("/register",register);
// Login
authRouter.post("/login",login)
// Logout
authRouter.post("/logout",logout)
// Get Profile
authRouter.get("/getProfile",getProfile)
