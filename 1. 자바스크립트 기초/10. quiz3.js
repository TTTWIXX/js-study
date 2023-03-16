var square=+prompt(`정사각형을 그립니다. 높이는 얼마입니까?`)
var result='';
for(var i=0;i<square;i++){
    for(var j=0;j<square;j++){
        result+='* ';
    }
    result+='\n';
}
alert(result);