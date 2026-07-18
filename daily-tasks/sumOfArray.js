// Problem 5
// Find the sum of array.

function sumOfArray(arr) {
  let sum = 0;

  //for loop..
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

  // //for of.. loop
  //   for (let num of arr) {
  //     sum += num;
  //   }
  //   return sum;
}

console.log(sumOfArray([2, 4, 6, 8]));
