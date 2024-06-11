import mongoose from "mongoose";

const user = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        maxlength:30
    
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:30
    
    },
    password:{
        type:String,
        required:true,
        maxlength:100

    
    },
    rol: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user'
    }
})
const usersModels= mongoose.model('user',user)

export default usersModels



