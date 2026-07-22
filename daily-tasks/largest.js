// Problem 1
// Find the largest number in an array.

function largestNum(arr) {
  let largest = arr[0]; //arr[0] is used, so that it can check for negative numbers too.

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

console.log(largestNum([3, 5, 7, 2, 9]));
