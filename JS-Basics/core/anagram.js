let str1 = ["b", "c", "a", "b"];
let str2 = ["b", "a", "c", "d"];

function isAnagram(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;

  if (length1 != length2) {
    return false;
  }
  str1.sort();
  str2.sort();
  for (let i = 0; i < length1; i++) {
    if (str1[i] != str2[i]) return false;
  }
  return true;
}

if (isAnagram(str1, str2)) {
  console.log("strings are anagrams of each other");
} else {
  console.log("strings are not anagram of each other.");
}
