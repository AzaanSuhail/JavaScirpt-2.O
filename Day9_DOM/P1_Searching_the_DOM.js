//This will connect with P2.html file

let startBtn = document.getElementById("btn-start");
console.log(startBtn); //It will give the full button along with its content

/*
Think yourself a situation where the project have 1000 of button then to search a specific button how tough it , without DOM
*/

let stopBtn = document.getElementById("btn-stop");
console.log(stopBtn);

//We can do the same task query selection for finding the element with class we have to pass .class and finding the element with id we have to pass #id
let start=document.querySelector("#btn-stop");
console.log(start);

/*
Let us consider a situation we have to select all the buttons so we have to put all the things to be selected with same class and use below
*/

let all=document.querySelectorAll(".button");
console.log(all);
  //this all will give you the array and it will give everything in a Hierarchical  order

//let say we have to find the the second button

console.log[all[0]];