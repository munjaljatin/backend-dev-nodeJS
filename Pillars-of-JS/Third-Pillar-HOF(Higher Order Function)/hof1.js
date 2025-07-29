const radius = [1, 2, 3, 4];

// Calculates the area of circle
const area = function (radius) {
  return Math.PI * radius * radius;
};

// calculates the circumference of circle
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

// Calculates the Diameter of circle
const diameter = (radius) => 2 * radius;

// const calculateArea = (radius) => {
//   const result = [];
//   for (let i = 0; i < radius.length; i++) {
//     result.push(Math.PI * radius[i] * radius[i]);
//   }
//   return result;
// };

// creating an Higher order function
function calculate(radius, logic) {
  const result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(logic(radius[i]));
  }
  return result;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
