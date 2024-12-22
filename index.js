const express=require('express')
const app=express()
const mongoose=require('mongoose')
const loginRoute=require('./routes/login.route')
app.use(express.json())
app.use('/api/login',loginRoute)

mongoose.connect("mongodb://localhost:27017/Rakeshdb")
.then(()=>{
    console.log('Database Connected')
    app.listen(5000,()=>{console.log('server listening on port 5000')})
})
.catch(()=>
{
console.log("error",error.message)
})