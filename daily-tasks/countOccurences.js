// Day - 6
// Problem 12 - Count Occurrences

function countOcc(arr, target) {
  let count = 0;

  for (let num of arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}
console.log(countOcc([2, 5, 2, 7, 2, 9], 2));
