const x = "x decalred outside the function";

function exampleFunction()
{
    console.log("Inside the function");
    console.log(x);
}

exampleFunction();

console.log("Outside the function");
console.log(x);