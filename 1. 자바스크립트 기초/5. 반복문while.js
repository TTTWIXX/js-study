//10~0카운터 다운
var count = 10;
while (count >= 0) {
    console.log(count);
    count--;
}

// while 반복 횟수를 모를때
// for 반복 횟수를 알때

//1~10까지 누적총합

var total =0;

var n=1; //제어변수 (초기값: begin)

while(n<=10){
    //조건식 (끝값: end)
    total +=n;

    n++;//증감식(단계: stop)
}
console.log(`총합: ${total}`);
