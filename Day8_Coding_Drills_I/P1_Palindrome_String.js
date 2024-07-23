const str="MadaM";

//Note there is no reverse method of string in javascript

const arr_of_char=str.split("");
console.log(arr_of_char);

const reverse_Char=arr_of_char.reverse();
console.log(reverse_Char);

const reverse_str=reverse_Char.join("");

if(str==reverse_str){
    console.log("Yes it is a palindrome!");
}
else{
     console.log("Yes it is a palindrome!");
}

console.log('Another Method');

function reverse(str){
   let reverse="";

   for(let i=str.length-1;i>=0;--i){
    reverse=reverse+str[i];
   }
   return reverse;
}


let compare=reverse(str);

if(compare==str){
      console.log("Yes it is a palindrome!");
}
else{
     console.log("Yes it is a palindrome!");
}

