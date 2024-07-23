//This file is connected to P8.html

/*
Event delegation means handling the events effectively so we apply events apply to the parent this will save the webbrowser memory or cache
*/

let btn=document.querySelector(".parent");

btn.addEventListener("click",(event)=>{
    console.log(event.target.innerText); //target mean    whatever the child is clicked
 


})
