// Problem 6
// Find the avg of array.

function sumOfArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}
console.log(sumOfArray([2, 4, 6, 8]));
