// Problem 3
// Find the smallest number in an array.

function smallest(arr) {
  let smallest = arr[0];

  for (let num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
}

console.log(smallest([3, 5, 7, 2, 9]));
