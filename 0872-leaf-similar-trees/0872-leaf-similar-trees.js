/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    function helperFn(root, result = []) {
        if (!root) return result;

        if (!root.left && !root.right) {
            result.push(root.val)
        } else {

            helperFn(root.left, result)
            helperFn(root.right, result)
        }


        return result
    }

    let root1Test = helperFn(root1);
    let root2Test = helperFn(root2);

    if(root1Test.length !== root2Test.length) return false;

    for(let i = 0; i<root1Test.length; i++){
        if(root1Test[i] !== root2Test[i]) return false;
    }

    return true;
};