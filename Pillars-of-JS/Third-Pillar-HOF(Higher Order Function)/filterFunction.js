/**
 * filter function
 * filter is also a HOF(Higher Order Function)
 * filter function also loops over the array elements
 * there is one special thing about filter function, i.e. the argument function f which we have to pass inside
 * filter should always return a boolean value, if it is not the boolean value then the output will be converted to a boolean value
 *
 * filter loops over the array elements, passes that element in the argument function
 * and then if the output of this function is true, then
 * it stores the original element in a new array otherwise
 * doesn't add this element to the array
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isEven(element) {
  return element % 2 == 0;
}

const resultArray = arr.filter(isEven);
console.log(resultArray);
