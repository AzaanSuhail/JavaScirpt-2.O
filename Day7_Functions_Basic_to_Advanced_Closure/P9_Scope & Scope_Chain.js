let a = 3;

function x1() {
  let b = 5;
  console.log(a); // Output 3 (global scope)
  function y() {
    console.log(b); // Output 5 (scope of function x1)
    let c = 99;
    function z() {
      console.log(c); // Output 99 (scope of function y)
    }
    z();
  }
  y();
}

x1();

console.log("-----------------------------");

let p = 88;
let q = 77;
let r = 66;

function x2() {
  console.log(p); // Output 88 (global scope)
  function y() {
    console.log(q); // Output 77 (global scope)
    function z() {
      console.log(r); // Output 66 (global scope)
    }
    z();
  }
  y();
}

x2();

//Scope chaining is happen because of term called lexical environment

/*Lexical environment has two things :
1) Variable environment
2) Reference to outer lexical environment
