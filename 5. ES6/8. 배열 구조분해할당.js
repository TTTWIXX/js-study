

const userNames= [`김철수`,`강감찬`,`박영희`];

const [kim,kang,park]= userNames;
// 우항에 배열만 오면된다.

console.log(kim);
console.log(kang);
console.log(park);

const [firstObj] = [{id:1},{id:2},{id:3}].filter(obj=>obj.id>=2);
console.log(firstObj);

// 변수 교환하기
let first =10, second = 20;

[second, first] = [first,second];

console.log(first);
console.log(second);

// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다.

const numbers= [1,3,5,7,9,11];
// const copyNumber=numbers.slice();

// const one= copyNumber.shift();
// const three= copyNumber.shift();
// const others= copyNumber;


// console.log(`============`);

// console.log(one);
// console.log(three);
// console.log(others);
// console.log(numbers);


const[one, three, ...others] = numbers;

console.log(one);
console.log(three);
console.log(others);
console.log(numbers);


// 스프레드로 배열 간편복사
console.log(`======================`);

const foods = [`감튀`,`DQPC`,`징거버거`]
//const copyFoods =foods 이건 배열복사가 아니라 배열주소를 복사한것이다.

const copyFoods= [...foods]; // 실제 데이터 복사
// 유사배열을 배열로 만들어준다. 유사배열은 slice를 쓸수없다.
console.log(copyFoods);