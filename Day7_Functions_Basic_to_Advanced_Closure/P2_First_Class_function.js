/*
First class function :

A programming language is said to be to have first class function 1)in that language are treated like other variables.So the function can be assigned to any other variable or 2) passed as an argument or 3) can be returned by another function

*/

//1st point
const greetMsg = function() {
  console.log("Hey Madam!");
};

greetMsg();

//2nd point
function wrapper() {
  return " Welcome to Geeks for Geeks!";
}

function greetMessage(inner_fun, name) {  //look here we are not calling function we are simply passing reference of the function inner_fun
 
  console.log(name, inner_fun()); //here we calling inside the greetMessage function
}

greetMessage(wrapper, " Hey Azaan");
/*

function xyz(){
    function sum(){
        let name="Azaan Suhail";
        console.log(name,"Welcome to GFG")
    }
}

console.log(xyz());  //Output : Undefined
*/

function xyz() {
  function sum() {
    let name = "Azaan Suhail";
    console.log(name, "Welcome to GFG");
  }

  return sum;
}

console.log(xyz()); //here it pointing to the function sum


function yxz() {
  function sum() {
    let name = "Azaan Suhail";
    console.log(name, "Welcome to GFG");
  }

  return sum();//observe the above function for this line 
}

console.log(yxz()); 

const res=yxz();
res;

//for the above two line we can do this in this below way also



