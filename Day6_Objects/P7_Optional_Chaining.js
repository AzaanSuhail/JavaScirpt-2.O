const info = {
  name: "Azaan",
  age: 23,
  address: {
    city: "Bareilly",
    state: "UP"
  }
};

console.log(info.address.notpresent); // This will log undefined

const info1 = {
  name: "Azaan",
  age: 23
  // address is not defined here
};

console.log(info1.address); // This will log undefined
// console.log(info1.address.city); // This will cause an error if uncommented

// Solution 1: Manual Check
if (info1.address !== undefined) {
    console.log(info1.address.city);
} else {
    console.log("Address is not present");
}

// Solution 2: Optional Chaining
console.log(info1.address?.city); // This will log undefined if address is undefined not check not the city


const info2 = {
  name: "Azaan",
  age: 23,
  greet: function(){
    console.log("Hello World");
  }
};

info2.greet();
//Optional Chaining
// info2.fun(); //This line give the error 

// the solution is optional chaining

info2.msg_fun?.(); //this means if there is a not function with a name msg_fun then don't give error.

console.log(info2.msg_fun?.()); //Output : undefined