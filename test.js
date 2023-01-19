function solution(array, commands) {
    var answer = [];
    for(j=0;j<3;j++){
        a=commands[j][0];//2
        b=commands[j][1];//5
        c=commands[j][2];//3
        var answer1 = [];
        for(i=a-1;i<b;i++){
            answer1.push(array[i]);
        }
        d=answer1.sort();
        answer.push(d[c-1]);
    }
    return answer;
}
a1=[1, 5, 2, 6, 3, 7, 4]
b1= [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
console.log(solution(a1,b1))