// debugger;
const GITHUB_API = "https://api.github.com/users/munjaljatin";

// fetch() provided by the browser runtime, return a promise object

setTimeout(() => {
  const data = fetch(GITHUB_API);
  console.log(data);
}, 5000);
// console.log(data);

const user = fetch(GITHUB_API);
user.then(function () {
  console.log(user);
});

const cart = ["shoes", "jeans", "kurta", "watch"];

const promise = createOrder(cart);
console.log(promise);

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    // logic for validating the cart
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid");
      reject(error);
    }
    const orderID = "23455";
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 6000);
    }
  });
}

function validateCart(cart) {
  return true;
}

setTimeout(function () {
  console.log(promise);
}, 8000);
