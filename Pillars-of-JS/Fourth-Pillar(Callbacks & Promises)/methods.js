const delay = 5000;
function greet(yourName) {
  yourName = "Jatin";
  console.log(`Hello ${yourName}`);
}

setTimeout(greet, delay);

setInterval(greet, 10000);
