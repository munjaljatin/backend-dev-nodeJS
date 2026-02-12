const digits = [2, 4, 6, 8, 10];

console.log(
  digits.map((num) => {
    return num * 2;
  })
);

const cube = digits.map((num) => num * num * num);
console.log(cube);

const arr = [1, 2, 3, 4];
console.log(
  arr.map((num, index) => {
    // if (num % 2) return num;
    console.log(`index${index}: value${num}`);
    return num;
  })
);

console.log(
  arr.filter((num) => {
    if (num % 2 == 0) {
      return num;
    }
  })
);

function filter(num) {
  return num % 2 == 0;
}
console.log(arr.filter(filter));

// reduce function is also available with arrays
const newArr = [1, 2, 3, 4, 5];
function calculateSum(prevResult, currentValue) {
  return prevResult + currentValue;
}

console.log(newArr.reduce(calculateSum));
