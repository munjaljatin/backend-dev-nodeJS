let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var name = "Jatin Munjal";
let users = ["Jatin", "Rahul", "Kamal", "Gurdeep", "Mohit"];

// for of loop
// syntax
/*
for(variable of iterable_object){
    console.log(variable);
}
 */

for (const val of arr) {
  console.log(val);
}
for (const char of name) {
  console.log(char);
}

for (const counter of users) {
  console.log(counter);
}
