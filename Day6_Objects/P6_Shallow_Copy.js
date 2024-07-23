const info={
    name:"Azaan",
    age:23,
    city:"Bareilly",
    state:"UP"
}

const info2=info;

info2.age=25;
info.city="Nawabganj"; //You can see that changes also reflects in info2 this is  because objects are copied by reference not by copied by value this

console.log(info2);  
console.log(info);

//This is called shallow copying

//We can avoid this by using deep copy 
//Deep copy can be attain by spread

const person1={
    name:"Azaan",
    age:23
}

const person2=Object.assign({},person1);  // here it will copy person1 object to the empty object 
// Note : It will also do shallow copy but here it is doing like shallow copy

person1.name="XYZ";


console.log(person2);

const info_={
    name:"Azaan",
    age:23,
    address:{
        city:"Bareilly",
        state:"UP"
    }
};

const info3=Object.assign({},info_);

info3.address.city="Nawabganj";

console.log(info_);

//You can see that in the above example showing that Object.assign() is deep copy but it is not it is shallow copy