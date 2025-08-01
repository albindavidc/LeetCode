/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left =0;
    let zeroCount = 0;
    let maxLength = 0;

    for(let right =0; right < nums.length; right++){
        if(nums[right] === 0){
            zeroCount++;
        }

        while(zeroCount > k){
            if(nums[left] ===0){
                zeroCount--
            }
            left++;
        }

        maxLength = Math.max(maxLength, right-left +1);
    }
    return maxLength;
};