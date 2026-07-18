// Problem 7 || Day-4
// Count Positive Numbers

function countPos(arr) {
  let count = 0;

  for (let num of arr) {
    if (num > 0) {
      count++;
    }
  }
  return count;
}

console.log(countPos([2, -3, 5, 0, -1, 8]));
