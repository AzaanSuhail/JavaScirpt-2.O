// The question arises that what is hoisting in let and const possible. the answer is yes hoisting is possible in let and const but in temporal deadzone

console.log(x); //Temporal deadzone start here

let x=12; //Temporal deadzone end here 


// temporal deadzone we can is a time period between where we are accessing it and defining it 