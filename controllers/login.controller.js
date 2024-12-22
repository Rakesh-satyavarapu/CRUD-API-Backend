const Login=require("../models/login.module.js")

const loginpost=async (req,res)=>
{
    try
    {
        const details= await Login.create(req.body)
        console.log(details)
        res.status(200).json(details)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

const loginget=async (req,res)=>
{
    try
    {
        const details= await Login.find({})
        console.log(details)
        res.status(200).json(details)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}
module.exports={loginpost,loginget}