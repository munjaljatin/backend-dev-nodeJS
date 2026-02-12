const arr = ["Jatin", "Munjal"];

const randomNumberGenerator = (max) => {
  return Math.floor(Math.random() * max);
};

function createPromise() {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      resolve("Array is empty");
    } else {
      reject("Array is not empty");
    }
  });
}

function createPromiseWithLoop() {
  return new Promise((resolve, reject) => {
    const num = randomNumberGenerator(10);
    if (num % 2 == 0) {
      // if num is even we resolve the promise with value of num
      resolve(num);
    } else {
      // if num is odd we reject the promise with the value of num
      reject(num);
    }
  });
}

for (let i = 0; i < 10; i++) {
  const num = randomNumberGenerator(100);
  console.log(num);
}
