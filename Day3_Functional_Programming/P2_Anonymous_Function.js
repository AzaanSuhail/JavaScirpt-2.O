let anonymous_function=function (){
    console.log("Hello Man!");
}

console.log(typeof anonymous_function);

anonymous_function();

//Note : Hoisting cannot be done with a anonymous function


// Message(); //Error : Cannot access 'Message' before initialization

console.log(Message); //Here it will treated Message as a variable

var Message = function(){
    console.log("Hello Woman!");
}