// 정의와 동시에 호출 (function(){})()
const increse = (() => {
    let count = 0;
    return () => ++count;
})();

const decrese = (() => {
    let count = 0;
    return () => --count;
})();
// 예상한값
console.log(increse()); // 1
console.log(increse()); // 2
console.log(decrese()); // 1


function counterClosure() {

    let count = 0;

    function increase() {
        return ++count;
    }

    function decrease() {
        return --count;
    }
    //increse: increse, decrese: decrese key와 value 값이 같으면 생략가능
    return {
        increase,
        decrease
    };
}


const counter = counterClosure();
                            // () 리턴값// ()없으면 함수 자체

const increase = counter.increase;
const decrease = counter.decrease;

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // 1



// const counter = (() => {

//     let count = 0;

//     return { 
//         increase: () => ++count,
//         decrease: () => --count 
//     };
// })();

// const { increase, decrease } = counter;


function counterWithCbClosure() {
    let count =0;
    function process(callback) {
        return count=callback(count);
    } 
    return process;
}

// const counter_=counterWithCbClosure();

// // console.log(counter_(function(c){ return ++c; }));
// // console.log(counter_(function(c){ return c+=3; }));
// // console.log(counter_(function(c){ return c**=2; }));
// console.log(counter_(c=> ++c)); //1
// console.log(counter_(c=>c+=3)); //4
// console.log(counter_(c=>c**=2)); //16