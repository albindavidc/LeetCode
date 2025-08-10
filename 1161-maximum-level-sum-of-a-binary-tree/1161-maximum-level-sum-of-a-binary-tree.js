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
var maxLevelSum = function(root) {
    if(!root) return null;

    let maxSum = -Infinity;
    let maxLevel = 0;
    let currLevel = 0;
    let queue = [root];

    while(queue.length >0){
        currLevel++;
        let totalSum = 0;
        let levelSize = queue.length;

        for(let i = 0; i<levelSize; i++){
            let node = queue.shift();

            totalSum += node.val;

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

        }

        if(maxSum < totalSum){
            maxSum = totalSum;
            maxLevel = currLevel
        }

    }

    return maxLevel
};