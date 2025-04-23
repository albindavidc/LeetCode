/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;

    for(let i =0; i<nums.length; i++){
        if(nums[i] / 3 !== 0){
            operations++;
        }
    }
    return operations;
};