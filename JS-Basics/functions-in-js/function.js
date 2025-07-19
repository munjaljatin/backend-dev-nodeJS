// Function Declaration in JS
function sayHi() {
  console.log("Hi!");
}

// console.log(square(5));
// Function Expression in JS
const square = function (val) {
  return val * val;
};

sayHi();
let number = 10;
console.log(square(number));

// Arrow Function in JS
const cube = (num) => {
  let result = num * num * num;
  return result;
};

console.log(cube(3));

const add = (num1, num2) => num1 + num2; // Implicit return by the arrow function
console.log(add(10, 20));

setTimeout(() => {
  debugger;
  console.dir(sayHi);
}, 1000);
