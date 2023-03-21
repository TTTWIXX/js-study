

var x =30, y=40;

var z= ''+x+y;

console.log(z);
//빈문자열을 넣으면 스트링으로 변환!!
//스트링을 더하는것은 좋은 방법은 아니다(반복문에서는 주의하는것이좋다.)


// 회원 로그인 여부 확인
// 브라우저 로컬 스토리지에 토긑이 존재하면 로그인한 것임
function inLogin(){
    // ACCESS_TOKEN : ;ALDKJFJASLKFJASDFLKJASFLKJ
    // ACCESS_TOKEN : null
    // getItem은 해당 값이 있으면 값을 가져오고 없으면 null
    return !!localStorage.getItem('ACCESS_TOKEN');
    // !!를 붙여서 boolean값으로 변환한다.
    // true 이면 로그인 한상태 false 이면 로그인 하지않는 상태

}