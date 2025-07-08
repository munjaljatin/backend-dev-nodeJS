// a variable declared using var keyword will have either function scope or block scope

var num = 25;

function log10() {
  var i = 1;
  while (i < 11) {
    console.log(i);
    i++;
  }
}

log10();
// log10();

console.log(val);
var val;

console.log(x);
var x = 10;
console.log(x);

// console.log(y);
let y = 10;
console.log(y);

// console.log(z);
const z = 10;
console.log(z);

function gun(y) {
  if (y % 2 == 0) {
    let x = 0;
  } else {
    let x = 1;
  }
  x = 11;
  console.log(x);
}

gun(10);

// Re-Declaration of variables using var keyword is allowed
// Re-Declaration of variables using let keyword is not allowed
