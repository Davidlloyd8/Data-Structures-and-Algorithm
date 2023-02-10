// First Solution

// nums is an array of integers
const nums = [1, 3, 5, 7, 9];
// target is an integer
const target = 6;
// return an array of two integers
// return the indexes of the two numbers that add up to the target
// return the indexes in the order they appear in the array
// twoSum(nums, target) should return [0, 2] because nums[0] + nums[2] = 6
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum(nums, target));

// Second Solution

const numbs = [1, 3, 5, 7, 9]
const twoSum = (array, goal) => {
  let indexes = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
};
console.log(twoSum(numbs, target))



// Third Solution

// const twoSum = (array, goal) => {
//   let mapOfNumbers = {};
//   let twoIndexes = [];

//   for (let i = 0; i < array.length; i++) {
//     mapOfNumbers[array[i]] = i;
//   }

//   for (let i = 0; i < array.length; i++) {
//     let targets = goal - array[i];
//     if (mapOfNumbers[targets] !== null && mapOfNumbers[targets] !== i) {
//       twoIndexes.push(i);
//       twoIndexes.push(mapOfNumbers[targets]);
//     }
//   }

//   return twoIndexes;
// };
// console.log(twoSum(nums, target))
