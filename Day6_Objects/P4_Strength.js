function getObjects(name,city) {
    return{
        name:name,
        city:city
    }
}

const ans=getObjects("Azaan","Bareilly");
console.log(ans);


//ShortHand property
function getObjects2(name,city){
    return{
        name,
        city
    }
}

console.log(getObjects2("Azaan","Bareilly"));

const a="Gini";
const b="Takar";

console.log({a,b}); //We can write variables in the form of objects