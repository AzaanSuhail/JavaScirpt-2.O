//This file is connected to P4.html

let startBtn=document.querySelector(".start");
let countBtn=document.querySelector(".count");
let stopBtn=document.querySelector(".stop");
let resetBtn=document.querySelector(".reset");


function showMsg(){
    console.log('Button is Clicked!');
    
}
startBtn.addEventListener("click",showMsg); // Here we always give reference to the function because if we call here only even before start clicking it will show the content of the function showMsg

/*

We can do the above thing with arrow function also

startBtn.addEventListener("click",()=>{
    console.log("Button is Clicked!");
});

*/


/*
We can change the inner HTML also by below method : 

startBtn.addEventListener("click",()=>{
    if(startBtn.innerHTML=="Start"){
        startBtn.innerHTML="Begin";
    }
});

*/

//Let say when the button is clicked increased the value of count and print it

let count=0;

countBtn.addEventListener("click",()=>{
    count++;
    console.log(count);

})

startBtn.addEventListener("click",()=>{
    if(startBtn.innerText==="Start"){
        startBtn.innerText="Begin";
    }
    else{
        startBtn.innerText = "Start";
    }
});


resetBtn.addEventListener("click",()=>{
    // resetBtn.classList.add("yellow");
    //we can toggle it means if it is not there it will apply otherwise it will remove
    resetBtn.classList.toggle("yellow");
});

let input=document.querySelector(".input");

/*
change will print input value when losses focus

input.addEventListener("change",()=>{  
    console.log(input.value);
});

*/

//if i want to print as we are writing in the input field

input.addEventListener("input",()=>{
    console.log(input.value);
});

input.addEventListener("keyup",()=>{
    console.log(input.value);
})

/* Mouse Events */
input.addEventListener("mousedown",(event)=>{
    console.log(event.button);
});