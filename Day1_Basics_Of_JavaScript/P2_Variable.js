
/* Rules to define variable : 

-->The name of the identifier should not be any pre-defined word(known as keywords)
-->The first character must be a letter, an underscore (_), or a dollar sign ($). Subsequent characters may be any letter or digit or an underscore or dollar sign. var message;
*/

message="Hey Champs!";
console.log(message);

message="Hey World Champs you win !";
console.log(message);

let message_2;
message_2="Hello Universe!";
console.log(message_2);

message_2="Hey Champs Universe!";
console.log(message_2);

// const message_3; it will show the error because const cannot be uninitialized and it cannot be changed after once intialization is completed.

const message_3="Hello World!";
console.log(message_3);

// message_3="Change";
console.log(message_3);


// message_3="Hey World Champs you win !";  //it will show the error message because const cannot be changed.


// Read this : https://www.geeksforgeeks.org/batch/mern-noida-9/track/beg-to-adv-basics-of-js/article/NjExNw%3D%3D

var azaan;
console.log(azaan);