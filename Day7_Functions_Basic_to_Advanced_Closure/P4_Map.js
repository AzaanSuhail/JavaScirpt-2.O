/*
Map & Reduce are the examples of higher order function
*/

const arr=[1,2,3,4,5];

function square_of_number(arr){
    let ans=[];

    for(let num of arr){
        ans.push(num**2);
    }
    return ans;
}

console.log(square_of_number(arr));
console.log("-------------------------------------------------------")

//we can do this using map also

function square(num){
    return num**2;
}

let res=arr.map(square); //internally res is converted whatever result is calculated will pushed to arr 
console.log(res);
console.log(typeof res);  //Object  Note :array is also a object
console.log("-------------------------------------------------------");

//we can do this using arrow function also

const square_Num=arr.map((arr)=>{
    return arr**2;
});

//more shorthand of above function is 
const square_num=arr.map((arr)=> arr**2);

console.log(square_Num);
console.log("----------------------------------------------------------");
console.log(square_num);
console.log("----------------------------------------------------------");

const more_on_arrow_function=arr.map((arr,index)=>{
    console.log(index);
    return arr**2;
});

console.log(more_on_arrow_function);