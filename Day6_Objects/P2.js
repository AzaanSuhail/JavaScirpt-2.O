const info={
    name: "Azaan",
    age:23,
    city:"Bareilly",
    freind: function(){
        console.log("Hey there! I am a freind");
    },
    // function greet(){    //this line wil give error so remove function then it will be fine
    //     console.log("Hey, I am "+info.name);
    // }

     greet(){    //here key is greet() and the value is greet() function itself
        console.log("Hey, I am "+this.name);
     }
}   

info.freind();
console.log(info); 

