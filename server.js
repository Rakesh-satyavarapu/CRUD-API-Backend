const express=require('express')
const app=express()
const mongoose=require('mongoose')
// const Product = require('./models/product.model.js')
const ProductRoute=require('./routes/product.route.js')
// app.use(express())

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/products',ProductRoute)


// app.get('/api/products',async(req,res)=>
// {
//     try{
//         const product=await Product.find({})
//         res.status(200).json(product)
//     }
//     catch(error)
//     {
//         res.status(500).json({message:error.message})
//     }
// })

// app.get('/api/products/:id',async(req,res)=>
// {
//     try{
//         let {id}=req.params()
//         const product=await Product.findById(id)
//         res.status(200).json(product)
//     }
//     catch(error)
//     {
//         res.status(500).json({message:error.message})
//     }
// })

// app.post('/api/products',async(req,res)=>
// {
//     try{
//         const product=await Product.create(req.body)
//         res.status(200).json(product)
//     }
//     catch(error)
//     {
//         res.status(500).send({message:error.message})
//     }
// })

// app.put('/api/products/:id',async(req,res)=>
// {
//     try{
//         let {id}=req.params()
//         const product=await Product.findByIdAndUpdate(id,req.body)
//         if(!product)
//         {
//             res.status(404).json({message:"product not found"})
//         }
//         const updatedproduct=await Product.findByIdAndUpdate(id,req.body)
//         res.status(200).json(updatedproduct)
//     }
//     catch(error)
//     {
//         res.status(500).send({message:error.message})
//     }
// })

// app.delete('/api/products/:id',async(req,res)=>
// {
//     try{
//         let {id}=req.params()
//         const product=await Product.findByIdAndDelete(id,req.body)
//         if(!product)
//         {
//             res.status(404).json({message:"product not found"})
//         }
//         res.status(200).json(product)
//     }
//     catch(error)
//     {
//         res.status(500).send({message:error.message})
//     }
// })

mongoose.connect("mongodb://localhost:27017/Rakeshdb")
.then (()=>
{
    console.log('Database connected');
    app.listen(3000,()=>{console.log('server is listening on port 3000')})
})
.catch(()=>{console.log("error")})

//routes
app.get('/',(req,res)=>
{
    res.send("created server and connected to database")
})