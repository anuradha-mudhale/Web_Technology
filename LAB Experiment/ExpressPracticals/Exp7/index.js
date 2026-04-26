const express = require('express')
const app = express()
const port = 3000

const user=[{id:1,name:'Anuradha',Age:20},
            {id:2,name:'Dipa',Age:20},
            {id:3,name:'Siddhi',Age:20},
            {id:4,name:'Ankita',Age:20},
            {id:5,name:'vijaya',Age:20}
        
        ]

app.get('/user',(req,res)=>{
    res.json(user);
})

app.get('/user/:id',(req,res)=>{
    const user1 = parseInt(req.params.id)  
    const users1 = user.find(u=>u.id===user1)
    if(users1)
    {
        res.json(users1)
    }else
    {
        res.json("Error")
    }
})



app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})