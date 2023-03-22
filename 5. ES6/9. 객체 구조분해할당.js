const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};



// const {empName,birthDay,age} = emp;

// console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay}입니다.`);

const {empName: en,birthDay: bd,age: a } = emp;
// key에 별칭을 붙여준다.
console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다.`);





console.log(`=============================`);

const{birthDay, age, ...others}=emp;

console.log(birthDay);


//객체 안전 복사: 스프레드
const copyEmp = {...emp, addres: `서울시`, hobbies : [`놀고먹기`,`낮잠`]};

console.log(copyEmp);
// emp에 들어있는 key값으로 value값을 입력하면 수정된다.