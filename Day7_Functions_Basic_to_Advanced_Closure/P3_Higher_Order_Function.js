//First class function
function wrapper(){
    return "Welcome to the New Game Challenge!";
}


//The below function is a higher order function
function greetMsg(wrapper){
    console.log("Azaan Suhail Siddiqui",wrapper());
}

greetMsg(wrapper);


//Below also a higher order function
function displayMessage(){
    return function(){
        console.log("Hey from the inner function!");
    }
}

const output=displayMessage();

output();


let arr=[1,2,3,4,5,6];

function square(arr){
    let square=[];
    for(let num of arr){
        square.push(num**2);
    }

    return square;
}

let out=square;
console.log(out);

    