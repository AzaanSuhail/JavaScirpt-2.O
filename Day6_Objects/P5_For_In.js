const info={
    name:"Azaan",
    age:23,
    city:"New York"
}

const ispresent="name" in info; // we can check the whether key is present in info
console.log(ispresent);

for(let key in info) {
    console.log(key); //you will get the key value
    console.log(info[key]); // you will get the value of the key
}