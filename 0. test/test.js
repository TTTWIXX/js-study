const [obj]=[{id:1234, pw:5678}, function sum (a,b){
    return a+b;
}]


const [filterData]=[obj].filter(u=>u.id===1234)


console.log(filterData);