import { Router } from "express";
import { loginUser } from "../controllers/loginController.js";


const loginRoute = Router()
loginRoute.post('/login',loginUser)
export default loginRoute