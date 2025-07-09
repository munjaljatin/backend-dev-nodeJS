let user = {
  name: "Jatin",
};

let marks = 10;
console.log(marks - user);
console.log(100 - undefined);
// An empty object
var newObj = {};
console.log(null - newObj);
console.log(10 + true);

const ages = {
  alice: 27,
  bob: 21,
};
console.log("20" - ages);

console.log(12 + "13");
console.log("1" - 1);

// ToNumber Abstract operation
console.log(10 - null); // -> 10 - 0 -> 10
console.log(1 - "0xa"); // -> 1 -10 -> 9
console.log(10 - undefined);
console.log(10 - "111");
console.log("11ab" - 12);
console.log(10 - user);
console.log(10 - true);
console.log(10 - false);

let newobj = {
  key: "value",
};

console.log(newobj.toString());
console.log(newobj.valueOf());
