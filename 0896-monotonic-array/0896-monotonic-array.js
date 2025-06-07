/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isIncreasing = true
    let isDecreasing = true;

    for(let i = 1 ;i<nums.length; i++){
        if(nums[i-1] > nums[i]) isIncreasing=false;
        if(nums[i-1] < nums[i]) isDecreasing = false;

        if(isIncreasing === false && isDecreasing === false) return false;
    }

    return true;    
};