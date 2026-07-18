// Day- 3
// 1672. Richest Customer Wealth

function maximumWealth(accounts) {
  let richest = 0;
  for (let customer of accounts) {
    let sum = 0;
    for (let money of customer) {
      sum += money;
    }
    if (sum > richest) {
      richest = sum;
    }
  }
  return richest;
}
console.log(
  maximumWealth([
    [1, 4, 3],
    [3, 2, 1],
  ]),
);
