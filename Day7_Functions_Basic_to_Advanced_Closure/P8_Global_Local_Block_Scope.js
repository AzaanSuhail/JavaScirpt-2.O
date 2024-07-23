var a=14; //global variable

function check(){
    var b=1; //local variable
    console.log(x);
}

// console.log(b); give error

/*
{
    let x=4;
    let y=12;
    
    console.log(x); //Output : 4
    console.log(y); //Output : 12
}

console.log(x);  give error  same error with const
console.log(y);  give error
*/

{
  var x = 4;
  var y = 12;
}

console.log(x); //Output : 4 : no error
console.log(y); //Output : 12 : no error

/*
A global variable in JavaScript is a variable that is declared outside any function. It is accessible from any function or script in the entire program.
Ex-

A local variable in JavaScript is a variable that is declared within a function. It is only accessible within that function and is not available outside of it.

block variable are the varibal
var is globally scoped 
let & const are blocked scoped
*/

