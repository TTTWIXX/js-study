// 자바스크립트의 함수는 함수를 리턴할 수있음
function calculator(n1, n2) {
    function add() {
        return n1 + n2;
    }
    return add;
}

// const calculator=(n1, n2)=> () => n1 +n2;    

// function calculator(n1, n2) {
//     return () => n1+n2;
// }



// const zzz =calculator(10, 20);
// console.log(typeof zzz); 

// const n=zzz();
// console.log(`n : ${n}`);


// let count=0; // 카운팅 변수(전역 변수=중간에 변경될 가능성이있다.)

// // 카운트를 올리는 함수

// const increse = ()=>++count;

// console.log(increse());
// console.log(increse());

// count = 999;

// console.log(increse());



const increse=() =>{
    let count=0;
    return ++count;

};
console.log(increse());
console.log(increse());
console.log(increse());
// 카운팅이 되지않는다.

const increseClosure = ()=>{
    let count = 0; // 지역 변수

    // const increse=() => ++count;
    // return increse;

    return () => ++count;

};

const increaser=increseClosure();
console.log(increaser());
console.log(increaser());
console.log(increaser());

// 즉시 실행 함수: 정의와 동시에 호출
const result = ((n1, n2) =>{
    return n1 + n2
})(5, 8);
//-----함수정의-------             //-함수호출-

console.log(result);


// const increse= (() => {
//     let count = 0; // 지역 변수

    // const increse=() => ++count;
    // return increse;

//     return () => ++count;

// })();

// console.log(increse());
