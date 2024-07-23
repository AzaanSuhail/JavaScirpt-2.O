/*
Properties of pure function : 
1. It takes an argument
2. It should return something
3. For same input you should get the same output
4. The result should not be influenced by outer parameter
5. It should not mutate the original argument

*/
function getDoubleValue(number){
    return number*2;
}

const result=getDoubleValue(5);

console.log(result);

//Above function is the pure function


//This below function is impure function because output is influenced by outer parameter that is variable a
const a=5;
function getDoubleValue2(number) {
  return number * 2*a;
}

console.log(getDoubleValue2(5));


//This function is also not a pure function because it will mutating the original arr
function appendNumber(arr){
    arr.push(5,6);
    return arr;
}
arr=[1,2,3,4];
console.log(appendNumber(arr));

//the below function is a pure function because it will not mutating anything instead it will creating newarray

function appendNumber2(arr) {
    let newArr=[];
    // newArr.push(arr,5,6); //Output : [ [ 1, 2, 3, 4 ], 5, 6 ]
    newArr.push(...arr,5,6); //we done here spreading of array 
    return newArr;
}

arr = [1, 2, 3, 4];
console.log(appendNumber2(arr));

//let say if we create empty newArr outside the function name appendNumber then this function becomes impure function below is not the pure function
let newArr2=[];

function appendNumber3(arr) {
  // newArr.push(arr,5,6); //Output : [ [ 1, 2, 3, 4 ], 5, 6 ]
  newArr.push(...arr, 5, 6); //we done here spreading of array
  return newArr;
}

arr = [1, 2, 3, 4];
console.log(appendNumber2(arr));