/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let sum = 0;
    let maxLength = 0;
    let firstIndex = new Map();

    firstIndex.set(0, -1);

    for(let i =0; i<nums.length; i++){
        sum += nums[i] === 0 ? -1 : 1;

        if(firstIndex.has(sum)){
            maxLength = Math.max(maxLength, i- firstIndex.get(sum))
        }
        else{
            firstIndex.set(sum, i)
        }
    }

    return maxLength
};