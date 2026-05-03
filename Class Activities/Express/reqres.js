const express= require('express');
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    console.log(req.query.name)
})

//query parameter->without using an object access value

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})