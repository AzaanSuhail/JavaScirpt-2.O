function calcTotal(a,b,...rest){
    console.log(a,b);
    console.log(rest);
}

/*
Note : you can write args instead of rest they both are same
function calcTotal(a, b, ...args) {
  console.log(a, b);
  console.log(args);
}
  */

calcTotal(1,2,3,4,5,6,7,8);

//Rest will store element in the form array  


/*
Rest should be used as last perimeter in a function

The below function is wrong

function calcTotal(...rest,a,b){
    console.log(a,b);
    console.log(rest);
}
*/

//Let you are in an interview somebody asks you calculate the sum without passing arguments

function sum(...rest){
    let sum=0;
    for(let num of rest){
        sum+=num;
    }
    return sum;
}

console.log(sum(1,2,3,4,5));