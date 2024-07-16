let info={
    name: "John Doe",
    age: 30,
    city: "New York",
    address:function(){
        console.log(`My name is ${this.name} and I live in ${this.city}. I am ${this.age} years old.`); //this keyword refers to the object that is executing the function (this.name);
        //this keyword also called implicit binding
    }


//this keyword refers to the object that is executing the function
info.address();

function xyz(){
    console.log(this);
}

xyz(); //this keyword refers to the global object (window in browser environment) when the function is not executed by object to check the console of the browser and comment the above text before line 14