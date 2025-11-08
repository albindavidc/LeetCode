/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let operations = 0;

    for(let i = 0; i<nums.length; i++){
        while(true){
            if(nums[i] === nums[i+1]){
                operations++
                nums[i+1] = nums[i+1] + 1;
            }else if (nums[i] > nums[i+1]){
                operations++;
                nums[i+1] = nums[i+1] +1
            }else {
                break;
            }
        }
    }

    return operations
};