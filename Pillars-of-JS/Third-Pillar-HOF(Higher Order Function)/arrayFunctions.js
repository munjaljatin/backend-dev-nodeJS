/**
 * arrays are also custom objects in Javascript
 * index of the element is key and the element itself is the value
 * ["abc", "def", "ghi", "jkl"] => {0: "abc", 1: "def", 2: "ghi", 3: "jkl"}
 */

/**
 * map function
 * map is a higher order function that is avaiable with arrays
 * map takes a function as an argument -> f
 * it returns an array in which every value is actually poplulated by calling the function f with original array element as argument
 *
 * Every element of the original array is passed one by one in the argument function f
 * and then whatever is the output for each individual element, we populate that output in an array
 *
 * map internally iterates/loops over every element of the given origianl array
 * pass that element in the argument function f and then store the returned value inside an array
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // original array

// square function
function square(element) {
  return element * element;
}

// cube function
function cube(element) {
  return element * element * element;
}

// isEven function
function isEven(element) {
  if (element % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const squareResult = arr.map(square);
const cubeResult = arr.map(cube);
const EvenOdd = arr.map(isEven);

// console.log(squareResult, cubeResult, EvenOdd);
console.log(squareResult);
console.log(cubeResult);
console.log(EvenOdd);

const digits = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

digits.sort();

// the default implementation of digits.sort() fucntion is going to sort the array in lexicographical order or dictionary order
/**
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 3 -> D
 * 4 -> E
 * 5 -> F
 * 6 -> G
 * 7 -> H
 * 8 -> I
 * 9 -> J
 * .....
 * [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D] and the sort() function sorts the array according to the dictionary order
 * [B, BA, BAA, BAAA, BB, BC, BD, BE, C, D, J];
 */

console.log(digits);

/**
 * if the function that we are passing inside the map(HOF) function takes two arguments
 * then the first argument will be accessing the actual value
 * and the second argument will be accessing the index of the value
 */

const indexArray = [10, 9, 8, 7, 6, 5];

function logIndex(element, idx) {
  return `Element at index ${idx} is ${element}`;
}

const index = indexArray.map(logIndex);
console.log(index);
