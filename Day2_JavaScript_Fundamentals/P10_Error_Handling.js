let user_name="XYZ";

try {
    console.log(my_name);
}
catch (error) {
    console.log(error.message);
}
finally{
    console.log("finally is always executed whether error occured or not");
}

console.log("Script will not stop!");