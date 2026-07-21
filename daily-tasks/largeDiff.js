// Day - 7
// Problem 13: Find the Largest Difference.

function largestDiff(arr) {
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
  return max - min;
}

console.log(largestDiff([8, 3, 10, 2, 6]));
