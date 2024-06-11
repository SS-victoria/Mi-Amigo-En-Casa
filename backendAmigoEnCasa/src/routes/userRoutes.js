import { Router } from "express";
import { userDelete, userList, userListId, userRegister, userUpdate } from "../controllers/usersController.js";



const userRouter= Router()
userRouter.post("/register",userRegister)
userRouter.get("/list",userList)
userRouter.get("/list/:id",userListId)
userRouter.put("/update/:id",userUpdate)
userRouter.delete("/delete/:id",userDelete)


export default userRouter;