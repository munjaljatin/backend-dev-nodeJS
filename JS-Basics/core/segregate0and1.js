let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];

function segregate(arr) {
  let length = arr.length;
  let count = 0;

  for (const val of arr) {
    if (val == 0) count++;
  }
  // console.log(count);
  for (let i = 0; i < count; i++) arr[i] = 0;

  for (let i = count; i < length; i++) arr[i] = 1;

  console.log(arr);
}

segregate(arr);
