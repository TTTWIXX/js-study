/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/



//Teacher's code

// 문제 번호
var questionNumber = 1;

// 정답횟수, 오답횟수
var correctCount = 0, wrongCount = 0;

while (true) {

    // 랜덤 정수 2개 생성
    var firstNumber = Math.floor(Math.random() * 20) + 1;
    var secondNumber = Math.floor(Math.random() * 20) + 1;

    // 사용자에게 문제를 내고 정답을 입력받기
    var userAnswer = +prompt(`Q${questionNumber++}. ${firstNumber} + ${secondNumber} = ??`);


    // 게임 종료 조건
    if (userAnswer === 0) {
        alert('게임을 종료합니다!');
        break;
    }

    // 실제 정답
    var realAnswer = firstNumber + secondNumber;

    // 정답 검증
    if (userAnswer === realAnswer) {
        alert('정답입니다!!');
        correctCount++;
    } else {
        alert('틀렸습니다!!');
        wrongCount++;
    }
} // end each game

alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);


//-----------------------------------------------------------------------------------------



//My code

// alert(`~~~~~~~재미있는 사칙연산 게임~~~~~~~`)
// alert(`[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]`);
// alert('=======================');
// var cor = 0;
// var incorr = 0;
// while (true) {
//     var firstNum = Math.floor(Math.random() * 50 + 1);
//     var secondNum = Math.floor(Math.random() * 50 + 1);
//     var answer = +prompt(`${firstNum}+${secondNum}= ??`);
//     if (answer === firstNum + secondNum) {
//         alert('정답입니다.')
//         cor++;
//     } else if (answer !== firstNum + secondNum && answer !== 0) {
//         alert('틀렸어요~')
//         incorr++;
//     } else if (answer === 0) {
//         alert(`게임을 종료합니다.!`);
//         alert(`정답횟수 : ${cor}회, 틀린횟수 : ${incorr}회`)
//         break;
//     }

// }