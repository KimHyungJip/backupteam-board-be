const express =require("express");

const app = express();


app.post("/posts",(req,res)=>{
    const {a,b} = req.body;
})

app.get("/",(req,res)=>{
    res.send('오케이');
})

app.listen(3200,()=>{
    console.log("웹 서버 실행")
})