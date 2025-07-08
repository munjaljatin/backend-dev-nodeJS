/*
Higher Order Functions -> There are functions that takes another functions as an arguments are called higher order functions
*/

function f(x, fn) {
  // here x -> is a variable
  // fn -> is a function
  console.log(x);
  fn();
  console.log(fn);
}

f(10, function exec() {
  console.log("I am an expression passed to a HOF.");
});

function logAuthor(fun) {
  fun();
}

function author() {
  console.log("Author: Jatin Munjal");
}

logAuthor(author);
