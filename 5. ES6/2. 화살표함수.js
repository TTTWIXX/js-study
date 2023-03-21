// 함수 선언문 방식
function multi(n1, n2) {
    return n1 * n2;
}

// 함수 표현식
// const multi = function(n1, n2){
//     return n1*n2;
// };



// 화살표 함수
// const multi = (n1, n2) => n1*n2;

// const r1=multi(10,3);
// console.log(`r1: ${r1}`);

// function sayHello() {
//     console.log(`안녕하세요`);
// }

// const sayHello =function () {
//     console.log(`안녕하세요`);
// };

const sayHello = () => console.log(`안녕하세요`);

const kim = {
    name: 'kim',
    age: 30,
    greeting: sayHello,
    dance: () => console.log(`춤을 신나게 춥니다.`),
};

kim.dance();


const pow = (n) => n**2;


// 함수 선언문과 함수 표현식(화살표함수)의 차이
console.log(`=================`);
const r2 = sub(20,10)
function sub(n1,n2) {
  return n1-n2;  
}//위치에 상관없이 호출가능 //

console.log(`r2 : ${r2}`);

// function divide(n1,n2) {
//   return n1-n2;  
// }
const divide=(n1,n2)=> n1/n2;
//위치 중요 

const r3 = divide(30,6);

console.log(`r3:${r3}`);

