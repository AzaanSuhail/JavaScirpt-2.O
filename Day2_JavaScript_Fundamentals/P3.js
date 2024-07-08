const readlineSync=require('readline-sync');
const num=Number(readlineSync.question("Enter a number "));

if(num%3==0){
    console.log("Fizz");
}
else if(num%5==0){
    console.log("Buzz");
}
else{
    console.log("Fizz-Buzz");
}