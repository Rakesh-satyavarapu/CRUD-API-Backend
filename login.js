let express=require('express')
let mongoose=require('mongoose')
let Login=require('./models/login.module')
let app=express()
app.use(express.json())

app.use(express.static('public'))
app.get('/login/:name',(req,res)=>
{
    let name =req.params.name;
    res.send(`<h1>Welcome,${name}</h1>`)
})
app.get('/login/:name/:password',(req,res)=>
{
    let name=req.params.name
    let password=req.params.password
    res.send(`<h1>Welcome,${name}  <br> your password is ${password}</h1>`)
})
app.listen(3000,()=>{console.log('server listening on http://localhost:3000')})






// app.post('/login',async(res,req)=>{
//     let details=await Login.create(req.name,req.password)
//     console.log(details)
// })

// mongoose.connect("mongodb://localhost:27017/Rakeshdb")
// .then(()=>
// {
//     console.log('Database connected')
//     app.listen(3000,()=>{console.log('server lsitening on http://localhost:3000')})
// })
// .catch((err)=>{console.log(err.message)})
