var user = {
  firstName: "Jatin",
  lastName: "Munjal",
};

console.log(10 - user);

let obj = {};
console.log(100 - obj);

let obj2 = {
  num1: 1,
};
console.log(100 - obj2);

// overriding the toString() and valueOf()
let newObj = {
  toString() {
    return 10;
  },
};

console.log(newObj.toString());
let type = typeof newObj.toString();
console.log(type);
console.log(10 - 10);
console.log(obj.toString());

console.log(obj.valueOf());
console.log(typeof obj.valueOf());
