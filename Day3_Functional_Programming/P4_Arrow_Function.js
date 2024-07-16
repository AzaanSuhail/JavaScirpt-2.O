const calc_Sum=function(a,b){
    return a+b;
}

//equivalent arrow function
const calc_Sum1=(a,b)=>a+b;

console.log(calc_Sum1(1,2));

//Note : Arrow functions are also called fat arrow functions

const calcSumGreater=(x,y)=>{
    if(x>y){
        return x+y;
    }
    else{
        return x-y;
    }
}

//Shorthand of above function can be written as

const calcSumGreater1=(x,y)=>(x>y)?x+y:x-y;