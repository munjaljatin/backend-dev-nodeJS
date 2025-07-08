const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Enter your name", (name) => {
  console.log(`Hello, ${name}`);
  readLine.close();
});
