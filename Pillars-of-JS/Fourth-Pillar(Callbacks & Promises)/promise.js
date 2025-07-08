function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise(function executor(resolve, reject) {
    let num = getRandomInteger(10);
    for (let i = 0; i < 10000000000; i++) {}
    if (num % 2 == 0) {
      // if the number is even then the promise will gets fullfilled
      resolve(num);
    } else {
      // if the number is odd then promise will gets rejected
      reject(num);
    }
  });
}

function createPromiseWithTimeOut() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      for (let i = 0; i < 10000000000; i++) {}
      let num = getRandomInteger(5);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    });
  });
}

const x = createPromiseWithLoop();
console.log(createPromiseWithLoop);
console.log(x);

const y = createPromiseWithTimeOut();
console.log(y);
