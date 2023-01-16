const express =require("express");
const cookieParser = require('cookie-parser');
const app = express();


app.use(express.json());
app.use(cookieParser());
// app.post("/posts",(req,res)=>{
//     const {a,b} = req.body;
// })
//querystring 찍기
app.get("/query",(req,res)=>{
    console.log("query:",req.query);
    res.send('/요청했음');
})
app.get("/pathparam/:id",(req,res)=>{
    console.log("params:",req.params);
    res.send('/요청했음');
})
app.get("/header",(req,res)=>{
    console.log("headers:",req.headers);
    res.send('/요청했음');
})
app.get("/cookie",(req,res)=>{
    console.log("cookies:",req.cookies);
    res.send('/요청했음');
});
app.get("/body",(req,res)=>{
    console.log("body:",req.body,typeof(req.body));
    res.send('/요청했음')
})

//로그인
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    console.log("email : ",email);
    console.log("password : ",password);
    res.send("/login api");
})
//회원가입
app.post("/signup",(req,res)=>{
    const { email, password, confirm} = req.body;
    console.log("email,password,confirm - ",email,password,confirm);
    res.send("/signup api");
})
//회원정버개인(로그인한)
app.get("/",(req,res)=>{
    //const token = req.cookies.jwt;
    const email = req.cookies.email;
    console.log("email : ",email);
    res.send("/user api");
})

//게시글 리스트
app.get("/",(req,res)=>{
    const {email,comment}=req.body;
    console.log("email:",email);
    console.log("comment:",comment);
    res.send("/comment api");
})
//선택 게시글 상세정보
app.get("/:id/detail",(req,res)=>{
    const {email} = req.body;
    console.log("email : ",email);
    res.send("/comment_detail api");
})
//게시글 작성
app.post("/",(req,res)=>{
    const { comment } = req.body;
    console.log("comment : ",comment);
    res.send("/commentpost api");
})
//게시글 수정
app.put("/:commentid",(req,res)=>{
    // const course = comment.update(
    //     {comment},
    //     {where:{connentid}}
    // );
    const newcomment = req.body;
    console.log("newcomment",newcomment);
    res.send("/put api");
})
//게시글 삭제
app.delete("/:commentid",(req,res)=>{
    const deleteId = req.params;
    res.send("/delete api");
})



app.listen(3200,()=>{
    console.log("웹 서버 실행")
})