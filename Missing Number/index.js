//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
  const length = nums.length;
  let sum = ((length + 1) * length) / 2;

  for (let i = 0; i < length; i++) {
    sum = sum - nums[i];
  }

  return sum;
};

console.log(missingNumber([3, 0, 1]));