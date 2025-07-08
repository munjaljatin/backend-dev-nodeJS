{
  const x = "x created in the block";
}
{
  let y = "y created in the block";
}
{
  var z = "z also created in the block using the var keyword";
}

console.log(z);

function var_scope() {
  var marks = 100;
}
// console.log(marks);

// function for sqaure
function sqaure(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

const number = cube(25);
console.log(number);
