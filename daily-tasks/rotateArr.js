// Day  8
// Problem 15: Rotate an Array by One Position (Right)

function rotateRight(arr) {
  let last = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
  return arr;
}
console.log(rotateRight([1, 2, 3, 4, 5]));
