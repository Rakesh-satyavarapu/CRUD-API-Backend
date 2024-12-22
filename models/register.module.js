const mongoose=require('mongoose')
const registerSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter a name"]
    },
    gmail:
    {
        type:String,
        required:true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email address',
        ]
    },
    password:
    {
        type:String,
        required:[true,"please enter password"],
        minlength:6,
        maxlength:12
    }
},{timestamps:true})

const register=mongoose.model("registration",registerSchema)
module.exports=register