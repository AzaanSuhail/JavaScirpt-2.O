//Destructing means it is used to expand the array and destructing does not change the original array
let arr=[1,2,3];
const [a,b,c]=arr;

//Or 
const [e,f,g]=[1,2,3];

console.log(a);
/* `console.log(b);` is logging the value of the second element in the `arr` array, which is 2. */
console.log(b);
console.log(c);
console.log("-------------------------------------------------------")
console.log(e);
console.log(f);
console.log(g);


let arr1=["helo","World",1,2,3,4,5,6];

let [a1,b1,...rest]=arr1;
console.log(a1);
console.log(b1);
console.log(rest);

//Swapping two numbers using destructing

let p=12;
let q=14;

[p,q]=[q,p];

console.log(p);
console.log(q);
