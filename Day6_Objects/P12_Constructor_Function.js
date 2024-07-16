function User(name,age){
    // console.log(this);  //Here also it is refering to the object itself.
    this.name=name;
    this.age=age;
}

// const user=User; // if you console.log this user then it is a function
const user1=new User("Azaan",23);
const user2=new User("Aznul",25);
console.log(user1); //It will give you the object //this will helps in when you have create lot of object lets say with different key and pair it will help you out there

console.log(user2);
