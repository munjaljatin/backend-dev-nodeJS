function process() {
  let i = 0;
  function innerProcess() {
    i++;
    return i;
  }
  return innerProcess;
}

const result = process();
console.log(result);
console.log(result());
console.log(result());
console.log(result());
