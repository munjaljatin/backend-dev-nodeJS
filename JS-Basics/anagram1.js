let name1 = "Jatin";
let name2 = "Nitaj";

function isAnagram(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;

  if (length1 != length2) return false;

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  console.log(sortedStr1, sortedStr2);
}

isAnagram(name1, name2);
