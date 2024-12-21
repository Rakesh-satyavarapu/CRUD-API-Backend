const Product = require('../models/product.model.js')

const getProducts=async(req,res)=>
{
    try{
        const product=await Product.find({})
        res.status(200).json(product)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

const getProduct=async(req,res)=>
{
    try{
        let {id}=req.params
        const product=await Product.findById(id)
        res.status(200).json(product)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

const postProduct=async(req,res)=>
{
    try{
        const product=await Product.create(req.body)
        res.status(200).json(product)
    }
    catch(error)
    {
        res.status(500).send({message:error.message})
    }
}

const putProduct=async(req,res)=>
{
    try{
        let {id}=req.params
        const product=await Product.findByIdAndUpdate(id,req.body)
        if(!product)
        {
            res.status(404).json({message:"product not found"})
        }
        const updatedproduct=await Product.findByIdAndUpdate(id,req.body)
        res.status(200).json(updatedproduct)
    }
    catch(error)
    {
        res.status(500).send({message:error.message})
    }
}

const delProduct=async(req,res)=>
{
    try{
        let {id}=req.params
        const product=await Product.findByIdAndDelete(id,req.body)
        if(!product)
        {
            res.status(404).json({message:"product not found"})
        }
        res.status(200).json(product)
    }
    catch(error)
    {
        res.status(500).send({message:error.message})
    }
}

module.exports={getProducts,getProduct,postProduct,putProduct,delProduct}