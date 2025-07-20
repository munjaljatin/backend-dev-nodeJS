console.log(firstName);
// console.log(lastName);
const x = "x declared outside the function";
var firstName = "Jatin";
let lastName = "Munjal";

function exampleFunction() {
  console.log("Inside the function");
  console.log(x);
}

exampleFunction();

console.log("Outside the function");
console.log(x);

// Block Scope
{
  const x = 10;
  let y = 20;
  console.log(x);
  console.log(y);
}

// Another Block Scope
{
  //   var y = 10;
}

// console.log(y);

const funExp = function () {
  var y = 10;
};

{
  var y = 20;
}

console.log(y);
