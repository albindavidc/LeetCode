/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0) zeroCount++;

        while(zeroCount >1){
            if(nums[left] === 0) zeroCount--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left)
    }

    return maxLen
};