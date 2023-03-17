

// or 연사 : 첫번째 truthy를 반환
console.log(`hello`||`world`);
console.log(0||'안녕');

// and 연산 : 첫번째 falsy를 반환
console.log('==============================');

console.log('Hello' && 'World');
console.log(null && '메롱');


// 실제예시
// <h1>안녕하세요 우리 홈페이지에 오신것을 환영합니다.</h1>
// isLogin() && <h2>xxx님 안녕하세요!</h2>
// isLogin()가 true 이면 <h2>
// isLogin()가 flase 이면 <h2> X


// 쿠폰당첨플래그 && sendCoupon()
// isMineAritcle() && <button>