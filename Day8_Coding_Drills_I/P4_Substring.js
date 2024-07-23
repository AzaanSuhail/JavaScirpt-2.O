let str="12345";
var tot=0;

for(let i=0;i<str.length;++i){
    for(let j=i;j<str.length;++j){
        console.log(str.slice(i,j+1));
        tot=tot+1;
    }
}

console.log("Total="+tot);
