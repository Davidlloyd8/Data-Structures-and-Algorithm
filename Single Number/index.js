// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

var singleNumber = function (nums) {
  var res = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    res ^= nums[i];
  }
  return res;
};

console.log(singleNumber([2, 2, 1]));