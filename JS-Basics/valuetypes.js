// Value Types in JS
/*
Datatypes are of two types
1. Primitive Datatype -> that are atomic in nature which means these are not depends upon any another type
2. Non Primitive Datatype -> that are not atomic means these types depends on another data types for creation
*/
// 1. Number Type
let marks = 45;
let score = 0;
let volume = 20.25;
let y_axis = -2;
let age = 22;

console.log(marks, score, volume, y_axis);

// String type
var name = "Jatin Munjal";
var state = 'Haryana';
var country = `India`;

console.log(name, state, country);

// Boolean Type
let greater_than = (10>11)?true:false;
console.log(greater_than);
let less_than = (10>11)?true:false;
console.log(less_than);

// Object Type == Non Primitive Type
const User = {
    fName: "Jatin",
    lName: "Munjal",
    age: 22,
    gender: "Male",
    Role: "Junior Developer",
    phone: 123456
}

console.log(User);

// Undefined == That has not defined yet but will be defined in future
let val;
console.log(val);

// Null Type
let arc = null;
console.log(arc);