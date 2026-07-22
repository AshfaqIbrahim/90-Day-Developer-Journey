// Day-8;
// Problem 16: Move All Zeros to the End

// Solution: with extra array
function moveZero(arr) {
  let newArr = [];

  for (let num of arr) {
    if (num > 0) {
      newArr.push(num);
    }
  }
  while (newArr.length < arr.length) {
    newArr.push(0);
  }

  return newArr;
}
console.log(moveZero([0, 1, 0, 3, 12]));

// Solution: with same array
function moveZero(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}
console.log(moveZero([0, 1, 0, 3, 12]));
