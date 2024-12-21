const express=require('express')
// const mongoose=require('mongoose')
// const Product = require('../models/product.model.js')
const{getProducts,getProduct,postProduct,putProduct,delProduct}=require('../controllers/product.controller.js')
const router=express.Router()

router.get('/',getProducts)

router.get('/:id',getProduct)

router.post('/',postProduct)

router.put('/:id',putProduct)

router.delete('/:id',delProduct)

module.exports=router