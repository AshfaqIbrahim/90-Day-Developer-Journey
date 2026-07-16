// Problem 4 – Count Even Numbers

function countEven(arr) {
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEven([3, 5, 7, 2, 9, 4, 6]));
