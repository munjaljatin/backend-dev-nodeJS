console.log("Hi! The execution starts");

for (let i = 0; i < 10000000000; i++) {}
setTimeout(() => {
  console.log("Runs after 10 seconds");
}, 10000);

console.log("The execution ends!");
console.log(process.env.PWD);
