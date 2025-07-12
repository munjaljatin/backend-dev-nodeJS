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

const obj1 = {
  name: "Jatin",
  valueOf() {
    return "11";
  },
  toString() {
    return "11";
  },
};

console.log(100 - obj1);
console.log(obj1);
console.log(obj1.toString());
console.log(obj1.valueOf());

let obj5 = {
  x: 10,
  y: 10,
  toString() {
    return {};
  },
};

let num = 10;
// This will throw and TypeError Exception
// console.log(num - obj5);

// Addition Operator -> The Addition operatory either performs the string concatenation or numeric addition
console.log("20" + {});
console.log(20 + {});
