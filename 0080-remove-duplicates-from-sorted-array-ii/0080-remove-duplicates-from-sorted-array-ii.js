/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;

    let expectedNums = [];
    expectedNums.push(nums[0])
    for(let i =1; i<nums.length; i++){
        if(nums[i] !== nums[i-1] || (nums[i] === nums[i - 1] && expectedNums[expectedNums.length - 1] !== nums[i - 2] )){
        expectedNums.push(nums[i])
        }
    }
    
    for(let i = 0; i< expectedNums.length;i++){
        nums[i] = expectedNums[i]
    }

    return expectedNums.length;
};