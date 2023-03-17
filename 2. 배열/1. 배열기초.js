var a= 10;
var b=a;

a=15;

console.log(b);
//b가 15가 아니다.

var arr1=[1,2,3,4];
//arr1 메모리에 1,2,3,4 가 전부 들어가 있는것이 아니다.
var arr2= arr1;

arr1[1]=999;

arr2[0]= 77;

//각각 작용할것같지만 arr1과 arr2에 1234가 들어있는것이 아니라
// 넓은 펜션에 1234를 넣어두고 arr1에는 [   ]의 주소를 적어둔 것이다.
//var arr2= arr1; 은 arr2에 펜션의 주소를 넣어준것이다.
// 따라서 펜션에 있는 값을 변경하면 arr2에서 인덱스를 불러와도 값이
// 변경된 값이 나온다. 

console.log(arr2);



console.log('====================');

// 배열의 생성
// 배열 변수 이름 관례: 복수형, list어미

var fruits = [
    '오렌지',
    '라임',
    '레몬',
]; 
//배열 리터럴
// 변수명을 복수형으로 쓰는것이 일반적이며 
// 세로로 쓰는것을 선호한다. 마지막에 , 를 붙여도 괜찮다.
// 지울때 편하게 지울수 있다.

console.log(typeof fruits);
console.log(fruits);

console.log(`배열의 데이터 수: ${fruits.length}`);

// 배열 데이터 참조(reference 저장한것을 가져다가 쓰겠다!)
console.log(`첫번째 데이터: ${fruits[0]}`);
console.log(`첫번째 데이터: ${fruits[fruits.length-1]}`);

// 배열 요소 수정
fruits[1] = `파인애플`;

console.log(fruits);

// 배열 수정시 주의사항
// 브라우저로 확인하면 lenth는 4라고 나온다. 미친놈이다.
// 그래서 값이 있는지 확인하고 넣는다.

fruits[4]='초콜릿';
console.log(fruits);

// 배열 내부데이터 전체 참조 (순회 : travis)
// 선형 탐색 :  순차적으로 확인해보면서 찾기
var target = '레몬';

for(var i=0;i<fruits.length;i++){
           //미만으로 설정하면 -1 할필요가없다.
    // console.log(fruits[i]);
    if(fruits[i]===target){
        console.log(`${target} 과일은 존재함!`);
        var findIt='있어요'
        break;
    }else{
        var findIt='없어요'
    }
}
console.log(findIt)



//for ~ of 반복문 (배열 전용 반복문)
//특정한것만을 순회할때( ex) 짝수번째, 홀수번째)많이 쓴다.
var weekDays = [`월`,`화`,`수`,`목`,`금`,`토`,`일`];

console.log(`=====================`);

for(var i=0; i<weekDays.length;i++){
    console.log(`${weekDays[i]}요일!`);
}


console.log(`====================`)


// for( of  )  //전체 순회할때 많이 쓴다.
for (var day of weekDays){
    console.log(`${day}요일!`);
}  



