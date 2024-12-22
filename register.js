const express=require('express')
const mongoose=require('mongoose')
const app=express()
const register=require('./models/register.module')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/register',async (req,res)=>
{
    try
    {
        const reg= await register.create(req.body)
        res.status(200).json(reg)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

app.get('/register',async (req,res)=>
{
    try
    {
        const reg=await register.find({})
        res.status(200).json(reg)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})


mongoose.connect("mongodb://localhost:27017/Rakeshdb")
.then(()=>
{
    console.log("Database connected")
    app.listen(8000,()=>{console.log("server listening on port 8000")})
})
.catch((error)=>
{
    console.log("error",error.message)
})