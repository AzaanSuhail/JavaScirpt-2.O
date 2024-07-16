const readlinesync=require("readline-sync");
const key=readlinesync.questionInt("Enter key: ");
const course=readlinesync.questionInt("HTML"/"CSS"/"JavaScript"/"Python");

const info={
    name:"Azaan Suhail",
    age:23,
    [course]:"Course not available"
}

info.city="Bareilly";
info.state="UP wale bhaiy";
console.log(info);

console.log(info[key]); //this is called computed property
console.log(info[course]); //this is called computed property])
