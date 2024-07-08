const readline=require("readline-sync");
const marks=Number(readline.question("What is your marks in a subject? "));

// (marks>33)?console.log("Great"):console.log("Bad Luck tryNext Time");

const result=(marks>33)?"Great":"Bad Luck tryNext Time";
console.log(result);



const age=Number(readline.question("How old are you? "));

const ans=age<14?"Kid":age<18 && age>14?"Teenager": age>36?"Adult":"Not adult";

console.log(ans);