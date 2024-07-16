let arr1=[1,2,3];
let arr2=arr1; //It is also pointing/refering to the same memory location

//This above process called shallow copy which means changing one variable value in one array will reflect same changes in the other array
arr2.push(4);

console.log(arr1);
console.log(arr2);

//This happens because of reference


//What is the solution for the above problem 
//The solution is to use spread operator

let arr3=[...arr1];
arr3.push(5);

console.log("Arr1->"+arr1);
console.log("Arr3->"+arr3);