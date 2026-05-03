const express = require('express')
const app = express()
const port = 3000

// function checkRoute(req,res,next){//middleware function->it executes before final response
//     //real time example->login page
//     console.log(req.url);
//     next()

// }
// app.use(checkRoute);

app.use((req,res,next)=>{
    console.log(`data recieved ${new Date()}`)
    next()
})

app.get('/',(req,res)=>{
    const T = new Date();
    res.json({
        mess:"hello",
        Time:T
    })
})

app.get('/about',(req,res)=>{
    res.send("Welcome to the about page")
})

app.get('/skills',(req,res)=>{
    res.send("Welcome to the skills page")
})

app.get('/contact',(req,res)=>{
    
    const info={
        name:"Anuradha",
        age:20,
        contactNo:8275677225
    }
    res.json(info)
})



app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})