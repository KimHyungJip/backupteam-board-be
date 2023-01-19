//1. 배열한테 사용
//2. return 값이 있다.

const arrayTest = ['1','2','3'];



const scores = [
    {name: '지영', score: 80, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '효원', score: 50, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '정기', score: 60, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '대신', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '택환', score: 94, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '호승', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '희선', score: 23, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '설인', score: 56, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
]

//배열로 return
//filter 특정조건만 부합하는 친구를 받고싶어
let bbadda = scores.filter(score=>score.score<40);


//단일값으로 return
//find
const findResult = scores.find(score=>score.name ==='지영');


//{...지영} 비구조화할당 구조화된걸비구조로 들고옴 
//map
//배열로 return
const mapResult = scores.map(score=>({
    ...score,
    score:score.score+5
}));

//map find filter중 1개 써서 이름만 뽑아오기
let getName = scores.map(name=>({
    name:name.name
}))
//배열에서 40점 미만 점수 받은 자 구하기
const studentarr = scores.filter(score=>score.score<40);

//가장 공부를 잘했던 “지영” 의 점수 확인
const findstudent = scores.find(score=>score.name==='지영').score;

console.log(findstudent);