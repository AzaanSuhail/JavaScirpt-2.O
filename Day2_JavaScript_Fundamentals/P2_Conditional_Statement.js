const readlineSync = require('readline-sync');
const age = readlineSync.question("How old are you? ");


if(Number(age)>=18){
    console.log("You are adult and you can vote");
}

else{
    console.log("You are not adult and you cannot vote");
}

