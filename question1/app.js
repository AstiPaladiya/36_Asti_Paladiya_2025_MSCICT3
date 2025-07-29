const express=require("express");
const app=express();
const port=8000;
// const path=require('path');
app.use(express.static('./Public'));

//route handling query paramater

app.get("/gethello",(req,res)=>{
    res.send("Hello Nodejs!");
});

app.listen(port);