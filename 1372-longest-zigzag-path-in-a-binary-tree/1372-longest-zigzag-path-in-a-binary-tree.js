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
 * @return {number}
 */
var longestZigZag = function(root) {
    let maxCount = 0;

    function dfs(root, direction, length){
        if(!root) return 0;

        maxCount = Math.max(maxCount, length);

        if(direction === 'left'){
            dfs(root.right, 'right', length +1);
            dfs(root.left, 'left', 1);
        }else if(direction === 'right'){
            dfs(root.left, 'left', length +1);
            dfs(root.right, 'right', 1)
        }
    }

    let left = dfs(root.left, 'left', 1);
    let right = dfs(root.right, 'right', 1);

    return maxCount
};