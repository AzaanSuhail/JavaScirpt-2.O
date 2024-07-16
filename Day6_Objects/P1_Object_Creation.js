const obj={}; //This is object literal
console.log(typeof obj);

const obj2 = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry",
    age: 23,
    1:"My roll No.",
    Course: ["HTML","CSS","JavaScript","Python"]

};

//objects store values in the form of key value pair
//key is always string value can be any datatype

console.log(obj2); //it will show any error because all the keys are internally/implicitly converted into string

//if i want only value corresponding to particular key
console.log(obj2.company);

//Or
console.log(obj2["company"]);
//Question might be arises in your mind what is the difference between [ ] and . in objects



const obj3 = {
  name: "Harry",
  role: "Programmer",
  company: "CodeWithHarry",
  age: 23,
  1: "My roll No.",
  Course: ["HTML", "CSS", "JavaScript", "Python"],
  "is passed":true
};

//when there is key with multiple words you cannot access using dot notation
//When the key have multiple words then put that key in double quotes and try to access using the square notion
// console.log(obj3.is passed); //This will show the error
console.log(obj3["is passed"]);

let school = {
  name: "Vivekananda School",
  location: "Delhi",
  established: "1971",
  displayInfo: function() {
    console.log(`${school.name} was established 
                  in ${school.established} at ${school.location}`);
  }
};
school.displayInfo(); 

//JavaScript may also have a function as a member, in which case it will be known as a method of that object.



