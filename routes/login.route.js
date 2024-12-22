const express=require('express')
const {loginpost,loginget}=require('../controllers/login.controller')
const router=express.Router()

router.post('/',loginpost)
router.get('/',loginget)

module.exports=router