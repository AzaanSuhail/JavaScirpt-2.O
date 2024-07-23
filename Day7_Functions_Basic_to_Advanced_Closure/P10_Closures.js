/*
A closure is the combination of a function bundled together with reference to its lexical environment 
In other words, A closure is a function that remembers outer variables and can access it 
*/

function x(){
    let a=5;
    function y(){
        console.log(a);
    }
}

x();

/*
 In the above example function y forms a closure with the lexical environment/variable of a function x  and it is happened because of scope chaining and scope chaining happened because of lexical analysis/environment
*/