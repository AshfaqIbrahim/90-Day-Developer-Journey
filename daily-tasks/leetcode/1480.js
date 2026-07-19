// Day - 4
// 1480. Running Sum of 1d Array

function runSum(arr) {
  let sum = 0;
  let added = [];

  for (let num of arr) {
    sum += num;
    added.push(sum);
  }
  return added;
}
console.log(runSum([1, 2, 3, 4]));
