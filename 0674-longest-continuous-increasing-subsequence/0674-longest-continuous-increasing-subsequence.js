/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length <= 1) return nums.length;

    let maxLength = 1;
    let currLength = 1;

    for(let i =1; i<nums.length; i++){
        if(nums[i] > nums[i-1]){
            currLength++;
        }else{
            maxLength = Math.max(maxLength, currLength);
            currLength = 1;
        }
    }

    return Math.max(maxLength, currLength);
};