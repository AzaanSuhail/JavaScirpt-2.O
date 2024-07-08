/*
Write a program that reads 3 string and print the smallest string in terms of length
*/
const firstString="applee";
const secondString="banana";
const thirdString="Watermelon";

let a=firstString.length;
let b=secondString.length;
let c=thirdString.length;

if(a<b && a<c){
    console.log("Smallest string is "+firstString);
}

else if(b<a && b<c){
    console.log("Smallest string is "+secondString);
}

else if(c<a && c<b){
    console.log("Smallest string is "+thirdString);
}
else{
    console.log("Found two strings of same length!");
}
