const info={
    name:"Azaan",
    age:23,
    address:{
        state:"UP",
        city:"Lucknow",
        house_number : 483
    },
    courses:["HTML","CSS"]
}

let {name,age,address,courses}=info;

console.log(name);
console.log(age);
console.log(address);
console.log(courses);


//if i want to change the key name
let {name:username}=info;

let{address:{city}}=info; //it means city key inside the address object
console.log(city);