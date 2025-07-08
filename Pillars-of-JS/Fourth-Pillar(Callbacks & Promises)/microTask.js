console.log("Starting...");
function createPromise() {
  return new Promise(function executor(resolve, reject) {
    console.log("I'm going to resolve the promsise");
    resolve("Resolved by Jatin");
  });
}

// timer function
setTimeout(function timerFunction() {
  console.log("Timer Completed");
}, 0);

const pr = createPromise();
pr.then(function fulFillmentHandler(value) {
  console.log("Promise is fulfilled", value);
});

console.log("Ending...");
