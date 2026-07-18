// Problem 8
// Find the maximum and minimum number in an array using a single loop.

function minMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }
  }
  return { max, min };
}
console.log(minMax([7, 2, 9, 1, 5]));
