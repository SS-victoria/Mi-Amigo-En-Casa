import express, { json } from "express";
import bodyParser from "body-parser"
import db from './src/database/db.js' 
import cors from 'cors'
import router from "./src/routes/routes.js";


const servidor = express()
servidor.use(bodyParser.json())
servidor.use(bodyParser.urlencoded({extended: true}))

servidor.use(express.static("./public"));
db()
servidor.use(cors())
servidor.use("/api",router)


servidor.listen(3000,()=>{
    console.log("servidor en el puerto 3000")
})

