//1. 배열한테 사용
//2. return 값이 있다.

const arrayTest = ['1','2','3'];



const scores = [
    {name : 'hong' , score : 100},
    {name : 'kim' , score : 60},
    {name : 'seo' , score : 90},
    {name : 'lee' , score : 80},
    {name : 'jung' , score : 40},
    {name : 'han' , score : 50}
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


console.log(getName);