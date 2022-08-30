const express = require('express');
const app = express();



app.get("/" , (req,res)=>{
    return res.sendFile( __dirname+"/ashu.html");
})

app.listen(8000 , ()=>{
    console.log('http://localhost:8000');
    
})