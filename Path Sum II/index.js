var pathSum = function (root, targetSum) {
  let result = [];

  var getPathSum = function (root, current, targetSum) {
    if (root === null) {
      return;
    }

    if (root.val === targetSum && root.left === null && root.right === null) {
      result.push([...current, root.val]);
      return;
    }

    let remainingTargetSum = targetSum - root.val;

    getPathSum(root.left, [...current, root.val], remainingTargetSum);
    getPathSum(root.right, [...current, root.val], remainingTargetSum);

    return;
  };

  getPathSum(root, [], targetSum);

  return result;
};
console.log(pathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22));
