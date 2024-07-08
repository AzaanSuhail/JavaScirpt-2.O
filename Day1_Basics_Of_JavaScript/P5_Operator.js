/* addition operator */
let a = 10;
let b = 20;
let c = a + b;
console.log(c);

/* subtraction operator */
let d = b - a;
console.log(d);

/* multiplication operator */
let e = a * b;

/* division operator */
let f = b / a;

/* modulus operator */
let g = b % a;

/* exponential operator */
let h = a ** b;
console.log(h)

/* increment operator */
let i = a++;
console.log(i);

/* decrement operator */
let j = b--;
console.log(j);

/* assignment operator */
let k = a += 10;
console.log(k);

/* comparison operator */
let l = a == b;
console.log(l);

/* strict comparison operator */
let m = a === b;
console.log(m)

/* not equal operator */
let n = a != b;
console.log(n);

/* strict not equal operator */
let o = a !== b;  
console.log(o);

/*
!= and !== are both comparison operators used to check for inequality, but they have a slight difference:

!= (not equal) performs type coercion, which means it tries to convert the operands to the same type before making the comparison. If the types are different, JavaScript will attempt to convert one or both of the operands to the same type before comparing them.

!== (strict not equal) does not perform type coercion. It checks both the value and the type of the operands. If the types are different, it will return true without trying to convert the operands to the same type. */

/* greater than operator */
let p = a > b;
console.log(p);

/* less than operator */
let q = a < b;
console.log(q);

console.log("apple">"banana"); //Output : false because ASCII value of a is 97 and b is 98

console.log("2">1); //Output : true because it converts 2 into number then compares it with 1

/* greater than or equal to operator */
let r = a >= b;
console.log(r);

/* less than or equal to operator */
let s = a <= b;
console.log(s);

/* logical and operator */
let t = a && b;
console.log(t);

/* logical or operator */
let u = a || b;
console.log(u);

/* logical not operator */
let v = !a;
console.log(v);

/* ternary operator */
let w = a > b ? a : b;
console.log(w);

/* nullish coalescing operator */
let x = a ?? b;
console.log(x);

/* bitwise AND operator */
let y = a & b;
console.log(y);

/* bitwise OR operator */
let z = a | b;
console.log(z);

/* bitwise XOR operator */
let aa = a ^ b;
console.log(aa);

/* bitwise NOT operator */
let bb = ~a;
console.log(bb);

/* bitwise left shift operator */
let cc = a << b;
console.log(cc);

/* bitwise right shift operator */
let dd = a >> b;
console.log(dd);

/* bitwise unsigned right shift operator */
let ee = a >>> b;
console.log(ee);

/* string concatenation operator */
let ff = a + " " + b;
console.log(ff);

/* string equality operator */
let ii = a == b;
console.log(ii);

/* string inequality operator */
let jj = a != b;
console.log(jj);

/* string strict equality operator */
let kk = a === b;
console.log(kk);

/* string strict inequality operator */
let ll = a !== b;
console.log(ll);

/* string greater than operator */
let mm = a > b;
console.log(mm);

/* string less than operator */
let nn = a < b;
console.log(nn);

/* string greater than or equal to operator */
let oo = a >= b;
console.log(oo);

/* string less than or equal to operator */
let pp = a <= b;
console.log(pp);

/* string logical and operator */
let qq = a && b;
console.log(qq);

/* string logical or operator */
let rr = a || b;
console.log(rr);

/* string logical not operator */
let ss = !a;
console.log(ss);

/* string ternary operator */
let tt = a > b ? a : b;
console.log(tt);

console.log(null==undefined); //Output : true

console.log(null===undefined); //Output : false

console.log(null>0); //Output : false  what happened internally is that null is converted to 0 and then compared with 0
console.log(null>=0); //Output : true

//Exception we discussed null is converted to 0 
console.log(null==0); //Output : false

console.log(null<1); //Output : true  null is converted to 0 and then compared with 1

//But we do any comparison with undefined it will output as false except console.log(undefined==null)

console.log(undefined>0); //Output : false  undefined is converted to NaN and then compared with 0
console.log(undefined>=0); //Output : false 
console.log(undefined==0); //Output : false
console.log(undefined<1); //Output : false
console.log(null==undefined); //Output : true
console.log(undefined==null); //Output : true
console.log(undefined===undefined); //Output : true


// Read this : https://www.geeksforgeeks.org/batch/mern-noida-9/track/beg-to-adv-basics-of-js/article/NjEyMg%3D%3D

// Read this : https://www.geeksforgeeks.org/batch/mern-noida-9/track/beg-to-adv-js-fundamentals/article/NjExMA%3D%3D