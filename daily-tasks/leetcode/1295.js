// Day - 2
// 1295. Find Numbers with Even Number of Digits

function findNumbers(nums) {
  let count = 0;

  for (let num of nums) {
    if (num.toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(findNumbers([12, 345, 2, 6, 786]));
