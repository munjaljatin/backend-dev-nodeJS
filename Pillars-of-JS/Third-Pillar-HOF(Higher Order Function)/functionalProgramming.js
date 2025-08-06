const arr = [1, 2, 3, 4, 5];

// map() function => A higher order function available with arrays
function calculateSquare(element) {
  return element * element;
}

function calculateCube(element) {
  return element * element * element;
}

function isEvenOdd(element) {
  if (element % 2 == 0) return "Even";
  return "Odd";
}

console.log(arr.map(calculateSquare));

const resultCube = arr.map(calculateCube);
console.log(resultCube);

console.log(arr.map(isEvenOdd));

function printElementIndex(element, index) {
  return `Element at ${index} is ${element}`;
}

const resultArray = arr.map(printElementIndex);

console.log(resultArray);

function calculateSquareRoot(element) {
  return Math.sqrt(element);
}

const newResult = arr.map(calculateSquareRoot);
console.log(newResult);
console.log(arr.map((element) => Math.sqrt(element)));

const b = [1, 4, 1, 4, 6, 2, 1];
console.log(
  b.sort((a, b) => {
    return a - b;
  })
);

const arr1 = [2, 3, 5, 7, 9];
function evenOrOdd(element) {
  return element % 2 == 0;
}

console.log(arr1.filter(evenOrOdd));

function Sum(prevResult, currentValue) {
  return prevResult + currentValue;
}
const cart = [
  {
    name: "Iphone",
    price: 55000,
  },
  {
    name: "backcover",
    price: 1000,
  },
  {
    name: "glass",
    price: 200,
  },
];

const totalAmount = cart.reduce(Sum);
console.log(cart[0].name);
console.log(cart[1].price);

var totalAmount1 = 0;
for (let i = 0; i < cart.length; i++) {
  // var totalAmount1 = 0;
  totalAmount1 = cart[i].price + totalAmount1;
}
console.log(totalAmount1);

function Amount(prevResult, currentValue) {
  return prevResult + currentValue.price;
}
const total = cart.reduce(Amount);
console.log(total);
