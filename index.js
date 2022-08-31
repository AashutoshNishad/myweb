const express = require('express');
const app = express();
const Port = process.env.PORT || 8000;
app.get("/" , (req,res)=>{
return res.sendFile( __dirname+"/ashu.html");
})

app.listen(Port , ()=>{
    console.log('http://localhost:'+Port);  
})