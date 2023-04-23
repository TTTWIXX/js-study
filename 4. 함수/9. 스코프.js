var x = 10; // 전역 변수 : 프로그램의 전체영역에서 사용가능


// 매개변수도 지역스코프를 가진다.
function foo(z) {
  // var x; 
  console.log(`지역변수 x 선언전 : ${x}`);
  var y = 20 + x; //지역 변수 : 해당 함수 안에서만 사용가능
  console.log(y);
  console.log(y - z);
  var x = '홍길동';
  // x='홍길동'으로 분리된다.
  //따라서 var x='홍길동'이라고 하지말고 x=`홍길동`이라고 하면 의도한대로 쓸수있다.

  console.log(`지역변수 x 선언후 : ${x}`);
  // 변수는 내 지역을 우선시 한다. 즉 지역변수 영역에 있으면 지역변수 먼저 찾고
  // 없으면 전역변수 영역에서 찾는다.

  // return y; //사용하고 싶으면 return 해야한다.
}



// console.log(y);
// y는 지역변수 이므로 밖에서 사용 x 

foo(50);
console.log(`함수호출 후 x의 값 : ${x}`);
// 함수가 끝나면 안에있던 지역변수들은 모두 사라진다.
// 남은 전역변수 x가 출력된다.


// 중첩 함수 : 함수안에 함수를 정의
console.log(`--------------------------`);

function outer(m) {
  var n = `outer local n`;
  var v = `outer local v`;
  console.log(m, n, v);

  // 헬퍼 함수 : 호출이 함수 내부로 제한됨(내 의도에 맞게 작동시키기위해서)
  // 바깥에 꺼내두면 이 함수를 써서 원치 않은 작동을 하기때문이다.

  function inner() { // outer함수 밖에서는 호출 안된다.
    console.log(n);
    var m = `inner local m`;
    var v = `inner local v`;

    console.log(m);
    console.log(v);

  }
  // console.log(inner());
}

var m = `global m`;

outer(`outer param m`)
//지역이 전역보다 우선시 된다.