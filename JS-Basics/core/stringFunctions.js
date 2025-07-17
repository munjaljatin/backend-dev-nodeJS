let firstName = "Jatin";
let lastName = "Munjal";

let myFullName = "Jatin Munjal";
let hello = "Hello World Hello World World Hello";

// string length function
// string_variable.length;
function getLength(str) {
  console.log("Original String: " + str);
  console.log("Length of str is " + str.length);
}

const resultValueOfGetLength = getLength(firstName);
console.log(resultValueOfGetLength);

getLength(lastName);

/********************************************* */
// finding the first index of target string
function findFirstIndexOf(str, target) {
  console.log("The Original String is " + str);
  console.log("Index of target string is " + str.indexOf(target));
}

findFirstIndexOf(myFullName, "Munjal");

function findLastIndexOf(str, target) {
  console.log("The Original String is " + str);
  console.log("Index of target string is " + str.lastIndexOf(target));
}

findLastIndexOf(hello, "Hello");

/********************************************* */
// finding the sub string inside a string
// JS Provide the inbuilt function also
// str.slice(target_string, startIndex, endIndex)
function cutIt(str, startIndex, endIndex) {
  let subStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      subStr = subStr + str[i];
    }
  }
  return subStr;
}

const substr = cutIt(myFullName, 3, 9);
console.log(substr);

function getSlice(str, startIndex, endIndex) {
  console.log("orignal string: ", str);
  console.log(str.slice(startIndex, endIndex));
}

function subStr(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = startIndex; i <= endIndex + 1; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
}

getSlice(hello, 6, 30);
getSlice(myFullName, 6, 30);
let temp = hello.substr(2, 30);
console.log(temp);

const temp1 = subStr(hello, 2, 30);
console.log(temp1);

/******************************************** */
// replace function for strings

function replaceString(str, target, replacementStr) {
  console.log("The original string is " + str);
  console.log(
    "The string after replacement " + str.replace(target, replacementStr)
  );
}

function strReplace(str, target, replacementStr) {
  let targetLength = target.length;
  let repLength = replacementStr.length + targetLength;
  let j = 0;
  let targetIndex = str.indexOf(target);
  str = str.split("");
  replacementStr = replacementStr.split("");

  for (let i = targetIndex; i < repLength; i++) {
    // let j = 0;
    // str[i].split("") = replacementStr[j].split("");
    str[i] = replacementStr[j];
    j++;
  }
  str = str.join();
  return str;
}

replaceString(myFullName, "Munjal", "Kumar");
const temp2 = strReplace(myFullName, "Munjal", "Kumar");
console.log(temp2);

/******************************************** */
// split function => splits the string into array of elements
// string_variable.split(separator);
let myName = "My name is Jatin";
myName = myName.split("");
// console.log(myName.split(""));

console.log(myName);
console.log(myFullName.split("j"));

/***************************************** */
// trim function => removes the extra spaces from left and right
console.log("   Bye! Bye~ Bye!    ".trim());
let tagLine = "     Ram Ram bhai sareya n!    🙏🙏";
tagLine = tagLine.trim();
console.log(tagLine);

/***************************************** */
// toUpperCase
tagLine = tagLine.toUpperCase();
console.log(tagLine);

/***************************************** */
// toLowerCase
tagLine = tagLine.toLowerCase();
console.log(tagLine);
