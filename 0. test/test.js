
function solution(numbers) {
    let sum=0; 
    var answer; 
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    answer=sum/numbers.length;
    if( answer-Math.floor(answer)===0 || answer-Math.floor(answer)===0.5){
    return answer;
    }
}
const numbers=[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
console.log(solution(numbers));
