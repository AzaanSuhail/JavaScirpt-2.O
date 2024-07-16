let arr1=[1,2,3,4];
let arr2=[7,8];

console.log(...arr1,...arr2);
console.log("<br>");
const arr3=[...arr1,5,6,...arr2,10,11,12,13,14];
console.log(arr3);

//Spreading means it is used to expand the array and spreading does not change the original array