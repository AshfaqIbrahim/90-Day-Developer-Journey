// Day - 5
// Problem 10 — Reverse an Array (Without reverse())

function revArr(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(revArr([1, 2, 3, 4, 5]));
