// It is used to read data from the user

let readlineSync = require('readline-sync');
const name = readlineSync.question("What is your name ");
const age=readlineSync.question("what is your current age ");

const DOB=2024-Number(age);
console.log(name);

//We can used this for greeting we saw many time most website want name & then will greet you with name

console.log(`Hello ${name} your age is ${age} and you were born in ${DOB}`);
