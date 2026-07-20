// Day- 5
// 1920. Build Array from Permutation

function buildArr(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[arr[i]]);
  }
  return newArr;
}
console.log(buildArr([0, 2, 1, 5, 3, 4]));
