import {Router} from 'express'
import userRouter from './userRoutes.js';
import { loginUser } from '../controllers/loginController.js';
import petsRouter from './petsRoute.js';



const router = Router();


router.use('/login',loginUser)
router.use('/user',userRouter)
router.use('/pet',petsRouter)


export default router;