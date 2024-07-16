let options="Azaan Suhai Siddiqui";

//Method1
console.log(options.toUpperCase());
//Method2
console.log(options.toLowerCase());

//Method3
console.log(options.length);

//Method4
console.log(options.indexOf("S"));

//Method5
console.log(options.lastIndexOf("i"));

//Method6
console.log(options.slice(0, 4));

//Method7
console.log(options.substring(0, 4));

//Method8
console.log(options.substr(0, 4));

//Method9
console.log(options.split(" "));

//Method10
console.log(options.replace("Azaan", "Azaan ali"))

//Method11
console.log(options.trim());

//Method12
console.log(options.trimStart());

//Method13
console.log(options.trimEnd());

//Method14
console.log(options.trimLeft());

//Method15
console.log(options.trimRight());

//Method16
console.log(options.charCodeAt(7));

//Read this :
// https://www.geeksforgeeks.org/batch/mern-noida-9/track/beg-to-adv-string-methods/article/NjQzNA%3D%3D


// https://www.w3schools.com/js/js_string_methods.asp

const str="hello world";

console.log(str.substring(-3)); //Output

/*
Reason : The substring method in JavaScript is used to extract a portion of a string and returns the extracted part in a new string. It takes two parameters: the starting index (inclusive) and the ending index (exclusive). If either parameter is negative or greater than the length of the string, it's treated as if it were 0 or the string length, respectively.

In this case, when str.substring(-3) is called, the negative value -3 is treated as 0. So, it starts extracting the substring from index 0 which is the beginning of the string. Therefore, the entire string "hello world" is returned as the output.

*/