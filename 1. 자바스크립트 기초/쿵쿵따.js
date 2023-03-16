alert(`끝말잇기 게임
========================
조건1. 단어는 3글자로 한정한다.
조건2. 3초이내에 답하지 못하면 패배한다.
조건3. 중복된 단어를 입력할경우 패배한다.
조건4. 이전 단어의 끝말과 현재 단어의 첫 단어가 일치해야한다.
조건5. 숫자는 입력할수 없다.`)


while(true){
    alert('쿵쿵따리 쿵쿵따 쿵쿵따리 쿵쿵따 쿵쿵쿵쿵');
    var firstWord=prompt(`쿵쿵따`);
    var secondWord=prompt('쿵쿵따');
    if(firstWord.charAt(firstWord.length-1)===secondWord.charAt(0)){
        alert(`${secondWord} 쿵쿵따`);
    }else{
        alert('땡!!!!!!!!!!');
    }
    
}
//     var count=0;
//     count++
//     if(
//         var `${count}`Word=prompt('쿵쿵따리 쿵쿵따 쿵쿵따리 쿵쿵따 쿵쿵쿵쿵');

//     )
// var firstWord
// var secondWord=prompt(`${firstWord} 쿵쿵따`)
// if(firstWord)










