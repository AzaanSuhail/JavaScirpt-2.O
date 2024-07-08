const firstName="";
const nickName="Azzu";

console.log(firstName || nickName);

const first_Name = "Azaan";
const nick_Name = "Azzu";

console.log(first_Name || nick_Name);

//internally it will check if first_Name is true then it will print first_Name else it will print nick_Name or we can say it will check truthy falsy value

//falsy value like = 0, "", undefined, null, NaN, false   are falsy value
//truthy value like = "Azaan", "Azzu" are truthy value means it contains something


//Note : if all the value are falsy then it will return the last falsy value
let fname="";
let mname=undefined;
let lname=null;

console.log(fname || mname || lname);


/* if we summarize it will check the first truthy value if it get then it will give that variable value if not it will give the last falsy value  */

let a=12;
let b;

console.log(a+b); //Output:NaN;

let c=12;
let d;

console.log(c+ (d || 0) ); //Output:12 Note in this it will try to find the first truthy value if it get then it will give that variable value if not it will give the last falsy value . here it will return last value which is 0


let f_name_1="Azaan";
let f_name_2="";

let ans=f_name_1 && f_name_2;
console.log(`Name-${ans}`); //Output : Name-

//Note : what && does it will search the first falsy value and give that value if it get then it will give that variable value if not it will give the last truthy value

let f_name_3="Azaan";
let f_name_4=null;

let ans2=f_name_3 && f_name_4;
console.log(`Name-${ans2}`); //Output : Name-null because last truthy value is null

/*
Quick Quiz:

1.What will the result of the ORed operation ?
 a) console.log(3 || 2 || 1);
 b) console.log("" || 0 || 2);
 c) console.log(null || 2 || 3);
 d) console.log("" || 0 || undefined);
 e) console.log("" || "null" || 2);
 d) console.log(undefined || "null" || 2); 

2.What is the result of the ANDed operation ?
 a) console.log(3 && 2 && 1);
 b) console.log("" && 0 && 2);
 c) console.log(null && 2 && 3);
 d) console.log("" && 0 && undefined);
 e) console.log("" && "null" && 2);
 d) console.log(undefined && "null" && 2);

*/
