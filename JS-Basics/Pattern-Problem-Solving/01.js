// function for printing the star pattern
function printPattern(n) {
  // logic for printing the pattern
  for (let row = 1; row <= n; row++) {
    let starStr = "";
    for (let col = 1; col <= n; col++) {
      starStr += "* ";
    }
    console.log(starStr);
  }
}

function pattern2(n) {
  //logic for printing the pattern
  for (let row = 1; row <= n; row++) {
    let starStr = "";
    for (let col = 1; col <= row; col++) {
      starStr += "* ";
    }
    console.log(starStr);
  }
}

printPattern(4);

printPattern(10);
console.log("");
pattern2(10);
