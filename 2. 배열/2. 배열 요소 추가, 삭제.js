var pets=[`멍멍이`, `야옹이`,`쩝쩝이`];

console.log(pets);
console.log(typeof pets);
pets[pets.length]='징징이';
//좋은방법은 아니다. 메모리를 계속 다시만들고 값을 옮겨야하는 알고리즘이다.
console.log(pets);

pets.push('징징이');
//연결리스트 방식으로 추가로 연결하는 방법이다.
// Arry 타입만 push 할수있다.
// Arry.push(한번에 여러개의 값을 넣을수있다.)
// @param

//맨 끝 데이터 삭제
pets.pop();

console.log(pets);

//shift() : 배열의 맨 첫번째 요소 제거

pets.shift();

console.log(pets);

//unshift(...items) : 배열에 맨 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);