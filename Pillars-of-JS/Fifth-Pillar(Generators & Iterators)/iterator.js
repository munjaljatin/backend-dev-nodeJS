function fetchNextElement(arr) {
  let idx = 0;
  function next() {
    if (idx == arr.length) {
      return undefined;
    }
    const nextElement = arr[idx];
    idx++;
    return nextElement;
  }
  return next;
}

const arr = [10, 20, 30, 40, 50, 60];
const result = fetchNextElement(arr);
console.log(result);
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
