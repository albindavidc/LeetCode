/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let operations = 0;
    
    for(let i=1; i<nums.length; i++){

        while(nums[i-1] >= nums[i]){
            nums[i]++;
            operations++;
        }
    }

    return operations
};