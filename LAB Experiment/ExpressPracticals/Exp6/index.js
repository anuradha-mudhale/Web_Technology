const express = require('express')
const app = express()
const port = 3000

app.use((req,res,next)=>{
    console.log(`data received ${new Date()}`)
    next();
})
app.get('/home',(req,res)=>{
    res.send("Welcome to the home page")
})

app.get('/about',(req,res)=>{
    res.send("Welcome to the about page")
})

app.get('/contact',(req,res)=>{
    res.send("welcome to the contact page")
})

app.get('/history',(req,res)=>{
    res.send("Welcome to the history page")
})

app.listen(port,()=>{
    console.log(`app is listening on port${port}`);
})