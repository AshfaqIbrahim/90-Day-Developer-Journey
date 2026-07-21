// Day - 6
// 26. Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}
let nums = [1, 1, 2, 3, 3, 4];

let k = removeDuplicates(nums);
console.log(k);
console.log(nums.slice(0, k));
