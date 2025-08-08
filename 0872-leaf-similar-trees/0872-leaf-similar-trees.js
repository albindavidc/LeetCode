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
var leafSimilar = function(root1, root2) {
    function leafCountFn(root, result=[]){
        if(!root) return result;

        if(!root.left && !root.right){
            result.push(root.val);
        }else{
            leafCountFn(root.left, result);
            leafCountFn(root.right, result);
        }

        return result;
    }

    let root1Arr = leafCountFn(root1);
    let root2Arr = leafCountFn(root2);

    if(root1Arr.length !== root2Arr.length) return false;

    for(let i = 0; i<root1Arr.length; i++){
        if(root1Arr[i] !== root2Arr[i]) return false;
    }

    return true;
};