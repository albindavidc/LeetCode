/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let result = [];

    let leftSum = [0];
    let rightSum = new Array(nums.length).fill(0);

    for(let i = 1; i<nums.length; i++){
        leftSum[i] = leftSum[i-1] + nums[i -1]
    }
    
    for(let i =nums.length-2; i>=0; i--){
        rightSum[i] = rightSum[i+1] + nums[i + 1];
    }

    for(let i = 0; i <nums.length; i++){
        result.push(Math.abs(leftSum[i] - rightSum[i]))
    }

    return result
};