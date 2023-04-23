
const userNames= [`김철수`,`강감찬`,`박영희`];
const [a,b,c]=userNames;
console.log(a,b,c);
const [firstObj] = [{id:1},{id:2},{id:3}].filter(obj=>obj.id>=2);
console.log(firstObj);
const copynames=[...userNames];
console.log(copynames);