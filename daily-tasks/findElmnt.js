// Day - 6
// Problem 11 - Find an Element

function findEl(arr, target) {
  for (let num of arr) {
    if (num === target) {
      return true;
    }
  }
  return false;
}
console.log(findEl([4, 8, 1, 9, 5], 1));
