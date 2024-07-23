/* 
const user1={
    name:"Azaan",
    age:23,
    sayHi(){
        console.log(this.name);
    }
};
const user2={
    name:"Aznul",
    age:232,
    sayHi(){
        console.log(this.name);
    }
};
const user3={
    name:"Saboor",
    age:34,
    sayHi(){
        console.log(this.name);
    }
};

user1.sayHi();
user2.sayHi();
user3.sayHi();

As we are looking we are writing the same function sayHi() in three of the users so we can optimize it by using function borrowing which user call, apply and bind which is used only for function
*/

const user1 = {
  name: "Azaan",
  age: 23,
};

const user2 = {
  name: "Aznul",
  age: 232,
};

const user3 = {
  name: "Saboor",
  age: 34,
};

function sayHi(){
    console.log(this.name);
}

// user1.sayHi(); //this will produce the error because user1 object want to access the function that is outside its body
//We can do this by call, apply and bind

sayHi.call(user1); //the value of this is user1

  //this always refer the object that is calling the function 
  
sayHi.call(user2);//the value of this is user1

const user4 = {
  name: "Azaan",
  age: 23,
};

const user5 = {
  name: "Aznul",
  age: 232,
};



function sayHi(degree, fav_game){
    console.log(this.name,degree,fav_game);
}

user_n={
    name:"skfhsk",
    age:34,
    displayMessage(){
        console.log(this.age);  //This is called implicit binding
    }
}
/* This is called explicit Binding" */
// sayHi.call(user4,"Btech-Majdoor","Hockey"); 
  
// sayHi.call(user5,"Btech-ECE","Volleyball"); //Output:Aznul undefined undefined  because degree and fav_game is not defined if you not passed it 


//This is called function borrowing where the object can borrow the function

//apply also works same as call but you have to pass the arguements in the form of list like below

sayHi.apply(user4,["Engineer-Majdoor","Hockey"]);
sayHi.apply(user5,["Engineer-CSE","Hockey"]);

//bind basically return the function


sayHi.bind(user5, "Btech-ECE", "Volleyball"); //this will show error

const result = sayHi.bind(user5, "Btech-ECE", "Volleyball"); 
result();

//in bind we have to store in a variable then make a call with same name