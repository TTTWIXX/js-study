var foodList = [`닭꼬치`, `볶음밥`,`짜장면`,`족발`];

var count = 0;

var target = '짜장면';

// indexOf :  배열의 특정 데이터가 몇번 인덱스에 있는지 알려준다.

var index = foodList.indexOf(target);
// indexof()의 설명중 fromIndex 뒤의 ?는 넣어도 되고 안넣어도 되고의 의미이다.



console.log(`찾은 인덱스: ${index}`);

// for(var food of foodList){
//     if(food===target){
//         break;
//     }
//     count++;

// }

// console.log(`찾은 인덱스 : ${count}`);

console.log('-----------------------------------------');

//slice() : 배열을 일정부분 잘라냄. 사본배열을 반환 

foodList.push('오뎅',`순대국밥`);

console.log(foodList);

var slicedFoods = foodList.slice(1,4);
                            //이상, 미만 을 잘라서 추출한다.!!! copy본이다.
// 1번부터 4번 미만까지 추출
console.log(slicedFoods);
console.log(foodList);


//2번부터 끝까지 추출
var sliceFoods2=foodList.slice(2);
console.log(sliceFoods2);

//원본배열을 그대로 복사
var sliceFoods3 = foodList.slice();
console.log(slicedFoods);


//reverse() : 배열 역순으로 배치, 원본이 변함
console.log('=============================');

var nums = [10,20,30,40,50];

var copyNums = nums.slice();

nums.reverse();
//실제로는 양끝의 인덱스를 바꾸는 방법을 이용한다.
// t=x
// x=y
// y=t

console.log(copyNums);


//concat() : 배열 2개를 연결
console.log(`===========================`);

var arr1 =[10, 20, 30];
var arr2 =[100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2);

console.log(concatedArr);

//includes() : 배열의 특정 데이터가 존재하는지 확인
console.log(`===========================`);

var resultFlag = foodList.includes('닭꼬치');
console.log(resultFlag);


// splice() : 배열의 특정요소 제거, 삽입
console.log(`===========================`);

console.log(foodList);

foodList.splice(1, 2);
console.log(foodList);
//1번 인덱스로 부터 2개 지워주세요!! 라는 뜻
//원본에 반영(따라서 안전하게 하려면 사본을 만든후 실행하는게 좋다.)

//인덱스 1번으로 부터 0개 지우고 마라탕을 넣어줘~~
//원래 1번은 뒤로 밀려나고 마라탕이 1번이 된다.
foodList.splice(1, 0, '마라탕');
console.log(foodList);
// foodList.splice(2,0,'아이스크림','떡볶이');
// 나머지는 2칸씩 밀림
//..items: string[]) .. 나열할수 있다라는뜻

foodList.splice(2);
//deletecount를 생략할경우 2번부터 다지운다
console.log(foodList);