const express = require('express')
const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    //res.send("Hello!!!");
    const time = Date();
    res.json({
    time1: time,
    message:"hello",
    
})
})

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})