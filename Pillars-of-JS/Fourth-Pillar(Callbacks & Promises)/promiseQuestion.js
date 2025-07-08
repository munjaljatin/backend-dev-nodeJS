function blockingForLoop() {
  for (let i = 0; i < 10000000000; i++) {}
}

console.log("Start of the file!");
setTimeout(function timer1() {
  console.log("Timer 1 done!");
}, 0);

blockingForLoop();

let x = Promise.resolve("Jatin's Promise1");
x.then(function processPromise(value) {
  console.log("Whose Promise ?", value);
  blockingForLoop();
});

let y = Promise.resolve("Jatin's Promise2");
y.then(function processPromise(value) {
  console.log("Whose Promise ?", value);
  setTimeout(() => {
    console.log("ok done!");
  }, 0);
});

let z = Promise.resolve("Jatin's Promise 3");
z.then(function processPromise(value) {
  console.log("Whose Promise ?", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done!");
});

console.log("End of the file");
