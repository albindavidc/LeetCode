/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let newVal = new Map();
    let left = 0;
    let longest = 0;

    for(let right = 0; right < nums.length ; right++){
        newVal.set(nums[right], (newVal.get(nums[right]) ||0 )+1);

        while(newVal.get(nums[right]) > k){
           newVal.set(nums[left], newVal.get(nums[left]) - 1);
            left++;
        }

        longest = Math.max(longest, right - left +1);
    }
    return longest
    
};