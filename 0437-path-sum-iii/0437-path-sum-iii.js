/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let sumCount = new Map();
    let count = 0;
    sumCount.set(0, 1)

    function dfs(root, currSum){
        if(!root) return;

        currSum += root.val;

        if(sumCount.has(currSum - targetSum)){
            count += sumCount.get(currSum - targetSum)
        }

        sumCount.set(currSum, (sumCount.get(currSum) || 0) + 1);

        dfs(root.left, currSum);
        dfs(root.right, currSum);

        sumCount.set(currSum, sumCount.get(currSum) - 1);

    }

    dfs(root, 0);

    return count
};