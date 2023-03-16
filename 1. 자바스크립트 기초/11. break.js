
outer: for(var i=0;i<3;i++){
  inner:  for(var j=0;j<2;j++){
        console.log(`[${i},${j}]`);
        // break inner;
        // break 이후 아무것도 안적으면 제일 가까운 곳이 멈춘다.
        // for문에 이름을 지정하고 break 이후 지정할 수있다.
    }
}

console.log(`==========================`);


//50000번의 루프 중 1~100사이의 랜덤숫자중 30이
// 나오면 반복을 중간에 멈추고 싶다.



for(var i=0; i<50000; i++){
    var rn=Math.floor(Math.random()*10)+1;
    console.log(rn);
    if(rn===30){
        console.log(`반복문 종료: ${i}`);
        break;
        // 바로취소. i++도 하지않고 바로 나간다.
    }

}