const str="123456789";
//Output : 12345####

const repeat="#".repeat(4); // 4 specify the no. of times to repeat

console.log(repeat);

const res=str.slice(0,str.length-4)+repeat;
console.log(res);