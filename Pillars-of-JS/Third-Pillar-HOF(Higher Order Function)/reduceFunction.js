/**
 * reduce is also a HOF(Higher Order Function) available for arrays
 * reduce function also takes a function => f as an argument,
 * what reduce function does is, it one by one goes to the every element of the array,
 * say the current element is arr[i]
 * the reduce function will pass this element to the function f, and accumulate the result of further function calls with this particular result
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(previousValue, currentValue) {
  return previousValue + currentValue;
}

let resultArray = arr.reduce(sum);
console.log(resultArray);

/**
 * let arr = [1,2,3,4,5,6];
 * then what reduce function will do:
 * previousValue -> 1, first element -> 2       = 3
 * previousValue -> 3, second element -> 3      = 6
 * previousValue -> 6, third element -> 4       = 10
 * previousValue -> 10, fourth element -> 5     = 15
 * previousValue -> 15, fifth element -> 6      = 21
 */

let cart = [
  { productName: "Iphone", price: 80000 },
  { productName: "Back Cover", price: 500 },
  { productName: "Tempered Glass", price: 300 },
];

function addPrices(previousValue, currentValue) {
  let newTotalPrice = previousValue.price + currentValue.price;
  return { price: newTotalPrice };
}
let totalAmount = cart.reduce(addPrices);
console.log(totalAmount.price);
