function printPattern(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = n - row;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    for (let j = 1; j <= row; j++) {
      str += "*";
    }
    console.log(str);
  }
}

printPattern(20);
