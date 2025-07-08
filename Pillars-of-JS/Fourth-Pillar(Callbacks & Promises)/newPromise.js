const promise1 = new Promise((resolve, reject) => {
  setTimeout(function exec() {
    resolve("foo");
  }, 1000);
});

promise1.then((value) => {
  console.log(value);
});

function getRandomInteger(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function createPromiseWithTimeOut() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(() => {
      let num = getRandomInteger(10);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 5000);
  });
}

const promiseY = createPromiseWithTimeOut();
console.log(promiseY);
