/**
 * fun -> is a HOF(Higher order function) because it takes fn (which is also a function) as an argument
 *
 * x -> a variable
 * fn -> a function
 */

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

function exec() {
  console.log("I am also executed with respect to function fun()");
}

// the function we as an argument while calling the function is known as a callback function.
// Here function exec() is a callback function
fun(10, exec);
