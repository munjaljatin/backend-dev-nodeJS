let arr = [23, 200, 4, 67, 1, 8, 2, 90];
arr.sort(function comparator(a, b) {
  return a - b;
});

console.log(arr);

function doTask(fn, x) {
  //implemented by team A
  fn(x * x);
}

doTask(function num(num) {
  console.log("Num is ", num);
}, 9);
