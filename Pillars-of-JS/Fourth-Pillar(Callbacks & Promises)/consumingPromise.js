var max = 10;
function getRandomInteger(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function createPromiseWithTimeOut() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");
    setTimeout(function () {
      let randomNumber = getRandomInteger(max);
      if (randomNumber % 2 == 0) {
        resolve(randomNumber);
      } else {
        reject(randomNumber);
      }
    }, 5000);
    console.log("Exiting the executor callback from the promise constructor");
  });
}

console.log("Starting...");
const p = createPromiseWithTimeOut();
console.log("Currently my promise object is like", p);
console.log("Added the first set of Handler functions");
p.then(
  function fulFillmentHandler(value) {
    console.log("Inside the FulFillment Handler with the value", value);
    console.log("After fulfilled the promise is ", p);
    // console.table(p);
  },
  function rejectionHandler(value) {
    console.log("Inside the Rejection Handler with the value", value);
    console.log("After rejection the promise is ", p);
    // console.table(p);
  }
);

console.log("Adding the second set of Handler functions");
p.then(
  function fulFillmentHandler2(value) {
    console.log("Inside the FulFillment Handler 2 with the value", value);
    console.log("After fulfilled2, the promise is", p);
  },
  function rejectionHandler2(value) {
    console.log("Inside the Rejection Handler 2 with the value", value);
    console.log("After Rejection 2 the promise is ", p);
  }
);

// console.log(p);
console.log("Ending...");
