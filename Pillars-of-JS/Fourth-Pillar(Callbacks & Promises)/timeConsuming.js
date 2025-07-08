function timeConsumingByLoop() {
  console.log("Loop starts");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("Loop ends");
}

function timeConsumingByRuntimeFeature0() {
  console.log("Starting the timer0");
  setTimeout(function execute() {
    console.log("Completed the timer");
    for (let i = 0; i < 10000000000; i++) {}
  }, 5000); // 5 second timer
}

function timeConsumingByRuntimeFeature1() {
  console.log("Starting the timer1");
  setTimeout(function () {
    console.log("Completed the timer1");
  }, 0); // 0 second timer
}

function timeConsumingByRuntimeFeature2() {
  console.log("Starting the timer2");
  setTimeout(() => {
    console.log("Completed the timer2");
  }, 200); // 200 Miliseconds timer
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("By!");
