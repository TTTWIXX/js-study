var n1 = 10;
var n2 = '20';

console.log(n1 + n2);

var n3 = n1 + '';

console.log(typeof n3);
// 숫자 문자--> 문자!

var n4 = '100' - 55;

console.log(n4);

var n5 = +'99';

console.log(typeof n5);

console.log('=============================================');


// + 를붙이면 숫자로 형변환한다. ex)+promt()



// js에서는 0, '', null, undefined. NaN는 거짓으로 판단한다. 암기!!!!!

// Falsy
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy
if (1) console.log('ok6');
// 0빼고 다 TRUE이다.
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8');
// 스페이스가 없어야 FALSE이다.
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10');
if (function () {}) console.log('ok11');

for (var n = 1; n <= 10; n++) {
    if (n % 2 === 0) {
        console.log('짝수입니다.');
    }else{
        console.log('홀수입니다.');
    }
}




// js only
for (var n = 1; n <= 10; n++) {
    if (n % 2) {
        console.log(n+'홀수입니다.');
    }else{
        console.log(n+'짝수입니다.');
    }
}



