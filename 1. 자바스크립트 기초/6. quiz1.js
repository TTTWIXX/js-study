 var firstNumber = +prompt(`첫번째 숫자를 입력!`);
 var secondNumber = +prompt(`두번째 숫자를 입력!`);
 var sum = firstNumber;
 if (firstNumber > secondNumber) {
     thirdNumber=firstNumber
     firstNumber = secondNumber;
     secondNumber = thirdNumber;
 }

 for (var i = firstNumber; i < secondNumber; i++) {
     sum += i
     sum++

 }

 alert(`${firstNumber} ~ ${secondNumber}까의 누적합 : ${sum}`)