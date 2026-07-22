// Problem 2
// Find the second largest number in an array

function secondLarge(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}
console.log(secondLarge([3, 9, 7, 2, 5]));
