// setInterval Web API
let x = setInterval(function interval() {
  console.log("Inside the interval function");
}, 1000);

console.log(x);
clearInterval(x);

let y = setInterval(function intervalY() {
  console.log("Inside the intervalY function");
}, 200);

console.log(typeof x, typeof y);
