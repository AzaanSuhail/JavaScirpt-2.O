const arr=[1,2,3,4];

const reducerFun=(acc,cur)=>acc+cur; //curr is equal to the all value in the array while looping

const output=arr.reduce(reducerFun,0); //here the acc is 0 
console.log(output);