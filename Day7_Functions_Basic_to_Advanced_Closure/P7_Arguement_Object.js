/*

Arguments Object in Non-arrow function: 

Argument object is an array like object present locally inside a function and it contains value of all the arguments passed to a function.

*/

function sum(a,b){
    return a+b;
}

console.log(sum(3,5)); //Output : 8
//but if the no. of arguments are greater than that defined in function it will not give error unlike other programming languages

console.log(sum(3,5,6,23,324)); //Output : 8  it still give the same output as above

function sum2() {
  console.log(arguments[3]); //output : element at index 3 that is 2
  console.log(arguments); //it is like keyword in JavaScript
  //we can change the value of argument
  arguments[3]=99;
  console.log(arguments[3]); //output : 99 means it changes
  console.log(arguments); //internally its also changed
}

sum2(1,2,3,4,5,6); //Output :[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }  --> Note : It is an array like object

console.log(sum);

//The question arises in your mind where we can use this argument object, so let say you have to find the sum of n number of argument  so we can use this argument object

const num=[1,2,3,4,5];
function sum_using_argument_object(){
    let sum=0;

    for(let num of arguments){
        sum+=num;
    }

    return sum;
}

const sum_n=sum_using_argument_object(1,2,3,4,5);
console.log(sum_n); 

//Note : We cannot use arrays method like map,filter, split,slice and reduce because argument object is an array like object not array so we cannot any array method

//let use spread in argument object
function Use_of_spread_In_Argument_Object(){
    console.log(arguments);
    const arr=[...arguments];
    console.log(arr);
}

Use_of_spread_In_Argument_Object(1,2,3,4,5,6);

function learning(a=4){
    console.log(a);
    console.log(arguments);
    arguments[0]=12;
    console.log(arguments);
}

learning(43); //Output : 43 Even if the default argument is 4 but still it printing 433 