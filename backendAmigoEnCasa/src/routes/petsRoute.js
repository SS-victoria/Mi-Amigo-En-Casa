import { Router } from "express";
import { petDelete, petList, petListId, petRegister, petUpdate } from "../controllers/petsController.js";


const petsRouter = Router();

petsRouter.post("/register",petRegister);
petsRouter.get("/list",petList);
petsRouter.get("/list/:id",petListId);
petsRouter.put("/update/:id",petUpdate);
petsRouter.delete("/delete/:id",petDelete);


export default petsRouter;
