//E.g. 1

var hasPathSum = function (root, targetSum) {
  root = [1, 2, 3];
  targetSum = 5;
  if (!root) return false;
  let hasPath = false;
  const dfs = (node, sum) => {
    // node is a leaf node
    // and sum is equal to targetSum
    if (!node.left && !node.right && sum === targetSum) {
      //left and right are null
      hasPath = true;
      return;
    }
    if (node.left) dfs(node.left, sum + node.left.val);
    if (node.right) dfs(node.right, sum + node.right.val);
  };
  dfs(root, root.val);
  return hasPath;
};

console.log(hasPathSum());

//E.g. 2

var hasPathSum2 = function (root2, targetSum2) {
  root2 = [1, 2, 3];
  targetSum2 = 5;
  if (!root2) return false;
  let hasPath2 = false;
  const dfs2 = (node2, sum2) => {
    if (node2.left === null && node2.right === null) {
      if (sum2 === node2.val) {
        hasPath2 = true;
      }
      return;
    }
    if (node2.left) {
      dfs2(node2.left, sum2 - node2.val);
    }
    if (node2.right) {
      dfs2(node2.right, sum2 - node2.val);
    }
  };
  dfs2(root2, targetSum2);
  return hasPath2;
};
console.log(hasPathSum2());


//E.g. 3

var hasPathSum3 = function (root3, targetSum3) {

    root3 = [1, 2, 3];
    targetSum3 = 5;
    return checkTree(root3, targetSum3, 0);

    function checkTree(root3, targetSum3, sum3) {
        if (!root3) {
            return false;
        }
    
        sum3 += root3.val;
    
        if (root3.left === null && root3.right === null) {
            return sum3 === targetSum3;
        }
    
        return checkTree(root3.left, targetSum3, sum3) || checkTree(root3.right, targetSum3, sum3)
    };

};
console.log(hasPathSum3());