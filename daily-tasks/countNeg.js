// Day - 5
// Problem 9: Count Negative Numbers

function countNeg(arr) {
  let count = 0;

  for (let num of arr) {
    if (num < 0) {
      count++;
    }
  }
  return count;
}
console.log(countNeg([-2, 5, -7, 8, -1]));
