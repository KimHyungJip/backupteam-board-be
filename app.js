const express =require("express");
const cookieParser = require('cookie-parser');
const app = express();


app.use(express.json());
app.use(cookieParser());
// app.post("/posts",(req,res)=>{
//     const {a,b} = req.body;
// })
//querystring 찍기
const movies = [
    {id: 1, movie_title: "Misérables, Les", hit_count: 23, user_id: 1, created_at: "2022-08-11 00:40:32"},
    {id: 3, movie_title: "Captain Ron", hit_count: 1, user_id: 1, created_at: "2022-08-14 18:09:47"},
    {id: 4, movie_title: "Siberia", hit_count: 37, user_id: 9, created_at: "2022-02-08 02:44:29"},
    {id: 5, movie_title: "Girl, The", hit_count: 82, user_id: 6, created_at: "2022-08-29 00:02:21"},
    {id: 6, movie_title: "44 Minutes: The North Hollywood Shoot-Out", hit_count: 2, user_id: 4, created_at: "2022-12-06 20:33:12"},
    {id: 7, movie_title: "C'mon Man", hit_count: 62, user_id: 2, created_at: "2022-08-18 16:43:05"},
    {id: 8, movie_title: "Jim Jefferies: Alcoholocaust", hit_count: 4, user_id: 8, created_at: "2022-07-05 16:49:03"},
    {id: 9, movie_title: "Grand Budapest Hotel, The", hit_count: 35, user_id: 9, created_at: "2022-01-10 08:22:27"},
    {id: 10, movie_title: "Ju-on: The Curse 2", hit_count: 64, user_id: 7, created_at: "2022-10-18 21:59:19"},
    {id: 11, movie_title: "Looney Tunes: Back in Action", hit_count: 17, user_id: 8, created_at: "2022-10-26 06:56:30"},
    {id: 12, movie_title: "Undertaker and His Pals, The", hit_count: 91, user_id: 6, created_at: "2022-02-22 11:23:11"},
    {id: 13, movie_title: "BlinkyTM", hit_count: 4, user_id: 5, created_at: "2022-01-08 21:02:09"},
    {id: 14, movie_title: "Alien Predator (Mutant II) (Falling, The)", hit_count: 47, user_id: 2, created_at: "2022-02-28 15:55:13"},
    {id: 15, movie_title: "Lorenzo's Oil", hit_count: 26, user_id: 6, created_at: "2022-01-21 02:46:27"},
    {id: 16, movie_title: "Beyond Re-Animator", hit_count: 88, user_id: 5, created_at: "2022-04-26 13:44:52"},
    {id: 17, movie_title: "Mississippi Burning", hit_count: 64, user_id: 8, created_at: "2022-11-14 05:23:58"},
    {id: 18, movie_title: "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)", hit_count: 55, user_id: 1, created_at: "2022-03-24 06:27:21"},
    {id: 19, movie_title: "Power and Terror: Noam Chomsky in Our Times", hit_count: 85, user_id: 3, created_at: "2022-04-30 19:43:43"},
    {id: 20, movie_title: "Grumpy Cat's Worst Christmas Ever", hit_count: 58, user_id: 9, created_at: "2022-12-13 00:46:27"}
]
const users = [
    {id: 1,name: "Trix Hannaby", email: "thannaby2r@home.pl"},
    {id: 2,name: "Mead Lantiff", email: "mlantiff2q@imageshack.us"},
    {id: 3,name: "Margette Scaplehorn", email: "mscaplehorn2p@parallels.com"},
    {id: 4,name: "Kimmy Hulks", email: "khulks2o@google.de"},
    {id: 5,name: "Margot Haward", email: "mhaward2n@census.gov"},
    {id: 6,name: "Meredith Spendlove", email: "mspendlove2m@spiegel.de"},
    {id: 7,name: "Tuck Francis", email: "tfrancis2l@msn.com"},
    {id: 8,name: "Duke Davsley", email: "ddavsley2k@pinterest.com"},
    {id: 9,name: "Jimmy Weld", email: "jweld2j@tripadvisor.com"},
    {id: 10,name: "Kaylee Jakoubec", email: "kjakoubec2i@epa.gov"}
]

app.get('/movies',(req,res)=>{
    res.send(movies.map(movie=>({
        ...movie,
        name:users.find(user=>user.id === movie.user_id).name
    })))
})

app.post('/movies',(req,res)=>{
    //1. 사용자가 등록할 영화의 정보를 주면 ㄴ받아온다 from요청req
    const newMovie = req.body;
    //2. 가져온 영화정보에 id를 부여한다.
    newMovie.id = movies.length+2;
    //3. 조회수 hit_count는 기본으로 0으로 설정
    newMovie.hit_count=0;
    //4. 작성일은 현재 시간을 넣는다.
    newMovie.created_at=new Date().toISOString();
    //5. 2,3,4 전부 id까지 부여된 영화정보를 movies 추가한다.
    movies.push(newMovie);
    console.log(newMovie);
    res.send("movie등록") ;
})

//fe index.html 넣고 movie.html 넣고 registar.html


//api하나 추가
//하나를 검색 상세조회 /:id
//상세조회 들어오면 히트카운트 올라가야해
//splice배열의기능중하나
app.get("/movies/:id",(req,res)=>{
    
    const detailId = req.params.id;
    const movieid = movies.filter(movie=>movie.id===Number(detailId));

    const detailmovie=movieid.find(movieid=>movieid.hit_count++);
    console.log(detailmovie);
    res.send(detailmovie);



    // const hitArr = Object.values(detailmovie);
    // const newHit = hitArr[2]+1;
    // console.log(hitArr);
    // hitArr.splice(2,1,newHit);
    // console.log(hitArr);
    // res.send(hitArr);
    

})


// app.get("/query",(req,res)=>{
//     console.log("query:",req.query);
//     res.send('/요청했음');
// })
// app.get("/pathparam/:id",(req,res)=>{
//     console.log("params:",req.params);
//     res.send('/요청했음');
// })
// app.get("/header",(req,res)=>{
//     console.log("headers:",req.headers);
//     res.send('/요청했음');
// })
// app.get("/cookie",(req,res)=>{
//     console.log("cookies:",req.cookies);
//     res.send('/요청했음');
// });
// app.get("/body",(req,res)=>{
//     console.log("body:",req.body,typeof(req.body));
//     res.send('/요청했음')
// })

// //로그인
// app.post("/login",(req,res)=>{
//     const {email,password} = req.body;
//     console.log("email : ",email);
//     console.log("password : ",password);
//     res.send("/login api");
// })
// //회원가입
// app.post("/signup",(req,res)=>{
//     const { email, password, confirm} = req.body;
//     console.log("email,password,confirm - ",email,password,confirm);
//     res.send("/signup api");
// })
// //회원정버개인(로그인한)
// app.get("/",(req,res)=>{
//     //const token = req.cookies.jwt;
//     const email = req.cookies.email;
//     console.log("email : ",email);
//     res.send("/user api");
// })

// //게시글 리스트
// app.get("/",(req,res)=>{
//     const {email,comment}=req.body;
//     console.log("email:",email);
//     console.log("comment:",comment);
//     res.send("/comment api");
// })
// //선택 게시글 상세정보
// app.get("/:id/detail",(req,res)=>{
//     const {email} = req.body;
//     console.log("email : ",email);
//     res.send("/comment_detail api");
// })
// //게시글 작성
// app.post("/",(req,res)=>{
//     const { comment } = req.body;
//     console.log("comment : ",comment);
//     res.send("/commentpost api");
// })
// //게시글 수정
// app.put("/:commentid",(req,res)=>{
//     // const course = comment.update(
//     //     {comment},
//     //     {where:{connentid}}
//     // );
//     const newcomment = req.body;
//     console.log("newcomment",newcomment);
//     res.send("/put api");
// })
// //게시글 삭제
// app.delete("/:commentid",(req,res)=>{
//     const deleteId = req.params;
//     res.send("/delete api");
// })



app.listen(3200,()=>{
    console.log("웹 서버 실행")
})