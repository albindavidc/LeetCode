/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length <2) return true;
    let result = nums[0]
    for (let i=1; i<nums.length; i++){
        if(i > result) return false;

        result = Math.max(result, i + nums[i])
    }

    return result >= nums.length -1 
};