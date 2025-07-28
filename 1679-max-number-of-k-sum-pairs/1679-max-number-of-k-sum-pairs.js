/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let start = 0
    let end = nums.length - 1
    let resultCount = 0

    while (start < end) {
        let sum = nums[start] + nums[end]
        
        if (sum === k) {
            start++;
            end--;
            resultCount++;
        }
        else if (sum < k) {
            start++
        } else {
            end--;
        }

    }

    return resultCount
};